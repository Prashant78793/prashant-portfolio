import React from 'react';
import PrashantImage from '../assets/prashant.png';

const Home = () => {
  return (
    <div className='bg-gradient-to-r from-gray-900 to-black text-white flex flex-col md:flex-row items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 h-screen'>
      {/* Left Section - Image & Introduction */}
      <div className='md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left'>
        <img 
          src={PrashantImage} 
          alt='Prashant Kumar' 
          className='w-44 sm:w-52 md:w-56 h-44 sm:h-52 md:h-56 rounded-full object-cover transform transition-transform duration-300 hover:scale-105 mb-4 sm:mb-6'
        />
        <p className='text-sm sm:text-base md:text-lg text-gray-300 max-w-md'>
          Passionate about crafting immersive web experiences, I specialize in the MERN stack to develop dynamic and scalable applications. With a strong foundation in front-end and back-end technologies, I thrive on solving complex problems and optimizing performance. Let’s build something amazing together!
        </p>
      </div>
      
      {/* Right Section - Content */}
      <div className='md:w-1/2 text-center md:text-left mt-6 md:mt-0'>
        <h1 className='text-3xl sm:text-4xl font-bold'>
          I'm {' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Prashant Kumar</span>,
          Full-Stack Developer
        </h1>
        <p className='mt-3 sm:mt-4 text-sm sm:text-lg text-gray-300'>
          I specialize in building modern and responsive web applications using the MERN stack.
        </p>
        <div className='mt-6 sm:mt-8 flex flex-col sm:flex-row items-center sm:space-x-4 space-y-3 sm:space-y-0'>
          <button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-5 py-3 sm:px-6 rounded-full'
          >
            Contact With Me
          </button>
          <a 
            href='https://drive.google.com/file/d/1KOcrWpBgFoDtlPKSmy8okGwgSGk2VtZx/view?usp=sharing' 
            target='_blank' 
            rel='noopener noreferrer'
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-5 py-3 sm:px-6 rounded-full inline-block'
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

