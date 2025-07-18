import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row bg-[#f9f9f6] border border-gray-200 rounded-2xl overflow-hidden shadow-md">
      
      {/* Left Side */}
      <div className="flex flex-col justify-center items-start w-full md:w-1/2 p-6 md:p-10 lg:p-14 text-[#333] space-y-4">
        <div className="flex items-center gap-3">
          <span className="block w-10 md:w-14 h-[2px] bg-[#333]"></span>
          <p className="text-xs md:text-sm font-medium tracking-wider uppercase text-gray-600">Our Bestsellers</p>
        </div>
        
        <h1 className="prata-regular text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-snug">
          Latest Arrivals
        </h1>
        
        <button className="flex items-center gap-2 mt-2 px-4 py-2 border border-[#333] text-sm md:text-base font-semibold hover:bg-[#333] hover:text-white transition-all rounded-full">
          Shop Now
          <span className="block w-6 h-[1px] bg-[#333] group-hover:bg-white"></span>
        </button>
      </div>
      
      {/* Right Side */}


<div className="w-full md:w-1/2 aspect-[4/3] relative overflow-hidden">
  <img 
    src={assets.hero_img} 
    alt="Hero" 
    className="absolute bottom-0 right-0 h-full w-auto object-contain"
  />
</div>











    </div>
  );
}

export default Hero;
