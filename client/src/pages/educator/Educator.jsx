import React from "react"
import { Outlet } from "react-router-dom"
const Educator = () => {
  return ( 
      <div>
        <span className='text-red-500'>Educators</span>
        <div>
          {<Outlet/>}
        </div>
      </div>  
  )
}

export default Educator
