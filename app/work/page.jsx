import React from "react";
import Portfolio from "../components/Portfolio";

function Portofoliopage() {
  return (
    <div>
      {/* Background Image Section with Centered Text */}

      <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[40vh] animate-fadeIn">
        <img
          src="bg1.jpg"
          className="object-cover w-full h-full object-center"
          alt="Background"
          loading="lazy"
        />

        {/* Centered Portfolio Text */}
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl shadow-lg shadow-black/80 p-4 rounded-md animate-fadeIn">
            Work
          </h1>
        </div>
      </div>

      {/* Portfolio Component Below Image */}
      <div className="mt-8 sm:mt-10 min-h-[60vh] md:mt-12 lg:mt-16  ">
        <Portfolio />
      </div>
    </div>
  );
}

export default Portofoliopage;
