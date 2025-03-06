"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Branding",
    description:
      "Building a strong, memorable brand identity tailored to your business.",
    image: "/bg2.jpg", // Replace with your image path
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and visually appealing user experiences.",
    image: "/bg1.jpg", // Replace with your image path
  },
  {
    title: "Packaging",
    description:
      "Creating creative and functional packaging solutions for your products.",
    image: "/bg3.jpg", // Replace with your image path
  },
];

const ServicePage = () => {
  return (
    <div className="px-8 py-[16vh] animate-fadeIn">
      {/* Page Heading and Description */}
      <div className="text-center mb-[10vh]">
        <h1 className="text-5xl font-bold text-white">Our Services</h1>
        <p className="text-xl text-gray-300 mt-10">
          Explore the wide range of services we offer to help you grow your
          business and enhance your brand.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative group mx-auto w-[85vw] h-80 bg-cover bg-center rounded-2xl overflow-hidden shadow-lg"
            style={{ backgroundImage: `url(${service.image})` }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white uppercase">
                {service.title}
              </h2>
            </div>

            {/* Hover description */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <p className="text-center text-white text-lg px-6">
                {service.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
