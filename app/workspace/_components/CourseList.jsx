"use client"
import React, {useEffect} from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import AddNewCourseDialog from "@/app/workspace/_components/AddNewCourseDialog";
import axios from "axios";
import {useUser} from "@clerk/nextjs";
import CourseCard from "@/app/workspace/_components/CourseCard";

function CourseList() {

    const [courseList, setCourseList] = React.useState([]);
    const {user}=useUser();
    useEffect(() => {
        user&&GetCourseList()
    },[user])

    const GetCourseList = async () => {
        const result = await axios.get('/api/courses')
        console.log(result.data);
        setCourseList(result.data);
    }
    return (
        <div className={"mt-10"}>
        <h2 className={"font-bold text-3xl"}>Danh sách khóa học</h2>

            {courseList?.length === 0?<div className={"flex justify-center items-center p-7 flex-col border rounded-md mt-2 bg-secondary"}>
                <Image src={"/certificate.jpg"} alt={"logo"} width={80 } height={80 } />
                <h2 className={"text-xl font-bold my-2"}>Bạn chưa có khóa học nào</h2>
                <AddNewCourseDialog>
                <Button>+Tạo khóa học mới</Button>
                </AddNewCourseDialog>
            </div>:
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'}>
                {courseList?.map((course, index) => (
                    <CourseCard course={course} key={index} />
                ))}
            </div>}

        </div>
    )
}

export default CourseList;