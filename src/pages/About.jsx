import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 900,
      easing: "ease-in-sine",
      delay: 300,
    });
  }, []);

  return (
    <section
      className="bg-[#f5e4c8] py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-16"
      data-aos="fade-up"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        <div className="flex-1" data-aos="fade-right">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#556b4e] mb-4 sm:mb-6">
            About
          </h2>
          <h1 className="text-4xl sm:text-5xl text-[#556b4e] md:text-6xl lg:text-7xl mb-6">
            Felix O. Nguyen
          </h1>
          <img
            src="https://static.wixstatic.com/media/11062b_f28a820e7c2b41b2bcc3a8f5ab1ea07c~mv2.jpg/v1/fill/w_1140,h_810,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Business%20Meeting%20at%20a%20Cafe.jpg"
            alt="About Felix O. Nguyen"
            className="w-full max-w-lg rounded-lg shadow-md object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center mt-6 md:mt-12 lg:mt-36" data-aos="fade-left">
          <p className="text-[#556b4e] leading-relaxed text-base sm:text-lg">
            At Felix O. Nguyen, we are dedicated to sustainable interior design,
            incorporating eco-friendly elements into every project. Our mission
            is to transform spaces with a deep commitment to environmental
            responsibility, ensuring that each design reflects the beauty of
            nature and the essence of sustainable living.
          </p>
          <a
            href="/portfolio"
            className="inline-block mt-6 sm:mt-8 bg-[#556b4e] px-6 py-2 sm:w-36 sm:h-10 text-white text-center rounded-lg hover:bg-[#F5E4C8] border border-[#556b4e] hover:text-[#556b4e] transition"
          >
            Explore Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
