import React from "react"
import Hero from "../../components/student/Hero"
import SearchBar from "../../components/student/SearchBar"
import Companies from "../../components/student/Companies"
import CoursesSection from "../../components/student/CoursesSection"
import TestimonialsSection from "../../components/student/TestimonialsSection"
const Home = () => {
  return (
      <div className="flex flex-col items-center bg-gradient-to-b from-cyan-100/60 via-cyan-50/30 to-white space-y-7">
        <Hero />
        <SearchBar />
        <Companies />
        <CoursesSection />
        <TestimonialsSection />
      </div>
  )
}

export default Home