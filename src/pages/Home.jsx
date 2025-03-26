import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import bgg from "../assets/bgg.jpg";
import IndustriesServed from "../components/IndustriesServed";
import Services from "../components/services";
import Features from "../components/Features";
import About from "../components/about";
import WhyChooseUs from "../components/WhyChooseUs";
import Mission from "../components/Mission";




function Home() {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation runs only once when scrolling
});}, []);

  return (
    <><>
        <section id="Home" className="relative min-h-screen flex items-center justify-center text-center" style={{
            backgroundImage: `url(${bgg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",}}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 max-w-md text-white text-center mx-auto">
            <h1 data-aos="fade-up" className="mb-5 text-5xl font-bold">Hello there!</h1>
            <p data-aos="fade-up"  className="mb-5">
             Welcome to JJM Soap and Detergent Manufacturing, where quality meets innovation.
            </p>
            <button data-aos="fade-up" className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700">
              Get Started
            </button>
          </div>
        </section>

          <section id="about"className="min-h-screen w-full flex items-center justify-center text-center relative bg-white">
            <About />
          </section>

          <section id="Mission" className="py-16 bg-gray-100   text-center">
            <Mission />
          </section>         
          
          <section id="Features" className="py-16 bg-gray-100   text-center">
            <Features />
          </section>

          <section id="Services" className="py-16 bg-white text-center">
            <Services />
          </section>
          

          <section id="IndustriesServed"  className="min-h-screen bg-gray-100">
            <IndustriesServed /> 
          </section>

          <section className="h-full bg-white">
            <WhyChooseUs />
          </section>

          </>
          <section id="Footer">
          <footer />
          </section>
      </>
  );
}

export default Home;