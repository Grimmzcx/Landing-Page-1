import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.jpg"; // Corrected path

function Navbar() {
  // Track the active section
  const [activeSection, setActiveSection] = useState("Home");

  const menuItems = [
    
    { name: " About us", link: "about" },
    { name: " Features", link: "Features" },
    { name: "Service", link: "Services" },
    { name: "Market", link: "IndustriesServed" },
    { name: "Contact Us", link: "Footer" },
  ];

  return (
    <nav className="sticky top-0 z-50 grid grid-cols-3 items-center px-6 py-4 bg-white shadow-md">
      {/* Left Column: Logo */}
      <div className="flex-1">
        <a href="/" className="text-xl text-green-500">
          <img src={logo} alt="Logo" className="rounded-full w-10 h-10" />
        </a>
      </div>

      {/* Center Column: Menu */}
      <ul className="hidden md:flex justify-center space-x-6 text-gray-700">
        {menuItems.map((item) => (
          <li key={item.link} className="relative">
            <Link
              to={item.link}
              smooth={true}
              duration={1000}
              className={`cursor-pointer ${
                activeSection === item.link
                  ? "text-emerald-600 font-bold"
                  : "text-gray-700"
              }`}
              onClick={() => setActiveSection(item.link)}
            >
              {item.name}
            </Link>
            {/* Underline when active */}
            {activeSection === item.link && (
              <div className="absolute left-0 w-full h-[2px] bg-gray-600 mt-1" />
            )}
          </li>
        ))}
      </ul>
    
    </nav>
  );
}

export default Navbar;
