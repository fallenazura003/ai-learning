import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

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
                    parsedJSON.topics = parsedJSON.topics.map(topic => ({
                        ...topic,
                        content: sanitizeHTML(topic.content)
                    }));
                    return parsedJSON;
                } catch (parseError) {
                    console.error("Lỗi khi parse JSON từ AI:", RawJson, parseError);
                    return { chapterName: chapter.chapterName, topics: [] };
                }
            } else {
                console.warn("Không nhận được phản hồi nội dung từ AI cho chương:", chapter.chapterName);
                return { chapterName: chapter.chapterName, topics: [] };
            }
        } catch (error) {
            console.error("Lỗi khi gọi Google GenAI cho chương:", chapter.chapterName, error);
            return { chapterName: chapter.chapterName, topics: [] };
        }
    });

    const CourseContent = await Promise.all(promises);

    return NextResponse.json({
        courseName: courseTitle,
        courseContent: CourseContent,
    });
}