import React from "react";
import { SiPostgresql, SiSpringboot, SiSelenium, SiJenkins } from "react-icons/si";
import { FaCss3, FaHtml5, FaJs, FaReact, FaJava } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

// Company logo
import Nd from '../../assets/ND.png';

const Experience = () => {
  return (
    <div id="Experiences" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-8">Experience</h1>
      <div className="flex flex-wrap items-center justify-center md:justify-around">
        {/* Skills Icons Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:w-2/5 gap-6 md:p-12 py-10 justify-items-center">
          {/* NEW icons */}
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl mb-4">
            <FaJava color="#F89820" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl mb-4">
            <SiSpringboot color="#6DB33F" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl mb-4">
            <SiSelenium color="#43B02A" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl mb-4">
            <SiJenkins color="#D24939" size={50} />
          </span>

          {/* Existing icons */}
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl mb-4">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl mb-4">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl mb-4">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl mb-4">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl mb-4">
            <DiMysql color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl mb-4">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl mb-4">
            <SiPostgresql color="#FF4438" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl mb-4">
            <FaNode color="#E34F26" size={50} />
          </span>
        </div>

        {/* Experience Details Section (both cards same size) */}
        <div className="grid grid-cols-1 auto-rows-fr gap-4 w-full md:w-3/5 mt-4">

          {/* Infosys */}
          <div className="flex flex-col md:flex-row gap-6 bg-[#FFFF] bg-opacity-45 rounded-lg p-4 items-center w-full h-full">
            {/* Logo placeholder (replace with <img> later) */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white flex items-center justify-center mb-4 md:mb-0 shrink-0">
              <span className="text-[#007CC3] text-2xl font-bold">Infosys</span>
            </div>
            <span className="text-black text-center md:text-left">
              <h2 className="text-xl font-bold">Infosys</h2>
              <p className="text-sm leading-tight font-thin">
                Aug 2025 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Working as Software Engineer</li>
                <li>- Developing enterprise projects using Java and Spring Boot</li>
                <li>- Automating web applications using Selenium</li>
              </ul>
            </span>
          </div>

          {/* Ndimensions */}
          <div className="flex flex-col md:flex-row gap-6 bg-[#FFFF] bg-opacity-45 rounded-lg p-4 items-center w-full h-full">
            <img
              src={Nd}
              alt="Ndimensions Studio"
              className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-transparent mb-4 md:mb-0 shrink-0"
            />
            <span className="text-black text-center md:text-left">
              <h2 className="text-xl font-bold">Ndimensions Studio llp</h2>
              <p className="text-sm leading-tight font-thin">
                June 2024 - Oct 2024
              </p>
              <ul className="text-sm p-2">
                <li>- Work as Frontend Developer Intern</li>
                <li>- Worked On
                  <ul className="list-disc ml-4">
                    <li>
                      <a href="https://sulsaask.org/" target="_blank" rel="noopener noreferrer">
                        Sulsa Ask Foundation
                      </a>
                    </li>
                    <li>
                      <a href="https://battfit.com" target="_blank" rel="noopener noreferrer">
                        Battfit
                      </a>
                    </li>
                    <li>
                      <a href="https://yupiterhospital.com" target="_blank" rel="noopener noreferrer">
                        Yupiter Hospital
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;