// src/components/About.js

import React from "react";
import About6 from "./assets/asset 10.svg";
import About1 from "./assets/asset 2.svg";
import About2 from "./assets/asset 6.svg";
import About3 from "./assets/asset 7.svg";
import About4 from "./assets/asset 8.svg";
import About5 from "./assets/asset 9.svg";

const About = () => {
  return (
    <div className='bg-white p-10 min-w-[320px] max-w-[1220px] md:px-16 mx-auto  w-full py-20 flex flex-col gap-2'>
      <div className='text-center mb-10'>
        <h2 className='text-red-500 uppercase text-sm mb-2'>What We Do</h2>
        <h1 className='text-4xl  text-gray-800 mb-4 font-serif text-blue-700'>
          What You Will Get With Us
        </h1>
        <p className='text-gray-600'>
          Dolor duis voluptate enim exercitation consequat ex.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        <div className='bg-white p-6 rounded-lg shadow-md '>
          <h3 className='text-xl text-blue-700 flex justify-start items-center font-bold text-gray-800 mb-2'>
            <img src={About1} alt='About1' className='w-14' />
            Research & Analysis
          </h3>
          <p className='text-gray-600'>
            Dolor duis voluptate enim exercitation consequat ex. Voluptate in
            sunt commodo aute do.
          </p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-blue-700 text-xl flex justify-start items-center  font-bold text-gray-800 mb-2'>
            <img src={About2} alt='About2' className='w-14' />
            Unique Content
          </h3>
          <p className='text-gray-600'>
            Voluptate in sim dolor labore velit nuunt commodo aute do. Dolor
            enim dolor labore im dolor labore velit te.
          </p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-blue-700 text-xl flex justify-start items-center  font-bold text-gray-800 mb-2'>
            <img src={About3} alt='About3' className='w-14' />
            Thematic Links
          </h3>
          <p className='text-gray-600'>
            Pariatur magna cupidatat magna sit incididunt non pariatur. Sint
            nulla commodo qui magna eiusmod.
          </p>
        </div>
        <div className='text-blue-700 bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-blue-700 text-xl  flex justify-start items-center  font-bold text-gray-800 mb-2'>
            <img src={About4} alt='About1' className='w-14' />
            Effective UX/UI Design
          </h3>
          <p className='text-gray-600'>
            Pariatur magna cupidatat magna sit incididunt non pariatur. Sint
            nulla commodo qui magna eiusmod.
          </p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-blue-700 text-blue-700 text-xl flex justify-start items-center  font-bold text-gray-800 mb-2'>
            <img src={About5} alt='About1' className='w-14' />
            Responsive & High Speed
          </h3>
          <p className='text-gray-600'>
            Dolor duis voluptate enim exercitation consequat ex. Voluptate in
            sunt commodo aute do.
          </p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-blue-700 text-xl flex justify-start items-center  font-bold text-gray-800 mb-2'>
            <img src={About6} alt='About1' className='w-14' />
            Quality & Valid Code
          </h3>
          <p className='text-gray-600'>
            Voluptate in sim dolor labore velit nuunt commodo aute do. Dolor
            enim dolor labore im dolor labore velit te.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
