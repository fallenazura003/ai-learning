"use client"
import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";

function CourseList() {

    const [courseList, setCourseList] = React.useState([]);
    return (
        <div className={"mt-10"}>
        <h2 className={"font-bold text-3xl"}>Danh sách khóa học</h2>

            {courseList?.length == 0?<div className={"flex justify-center items-center p-7 flex-col border rounded-md mt-2 bg-secondary"}>
                <Image src={"/certificate.jpg"} alt={"logo"} width={80 } height={80 } />
                <h2 className={"text-xl font-bold my-2"}>Bạn chưa có khóa học nào</h2>
                <Button>+Tạo khóa học mới</Button>
            </div>:
            <div>
                Danh sách khóa học
            </div>}

        </div>
    )
}

export default CourseList;