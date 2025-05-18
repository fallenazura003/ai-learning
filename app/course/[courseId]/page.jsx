"use client";
import React, { useEffect, useState, useCallback } from "react"; // useCallback!
import AppHeader from "@/app/workspace/_components/AppHeader";
import ChapterListSidebar from "@/app/course/_components/ChapterListSidebar";
import ChapterContent from "@/app/course/_components/ChapterContent";
import axios from "axios";
import { useParams } from "next/navigation";
import YouTubePlayer from "@/app/course/_components/YoutubePlayer";
import CourseLoading from "@/app/course/_components/CourseLoading";

function Course() {
    const { courseId } = useParams();
    const [courseInfo, setCourseInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeChapterIndex, setActiveChapterIndex] = useState(0);
    const [activeTopicIndex, setActiveTopicIndex] = useState(null);
    const [selectedVideoId, setSelectedVideoId] = useState(null);

    const getEnrolledCourseById = useCallback(async () => { // useCallback for optimization
        try {
            setLoading(true);
            const result = await axios.get(`/api/enroll-course?courseId=${courseId}`);
            setCourseInfo(result.data);
            console.log("Course Data Fetched:", result.data); // CRITICAL DEBUG
        } catch (error) {
            console.error("Error fetching course info:", error);
        } finally {
            setLoading(false);
        }
    }, [courseId]);

    useEffect(() => {
        if (courseId) getEnrolledCourseById();
    }, [courseId]);

    const handleChapterClick = useCallback((index) => { // useCallback!
        setActiveChapterIndex(index);
        setActiveTopicIndex(null);
        setSelectedVideoId(null); // Reset video!
        const chapter = courseInfo?.courses?.courseContent?.[index];
        const videoId = chapter?.youtubeVideo?.videoId || null;
        console.log(`handleChapterClick: Chapter ${index}, videoId:`, videoId); // CRITICAL DEBUG
    }, [courseInfo]);

    const handleTopicClick = useCallback((chapterIndex, topicIndex) => { // useCallback!
        setActiveChapterIndex(chapterIndex);
        setActiveTopicIndex(topicIndex);
        const topic = courseInfo?.courses?.courseContent?.[chapterIndex]?.topics?.[topicIndex];
        const chapter = courseInfo?.courses?.courseContent?.[chapterIndex];
        let videoId = topic?.youtubeVideo?.videoId || chapter?.youtubeVideo?.videoId || null;
        setSelectedVideoId(videoId);
        console.log(`handleTopicClick: Chapter ${chapterIndex}, Topic ${topicIndex}, videoId:`, videoId); // CRITICAL DEBUG
        console.log("Topic Data:", topic); // CRITICAL DEBUG
        console.log("Chapter Data:", chapter); // CRITICAL DEBUG
    }, [courseInfo]);

    if (loading) {
        return <CourseLoading />;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <AppHeader hideSidebar={true} />
            <div className="flex gap-6">
                {courseInfo?.courses?.courseContent && (
                    <ChapterListSidebar
                        courseInfo={courseInfo}
                        onChapterClick={handleChapterClick}
                        onTopicClick={handleTopicClick}
                        activeChapterIndex={activeChapterIndex}
                        activeTopicIndex={activeTopicIndex}
                    />
                )}
                <div className="flex-1 p-6">
                    {courseInfo?.courses?.bannerImageUrl && (
                        <img
                            src={courseInfo.courses.bannerImageUrl}
                            alt="Banner"
                            className="w-full h-60 object-cover rounded-md mb-6"
                        />
                    )}

                    <ChapterContent
                        courseInfo={courseInfo}
                        activeChapterIndex={activeChapterIndex}
                        activeTopicIndex={activeTopicIndex}
                    />

                    {/* Conditional rendering of YouTubePlayer */}
                    {selectedVideoId && <YouTubePlayer videoId={selectedVideoId} />}
                </div>
            </div>
        </div>
    );
}

export default Course;