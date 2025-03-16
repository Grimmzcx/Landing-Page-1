import React from "react";
import { Link } from "react-scroll";

function Navbar(){
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
  {/* Logo with Stacked Text */}
  <div className="flex flex-col items-center">
    <span className="text-lg font-bold text-gray-900">JJM</span>
    <span className="text-sm font-bold text-gray-900">Soap and Detergent</span>
  </div>

  
  {/* Centered Menu */}
  <ul className="hidden md:flex flex-1 justify-center space-x-6 text-gray-700">
  <li><Link to="Home"smooth={true}duration={1000}className="hover:text-emerald-600 cursor-pointer">Home</Link></li>
  <li><Link to="about"smooth={true}duration={1000}className="hover:text-emerald-600 cursor-pointer">About Us</Link></li>
  <li><Link to="Features"smooth={true}duration={1000}className="hover:text-emerald-600 cursor-pointer">Features</Link></li>
  <li><Link to="Footer"smooth={true}duration={1000}className="hover:text-emerald-600 cursor-pointer">Contact</Link></li>
</ul>

  {/* Get Started Button */}
  <button className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700">
    Get Started
  </button>
</nav>

  );
};

export default Navbar;