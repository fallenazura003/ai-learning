"use client";
import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

function ChapterListSidebar({
                                courseInfo,
                                onChapterClick,
                                onTopicClick,
                                activeChapterIndex,
                                activeTopicIndex,
                            }) {
    const course = courseInfo?.courses;
    const courseContent = Array.isArray(course?.courseContent)
        ? course.courseContent
        : [];

    return (
        <div className="w-80 bg-secondary h-screen p-5 overflow-y-auto border-r shadow-sm">
            <h2 className="my-3 font-bold text-xl text-gray-800">📚 Danh sách bài học</h2>
            <Accordion type="single" collapsible defaultValue={`item-${activeChapterIndex}`}>
                {courseContent.map((chapter, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger
                            onClick={() => onChapterClick?.(index)}
                            className="text-lg font-medium text-left"
                        >
                            {chapter?.chapterName}{" "}
                            <span className="text-sm text-gray-500 ml-2">
                ({chapter?.topics?.length ?? 0} chủ đề)
              </span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col gap-2 mt-2">
                                {chapter?.topics?.map((topic, topicIndex) => {
                                    const isActive =
                                        activeChapterIndex === index && activeTopicIndex === topicIndex;
                                    return (
                                        <Button
                                            key={topicIndex}
                                            variant={isActive ? "secondary" : "ghost"}
                                            className={`w-full text-left justify-start ${
                                                isActive
                                                    ? "bg-blue-100 text-blue-900 font-semibold"
                                                    : "hover:bg-gray-100"
                                            }`}
                                            onClick={() => onTopicClick?.(index, topicIndex)}
                                        >
                                            {topic?.topic}
                                        </Button>
                                    );
                                })}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}

export default ChapterListSidebar;
