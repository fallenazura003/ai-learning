import React, { useState } from 'react';
import { Settings } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import axios from "axios";

function CourseInfo({ course }) {
    console.log(course);
    const courseLayout = course?.courseJson?.course;
    const [loading, setLoading] = useState(false);

    const GenerateCourseContent = async () => {
        setLoading(true); // Set loading to true when the API call starts
        try {
            const result = await axios.post('/api/generate-course-content', {
                courseJson: courseLayout,
                courseTitle: course?.name,
                courseId: course?.cid,
            });
            console.log(result.data);
            setLoading(false); // Set loading to false when the API call is successful
        } catch (e) {
            console.error(e);
            setLoading(false); // Set loading to false if there's an error
        }
    };

    return (
        <div className={' md:flex gap-5 justify-between p-5 rounded-2xl shadow'}>
            <div className={'flex flex-col gap-3'}>
                <h2 className={"font-bold text-3xl"}>
                    {courseLayout?.name}
                </h2>
                <p className={'line-clamp-2 text-gray-500'}>{courseLayout?.description}</p>

                <div className={'grid grid-cols-1 md:grid-cols-3 gap-4'}>
                    <div className={'flex gap-5 items-center p-3 rounded-lg shadow'}>
                        <section>
                            <h2 className={'font-bold'}>Thời lượng</h2>
                            <h2>{courseLayout?.duration}</h2>
                        </section>
                    </div>
                    <div className={'flex gap-5 items-center p-3 rounded-lg shadow'}>
                        <section>
                            <h2 className={'font-bold'}>Bài học</h2>
                            <h2>{courseLayout?.noOfChapter}</h2>
                        </section>
                    </div>
                    <div className={'flex gap-5 items-center p-3 rounded-lg shadow'}>
                        <section>
                            <h2 className={'font-bold'}>Cấp độ</h2>
                            <h2>{courseLayout?.level}</h2>
                        </section>
                    </div>
                </div>

                <Button
                    onClick={GenerateCourseContent}
                    className={'max-w-sm'}
                    disabled={loading} // Disable the button while loading
                >
                    <Settings className="mr-2" />
                    Tạo nội dung
                    {loading && <Progress className="ml-2 w-6 h-1" />} {/* Show progress bar when loading */}
                </Button>

                {loading && (
                    <p className="text-sm text-gray-500 mt-2">Đang tạo nội dung...</p>
                )}
            </div>
            {course?.bannerImageUrl && (
                <Image
                    src={course?.bannerImageUrl}
                    alt={'anh khoa hoc'}
                    width={300}
                    height={300}
                    className={'w-full mt-5 md:mt-0 object-cover aspect-auto h-[240px] rounded-2xl'}
                />
            )}
        </div>
    );
}

export default CourseInfo;