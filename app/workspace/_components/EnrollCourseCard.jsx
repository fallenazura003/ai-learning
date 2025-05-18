import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {PlayCircle} from "lucide-react";
import Link from "next/link";


function EnrollCourseCard({ course, enrollCourse }) {
    const courseJson = course?.courseJson?.course;


    return (
        <div className={'shadow rounded-xl'}>
            <Image src={course?.bannerImageUrl} alt={course?.name}
                   width={400} height={400} className={'w-full h-[250px] rounded-xl object-cover aspect-video'}/>

            <div className={'p-3 flex flex-col gap-3'}>
                <h2 className={'font-bold text-lg'}>{courseJson?.name}</h2>
                <p className={'line-clamp-3 text-gray-500 text-sm'}>{courseJson?.description}</p>
                <div className={' '}>

                    <Link href={'/workspace/view-course/'+course?.cid}>
                    <Button className={'w-full mt-3'}><PlayCircle/>Tiếp tục học</Button>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default EnrollCourseCard;