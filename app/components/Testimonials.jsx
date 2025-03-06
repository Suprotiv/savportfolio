"use client";
import React, { useEffect, useState } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import Card from "./Card";

const Testimonials = () => {
  const FAST_DURATION = 25; // Fast animation duration
  const SLOW_DURATION = 75; // Slow animation duration

  // Static data for clients
  const staticClients = [
    {
      name: "John Doe",
      image: "/blur.jpg",
      testimonial: "This service was outstanding! Highly recommend to anyone.",
    },
    {
      name: "Jane Smith",
      image: "/blur.jpg",
      testimonial: "The team was professional and delivered amazing results.",
    },
    {
      name: "Jane Smith",
      image: "/blur.jpg",
      testimonial: "The team was professional and delivered amazing results.",
    },
    {
      name: "Jane Smith",
      image: "/blur.jpg",
      testimonial: "The team was professional and delivered amazing results.",
    },
    // Add more clients as needed
  ];

  const [clients, setClients] = useState(staticClients); // Use static data
  const [loaded, setLoaded] = useState(true); // Mark data as loaded
  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  // Scrolling animation
  useEffect(() => {
    let controls;
    const finalPosition = -width / 2 - 19;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);

  return (
    <div className="relative py-8 h-[50vh]  overflow-x-hidden flex justify-center items-center">
      {/* Title */}
      <div className="absolute top-0 flex justify-center items-center ">
        <h1 className="text-white font-bold text-4xl ">Testimonials</h1>
      </div>

      {/* Carousel */}
      <motion.div
        className="absolute top-[17vh] left-0 flex gap-10"
        style={{ x: xTranslation }}
        ref={ref}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...clients, ...clients].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: loaded ? 0 : 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }} // Adjust duration for fade-in
          >
            <Card
              image={`${item.image}`}
              name={item.name}
              testimonial={item.testimonial}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 z-10 h-[50vh] w-screen pointer-events-none bg-gradient-to-r from-[#111010] via-transparent to-[#111010]" />
    </div>
  );
};

export default Testimonials;
