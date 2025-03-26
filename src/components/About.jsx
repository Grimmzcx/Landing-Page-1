import React from "react";
import aboutImage from "../assets/about.jpg"; // ✅ Import the image

function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center py-16">
  <div className="container mx-auto max-w-4xl px-6 text-center">
    {/* Heading */}
    <h2 className="text-4xl font-bold text-emerald-600 mb-5" data-aos="fade-up">About Us</h2>

    {/* Description */}
    <p className="text-gray-600 text-lg mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
      At <span className="font-semibold">JJM Soap and Detergent Manufacturing</span>, we are
      committed to providing high-quality, effective, and eco-friendly cleaning solutions
      for households and businesses. With years of expertise in the industry, we take pride
      in producing premium-grade laundry detergents, dishwashing liquids, fabric softeners,
      and multi-purpose cleaners that ensure superior cleanliness and long-lasting freshness.
    </p>

    {/* Image Section */}
    <div data-aos="zoom-in" data-aos-delay="500" className="w-full flex justify-center">
      <img className="rounded-lg shadow-lg h-64 w-auto" src={aboutImage} alt="About Us"/>
    </div>
  </div>
</div>

  );
}

export default About;   