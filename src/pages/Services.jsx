import React from "react";

const Services = () => {
  const services = [
    {
      title: "Consultations",
      description:
        "Expert advice and guidance to kickstart your sustainable design journey",
      image:
        "https://static.wixstatic.com/media/11062b_3c18221cdca147eea60fb4d7bb8c0204~mv2.jpg/v1/fill/w_652,h_954,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Natural%20Beauty.jpg",
    },
    {
      title: "Space Planning",
      description:
        "Tailored spatial solutions that optimize functionality and aesthetics",
      image:
        "https://static.wixstatic.com/media/11062b_b2a88fae29a24406aee5e162858814af~mv2.jpg/v1/fill/w_652,h_954,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Business%20Meeting.jpg",
    },
    {
      title: "Product Sourcing",
      description:
        "Curated selection of eco-friendly products for a sustainable lifestyle",
      image:
        "https://static.wixstatic.com/media/88aac0_ad91eeb3ac294f9a8c579eed0f15e760~mv2.png",
    },
  ];

  return (
    <section className="bg-[#f9f6ee] py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#556b4e]">
          Our Services
        </h2>
        <p className="text-gray-700 mt-2 italic text-sm sm:text-base">
          See What We Offer
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="text-center">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 sm:h-72 md:h-[350px] object-cover rounded-md shadow-md"
            />
            <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-serif text-[#556b4e]">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-700 text-sm sm:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
