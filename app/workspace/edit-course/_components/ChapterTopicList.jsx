import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function ChapterTopicList({ course }) {
    const courseLayout = course?.courseJson?.course;
    const chapters = courseLayout?.chapters || [];

    return (
        <div className="space-y-4">
            {chapters.map((chapter, index) => (
                <Card key={index}>
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold">
                            Chương {index + 1}: {chapter.chapterName}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        {chapter.topics && chapter.topics.length > 0 ? (
                            <ul>
                                {chapter.topics.map((topic, topicIndex) => (
                                    <li key={topicIndex} className="ml-4 list-disc">
                                        {topic}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500">Chưa có chủ đề nào cho chương này.</p>
                        )}
                        <Separator />
                        <p className="text-sm text-gray-600">
                            Thời lượng ước tính: {chapter.duration || "Chưa xác định"}
                        </p>
                    </CardContent>
                </Card>
            ))}
            {chapters.length === 0 && (
                <Card>
                    <CardContent className="text-center text-gray-500">
                        Khóa học này chưa có chương nào.
                    </CardContent>
                </Card>
            )}
        </div>
    );
}

export default ChapterTopicList;