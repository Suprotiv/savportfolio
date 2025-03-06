"use client";
import React, { useRef, useState } from "react";
import FadeIn from "./FadeIn"; // Assuming this component handles fade-in animation

const FeaturedVideo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center h-[86vh] p-6 md:p-12 text-white">
      {/* Left Side: Video */}
      <div className="w-full md:w-1/2 h-[300px] md:h-auto flex items-center justify-center relative hover:cursor-pointer hover:scale-105 transition-all duration-300">
        <FadeIn>
          <img
            className="w-full h-full object-cover rounded-xl shadow-lg"
            src="/bg3.jpg"
            style={{
              boxShadow: "0 4px 80px rgba(138, 136, 136, 0.05)", // Blue shadow
            }}
          />
        </FadeIn>
        {/* Play Button Overlay */}
      </div>

      {/* Right Side: Heading and Description */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-11">
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-bold mb-[5.3vh]">
            Featured Video: Inspiring Web Development Journey
          </h1>
          <p className="text-gray-300 text-lg">
            Dive into our featured video showcasing the latest trends, tools,
            and technologies in web development. Gain insights from industry
            experts, explore innovative solutions, and get inspired to build
            better, faster, and more efficient web applications. Whether you're
            a beginner or a pro, this video has something for everyone.
          </p>
        </FadeIn>
      </div>
    </div>
  );
};

export default FeaturedVideo;
