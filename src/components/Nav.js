import React, { useState } from "react";
import logo from "./assets/asset 28.svg"; // Make sure to replace this with your logo path

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='fixed z-50 w-full flex justify-between items-center xl:px-14 px-8 py-5 bg-white shadow-md'>
      <img src={logo} alt='logo' className='h-10' />
      <div className='hidden md:flex items-center  text-md'>
        <ul className='flex xl:gap-10 md:gap-6 text-slate-500 font-serif '>
          <li className='hover:text-red-600 cursor-pointer'>Services</li>
          <li className='hover:text-red-600 cursor-pointer'>About</li>
          <li className='hover:text-red-600 cursor-pointer'>Steps</li>
          <li className='hover:text-red-600 cursor-pointer'>Price</li>
          <li className='hover:text-red-600 cursor-pointer'>Testimonials</li>
          <li className='hover:text-red-600 cursor-pointer'>Blog</li>
        </ul>
        <span className='ml-5 bg-blue-800 hover:bg-red-500 transition duration-400 cursor-pointer py-2 px-4 rounded-3xl text-white'>
          Get Started
        </span>
      </div>
      <div className='md:hidden flex items-center '>
        <span className='mr-4 bg-blue-800 hover:bg-red-500 transition duration-400 cursor-pointer py-2 px-4 rounded-3xl text-white'>
          Get Started
        </span>
        <button
          onClick={toggleMenu}
          className='flex flex-col gap-2 items-center justify-center h-6 w-6 focus:outline-none'
        >
          <hr className='w-full bg-black h-1'></hr>
          <hr className='w-full bg-black h-1'></hr>
          <hr className='w-full bg-black h-1'></hr>
        </button>
      </div>
      {menuOpen && (
        <div className='absolute z-20 top-16 left-0 w-full bg-white shadow-md md:hidden'>
          <ul className='flex flex-col items-center text-slate-500 font-serif py-5'>
            <li className='hover:text-red-600 cursor-pointer py-2'>Services</li>
            <li className='hover:text-red-600 cursor-pointer py-2'>About</li>
            <li className='hover:text-red-600 cursor-pointer py-2'>Steps</li>
            <li className='hover:text-red-600 cursor-pointer py-2'>Price</li>
            <li className='hover:text-red-600 cursor-pointer py-2'>
              Testimonials
            </li>
            <li className='hover:text-red-600 cursor-pointer py-2'>Blog</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
