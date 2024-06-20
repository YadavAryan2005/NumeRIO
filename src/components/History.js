// src/components/SuccessFuture.js

import React from "react";
import About1 from "./assets/asset 4.svg";
import trangle from "./assets/trangle.png";
const History = () => {
  return (
    <div className='bg-white p-10 rounded-lg  min-w-[320px] max-w-[1220px] md:px-16 mx-auto  w-full py-20 flex flex-col gap-2 '>
      <div className='flex flex-col md:flex-row items-center'>
        <div className='flex-1 flex flex-col items-center'>
          <img src={About1} alt='Success Graph' className='w-3/4 md:w-full' />
        </div>
        <div className='flex-1 mt-10 md:mt-0 md:ml-10 text-center md:text-left'>
          <h2 className='text-red-500 uppercase text-sm mb-2'>The History</h2>
          <h1 className='text-4xl font-bold text-gray-800 mb-4 text-blue-700 md:text-6xl'>
            Our Way To Successful Future
          </h1>
          <p className='text-gray-600 mb-6'>
            Sint nulla commodo qui magna eiusmod quis aliqua laboris officia
            excepteur non eu in. Dolor duis voluptate enim exercitation
            consequat ex. Voluptate in sunt commodo aute do. Dolor enim dolor
            labore velit nulla sit exercitation irure esse proident velit
            commodo. Est non officia proident esse culpa commodo nulla Lorem do
            enderit esse do.
          </p>
          <div className='flex justify-start'>
            <button className='flex justify-center items-center'>
              <div className='rounded-full bg-red-200 p-3 hover:p-5 m-5 hover:m-3'>
                <div className='w-10 h-10 rounded-full bg-red-600 flex justify-center items-center'>
                  <img className='w-7 rotate-90' src={trangle} alt='trangle' />
                </div>
              </div>
              <div>
                <h1 className=' text-red-600 font-bold flex'>ABOUT US</h1>
                <h2>Watch our process!</h2>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap justify-center items-center '>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-10'>
          <div className='text-center bg-slate-300 rounded-full h-32 w-32 justify-center flex flex-col'>
            <h3 className='text-2xl font-bold text-gray-800'>$ 35k+</h3>
            <p className='text-gray-500'>Clients Revenue</p>
          </div>
          <div className='flex text-center  bg-slate-300 rounded-full h-32 w-32 justify-center flex flex-col'>
            <h3 className='text-2xl font-bold text-gray-800'>16k+</h3>
            <p className='text-gray-500'>Leads for Clients</p>
          </div>
          <div className='flex text-center  bg-slate-300 rounded-full h-32 w-32 justify-center flex flex-col'>
            <h3 className='text-2xl font-bold text-gray-800'>6.7k+</h3>
            <p className='text-gray-500'>Phone Calls</p>
          </div>
          <div className='flex text-center bg-slate-300 rounded-full h-32 w-32 justify-center flex flex-col'>
            <h3 className='text-2xl font-bold text-gray-800'>254+</h3>
            <p className='text-gray-500'>Successful Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
