"use client"
import React, {useEffect, useState} from 'react';
import {useParams} from "next/navigation";
import axios from "axios";
import CourseInfo from "@/app/workspace/edit-course/_components/CourseInfo";
import ChapterTopicList from "@/app/workspace/edit-course/_components/ChapterTopicList";

function EditCourse() {
    const { courseId } = useParams();
    console.log(courseId);
    const [loading, setLoading] = useState(false);
    const [course, setCourse] = useState();

    useEffect(() => {
        GetCourseInfo();
    },[])

    const GetCourseInfo=async ()=>{
        setLoading(true);
        const result=await axios.get("/api/courses?courseId="+courseId);
        console.log(result.data);
        setLoading(false);
        setCourse(result.data)
    }
    return (
        <div>
            <CourseInfo course={course} />
            <ChapterTopicList course={course}/>
        </div>
    );
}

export default EditCourse;