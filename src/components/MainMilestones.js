import React from "react";
import step1 from "./assets/asset 17.svg";
import step2 from "./assets/asset 18.svg";
import step3 from "./assets/asset 19.svg";
import step4 from "./assets/asset 20.svg";
const MainMilestones = () => {
  return (
    <div className='py-12 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>
          Steps
        </h2>
        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-900 sm:text-4xl'>
          Main Milestones
        </p>
        <div className='mt-10 grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='flex justify-center items-center '>
            <h1 className='absolute text-7xl md:text-8xl font-bold text-slate-300'>
              01
            </h1>
            <div className='flex flex-col flex-wrap items-center'>
              <div className='p-4 rounded-full'>
                <img src={step1} alt='Planning' className='z-20 relative' />
              </div>
              <h3 className='mt-4 text-lg font-medium text-gray-900'>
                Planning
              </h3>
            </div>
          </div>
          <div className='flex justify-center items-center '>
            <h1 className='absolute text-7xl md:text-8xl font-bold text-slate-300'>
              02
            </h1>
            <div className='flex flex-col flex-wrap items-center'>
              <div className='p-4 rounded-full'>
                <img src={step2} alt='Planning' className='z-20 relative' />
              </div>
              <h3 className='mt-4 text-lg font-medium text-gray-900'>
                Research
              </h3>
            </div>
          </div>
          <div className='flex justify-center items-center '>
            <h1 className='absolute text-7xl md:text-8xl font-bold text-slate-300'>
              03
            </h1>
            <div className='flex flex-col flex-wrap items-center'>
              <div className='p-4 rounded-full'>
                <img src={step3} alt='Planning' className='z-20 relative' />
              </div>
              <h3 className='mt-4 text-lg font-medium text-gray-900'>
                Optimization
              </h3>
            </div>
          </div>
          <div className='flex justify-center items-center '>
            <h1 className='absolute text-7xl md:text-8xl  font-bold text-slate-300'>
              04
            </h1>
            <div className='flex flex-col flex-wrap items-center'>
              <div className='p-4 rounded-full'>
                <img src={step4} alt='Planning' className='z-20 relative' />
              </div>
              <h3 className='mt-4 text-lg font-medium text-gray-900'>
                results
              </h3>
            </div>
          </div>
        </div>
        <p className='w-full mt-2 md:px-10 text-center text-base text-gray-500 font-serif my-5 md:my-10 '>
          PARIATUR MAGNA CUPIDATAT MAGNA SIT INCIDIDUNT NON PARIATUR. SINT NULLA
          COMMODO QUI MAGNA EIUSMOD QUIS ALIQUA LABORIS OFFICIA EXCEPTEUR NON
          EUi IN. CONSEQUAT ESSE IN LABORUM DOLORE UT DUIS ELIT DESERUNT MINIM.
        </p>
      </div>
    </div>
  );
};
export default MainMilestones;
