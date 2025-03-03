import React, { useState, useRef, useEffect } from 'react';
import avatarImg from '../../assets/avatar.png';
import TextChange from '../TextChange';

const Home = () => {
  const [showPopover, setShowPopover] = useState(false); // State for showing the popover
  const popoverRef = useRef(null);

  // Close the popover if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setShowPopover(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='text-white flex flex-col md:flex-row w-full justify-between items-center md:items-start p-10 md:p-20'>
      {/* Left Section with Text */}
      <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
          <TextChange />
        </h1>
        <h2>Full Stack Developer</h2>
        <p className='text-sm md:text-2xl tracking-tight'>
          Passionate FullStack Developer with expertise in HTML, CSS, JavaScript, and React. Strong understanding of Node.js, MongoDB, and PostgreSQL. Skilled in creating responsive, dynamic web apps. Detail-oriented and thrives in collaborative, fast-paced environments.
        </p>
        {/* Contact Me Button */}
        <button
          className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'
          onClick={() => setShowPopover(true)} // Trigger popover visibility
        >
          Contact Me
        </button>
      </div>

      {/* Right Section with Image */}
      <div className="flex justify-center md:justify-start mt-10 md:mt-0">
        <img
          className="h-[450px] w-70 object-cover rounded-full"
          src={avatarImg}
          alt="Alok's Avatar"
        />
      </div>

      {/* Popover */}
      {showPopover && (
        <div
          ref={popoverRef}
          className='absolute top-16 right-10 bg-black text-white p-4 rounded-lg shadow-md w-72'
        >
          <h3 className='font-bold'>Contact Information</h3>
          <p>Email: alokbhanawat@gmail.com</p>
          <p>Phone: +91 7597595146</p>
          <p>Location: Udaipur, Rajasthan</p>
          <button
            onClick={() => setShowPopover(false)} // Close the popover
            className='mt-2 bg-red-600 px-3 py-1 rounded text-white'
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
