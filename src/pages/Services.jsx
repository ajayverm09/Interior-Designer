import React, { useState } from "react";

const Services = () => {
  const services = [
    {
      title: "Consultations",
      description:
        "Our consultations provide personalized guidance to bring your design ideas to life. We listen closely, understand your needs, and share expert advice. From initial concepts to actionable steps, we help you envision beautiful, functional, and sustainable spaces that truly reflect your personality and lifestyle preferences.",
      image:
        "https://static.wixstatic.com/media/11062b_3c18221cdca147eea60fb4d7bb8c0204~mv2.jpg/v1/fill/w_652,h_954,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Natural%20Beauty.jpg",
    },
    {
      title: "Space Planning",
      description:
        "Space planning is about creating layouts that are both practical and visually pleasing. We analyze your area, identify the best flow, and design arrangements that optimize space usage. The result is a harmonious balance of comfort, functionality, and style, making every corner of your space purposeful.",
      image:
        "https://static.wixstatic.com/media/11062b_b2a88fae29a24406aee5e162858814af~mv2.jpg/v1/fill/w_652,h_954,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Business%20Meeting.jpg",
    },
    {
      title: "Product Sourcing",
      description:
        "Our product sourcing service ensures every item in your space meets your style and sustainability goals. We carefully select eco-friendly, high-quality furnishings and décor. From furniture to accessories, we find pieces that complement your design vision, ensuring a cohesive, beautiful, and environmentally conscious finished space.",
      image:
        "https://static.wixstatic.com/media/88aac0_ad91eeb3ac294f9a8c579eed0f15e760~mv2.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#f9f6ee] py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-16">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#556b4e]">
          Our Services
        </h2>
        <p className="text-gray-700 mt-2 italic text-sm sm:text-base">
          See What We Offer
        </p>
      </div>

      {/* Images like notebook pages */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-6xl mx-auto">
        {/* Notebook pages */}
        <div className="flex gap-6 relative w-full md:w-1/2 justify-center">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const tilt = index === 0 ? "-rotate-6" : index === 2 ? "rotate-6" : "";

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative bg-white p-3 rounded-lg shadow-lg cursor-pointer transition-all duration-500 ease-in-out transform
                  ${isActive ? "scale-110 z-20 blur-0" : "scale-95 blur-sm opacity-70 z-10"}
                  ${tilt}`}
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(white, white 28px, #f0f0f0 29px)",
                  backgroundSize: "100% 30px",
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-44 h-60 object-cover rounded-md shadow"
                />

                {/* Show overlay "Click me" only on inactive cards on hover */}
                {!isActive && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-md">
                    <span className="text-white font-semibold text-lg select-none pointer-events-none">
                      Click me
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Text section */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-serif text-[#556b4e] mb-4">
            {services[activeIndex].title}
          </h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {services[activeIndex].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
