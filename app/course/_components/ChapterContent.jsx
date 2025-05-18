"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import {Button} from "@/components/ui/button";
import {CheckCircle} from "lucide-react";

function ChapterContent({ courseInfo, activeChapterIndex, activeTopicIndex, onChapterComplete }) {
    const courseContent = Array.isArray(courseInfo?.courses?.courseContent)
        ? courseInfo.courses.courseContent
        : [];

    const activeChapter = courseContent[activeChapterIndex];
    const activeTopic = activeChapter?.topics?.[activeTopicIndex];

    return (
        <div className="p-10">
            {activeChapter ? (
                <div>
                    <div className={'flex justify-between items-center '}>
                        <h2 className="font-bold text-2xl mb-4 text-blue-800">
                            {activeChapter?.chapterName}
                        </h2>
                    </div>
                    {activeTopic ? (
                        <div className="mt-2 p-6 border rounded-md bg-white shadow-md">
                            <h3 className="font-semibold text-xl mb-4 text-gray-800">
                                {activeTopic?.topic}
                            </h3>
                            <ReactMarkdown >
                                {activeTopic?.content || ""}
                            </ReactMarkdown>
                        </div>
                    ) : (
                        <p className="text-gray-500 italic">
                            Chọn một chủ đề để xem nội dung.
                        </p>
                    )}
                </div>
            ) : (
                <p className="text-gray-500 italic">
                    Vui lòng chọn một chương để xem nội dung.
                </p>
            )}
        </div>
    );
}

export default ChapterContent;