import React from "react";
import aboutImage from "../assets/about.jpg"; // ✅ Import the image

function About() {
  return (
    <div className="container mx-auto max-w-4xl px-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-5" data-aos="fade-up">
        About Us
      </h2>
      <p className="text-gray-600 text-lg mb-8" data-aos="fade-up" data-aos-delay="300">
      JJM Soap and Detergent Manufacturing, we are committed to providing high-quality, effective, and eco-friendly cleaning solutions for households and businesses. With years of expertise in the industry, we take pride in producing premium-grade laundry detergents, dishwashing liquids,    fabric softeners, and multi-purpose cleaners that ensure superior cleanliness and long-lasting freshness.
      </p>
      <div data-aos="zoom-in" data-aos-delay="500">
        <img className="p-8 rounded-t-lg h-64 mx-auto" src={aboutImage} alt="About Us" />
      </div>
    </div>
  );
}

export default About;   