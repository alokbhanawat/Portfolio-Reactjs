import React from "react";
import ProjectCard from "./ProjectCard";

// Add icon imports for each project
import { FaShoppingCart } from "react-icons/fa";  // Fashion
import { IoBookSharp } from "react-icons/io5";    // EduMind
import { MdTour } from "react-icons/md";          // Hidden Tour

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap justify-center gap-5">
        <ProjectCard
          title="FashCart Website"
          main="This is a Fashion website with Frontend, Backend, and Admin Panel with CRUD Operations Where Users Can Purchase Fashion Accessories"
          sourceLink="https://ecommerce-fash-h3h0uk5b0-alokbhanawats-projects.vercel.app/"
          icon={<FaShoppingCart size={50} />} // Passing icon as prop
        />
        <ProjectCard
          title="EduMind"
          main="This is a University Web Application Made From React.js For Guidance For Students"
          sourceLink="https://edumindup.netlify.app/"
          icon={<IoBookSharp size={50} />} // Passing icon as prop
        />
        <ProjectCard
          title="Hidden Tour Management"
          main="This is a Tour and Cab Planning Web Application for Planning Vacation and Booking Cabs"
          sourceLink="https://www.hiddenindiatours.com/car-rental/"
          icon={<MdTour size={50} />} // Passing icon as prop
        />
      </div>
    </div>
  );
};

export default Projects;
