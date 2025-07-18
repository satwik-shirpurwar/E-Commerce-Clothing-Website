import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-[#f5f1eb] text-[#333] px-4 md:px-8 lg:px-16 pt-10 pb-6 mt-12 rounded-t-2xl">
      
      {/* Main footer content */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-12 md:gap-14 mb-10">
        
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="logo" />
          <p className="w-full md:w-2/3 text-gray-600 text-sm">
            Discover affordable and stylish fashion at your fingertips. From everyday wear to the latest trends, we bring quality clothing to your doorstep with ease and care. Shop smart. Dress better.
          </p>
        </div>

        <div>
          <p className="text-base sm:text-lg font-semibold mb-4">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            <li className="hover:text-black cursor-pointer transition-colors">Home</li>
            <li className="hover:text-black cursor-pointer transition-colors">About us</li>
            <li className="hover:text-black cursor-pointer transition-colors">Delivery</li>
            <li className="hover:text-black cursor-pointer transition-colors">Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-base sm:text-lg font-semibold mb-4">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600 text-sm">
            <li className="hover:text-black transition-colors">+91-7972806064</li>
            <li className="hover:text-black transition-colors">satwiksh123@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* Divider and copyright */}
      <hr className="border-gray-300 mb-4" />
      <p className="text-center text-gray-500 text-xs">
        © 2025 satwiksh123@gmail.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
