import React from "react";
import "../App.css";
const Pricing = () => {
  return (
    <div className='py-12 bg-white '>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>
          Prices
        </h2>
        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-900 sm:text-4xl'>
          Discover Our Price - List
        </p>
        <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
          Dolor duis voluptate enim exercitation consequat ex.
        </p>
        <div className='mt-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center md:items-center'>
          <div className='aryan relative flex flex-col items-center  p-6 rounded-lg shadow-xl'>
            <div className='a w-full h-1/2 absolute bg-slate-50 hover:bg-blue-50 rounded-b-full'></div>
            <h3 className='z-20 text-sm font-semibold text-red-600   uppercase tracking-wide'>
              Simple
            </h3>
            <p className=' z-20 mt-4 text-4xl font-extrabold text-gray-900'>
              $<sachin className='b'>69.95</sachin>
            </p>
            <p className=' z-20 text-gray-500'>/Per Month</p>
            <ul className='z-20 mt-6 space-y-4'>
              <li className='z-20 text-gray-600'>Monthly Progress Report</li>
              <li className='z-20 text-gray-600'>Ad Campaign Management</li>
              <li className='z-20 text-gray-600'>Business Page Optimization</li>
              <li className='z-20 text-gray-600'>Copywriter & Visual Design</li>
            </ul>
            <div className='w-full flex justify-center'>
              <button className='mt-8 c bg-slate-300 text-blue-700  py-2 px-4 rounded-full hover:bg-blue-700 hover:text-white transition duration-300 '>
                Buy Now
              </button>
            </div>
          </div>
          <div className='aryan relative flex flex-col items-center  p-6 rounded-lg shadow-md'>
            <div className='a w-full h-1/2 absolute bg-slate-50 hover:bg-blue-50 rounded-b-full'></div>
            <h3 className=' z-20 text-sm font-semibold text-red-600 uppercase tracking-wide'>
              Medium
            </h3>
            <p className=' z-20 mt-4 text-4xl font-extrabold text-gray-900'>
              $<sachin className='b'>89.95</sachin>
            </p>
            <p className='text-gray-500 z-20 '>/Per Month</p>
            <ul className='mt-6 space-y-4 z-20 '>
              <li className='text-gray-600'>Basic Plan</li>
              <li className='text-gray-600'>Ad Campaign Management</li>
              <li className='text-gray-600'>Business Page Optimization</li>
              <li className='text-gray-600'>Copywriter & Visual Design</li>
              <li className='text-gray-600'>Monthly Progress Report</li>
              <li className='text-gray-600'>Social Media Listening</li>
            </ul>
            <div className='w-full flex justify-center'>
              <button className='mt-8 c bg-slate-300 text-blue-700  py-2 px-4 rounded-full hover:bg-blue-700 hover:text-white transition duration-300 '>
                Buy Now
              </button>
            </div>
            <div class='flex items-center space-x-3 py-5'>
              <input
                type='checkbox'
                class='form-checkbox h-5 w-5 text-blue-600'
                checked
              />
              <span class='text-gray-900'>Recommended</span>
            </div>
          </div>
          <div className=' aryan relative flex flex-col items-center  p-6 rounded-lg shadow-md'>
            <div className='a w-full h-1/2 absolute bg-slate-50 hover:bg-blue-50 rounded-b-full'></div>
            <h3 className='z-20 text-sm font-semibold text-pink-600 uppercase tracking-wide'>
              Extended
            </h3>
            <p className='z-20 mt-4 text-4xl font-extrabold text-gray-900'>
              $<sachin className='b'>99.95</sachin>
            </p>
            <p className='z-20 text-gray-500'>/Per Month</p>
            <ul className='z-20 mt-6 space-y-4'>
              <li className='text-gray-600'>Monthly Progress Report</li>
              <li className='text-gray-600'>Ad Campaign Management</li>
              <li className='text-gray-600'>Business Page Optimization</li>
              <li className='text-gray-600'>Copywriter & Visual Design</li>
            </ul>
            <div className='w-full flex justify-center'>
              <button className='mt-8 c bg-slate-300 text-blue-700  py-2 px-4 rounded-full hover:bg-blue-700 hover:text-white transition duration-300 '>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
