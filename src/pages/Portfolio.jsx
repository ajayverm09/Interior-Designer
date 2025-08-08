import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Biophilic Dining Space",
      image:
        "https://static.wixstatic.com/media/88aac0_757b7e90f51041208321c280313a1851~mv2.jpeg/v1/fit/w_495,h_276,q_90,enc_avif,quality_auto/88aac0_757b7e90f51041208321c280313a1851~mv2.jpeg",
    },
    {
      title: "Eco Urban Loft",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    },
    {
      title: "Sustainable Kitchen Redesign",
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    },
    {
      title: "Early Bedroom Retreat",
      image: "https://images.pexels.com/photos/3554424/pexels-photo-3554424.jpeg",
    },
    {
      title: "Organic Living",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg",
    },
    {
      title: "Green Workspace Heaven",
      image: "https://images.pexels.com/photos/735855/pexels-photo-735855.jpeg",
    },
  ];

  return (
    <section className="bg-[#5b6248] py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-16">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-8 sm:mb-12">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            className="relative group cursor-pointer overflow-hidden rounded-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-2 text-center">
              <h3 className="text-white text-lg sm:text-xl font-serif">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
