import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="pl-6  bg-[#008fcc] text-gray-200">
      <div className="py-16 pr-20 grid grid-cols-1 md:grid-cols-3">
        {/* <div className="mt-11 ml-11"> */}
        <div className=" ml-11">
          <h1 className=" text-4xl font-semibold pb-6">MegaMart</h1>
          <p className="font-bold text-lg pb-3">Contact Us</p>

          <ul>
            <li className="flex items-center gap-2">
              <FaWhatsapp />
              Whats App
            </li>
            <li className="pl-6">+1 202-918-2132</li>
            <li className="mt-3 flex items-center gap-2">
              <FiPhoneCall />
              Call Us
            </li>
            <li className="pl-6">+1 202-918-2132</li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-lg mb-9  ">
            <span className="border-b-[3px] pb-3">Most Popular Categories</span>
          </h1>
          <ul className=" leading-9 list-disc">
            <li>Stapies</li>
            <li>Beverages</li>
            <li>Personal Care</li>
            <li>Home Care</li>
            <li>Baby Care</li>
            <li>Vegetable & Fruits</li>
            <li>Snacks & Foods</li>
            <li>Dairy & Backery</li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-lg mb-9">
            <span className="border-b-[3px] pb-3">
            Customer Services
              </span></h1>
          <ul className="leading-9 list-disc">
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>E-waste Policy</li>
            <li>cancellation & Return Policy</li>
          </ul>
        </div>
      </div>
      <div className=" pt-9 border-b-[1px] border-gray-300 shadow-2xl"></div>
      <div className="text-center p-4">
        &copy; All rights reserved Reliance Retail Ltd.
      </div>
    </footer>
  );
};

export default Footer;
