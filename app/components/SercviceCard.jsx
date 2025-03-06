import React from "react";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-sm w-full hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <div className="text-4xl text-indigo-600">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
