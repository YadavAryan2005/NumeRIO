import React from "react";
import logo from "./assets/asset 28.svg";
import Newsletter1 from "./assets/asset 35.svg";
function Footer() {
  return (
    <div className='relative w-full'>
      <div className='overflow-hidden h-[240px]'>
        <img
          src={Newsletter1}
          alt='Sample'
          className='object-cover w-full h-full absolute inset-0 '
        />
      </div>
      <div className='p-5 absolute justify-end items-center flex flex-col  inset-0 max-w-7xl mx-auto bg-opacity-50 '>
        <div className='flex flex-col justify-center items-center'>
          <img src={logo} alt='logo' />
          
        </div>
        <hr className="border-1 border-slate-300 w-full my-2"></hr>
        <div className='w-full justify-center items-center flex flex-col md:flex-row-reverse md:justify-between'>
          <ul className='flex flex-col sm:flex-row sm:flex-nowrap xl:gap-10 md:gap-6 text-slate-500 font-serif text-center '>
            <li className='hover:text-red-600 cursor-pointer'>Services</li>
            <li className='hover:text-red-600 cursor-pointer'>About</li>
            <li className='hover:text-red-600 cursor-pointer'>Steps</li>
            <li className='hover:text-red-600 cursor-pointer'>Price</li>
            <li className='hover:text-red-600 cursor-pointer'>Testimonials</li>
            <li className='hover:text-red-600 cursor-pointer'>Blog</li>
          </ul>
          <h1>©All rights reserved. Numerio 2021</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
