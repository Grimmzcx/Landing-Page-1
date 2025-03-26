import React from "react";
// If using icons from react-icons:
// npm install react-icons
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Brand & Mission (Left Column) */}
        <div>
          <h3 className="text-2xl font-bold text-emerald-600 mb-3">#ChooseChoiceChosen</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering Futures, One Choice at a Time! 🚀
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full"
            >
              <FaLinkedinIn />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Australian Brands (Second Column) */}
        <div>
          <h3 className="text-xl font-semibold text-emerald-600 mb-3">Why JJM</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>Dedicated Support</li>
            <li>High-Quality Standards</li>
            <li>Cost-Effective Services</li>
            <li>Strong Client Relationships</li>
            <li>Trust and Reliability</li>
            <li>Continuous Improvement</li>
            
          </ul>
        </div>

        {/* Menu (Third Column) */}
        <div>
          <h3 className="text-xl font-semibold text-emerald-600 mb-3">MENU</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>About us</li>
            <li>Features</li>
            <li>Services</li>
            <li>Market</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact Us (Fourth Column) */}
        <div>
          <h3 className="text-xl font-semibold text-emerald-600 mb-3">Contact Us</h3>
          <p className="text-gray-400 text-sm">
            Email: negosyongpaunlad@gmail.com
          </p>
          <p className="text-gray-400 text-sm">Phone: +63-966-709-5993</p>
          <p className="text-gray-400 text-sm mt-2">
            Location: San Jose del Monte, Philippines, 
            3023 Bulacan, Philippines · San Jose del Monte, Philippines
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} JJM Soap and Detergent Manufacturing. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
