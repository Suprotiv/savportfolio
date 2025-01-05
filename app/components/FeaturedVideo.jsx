import React from "react";
import FadeIn from "./FadeIn"; // Importing correctly

const FeaturedVideo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center h-screen p-6 md:p-12 text-white">
      {/* Left Side: Video */}
      <FadeIn view="-200px">
        <div className="w-full md:w-1/2 h-[300px] md:h-auto flex items-center justify-center">
          <video
            className="w-full h-full object-cover rounded-lg shadow-lg"
            src="/website_bg_1.mp4" // Ensure the video file is in the public folder
            autoPlay
            loop
            muted
          />
        </div>
      </FadeIn>

      {/* Right Side: Heading and Description */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
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
