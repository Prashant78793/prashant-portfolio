import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [navBg, setNavBg] = useState('bg-black');
  const [menuOpen, setMenuOpen] = useState(false);

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
    <nav className={`${navBg} text-white fixed top-0 left-0 w-full px-6 md:px-16 lg:px-24 transition-all duration-300 z-50`}>
      <div className='container py-4 flex justify-between items-center'>
        <div className='text-2xl font-bold'>Portfolio</div>
        
        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About</a>
          <a href="#projects" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
        
        <button className='hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105'>
          Connect Me
        </button>
        
        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden absolute top-16 left-0 w-full bg-gray-900 shadow-lg flex flex-col items-center py-4 space-y-4'>
          <a href="#home" className='hover:text-gray-400' onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className='hover:text-gray-400' onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" className='hover:text-gray-400' onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" className='hover:text-gray-400' onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
