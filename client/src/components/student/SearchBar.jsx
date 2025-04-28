import React from "react"
import { assets } from "../../assets/assets"
const SearchBar = () => {
  return (
    <>
      <div>
       <form action="" className="border border-[#6B728033] rounded flex items-center bg-white max-w-xl md:h-14 h-12 w-full">
        <img src={assets.search_icon} alt="search" className="w-6 h-6" />
        <input type="text" placeholder="Search for courses" className="w-auto " />
        <button className="bg-blue-600 text-white px-14 py-2 rounded-base">Search</button>
       </form>
      </div>
    </>
  )
}

export default SearchBar
