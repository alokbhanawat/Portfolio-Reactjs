import React from 'react';
import ResumeFile from '../../assets/AlokBhanawatResume1.pdf'; // Path to your resume PDF file

const Resume = () => {
  return (
    <div className="bg-[#171d32] py-2 my-10">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-2">Download My Resume</h1>
        <p className="text-sm sm:text-base text-blue-200 mb-4">Click the button below to download my resume.</p>
        <a 
          href={ResumeFile} 
          download="Alok_Bhanawat_Resume.pdf" 
          className="px-4 py-2 bg-[#171d82] text-white rounded-lg hover:bg-black transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
