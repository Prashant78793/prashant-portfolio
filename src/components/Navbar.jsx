import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [navBg, setNavBg] = useState('bg-black');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBg('bg-gray-900 shadow-lg');
      } else {
        setNavBg('bg-black');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${navBg} text-white fixed top-0 left-0 w-full px-8 md:px-16 lg:px-24 transition-all duration-300 z-50`}>
      <div className='container py-4 flex justify-between items-center'>
        <div className='text-2xl font-bold'>Portfolio</div>
        <div className='space-x-6'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hidden md:inline transform transition-transform duration-300 hover:scale-105'>
          Connect Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
