import React from "react";
import Testimonial1 from "./assets/asset 22.svg";
import Testimonial2 from "./assets/asset 23.jpeg";
const Testimonial = () => {
  return (
    <div className='bg-white py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between flex-wrap sm:flex-nowrap gap-8'>
          <div className='w-full sm:w-1/2'>
            <img
              className='w-full h-auto'
              src={Testimonial1}
              alt='Testimonial Illustration'
            />
          </div>
          <div className='w-full md:w-1/2'>
            <h3 className='text-sm text-red-600 font-semibold uppercase tracking-wide'>
              They Say
            </h3>
            <h2 className='mt-2 text-3xl font-extrabold text-gray-900'>
              Testimonials
            </h2>
            <blockquote className='mt-6 text-lg text-gray-500'>
              <p>
                “Dolor duis voluptate enim exercitation consequat ex. Voluptate
                in sunt commodo aute do. Dolor enim dolor labore velit nulla sit
                exercitation irure esse proident.”
              </p>
            </blockquote>
            <div className='mt-6 flex items-center'>
              <img
                className='h-12 w-12 rounded-full object-cover'
                src={Testimonial2}
                alt='User'
              />
              <div className='ml-4'>
                <p className='text-base font-medium text-gray-900'>
                  Kathryn Murphy
                </p>
                <p className='text-base font-medium text-indigo-600'>
                  Marketing Coordinator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
