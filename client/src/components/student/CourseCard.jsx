import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const CourseCard = ({ course }) => {
  const { currency } = useContext(AppContext); // <- small fix, no `.currency` after useContext

  return (
    <div className="border border-gray-200 rounded-lg shadow-md bg-white w-full">
      {/* Thumbnail */}
      <img
        src={course?.courseThumbnail}
        alt={course?.courseTitle}
        className="w-full h-52 object-cover rounded-t-lg"
      />

      {/* Info */}
      <div className="mt-3 px-3 py-3">
        <h3 className="text-lg font-semibold">{course?.courseTitle}</h3>
        <p className="text-sm text-gray-500">{course?.educator?.name}</p>

        {/* Ratings */}
        <div className="flex items-center gap-2 mt-2">
          <p className="text-sm font-medium">4.5</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={assets?.star}
                alt="Star"
                className="w-4 h-4"
              />
            ))}
          </div>
          <p className="text-sm text-gray-500">(22)</p>
        </div>

        {/* Price */}
        <p className="mt-2 font-bold text-gray-800">
          {currency}
          {(
            course?.coursePrice -
            (course?.discount * course?.coursePrice) / 100
          ).toFixed(2)}{" "}
          USD
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
