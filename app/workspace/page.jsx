import React from 'react'
import WelcomeBanner from "@/app/workspace/_components/WelcomeBanner";
import CourseList from "@/app/workspace/_components/CourseList";

function Workspace() {
  return (
    <div>
      <WelcomeBanner />
      <CourseList/>
    </div>
  )
}

export default Workspace