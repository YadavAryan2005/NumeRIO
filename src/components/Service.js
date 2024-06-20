import React from "react";
import "../App.css";
import service3 from "./assets/asset 0.svg";
import service4 from "./assets/asset 1.svg";
import service5 from "./assets/asset 2.svg";
import service1 from "./assets/asset 29.svg";
import service2 from "./assets/asset 30.svg";
function Service() {
  return (
    <>
      <div className='pt-20'>
        <img className='absolute object-cover' src={service1} alt='service1' />
        <img className='absolute object-cover' src={service2} alt='service1' />
        <div className='min-w-[320px] max-w-[1220px] px-5 md:px-16 mx-auto relative w-full py-0 sm:py-10 md:py-20 flex flex-col gap-2'>
          <ul className='text-red-500 text-sm'>
            <li>BE SURE</li>
          </ul>
          <span className='text-blue-800 text-4xl md:text-7xl font-bold font-serif'>
            Your Success Is <br></br>In Our Hands
          </span>
          <span className='text-slate-500 text-lg'>
            Agency with 12 years of history, 15 employees,<br></br>Fortune 5000
            clients and proven results.
          </span>
          <button class='w-44 mt-0 md:mt-20 overflow-hidden py-4 px-4 rounded-3xl gradient-hover'>
            Learn More
          </button>
        </div>
      </div>
      <div className='px-5 relative mt-20 md:mt-44 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mx-auto max-w-7xl justify-center item-center'>
        <div className=' bg-white shadow-lg p-5 rounded-md'>
          <div className='flex flex-col justify-center items-center text-center'>
            <img src={service3} alt='' />
            <h1 className='font-bold text-blue-900 sm:text-xl'>
              SEO Consultancy
            </h1>
            <p className='text-slate-500 text-sm sm:text-base'>
              Dolor enim dolor labore velit nulla sit exercitation proident esse
              culpa commodo n irure esse velit commodo
            </p>
          </div>
        </div>
        <div className=' bg-white shadow-lg p-5 rounded-md relative sm:-top-10'>
          <div className='flex flex-col justify-center items-center text-center'>
            <img src={service4} alt='' />
            <h1 className='font-bold text-blue-900 sm:text-xl  '>
              Site Optimization
            </h1>
            <p className='text-slate-500 text-sm sm:text-base'>
              Voluptate in sunt commodo aute do. Dolor enim dolor labore velit
              nulla sit exetion irure esse proid
            </p>
          </div>
        </div>
        <div className=' bg-white shadow-lg p-5 rounded-md'>
          <div className='flex flex-col justify-center items-center text-center'>
            <img src={service5} alt='' />
            <h1 className='font-bold text-blue-900 sm:text-xl '>
              Page Rankings
            </h1>
            <p className='text-slate-500 text-sm sm:text-base'>
              Dolor enim dolor labore velit nulla sit exercitation proident esse
              culpa commodo n irure esse velit commodo
            </p>
          </div>
        </div>
        <div className=' bg-white shadow-lg p-5 rounded-md relative sm:-top-10'>
          <div className='flex flex-col justify-center items-center text-center'>
            <img src={service5} alt='' />
            <h1 className='font-bold text-blue-900 sm:text-xl '>
              User Retention
            </h1>
            <p className='text-slate-500 text-sm sm:text-base'>
              Voluptate in sunt commodo aute do. Dolor enim dolor labore velit
              nulla sit exetion irure esse proid
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
