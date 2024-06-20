import React from "react";
import Newsletter2 from "./assets/asset 21.svg";
import Newsletter1 from "./assets/asset 35.svg";
function Newsletter() {
  return (
    <div className='relative w-full sm:-top-40 '>
      <div className='overflow-hidden h-[640px]'>
        <img
          src={Newsletter1}
          alt='Sample'
          className='object-cover w-full h-full absolute inset-0 '
        />
      </div>
      <div className='p-5 absolute  inset-0 flex items-center justify-center max-w-7xl mx-auto bg-opacity-50 flex flex-wrap-reverse sm:flex-nowrap'>
        <div className="w-full md:w-1/2'">
          <h1 className='mt-2 text-4xl font-serif font-bold text-blue-900'>
            Newsletter
          </h1>
          <p className='mt-6 text-lg text-gray-500'>
            Pariatur magna cupidatat magna sit incididunt non pariatur. Sint
            nulla commodo qui magna eiusmod quis aliqua laboris official
            excepteur non eu in.
          </p>
          <div className='flex flex-col md:flex-row gap-6'>
            <input
              type='text'
              placeholder='Enter your email'
              className='w-full rounded-full text-xl border-2  px-5 py-3'
            />
            <button
              className='gradient-hover w-full md:w-auto px-5 rounded-full text-xl text-white font-bold py-3 '
              onClick={() => {
                // Handle subscribe button click
                console.log("Subscribe clicked");
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
        <img src={Newsletter2} alt='Sample' className="w-full sm:w-1/2'" />
      </div>
    </div>
  );
}

export default Newsletter;
