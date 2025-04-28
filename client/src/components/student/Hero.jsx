import React from "react";
import { assets } from "../../assets/assets";
const Hero = () => {
  return (
    <>
      <div className=" flex flex-col items-center text-center justify-center md:pt-32 pt-24">
        <h1 className="relative text-gray-800 text-center text-[30px] md:text-[46px] font-bold max-w-3xl mx-auto leading-[1.2]">
          Empower your future with the courses designed to{" "}
          <span className="text-blue-700">fit your choice.</span>{" "}
          <img src={assets.sketch} alt="sketch" className="md:block hidden absolute -bottom-7 right-0" />
        </h1>
        <p className="text-gray-500 text-base md:block hidden max-w-xl mt-5">
        We bring together world-class instructors, interactive content, and a supportive
        community to help you achieve your personal and professional goals.
        </p>
        <p className="text-gray-500 text-[13px] md:hidden max-w-9/12 mx-auto mt-5">
        We bring together world-class instructors to help you achieve your professional goals.
        </p>
      </div> 
    </>
  );
};

export default Hero;
