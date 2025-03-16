import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-6 grid md:grid-cols-2   gap-8">
  
        {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-400"> Our mission is to deliver innovative and safe cleaning products that not only meet the highest industry standards but also contribute to a healthier environment.</p>
          </div>

        {/* Contact Information */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-400">Email: negosyongpaunlad@gmail.com</p>
          <p className="text-gray-400">Phone:+63-966-709-5993 </p>
          <p className="text-gray-400">Location:San Jose del Monte, Philippines, 3023 Bulacan, Philippines · San Jose del Monte, Philippines</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} JJM Soap and Detergent Manufacturing. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
