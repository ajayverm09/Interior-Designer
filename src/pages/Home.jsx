import React from "react";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import ContactUs from "./Contact";


const Hero = () => {
  
  return (
    <div>
      <section
        className="relative bg-cover bg-center min-h-screen flex items-center px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12"
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/88aac0_287c9dc70f8b4097829ea25993fe092d~mv2.png')",
        }}
      >
        <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-md shadow-md max-w-sm sm:max-w-md md:max-w-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#556b4e] leading-tight">
            Holistic <br /> Green <br /> Interiors
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            Welcome to a world where design meets sustainability. Discover how
            we blend eco-friendly materials with innovative practices to create
            spaces that are both beautiful and environmentally responsible.
          </p>
          <a
            href="/portfolio"
            className="inline-block mt-4 sm:mt-6 bg-[#556b4e] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-[#3f5239] transition"
          >
            Explore Now
          </a>
        </div>
      </section>

      <About />
      <Services />
      <Portfolio />
      <ContactUs />
    </div>
  );
};

export default Hero;
