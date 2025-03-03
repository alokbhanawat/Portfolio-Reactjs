import React from "react";
import AboutImg from "../../assets/about.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="Skills"
      className="  text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">Skills</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4 md:grid-cols-2">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Client-Side
                </h1>
                <p className="text-sm md:text-md leading-tight">
                HTML, CSS, JavaScript, React, TypeScript, Bootstrap, Tailwind CSS and C
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Server-side
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Node.js, Express, MongoDB, PostgreSQL, MySQL, Python, RESTful APIs
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Development & Operations
                </h1>
                <p className="text-sm md:text-md leading-tight">
                 Git and Github
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;