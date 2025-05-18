import React from 'react';
// import {useParams} from "next/navigation";
import EditCourse from "@/app/workspace/edit-course/[courseId]/page";

function ViewCourse() {

    return (
        <div>
            <EditCourse viewCourse={true}/>
        </div>
    );
}

export default ViewCourse;