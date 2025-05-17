import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import axios from "axios";
import {coursesTable} from "@/config/schema";
import {db} from "@/config/db";
import {eq} from "drizzle-orm";

const PROMPT = `Dựa vào tên chương và danh sách Chủ đề, hãy tạo nội dung chi tiết định dạng HTML hợp lệ cho từng chủ đề. Trả về kết quả dưới dạng JSON tiếng Việt theo cấu trúc sau:

{
  "chapterName": "<Tên chương>",
  "topics": [
    {
      "topic": "<Tên chủ đề>",
      "content": "<Nội dung chi tiết định dạng HTML>"
    },
    // ... các chủ đề khác trong chương ...
  ]
}

Đảm bảo rằng HTML hợp lệ, không chứa ký tự điều khiển không hợp lệ và JSON được định dạng chính xác. Nếu có ký tự điều khiển, hãy thay thế chúng bằng ký tự trắng.
: User Input:`;

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

// Function to sanitize HTML content by removing bad control characters
const sanitizeHTML = (html) => {
    if (!html) return "";
    return html.replace(/[\x00-\x1F\x7F-\x9F]/g, ' '); // Replace bad control characters with space
};

const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const GetYoutubeVideo = async (topic) => {
    const params = {
        parts: 'snippet',
        q:topic,
        maxResults: 1, // Reduced to 1 for simplicity in this example
        type: 'video',
        key: process.env.YOUTUBE_API_KEY
    };
    try {
        const resp = await axios.get(YOUTUBE_BASE_URL, { params: params });
        const youtubeVideoListResp = resp.data.items;
        if (youtubeVideoListResp && youtubeVideoListResp.length > 0) {
            return {
                videoId: youtubeVideoListResp[0].id?.videoId,
                title: youtubeVideoListResp[0]?.snippet?.title,
            };
        }
        return null;
    } catch (error) {
        console.error("Error fetching YouTube video for topic:", topic, error);
        return null;
    }
};

export async function POST(req) {
    const { courseJson, courseTitle, courseId } = await req.json();

    const promises = courseJson?.chapters?.map(async (chapter) => {
        const config = {
            responseMimeType: "text/plain",
        };
        const model = "gemini-2.0-flash";
        const contents = [
            {
                role: "user",
                parts: [
                    {
                        text: PROMPT + JSON.stringify(chapter),
                    },
                ],
            },
        ];
        let aiContent = { chapterName: chapter.chapterName, topics: [] };
        try {
            const response = await ai.models.generateContent({
                model,
                config,
                contents,
            });
            const RawResp = response?.candidates?.[0]?.content?.parts?.[0]?.text;
            if (RawResp) {
                const RawJson = RawResp.replace('```json', '').replace('```', '');
                try {
                    const parsedJSON = JSON.parse(RawJson);
                    aiContent = {
                        chapterName: parsedJSON.chapterName,
                        topics: parsedJSON.topics.map(topic => ({
                            ...topic,
                            content: sanitizeHTML(topic.content)
                        }))
                    };
                } catch (parseError) {
                    console.error("Lỗi khi parse JSON từ AI:", RawJson, parseError);
                }
            } else {
                console.warn("Không nhận được phản hồi nội dung từ AI cho chương:", chapter.chapterName);
            }
        } catch (error) {
            console.error("Lỗi khi gọi Google GenAI cho chương:", chapter.chapterName, error);
        }

        // Get YouTube video for the current chapter
        const youtubeData = await GetYoutubeVideo(chapter?.chapterName);



        return { ...aiContent, youtubeVideo: youtubeData };
    });

    const CourseContentWithYouTube = await Promise.all(promises);

    // save to db
    const dbResp= await db.update(coursesTable).set({
        courseContent: CourseContentWithYouTube
    }).where(eq(coursesTable.cid,courseId))

    return NextResponse.json({
        courseName: courseTitle,
        courseContent: CourseContentWithYouTube,
    });
}