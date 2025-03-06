import React, { useState } from "react";
import Image from "next/image"; // Use Next.js Image component for optimized images
import { AnimatePresence, motion } from "framer-motion";

const Card = ({ image, name, testimonial }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden p-8 border hover:cursor-pointer border-[#1f1f1f] h-auto w-full md:max-w-[800px] flex flex-col md:flex-row items-center justify-between gap-10 bg-[#1a1a1a] text-white rounded-xl shadow-lg"
      key={image}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      {/* Image section */}
      <motion.div className="relative w-full md:w-[250px] h-[130px] rounded-xl overflow-hidden mb-4 md:mb-0 md:mr-4">
        {/* Hover overlay */}

        {/* Image */}
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="absolute h-full w-full"
          priority={true} // Prioritize important images
        />
      </motion.div>

      {/* Text section */}
      <div className="flex flex-col w-full md:w-15/16 text-left">
        <h3 className="font-bold text-lg md:text-xl">{name}</h3>
        <p className="text-sm md:text-base text-gray-300 mt-2">{testimonial}</p>
      </div>
    </motion.div>
  );
};

export default Card;
