import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaUserAlt, FaLaptopCode, FaTools, FaBriefcase, FaPhone, FaSignInAlt } from 'react-icons/fa'; // Import icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Header */}
      <header className='fixed top-0 left-0 right-0 flex justify-between bg-black text-white h-12 z-50'>
        <h1 className='mt-4 ml-2 font-semibold'>My Portfolio</h1>
        
        {/* Desktop and Large screen menu */}
        <ul className='hidden lg:flex space-x-5 mr-16 font-semibold mt-4'>
          <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
          <li><Link to="/ScreenAbout" className="hover:text-orange-500">About Me</Link></li>
          <li><Link to="/Screenprojects" className="hover:text-orange-500">Projects</Link></li>
          <li><Link to="/ScreenSkills" className="hover:text-orange-500">My Skills</Link></li>
          <li><Link to="/expriences" className="hover:text-orange-500">My Experiences</Link></li>
          <li><Link to="/contectPage" className="hover:text-orange-500">Contact Me</Link></li>
          <li><Link to="/login" className="hover:text-orange-500">Login</Link></li>
        </ul>

        {/* Mobile and Medium screen menu (Icons only) */}
        <ul className={`flex space-x-5 mr-16 font-semibold mt-4 lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li><Link to="/" className="hover:text-orange-500 flex items-center"><FaHome /> </Link></li>
          <li><Link to="/ScreenAbout" className="hover:text-orange-500 flex items-center"><FaUserAlt /> </Link></li>
          <li><Link to="/Screenprojects" className="hover:text-orange-500 flex items-center"><FaLaptopCode /> </Link></li>
          <li><Link to="/ScreenSkills" className="hover:text-orange-500 flex items-center"><FaTools /> </Link></li>
          <li><Link to="/expriences" className="hover:text-orange-500 flex items-center"><FaBriefcase /> </Link></li>
          <li><Link to="/contectPage" className="hover:text-orange-500 flex items-center"><FaPhone /> </Link></li>
          <li><Link to="/login" className="hover:text-orange-500 flex items-center"><FaSignInAlt /> </Link></li>
        </ul>

        {/* Mobile Menu Icon (Hamburger) */}
        <button className='lg:hidden mt-4 mr-4' onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
        </button>
      </header>

      {/* Mobile view with text links */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bg-black text-white py-4 px-4 space-y-4 font-semibold">
          <ul>
            <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link to="/ScreenAbout" className="hover:text-orange-500">About Me</Link></li>
            <li><Link to="/Screenprojects" className="hover:text-orange-500">Projects</Link></li>
            <li><Link to="/ScreenSkills" className="hover:text-orange-500">My Skills</Link></li>
            <li><Link to="/expriences" className="hover:text-orange-500">My Experiences</Link></li>
            <li><Link to="/contectPage" className="hover:text-orange-500">Contact Me</Link></li>
            <li><Link to="/login" className="hover:text-orange-500">Login</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
