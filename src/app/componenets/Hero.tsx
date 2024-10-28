"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
  };

  return (
    <section className="relative mx-4 my-8 bg-[#222945] rounded-xl flex flex-col lg:flex-row items-center justify-between p-6 md:p-12 select-none">
      {/* Text Section */}
      <div className="text-white text-center lg:text-left mb-6 lg:mb-0 lg:ml-12 space-y-2">
        <h3 className="text-lg sm:text-xl font-medium uppercase">
          Best Deal Online on Smart Watches
        </h3>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          SMART WEARABLE
        </h1>
        <p className="text-base sm:text-lg mt-2">Up to 80% OFF</p>
      </div>

      {/* Image Section */}
      <div className="relative z-10 w-full lg:w-auto">
        <Image
          src="/images/smart-watch.png"
          alt="Hero Image"
          width={400}
          height={400}
          className="mx-auto object-cover"
        />
      </div>

      <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-600 text-white hover:bg-slate-300 hover:text-black rounded-full w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center shadow-lg"
      >
        <MdArrowBackIosNew />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-600 text-white hover:bg-slate-300 hover:text-black rounded-full w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center shadow-lg"
      >
        <MdArrowForwardIos />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <span
          className={`w-3 h-3 rounded-full bg-white ${
            currentSlide === 0 ? "opacity-100" : "opacity-50"
          }`}
        ></span>
        <span
          className={`w-3 h-3 rounded-full bg-white ${
            currentSlide === 1 ? "opacity-100" : "opacity-50"
          }`}
        ></span>
        <span
          className={`w-3 h-3 rounded-full bg-white ${
            currentSlide === 2 ? "opacity-100" : "opacity-50"
          }`}
        ></span>
      </div>
    </section>
  );
};

export default Hero;
