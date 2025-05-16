import {GoogleGenAI} from "@google/genai";
import {NextResponse} from "next/server";
import {db} from "@/config/db";
import {coursesTable} from "@/config/schema";
import {currentUser} from "@clerk/nextjs/server";
import axios from "axios";

export async function POST(req) {
    const {courseId, formData} = await req.json();
    const user = await currentUser();
    const PROMPT = `Tạo khóa học Học tập nội dung tiếng Việt theo các chi tiết sau. Trong đó, đảm bảo bao gồm Tên Khóa học, Mô tả,Riêng phần gợi ý Hình ảnh Banner Khóa học trả về với định dạng tiếng anh (Create a modern flat-style 2D digital illustration representing user Topic. Include UI/UX elements such as mockup screens, text block, icons, buttons, and creative workspace tooks. Add symbolic elements related to user Course like sticky note, design components, and visual aids. Use a vibrant color palette(blue, purple, orange) with a clean, professional look. The illustration should feel creative, tech-savvy, and educational, ideal for visualizing concepts in user Course)  cho Banner Khóa học ở định dạng 3D, Tên Chương, Chủ đề trong mỗi chương, Thời lượng cho mỗi chương, v.v., CHỈ ở định dạng JSON.
    Schema:{
  "course": {
    "name": "string",
    "description": "string",
    "category": "string",
    "level": "string",
    "includeVideo": "boolean",
    "noOfChapters": "number",
    "chapters": [
      {
        "chapterName": "string",
        "duration": "string",
        "topics": [
          "string"
        ],
        "imagePrompt": "string"
      }
    ]
  }
}
, User Input: `

    const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
    });
    const config = {
        responseMimeType: "text/plain",
    };
    const model = "gemini-2.0-flash";
    const contents = [
        {
            role: "user",
            parts: [
                {
                    text: PROMPT + JSON.stringify(formData),
                }
            ]
        }
    ]
    const response = await ai.models.generateContent({
        model,
        config,
        contents,
    });
    console.log(response.candidates[0].content.parts[0].text);
    const RawResp = response?.candidates[0]?.content?.parts[0]?.text;
    const RawJson = RawResp.replace('```json', '').replace('```', '');
    const JSONResp = JSON.parse(RawJson);
    const ImagePrompt = JSONResp.imagePrompt;


    //generate banner image
    const bannerImageUrl=await GenerateImage(ImagePrompt);

    // save to DB
    const result = await db.insert(coursesTable).values({
        name: formData.name,
        description: formData.description,
        noOfChapter: formData.noOfChapter, // Use the correct key from formData
        category: formData.category,
        level: formData.level,
        courseJson: JSONResp,
        userEmail: user?.primaryEmailAddress.emailAddress,
        cid: courseId,
        includeVideo: formData.includeVideo,
        imagePrompt: formData.imagePrompt,
        bannerImageUrl: bannerImageUrl,
    })



    return NextResponse.json({courseId: courseId});
}

const GenerateImage=async (ImagePrompt)=>{
    const BASE_URL='https://aigurulab.tech';
    const result = await axios.post(BASE_URL+'/api/generate-image',
        {
            width: 1024,
            height: 1024,
            input: ImagePrompt,
            model: 'sdxl',//'flux'
            aspectRatio:"16:9"//Applicable to Flux model only
        },
        {
            headers: {
                'x-api-key': process?.env.AI_GURU_LAB_API, // Your API Key
                'Content-Type': 'application/json', // Content Type
            },
        })
    console.log(result.data.image) //Output Result: Base 64 Image
    return result.data.image;
}