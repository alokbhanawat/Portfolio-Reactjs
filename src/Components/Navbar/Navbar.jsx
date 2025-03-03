import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [menu, openMenu] = useState(false); // Controls the visibility of the menu items
  const [showmenu, setmenu] = useState(true); // Controls whether the hamburger menu or close icon is displayed
  const [showPopover, setShowPopover] = useState(false); // State for popover visibility
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
    <nav className='flex flex-wrap justify-between text-white md:items-center px-10 pt-6 md:px-20'>
      <span className='text-xl font-bold tracking-wide'>Portfolio</span>
      
      {/* Menu items (hidden by default on mobile and shown when the menu state is true) */}
      <ul
        className={`${
          menu ? 'block' : 'hidden'
        } absolute right-0 top-16 bg-black text-white p-4 rounded-lg shadow-md w-64 md:w-auto md:static md:flex gap-6 md:gap-10 md:bg-transparent  md:p-0`}
      >
        <a href='#Skills' className='text-md transition-all duration-300 p-2 md:p-0'>
          <li>Skills</li>
        </a>
        <a href='#Experiences' className='text-md transition-all duration-300 p-2 md:p-0'>
          <li>Experiences</li>
        </a>
        <a href='#Projects' className='text-md transition-all duration-300 p-2 md:p-0'>
          <li>Projects</li>
        </a>
        {/* Contact link with onClick to show popover */}
        <a
          onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            setShowPopover(true); // Show the popover
          }}
          className='text-md transition-all duration-300 p-2 md:p-0 cursor-pointer'
        >
          <li>Contact</li>
        </a>
      </ul>

      {/* Menu icon */}
      {showmenu ? (
        <RiMenu2Line
          size={30}
          className='md:hidden absolute right-10 top-6 transition-all duration-300'
          onClick={() => {
            openMenu(true);  // Open the menu
            setmenu(false);  // Show the close button
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className='md:hidden absolute right-10 top-6 transition-all duration-300'
          onClick={() => {
            openMenu(false);  // Close the menu
            setmenu(true);    // Show the menu icon again
          }}
        />
      )}

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
            onClick={() => setShowPopover(false)}
            className='mt-2 bg-red-600 px-3 py-1 rounded text-white'
          >
            Close
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
