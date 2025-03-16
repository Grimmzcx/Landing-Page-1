import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import bgg from "../assets/bgg.jpg";
import IndustriesServed from "../components/IndustriesServed";
import Services from "../components/services";
import Features from "../components/Features";
import About from "../components/about";
import WhyChooseUs from "../components/WhyChooseUs";



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
            <p data-aos="fade-up" data-aos-delay="300" className="mb-5">
              Welcome to JJM Soap and Deter gent Manufacturing.
            </p>
          </div>
        </section>

          <section id="about"className="min-h-screen w-full flex items-center justify-center text-center relative">
            <About />
          </section>
          
          <section id="Features" className="py-16 bg-white   text-center">
            <Features />
          </section>

          <section className="py-16 bg-white    text-center">
            <Services />
          </section>
          

          <section className="py-16 bg-white">
            <IndustriesServed /> 
          </section>

          <section className="  bg-white">
            <WhyChooseUs   /> 
          </section>

          </>
          <section id="Footer">
          <footer />
          </section>
      </>
  );
}

export default Home;