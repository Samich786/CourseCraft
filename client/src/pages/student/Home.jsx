import React from "react"
import Hero from "../../components/student/Hero"
import SearchBar from "../../components/student/SearchBar"
import Companies from "../../components/student/Companies"
import CoursesSection from "../../components/student/CoursesSection"

const Home = () => {
  return (
      <div className="flex flex-col items-center bg-cyan-100/70 space-y-7">
        <Hero />
        <SearchBar />
        <Companies />
        <CoursesSection />
      </div>
  )
}

export default Home