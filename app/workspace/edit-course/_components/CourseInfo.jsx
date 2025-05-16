import React from 'react';
import {Book, Clock, Settings, TrendingUpIcon} from "lucide-react";
import Image from "next/image";
import {Button} from "@/components/ui/button";

function CourseInfo({course}) {
    const courseLayout=course?.courseJson?.course;
    return (
        <div className={' md:flex gap-5 justify-between p-5 rounded-2xl shadow'}>
            <div className={'flex flex-col gap-3'}>
                <h2 className={"font-bold text-3xl"}>
                    {courseLayout?.name}
                </h2>
                <p className={'line-clamp-2 text-gray-500'}>{courseLayout?.description}</p>

                <div className={'grid grid-cols-1 md:grid-cols-3 gap-4'}>
                    <div className={'flex gap-5 items-center p-3 rounded-lg shadow'}>
                        <Clock className={'text-blue-500'}/>
                        <section>
                            <h2 className={'font-bold'}>Thời lượng</h2>
                            <h2>2 tiếng</h2>
                        </section>
                    </div>
                    <div>
                        <Book className={'text-green-500'}/>
                        <section>
                            <h2 className={'font-bold'}>Bài học</h2>
                            <h2>2 tiếng</h2>
                        </section>
                    </div>
                    <div>
                        <TrendingUp className={'text-red-500'}/>
                        <section>
                            <h2 className={'font-bold'}>Cấp độ</h2>
                            <h2>{course?.level}</h2>
                        </section>
                    </div>
                </div>
                <Button className={'max-w-sm'}><Settings/>Tạo nội dung</Button>
            </div>
            <Image src={course?.bannerImageUrl} alt={'anh khoa hoc'}
            width={400} height={400} className={'w-full mt-5 md:mt-0 object-cover aspect-auto h-[240px] rounded-2xl'} />
        </div>
    );
}

export default CourseInfo;