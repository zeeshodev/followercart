import React from "react";
import { FaSearch, FaCog, FaGlobe, FaRocket } from "react-icons/fa";
import "./Hero.css"
const steps = [
  {
    id: 1,
    title: "Making Idea",
    icon: <FaSearch size={40} />, 
    color: "#22c55e", // green-500
  },
  {
    id: 2,
    title: "Working Plan",
    icon: <FaCog size={40} />, 
    color: "#f97316", // orange-500
  },
  {
    id: 3,
    title: "SEO Research",
    icon: <FaGlobe size={40} />, 
    color: "#06b6d4", // cyan-500
  },
  {
    id: 4,
    title: "Launch Project",
    icon: <FaRocket size={40} />, 
    color: "#3b82f6", // blue-500
  },
];

const StepSection = () => {
  return (
    <div className="relative py-20 bg-white">
      <div className="flex flex-wrap justify-center items-center gap-25 relative z-10 w-md sm:w-full">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative group w-48 h-48 flex flex-col justify-center items-center text-center p-4 transition-all duration-300"
            style={{ '--step-color': step.color }}
          >
            {/* Step Number in top-left */}
            <div className="absolute top-2 left-2 z-30 text-4xl font-bold text-gray-300 transition-colors duration-300 group-hover:text-[color:var(--step-color)]">
              <span>
                {step.id < 10 ? `0${step.id}` : step.id}
              </span>
            </div>

            {/* Hexagon background base */}
            <div className="absolute inset-0 flex justify-center items-center z-0">
              <div
                class=" w-full h-full rounded-[2rem] shadow-md transform rotate-45 transition duration-300   "
                style={{ backgroundColor: "#f9fafb" }}
              ></div>
            </div>

            {/* Icon and Title */}
            <div className="relative z-20 text-center">
              <div
                className="mb-2 transition-colors duration-300"
                style={{ color: step.color }}
              >
                {step.icon}
              </div>
              <div className="font-semibold transition-colors duration-300 text-gray-800 group-hover:text-gray-900">
                {step.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepSection;
