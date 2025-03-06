"use client";
import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen  px-8 md:px-16 py-12 mt-[10vh] animate-fadeIn">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Heading & Signature */}
        <div className="relative">
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight relative z-[50]">
            I REALLY LOVE TO TALK WITH PEOPLE
          </h1>

          {/* Signature */}
          <p className="mt-4 text-3xl font-bold italic">Torne Hope</p>
        </div>

        {/* Right Side: Image */}
        <div className="absolute top-16 right-0 z-0 w-full md:w-2/3 p-10">
          <img
            src="/bg2.jpg" // Replace with your image path
            alt="Torne Hope"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Description Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        {/* Left Side: Description */}
        <div>
          <p className="text-lg text-gray-600 w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>

          <p className="mt-4 text-lg text-gray-600  w-2/3">
            Laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Right Side: Testimonial */}
        <div className=" p-6 rounded-lg shadow-lg">
          <p className="text-lg italic">
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit
            esse quam nihil molestiae consequatur, vel illum qui dolorem eum
            fugiat quo voluptas nulla pariatur."
          </p>
          <p className="mt-4 text-base font-bold">Testimonial by</p>
          <p className="text-base font-semibold">Cynthia Summer</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-12 text-left">
        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
        <ul>
          <li className="mb-2">
            <a
              href="#"
              className="text-blue-600 flex items-center hover:underline"
            >
              Instagram
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2m10-4h.01M12 18v.01M12 14v4m-4-4v4"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-blue-600 flex items-center hover:underline"
            >
              Youtube
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 10h4l-1 5-2-5zm-2-1a1 1 0 011-1h6a1 1 0 011 1v7a1 1 0 01-1 1H9a1 1 0 01-1-1v-7z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
