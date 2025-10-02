import React, { useContext } from "react";``
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

const CoursesSection = () => {

  const { allCourses } = useContext(AppContext)
  return (
    <div className="flex flex-col items-center space-y-3 px-5 py-10">
      <h2 className="md:text-4xl text-2xl font-normal text-center">Learn from the best</h2>
      <p className="text-sm md:text-lg text-gray-500 text-center">
        Discover our top-rated courses across various categories. From coding
        and design to business and wellness, our courses are crafted to deliver
        results.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        { allCourses?.slice(0,4).map((course, index) => (
          <CourseCard key={index} course={course} />
        )) }
      </div>
      <Link to={'/course-list'} onClick={()=>(0,0)} className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded" >Show All Courses</Link>
    </div>
  );
};

export default CoursesSection;
