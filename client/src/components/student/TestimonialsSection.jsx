import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const TestimonialsSection = () => {
  const { allTestimonials } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center space-y-3 px-5 py-5">
      <h2 className="md:text-4xl text-2xl font-normal text-center">
        Testimonials
      </h2>
      <p className="text-sm md:text-base text-gray-500 text-center">
        Hear from our learners as they share their journeys of transformation,
        success, <br /> and how our platform has made a difference in their
        lives.
      </p>

      {/* Cards Container */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 justify-items-center">
        {allTestimonials?.map((t, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-md bg-white w-full max-w-68"
          >
            <div className="flex items-center gap-3 px-3 py-3 bg-gray-100">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h2 className="font-semibold">{t.name}</h2>
                <p className="text-sm text-gray-600">{t.role}</p>
              </div>
            </div>

            <div className="px-5 py-5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <img
                    className="w-5 h-5"
                    key={i}
                    src={
                      i < Math.floor(t.rating) ? assets.star : assets.star_blank
                    }
                    alt="Star"
                  />
                ))}
              </div>
              <p className="mt-4 text-gray-500 text-sm">{t.feedback}</p>
              <p
                className="text-sm text-blue-500 underline mt-10 cursor-pointer"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Read more
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
