import React from 'react';
import PrashantImage from '../assets/prashant.png';

const Home = () => {
  return (
    <div className='bg-gradient-to-r from-gray-900 to-black text-white flex flex-col md:flex-row items-center justify-center md:space-x-14 px-8 md:px-16 lg:px-24 h-screen'>
      {/* Left Section - Image & Introduction */}
      <div className='md:w-1/2 flex flex-col items-center text-center md:text-left'>
        <img 
          src={PrashantImage} 
          alt='Prashant Kumar' 
          className='w-56 h-56 rounded-full object-cover transform transition-transform duration-300 hover:scale-105 mb-6'
        />
        <p className='text-lg text-gray-300 max-w-md'>
          Passionate about crafting immersive web experiences, I specialize in the MERN stack to develop dynamic and scalable applications. With a strong foundation in front-end and back-end technologies, I thrive on solving complex problems and optimizing performance. I am dedicated to staying updated with the latest industry trends and best practices to deliver high-quality, efficient solutions. Let’s build something amazing together!
        </p>
      </div>
      
      {/* Right Section - Content */}
      <div className='md:w-1/2 text-center md:text-left'>
        <h1 className='text-4xl font-bold'>
          I'm {' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Prashant Kumar</span>,
          Full-Stack Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
          I specialize in building modern and responsive web applications using the MERN stack.
        </p>
        <div className='mt-8 space-x-4'>
          <button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full'
          >
            Contact With Me
          </button>
          <a 
            href='https://drive.google.com/file/d/1KOcrWpBgFoDtlPKSmy8okGwgSGk2VtZx/view?usp=sharing' 
            target='_blank' 
            rel='noopener noreferrer'
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full inline-block'
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

