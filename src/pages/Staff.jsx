import React from "react";

const staffMembers = [
  {
    name: "Sophia Carter",
    role: "Lead Interior Designer",
    image: "https://via.placeholder.com/150",
    description: "Specializes in luxury residential and commercial spaces."
  },
  {
    name: "Ethan Brooks",
    role: "Furniture Specialist",
    image: "https://via.placeholder.com/150",
    description: "Expert in sourcing and customizing furniture pieces."
  },
  {
    name: "Amelia Clarke",
    role: "Color Consultant",
    image: "https://via.placeholder.com/150",
    description: "Helps clients choose harmonious and trending color palettes."
  },
  {
    name: "Liam Scott",
    role: "Lighting Designer",
    image: "https://via.placeholder.com/150",
    description: "Creates stunning ambiance with perfect lighting solutions."
  },
  {
    name: "Olivia Adams",
    role: "3D Visualizer",
    image: "https://via.placeholder.com/150",
    description: "Brings designs to life with detailed 3D renders."
  },
  {
    name: "Noah Bennett",
    role: "Project Manager",
    image: "https://via.placeholder.com/150",
    description: "Ensures smooth execution of every design project."
  },
  {
    name: "Ava Mitchell",
    role: "Fabric & Textile Expert",
    image: "https://via.placeholder.com/150",
    description: "Curates fabrics to match client preferences and themes."
  },
  {
    name: "James Parker",
    role: "Space Planner",
    image: "https://via.placeholder.com/150",
    description: "Optimizes layouts for style, comfort, and functionality."
  },
  {
    name: "Mia Foster",
    role: "Art Curator",
    image: "https://via.placeholder.com/150",
    description: "Selects art pieces that complement design aesthetics."
  },
  {
    name: "William Hughes",
    role: "Material Specialist",
    image: "https://via.placeholder.com/150",
    description: "Sources high-quality materials for premium finishes."
  },
  {
    name: "Charlotte Evans",
    role: "Floral Decor Artist",
    image: "https://via.placeholder.com/150",
    description: "Creates natural accents with fresh and preserved flowers."
  },
  {
    name: "Benjamin Gray",
    role: "Construction Liaison",
    image: "https://via.placeholder.com/150",
    description: "Coordinates with builders for flawless design execution."
  }
];

const Staff = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our Creative Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {staffMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition"
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
