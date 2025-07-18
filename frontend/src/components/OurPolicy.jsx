import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className="bg-[#f9f9f6] rounded-2xl px-4 md:px-8 lg:px-16 py-10 my-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center text-xs sm:text-sm md:text-base text-gray-700">
        
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center">
          <img src={assets.exchange_icon} className="w-12 mb-4" alt="" />
          <p className="font-semibold mb-1">Easy Exchange Policy</p>
          <p className="text-gray-400">We offer hassle-free exchange policy</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center">
          <img src={assets.quality_icon} className="w-12 mb-4" alt="" />
          <p className="font-semibold mb-1">7 Days Return Policy</p>
          <p className="text-gray-400">We provide 7 days free return policy</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center">
          <img src={assets.support_img} className="w-12 mb-4" alt="" />
          <p className="font-semibold mb-1">Best Customer Support</p>
          <p className="text-gray-400">We provide 24/7 customer support</p>
        </div>

      </div>
    </div>
  );
};

export default OurPolicy;
