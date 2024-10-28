import Link from "next/link";
import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import { RiDiscountPercentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

const Header = () => {
  return (
    <header className="select-none bg-white text-gray-600">
      {/* Top Bar */}
      <div className="bg-gray-200 px-4 py-2 flex flex-col md:flex-row items-center gap-3 justify-between">
        <p className="text-center md:text-left">Welcome to worldwide Megamart!</p>

        <div className="flex items-center space-x-2">
          <LuMapPin className="text-[#47abd6]" />
          <p>
            Deliver to <span className="font-medium">423651</span>
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 border-l pl-4 border-gray-400">
            <TbTruckDelivery className="text-[#47abd6]" />
            <p>Track your order</p>
          </div>
          <div className="flex items-center space-x-2 border-l pl-4 border-gray-400">
            <RiDiscountPercentLine className="text-[#47abd6]" />
            <p>All Offers</p>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-4 py-4 flex items-center justify-between">
        {/* Logo and Menu Icon */}
        <div className="flex items-center text-2xl font-medium text-[#008fcc] space-x-2">
          <BiMenuAltLeft />
          <h1>MegaMart</h1>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex relative items-center bg-[#f2f8fa] w-2/4 rounded-lg">
          <CiSearch className="absolute left-4 text-[#008fcc] text-2xl" />
          <input
            type="text"
            placeholder="Search essentials, groceries and more..."
            className="w-full py-2 pl-12 pr-12 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-300 outline-none text-gray-700"
          />
          <CiMenuBurger className="absolute right-4 text-[#008fcc] text-2xl" />
        </div>

        {/* User and Cart */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-1 text-lg font-medium">
            <FiUser className="text-[#008fcc]" />
            <p>Sign Up/Sign In</p>
          </div>
          <IoCartOutline className="text-[#008fcc] text-2xl" />
        </div>
      </div>

      <div className="border-b border-gray-300"></div>

      {/* Category Bar */}
      <div className="px-4 py-3">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Groceries", "Premium Fruits", "Home & Kitchen", "Fashion", 
            "Electronic", "Beauty", "Home Improvement", "Sports, Toys & Luggage"
          ].map((category) => (
            <Link 
              key={category}
              href="#"
              className="py-2 px-4 font-medium hover:bg-[#008fcc] hover:text-white rounded-full bg-blue-50 text-gray-700"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-b border-gray-300"></div>
    </header>
  );
};

export default Header;
