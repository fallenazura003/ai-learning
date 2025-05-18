import React from 'react';
import WelcomeBanner from "@/app/workspace/_components/WelcomeBanner";
import EnrollCourseList from "@/app/workspace/_components/EnrollCourseList";

function MyCourse() {
    return (
        <div>
            <WelcomeBanner/>
            <h2 className={'font-bold text-3xl mt-5'}>Khóa học của bạn</h2>
            <EnrollCourseList/>
        </div>
    );
}

export default MyCourse;