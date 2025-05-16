"use client"
import React, {useEffect, useState} from 'react';
import {useParams} from "next/navigation";
import axios from "axios";

function EditCourse() {
    const { courseId } = useParams();
    const [loading, setLoading] = useState(false);
    const [course, setCourse] = useState();

    useEffect(() => {
        getCourseInfo();
    },[])

    const GetCourseInfo=async ()=>{
        setLoading(true);
        const result=await axios.get("/api/courses?courseId="+courseId);
        setLoading(false);
        setCourse(result.data)
    }
    return (
        <div>
            <CourseInfo course={course} />
        </div>
    );
}

export default EditCourse;