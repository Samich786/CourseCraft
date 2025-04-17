import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const SearchBar = ({data}) => {
  const navigate = useNavigate();
  const [input, setSearch] = useState(data? data:""); 
  const onSearchHandler =(e)=>{
    e.preventDefault();
    navigate("/course-list/" + input)   
  }
  return (
    <>
      <div className="w-full max-w-xl">
        <form
          onSubmit={onSearchHandler}
          className="max-w-xl md:h-14 h-12 w-full border border-gray-500/20 rounded flex items-center bg-white "
        >
          <img src={assets.search_icon} alt="search" className="md:w-auto w-10 px-3" />
          <input onChange={(e) => setSearch(e.target.value)} value={input}
            type="text"
            placeholder="Search for courses"
            className="h-full w-full text-gray-500 ouline-none focus:outline-none "
          />
          <button type="submit" className="bg-blue-600 text-white px-7 md:px-10 rounded mx-1 md:py-2 py-3">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
