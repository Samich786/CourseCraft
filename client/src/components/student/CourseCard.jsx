import React from "react"

const CourseCard = ({course}) => {
  return (
    <>
      <div>
        <img src={course.courseThumbnail} alt="Course1" className="w-68" />
        <div>
          <h3>{course.courseTitle}</h3>
        </div>
      </div>
    </>
  )
}

export default CourseCard
