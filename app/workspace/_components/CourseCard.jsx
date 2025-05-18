import React, {useState} from 'react';
import Image from "next/image";
import {Book, LoaderCircle, PlayCircle, Settings} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";
import {toast} from "sonner";

function CourseCard({course}) {
    const courseJson = course?.courseJson?.course;
    const [loading, setLoading] = useState(false);

    const onEnrollCourse = async () => {
        try {
            setLoading(true);
            const result = await axios.post('/api/enroll-course', {
                courseId: course?.cid
            })
            console.log(result.data);
            if (result.data.resp) {
                toast.warning('Đã đăng ký')
                setLoading(false);
                return;
            }
            toast.success("Đăng ký thành công!")
            setLoading(false);
        } catch (e) {
            toast.error("Hãy thử lại")
            setLoading(false);
            console.log(e);
        }

    }

    return (
        <div className={'shadow rounded-xl'}>
            <Image src={course?.bannerImageUrl} alt={course?.name}
                   width={400} height={400} className={'w-full h-[250px] rounded-xl object-cover aspect-video'}/>

            <div className={'p-3 flex flex-col gap-3'}>
                <h2 className={'font-bold text-lg'}>{courseJson?.name}</h2>
                <p className={'line-clamp-3 text-gray-500 text-sm'}>{courseJson?.description}</p>
                <div className={'flex justify-between items-center '}>
                    <h2 className={'flex items-center gap-2'}><Book className={'text-primary h-5 w-5'}/>Số bài
                        học {courseJson?.noOfChapters} </h2>
                        {course?.courseContent?.length ?
                            <Button size={'sm'}
                                    onClick={onEnrollCourse} disabled={loading}>
                            {loading ? <LoaderCircle className={'animate-spin'}/> : <PlayCircle/>}Đăng ký học</Button> :
                        <Link href={'/workspace/edit-course/' + course?.cid}><Button size={'sm'}
                                                                                     variant={'outline'}><Settings/> Thêm
                            bài học</Button></Link>}
                </div>
            </div>
        </div>

    );
}

export default CourseCard;