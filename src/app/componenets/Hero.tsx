'use client'
import React from "react";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
  };

  return (
    <section className="relative mx-6 my-8 bg-[#222945] rounded-xl flex items-center justify-between p-8">
      <div className="text-white ml-24">
        <h3 className="text-xl font-medium uppercase mb-2">Best Deal Online on Smart Watches</h3>
        <h1 className="text-6xl font-bold">SMART WEARABLE</h1>
        <p className="text-lg mt-2">Up to 80% OFF</p>
      </div>

      <div className="relative left-3">
        <Image
          src='/images/smart-watch.png'
          alt="Hero Image"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>

      <button onClick={handlePrevSlide} className="absolute left-8 bg-slate-600 text-white hover:bg-slate-300 hover:text-black rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
        &lt;
      </button>
      <button onClick={handleNextSlide} className="absolute right-4 bg-slate-600 text-white hover:bg-slate-300 hover:text-black rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
        &gt;
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <span className={`w-3 h-3 rounded-full bg-white ${currentSlide === 0 ? 'opacity-100' : 'opacity-50'}`}></span>
        <span className={`w-3 h-3 rounded-full bg-white ${currentSlide === 1 ? 'opacity-100' : 'opacity-50'}`}></span>
        <span className={`w-3 h-3 rounded-full bg-white ${currentSlide === 2 ? 'opacity-100' : 'opacity-50'}`}></span>
      
      </div>
    </section>
  );
  return <div>Hero</div>;
};

export default Hero;
