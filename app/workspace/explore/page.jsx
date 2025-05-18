"use client";
import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import CourseCard from "@/app/workspace/_components/CourseCard";

function Explore() {
    const [courseList, setCourseList] = useState([]);
    const [loading, setLoading] = useState(true); // Add a loading state
    const { user } = useUser();

    useEffect(() => {
        const fetchCourses = async () => {
            setLoading(true); // Start loading
            try {
                const result = await axios.get('/api/courses?explore=true'); // Changed the API call
                console.log("API Result:", result.data);
                setCourseList(result.data);
            } catch (error) {
                console.error("Error fetching courses:", error);
                // Handle the error (e.g., display an error message)
            } finally {
                setLoading(false); // End loading
            }
        };

        fetchCourses(); // Call the fetch function
    }, []); // Empty dependency array: fetch only once on mount

    if (loading) {
        return <div>Loading courses...</div>; // Or a more sophisticated loader
    }

    return (
        <div>
            <h2 className={'font-bold text-3xl mb-7'}>Khám phá các khóa học khác!</h2>
            <div className={'flex gap-5 max-w-md'}>
                <Input placeholder={'Tìm kiếm'} />
                <Button><SearchIcon />Tìm kiếm</Button>
            </div>

            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10'}>
                {courseList?.map((course, index) => (
                    <CourseCard course={course} key={index} />
                ))}
            </div>
        </div>
    );
}

export default Explore;