import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/student/Home"
import CourseDetails from "./pages/student/CourseDetails"
const App = () => {
  return ( 
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<CourseDetails />} />
    </Routes>
    
    
    </div> 
  )
}

export default App
