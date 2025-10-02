import React, { useContext } from "react"
import SearchBar from "../../components/student/SearchBar"
import CourseCard from "../../components/student/CourseCard"
import { AppContext } from "../../context/AppContext"

const CoursesList = () => {

  const { allCourses } = useContext(AppContext);
  return (
   <div className="px-4 sm:px-10 md:px-14 lg:px-36">
    <div className="flex justify-between items-center py-5">
    <h2 className="text-2xl font-semibold">Courses List</h2>
    <SearchBar />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        { allCourses?.map((course, index) => (
          <CourseCard key={index} course={course} />
        )) }
      </div>
   </div>
  )
}

export default CoursesList
