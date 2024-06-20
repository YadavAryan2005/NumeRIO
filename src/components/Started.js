import React, { useState } from "react";
import Started1 from "./assets/asset 11.svg";
import Started3 from "./assets/asset 12.svg";
import Started4 from "./assets/asset 13.svg";
import Started5 from "./assets/asset 14.svg";
import Started6 from "./assets/asset 15.svg";
import Started7 from "./assets/asset 16.svg";
import Started2 from "./assets/asset 33.svg";

const Started = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    let newErrors = { ...errors };

    if (name === "email") {
      if (validateEmail(value)) {
        delete newErrors.email;
      } else {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (name === "phone") {
      if (validatePhone(value)) {
        delete newErrors.phone;
      } else {
        newErrors.phone = "Please enter a valid phone number";
      }
    }

    if (name === "firstName") {
      if (value.length < 1) {
        newErrors.firstName = "Please enter your first name";
      } else {
        delete newErrors.firstName;
      }
    }

    if (name === "secondName") {
      if (value.length < 1) {
        newErrors.secondName = "Please enter your second name";
      } else {
        delete newErrors.secondName;
      }
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (formData.firstName.length < 1) {
      newErrors.firstName = "Please enter your first name";
    }
    if (formData.secondName.length < 1) {
      newErrors.secondName = "Please enter your second name";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit the form
      console.log("Form submitted successfully", formData);
    }
  };

  const getInputClassName = (field) => {
    if (errors[field]) {
      return "border-red-500";
    } else if (formData[field]) {
      return "border-green-500";
    } else {
      return "border-gray-500";
    }
  };

  return (
    <>
      <div className='relative w-full -top-16'>
        <div className='overflow-hidden h-[740px]'>
          <img
            src={Started2}
            alt='Sample'
            className='object-cover w-full h-full absolute inset-0 -top-10 '
          />
        </div>
        <div className='p-5 absolute overflow-hidden inset-0 flex items-center justify-center max-w-7xl mx-auto bg-opacity-50 flex flex-wrap-reverse sm:flex-nowrap'>
          <div className='w-full md:w-1/2 p-6'>
            <form onSubmit={handleSubmit}>
              <h1 className='text-base text-red-600 font-serif font-semibold tracking-wide uppercase'>
                GET STARTED
              </h1>
              <h1 className='mt-2 text-4xl font-serif font-bold text-blue-900'>
                Get A Free Consultation
              </h1>
              <p className='mt-6 md:text-lg text-gray-500'>
                Dolor duis voluptate enim exercitation consequat ex. Voluptate
                in sunt commodo aute dolor enim dolor labore velit nul.
              </p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 py-5'>
                <div className='relative'>
                  <input
                    type='text'
                    name='firstName'
                    placeholder='First name'
                    className={`border-2 outline-none rounded-full p-2 w-full ${getInputClassName(
                      "firstName"
                    )}`}
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <p className='text-red-500 text-sm absolute -bottom-6 left-0'>
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className='relative'>
                  <input
                    type='text'
                    name='secondName'
                    placeholder='Second name'
                    className={`border-2 outline-none rounded-full p-2 w-full ${getInputClassName(
                      "secondName"
                    )}`}
                    value={formData.secondName}
                    onChange={handleChange}
                  />
                  {errors.secondName && (
                    <p className='text-red-500 text-sm absolute -bottom-6 left-0'>
                      {errors.secondName}
                    </p>
                  )}
                </div>

                <div className='relative'>
                  <input
                    type='text'
                    name='phone'
                    placeholder='Enter your phone'
                    className={`border-2 outline-none rounded-full p-2 w-full ${getInputClassName(
                      "phone"
                    )}`}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <p className='text-red-500 text-sm absolute -bottom-6 left-0'>
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div className='relative'>
                  <input
                    type='text'
                    name='email'
                    placeholder='Enter your email'
                    className={`border-2 outline-none rounded-full p-2 w-full ${getInputClassName(
                      "email"
                    )}`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className='text-red-500 text-sm absolute -bottom-6 left-0'>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className='flex flex-col md:flex-row gap-6'>
                <button
                  type='submit'
                  className='px-7 gradient-hover text-white font-bold rounded-full'
                >
                  Submit
                </button>
                <div className='flex items-center space-x-3 py-5'>
                  <input
                    type='checkbox'
                    className='form-checkbox h-5 w-5 text-blue-600'
                  />
                  <span className='text-gray-900'>
                    I accept the{" "}
                    <span className='text-red-500'>Terms and Conditions.</span>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <img src={Started1} alt='Sample' className='w-full sm:w-1/2 p-10 ' />
        </div>
        <div className='hidden sm:flex relative flex flex-wrap md:flex-nowrap gap-8 mx-auto max-w-7xl justify-center item-center'>
          <div className='bg-white shadow-lg p-5'>
            <img src={Started3} alt='' />
          </div>
          <div className='bg-white shadow-lg p-5 relative -top-5'>
            <img src={Started4} alt='' />
          </div>
          <div className='bg-white shadow-lg p-5'>
            <img src={Started5} alt='' />
          </div>
          <div className='bg-white shadow-lg p-5 relative -top-5'>
            <img src={Started6} alt='' />
          </div>
          <div className='bg-white shadow-lg p-5'>
            <img src={Started7} alt='' />
          </div>
        </div>
      </div>
      <div className='sm:hidden relative flex flex-wrap md:flex-nowrap gap-8 mx-auto max-w-7xl justify-center item-center'>
        <div className='bg-white shadow-lg p-5'>
          <img src={Started3} alt='' />
        </div>
        <div className='bg-white shadow-lg p-5 relative -top-5'>
          <img src={Started4} alt='' />
        </div>
        <div className='bg-white shadow-lg p-5'>
          <img src={Started5} alt='' />
        </div>
        <div className='bg-white shadow-lg p-5 relative -top-5'>
          <img src={Started6} alt='' />
        </div>
        <div className='bg-white shadow-lg p-5 123'>
          <img src={Started7} alt='' />
        </div>
      </div>
    </>
  );
};

export default Started;
