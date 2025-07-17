import React, { useState, useEffect } from "react";

import SearchBar from "../components/SearchBar";
import { motion, AnimatePresence } from "framer-motion";
import { FaBed, FaBath, FaRulerCombined, FaArrowRight } from "react-icons/fa";
import image1 from "../assets/image8.jpg";
import image2 from "../assets/image11.jpg";
import image3 from "../assets/image12.jpg";
import image4 from "../assets/image13.jpg";
import image5 from "../assets/image9.jpg";
import WhyUsSection from "../components/whyUs";
import FeaturedProperties from "../components/featureProperties";
import YouTubeChannel from "../components/youtube";

const slides = [
  { src: image1, alt: "Office space view 1" },
  { src: image2, alt: "Office space view 2" },
  { src: image3, alt: "Office space view 3" },
  { src: image4, alt: "Office space view 4" },
  { src: image5, alt: "Office space view 5" },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    },3000);
    return () => clearInterval(interval);
  }, []);

  const propertyFeatures = [
    { icon: <FaBed className="mr-1" />, value: "5 Beds" },
    { icon: <FaBath className="mr-1" />, value: "2 Baths" },
    { icon: <FaRulerCombined className="mr-1" />, value: "180 sqft" },
  ];

  return (
    <>
    <div className="min-h-screen">
  
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden m-3">
        {/* Slideshow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 1.5 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].src})` }}
          />
        </AnimatePresence>


        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-black px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[#daa520] px-4 py-1 rounded-full mb-6 inline-block"
          >
            <span className="font-medium">1920 | 142.5</span>
          </motion.div>

          <div className="flex gap-4 mb-6">
            {propertyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center text-sm md:text-base"
              >
                {feature.icon}
                <span>{feature.value}</span>
              </motion.div>
            ))}
          </div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
          >
            Office Space at
          </motion.h1>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
          >
            Northwest
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl mb-8"
          >
            $250<span className="text-lg">/month</span>
          </motion.p>

          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-[#daa520] hover:bg-[#c5941c] text-black px-8 py-3 rounded-full font-medium flex items-center transition-colors duration-300"
          >
            View Details <FaArrowRight className="ml-2" />
          </motion.button>
        </div>
      </section>

      {/* Search Bar */}
      <section className="relative z-20 -mt-0 px-0">
        <div className="max-w-6xl mx-auto">
          <SearchBar />
        </div>
      </section>
    </div>
    <WhyUsSection />
      <FeaturedProperties />
      <YouTubeChannel />
    </>
  );
}
