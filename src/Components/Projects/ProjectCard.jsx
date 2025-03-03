import React from "react";

const ProjectCard = ({ title, main, sourceLink, icon }) => {
  return (
    <div className="p-3 py-6 md:p-6 flex flex-col w-60 sm:w-72 md:w-80 lg:w-72 xl:w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl relative">
      {/* Render the passed icon */}
      <div className="p-4 flex justify-center items-center">
        {icon}
      </div>
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <a href={sourceLink} target="_blank" rel="noopener noreferrer">
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Visit
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
