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
    // Top Bar

    <header className="select-none bg-white text-gray-600">
      <div className="mx-auto flex items-center gap-11 px-6 py-0 bg-gray-200">
        <div className="flex-grow ">
          <p>Welcom to worldwide Megamart!</p>
        </div>

        <div className="flex items-center space-x-2 ">
          <span className="mt-0 text-[#47abd6]">
            <LuMapPin />
          </span>
          <p>
            Deliver to <span className="font-medium">423651</span>
          </p>
        </div>

        <div className="flex items-center space-x-2 border-l-[1px] border-gray-400 h-5 pl-4">
          <span className="mt-1 text-[#47abd6]">
            <TbTruckDelivery />
          </span>
          <p>Track your order</p>
        </div>

        <div className="flex items-center space-x-2 border-l-[1px] border-gray-400 h-5 pl-4 ">
          <span className="mt-1 text-[#47abd6]">
            <RiDiscountPercentLine />
          </span>
          <p>All Offers</p>
        </div>
      </div>
      {/*Main Header     ========================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-grow flex items-center text-3xl font-medium text-[#008fcc]">
            <span className="pr-1">
              <BiMenuAltLeft />
            </span>
            <h1>MegaMart</h1>
          </div>

          <div className="relative bg-[#f2f8fa] flex items-center mr-20 w-2/4 rounded-lg">
            <span className="absolute left-4 text-[#008fcc] text-2xl">
              <CiSearch />
            </span>
            <input
              type="text"
              placeholder="Search enssentials, geroceries and more..."
              name="serach-bar"
              className="w-full py-2 pl-12 pr-12 rounded-full bg-blue-50 border-none focus:ring-2 focus:ring-blue-300 outline-none text-gray-700"
            />
            <button className="absolute right-4 text-[#008fcc] text-2xl">
              <CiMenuBurger />
            </button>
          </div>

          <div className="flex items-center text-lg font-medium mr-5  ">
            <span className="text-[#008fcc] mr-1 ">
              <FiUser />
            </span>
            <p>Sign Up/Sign In</p>
          </div>
          <div className="border-l-[1px] border-gray-400 h-6 mr-7"></div>


          <div className="flex items-center text-lg font-medium ">
            <span className="text-[#008fcc] mr-1">
              <IoCartOutline />
            </span>
            <p>Cart</p>
          </div>
        </div>

      </div>
        <div className="border-b-[1px] border-gray-300 w-full shadow-2xl"></div>
      {/*Category Bar      ==========================================================>>>>>>>>>>>>>>>> */}
      <div className="px-6 py-4">
        <div className="flex justify-between ">
          <Link href='#' className="py-[5px] px-4 font-medium hover:bg-[#008fcc] hover:text-white rounded-full bg-blue-50 text-gray-700">Groceries</Link>
          <Link href='#' className="py-[5px] px-4 font-medium hover:bg-[#008fcc] hover:text-white rounded-full bg-blue-50 text-gray-700">Premium Fruits</Link>
          
          <Link href='#' className="py-[5px] px-4 font-medium hover:bg-[#008fcc] hover:text-white rounded-full bg-blue-50 text-gray-700">Home & Kitchen</Link>
          <Link href='#' className="py-[5px] px-4 font-medium hover:bg-[#008fcc] hover:text-white rounded-full bg-blue-50 text-gray-700">Fashion</Link>
          <Link href='#' className="py-[5px] px-4 font-medium hover:bg-[#008fcc] hover:text-white rounded-full bg-blue-50 text-gray-700">Electronic</Link>

          <Link href='#' className="py-[5px] px-4 font-medium hover:bg-[#008fcc] hover:text-white rounded-full bg-blue-50 text-gray-700">Beauty</Link>
          <Link href='#' className="py-[5px] px-4 font-medium hover:bg-[#008fcc] hover:text-white rounded-full bg-blue-50 text-gray-700">Home Improvement</Link>
          <Link href='#' className="py-[5px] px-4 font-medium hover:bg-[#008fcc] hover:text-white rounded-full bg-blue-50 text-gray-700">Sports, Toys & Luggage</Link>
          
          
        </div>
      </div>
      <div className="border-b-[1px] border-gray-300 w-full shadow-2xl"></div>
      </header> 
    
  );
};

export default Header;
