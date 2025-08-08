import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const staffMembers = [
  {
    name: "Sophia Carter",
    role: "Lead Interior Designer",
    image:
      "https://images.pexels.com/photos/12437056/pexels-photo-12437056.jpeg",
    description: "Specializes in luxury residential and commercial spaces.",
  },
  {
    name: "Ethan Brooks",
    role: "Furniture Specialist",
    image:
      "https://as2.ftcdn.net/v2/jpg/03/26/98/51/1000_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",
    description: "Expert in sourcing and customizing furniture pieces.",
  },
  {
    name: "Amelia Clarke",
    role: "Color Consultant",
    image: "https://images.pexels.com/photos/8815878/pexels-photo-8815878.jpeg",
    description: "Helps clients choose harmonious and trending color palettes.",
  },
  {
    name: "Liam Scott",
    role: "Lighting Designer",
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Creates stunning ambiance with perfect lighting solutions.",
  },
  {
    name: "Olivia Adams",
    role: "3D Visualizer",
    image:
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Brings designs to life with detailed 3D renders.",
  },
  {
    name: "Noah Bennett",
    role: "Project Manager",
    image:
      "https://www.shutterstock.com/image-photo/portrait-handsome-caucasian-man-formal-260nw-2142820441.jpg",
    description: "Ensures smooth execution of every design project.",
  },
  {
    name: "Ava Mitchell",
    role: "Fabric & Textile Expert",
    image:
      "https://images.unsplash.com/photo-1631052065964-dd7b96eb7f7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fG1lbiUyMHN1aXR8ZW58MHx8MHx8fDA%3D",
    description: "Curates fabrics to match client preferences and themes.",
  },
  {
    name: "James Parker",
    role: "Space Planner",
    image:
      "https://media.istockphoto.com/id/1297832726/photo/portrait-of-a-smiling-young-businessman.jpg?s=612x612&w=0&k=20&c=32Qg7TnqfGkrDwTL3q0X0Kx9ab3JDzuqxzp4poH39zc=",
    description: "Optimizes layouts for style, comfort, and functionality.",
  },
  {
    name: "Mia Foster",
    role: "Art Curator",
    image: "https://images.pexels.com/photos/7144179/pexels-photo-7144179.jpeg",
    description: "Selects art pieces that complement design aesthetics.",
  },
  {
    name: "William Hughes",
    role: "Material Specialist",
    image:
      "https://images.unsplash.com/photo-1697319501786-8f5dc64326ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxtZW4lMjBzdWl0fGVufDB8fDB8fHww",
    description: "Sources high-quality materials for premium finishes.",
  },
  {
    name: "Charlotte Evans",
    role: "Floral Decor Artist",
    image:
      "https://images.unsplash.com/photo-1635205383144-402b892efa23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxtZW4lMjBzdWl0fGVufDB8fDB8fHww",
    description: "Creates natural accents with fresh and preserved flowers.",
  },
  {
    name: "Benjamin Gray",
    role: "Construction Liaison",
    image:
      "https://images.unsplash.com/photo-1717730798531-6a62ed43b871?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Coordinates with builders for flawless design execution.",
  },
];

const Staff = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 900,
      easing: "ease-in-sine",
      delay: 300,
    });
  }, []);

  return (
    <div className="bg-gray-100 py-12 px-6">
      <h1
        className="text-4xl font-bold text-center mb-10 text-gray-800"
        data-aos="fade-down"
      >
        Our Creative Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {staffMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition"
            data-aos="fade-up"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-indigo-600 font-medium">{member.role}</p>
            <p className="text-gray-600 mt-2">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
