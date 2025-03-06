"use client";
import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen p-10 mt-7 animate-fadeIn">
      <div className="bg-white flex flex-col md:flex-row  rounded-2xl">
        {/* Left section: Form */}
        <div className="flex-1 bg-white p-8 md:p-16 flex flex-col justify-center rounded-2xl">
          <h2 className="text-3xl text-gray-900 font-bold mb-4">
            Chat to our team
          </h2>
          <p className="text-gray-600 mb-8">
            Need help with something? Want a demo? Get in touch with our
            friendly team and we'll get in touch within 2 hours.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="border p-4 rounded-lg"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border p-4 rounded-lg"
              />
            </div>

            <input
              type="text"
              placeholder="Job title"
              className="w-full border p-4 rounded-lg"
            />
            <input
              type="email"
              placeholder="Work email"
              className="w-full border p-4 rounded-lg"
            />

            <div className="flex items-center border p-4 rounded-lg">
              <select className="border-none outline-none">
                <option>US</option>
                <option>UK</option>
              </select>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="flex-1 border-none outline-none"
              />
            </div>

            <div>
              <p className="font-medium">Number of employees</p>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
                <button
                  type="button"
                  className="border-2 border-gray-300 p-4 rounded-lg w-full text-left flex items-center hover:border-blue-500 transition"
                >
                  <span role="img" aria-label="creator" className="mr-4">
                    👤
                  </span>
                  I'm a solo creator
                </button>
                <button
                  type="button"
                  className="border-2 border-gray-300 p-4 rounded-lg w-full text-left flex items-center hover:border-blue-500 transition"
                >
                  <span role="img" aria-label="team" className="mr-4">
                    👥
                  </span>
                  I'm part of a team
                </button>
              </div>
            </div>

            <button className="bg-blue-600 text-white p-4 rounded-lg w-full mt-4 hover:bg-blue-700 transition">
              Get in touch
            </button>
          </form>
        </div>

        {/* Right section: Image with description */}
        <div className="flex-1  relative">
          <img
            src="/bg1.jpg"
            alt="Contact Image"
            className="w-full h-full object-cover rounded-r-2xl"
          />
          <div className="absolute bottom-0 left-0 p-8 text-white bg-black bg-opacity-50 w-full text-left">
            <h3 className="text-lg font-semibold">Untitled UI</h3>
            <p className="mt-2">
              Untitled’s software helps us manage cash flow, financial reporting
              and payroll with ease. It’s a great solution for startups looking
              for an efficient way to manage their finances all-in-one.
            </p>
            <p className="mt-4 font-semibold">Maya Rothwell, Founder & CEO</p>
            <p className="text-sm opacity-75">Open Ventures</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
