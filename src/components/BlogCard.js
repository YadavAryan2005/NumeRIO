// BlogCard component
import React from "react";
import BlogCard1 from "./assets/asset 24.jpeg";
import BlogCard2 from "./assets/asset 26.jpeg";
const BlogCard = (props) => {
  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform '>
      <div className='relative overflow-hidden'>
        <img
          src={props.image}
          alt='Blog'
          className='w-full  object-cover transition-transform duration-500 hover:scale-110'
        />
      </div>
      <div className='p-4'>
        <div className='pb-4 text-gray-500 text-xs flex items-center space-x-2'>
          <span>Jun 25, 2021</span>
          <span className='font-bold'>&middot;</span>
          <span>Annette Black</span>
          <span className='font-bold'>&middot;</span>
          <span>Community</span>
        </div>
        <hr></hr>
        <h3 className='mt-2 text-lg font-semibold transition-colors duration-300 hover:text-red-500'>
          Dolor Duis Voluptate Enim Exercitation Consequat Ex. Voluptate In Sunt
        </h3>
      </div>
    </div>
  );
};

const BlogList = () => {
  return (
    <div className='container max-w-7xl mx-auto px-4'>
      <div className='text-center mb-8'>
        <h1 className='text-base text-red-600 font-semibold tracking-wide uppercase'>
          News
        </h1>
        <h2 className='text-3xl font-bold text-blue-900'>Read Our Blog</h2>
        <p className='text-gray-600'>
          Dolor duis voluptate enim exercitation consequat ex.
        </p>
        <button className='gradient-hover mt-4 px-4 py-2  text-white rounded-full hover:bg-pink-600'>
          View All
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 flex flex-wrap '>
        <BlogCard image={BlogCard1} />
        <BlogCard image={BlogCard2} />
      </div>
    </div>
  );
};

export default BlogList;
