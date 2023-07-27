import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('');
  const links = [
    {
      id: 1,
      link: 'home',
      isActive: activeLink === 'home',
    },
    {
      id: 2,
      link: 'about',
      isActive: activeLink === 'about',
    },
    {
      id: 3,
      link: 'project',
      isActive: activeLink === 'project',
    },
    {
      id: 4,
      link: 'contact',
      isActive: activeLink === 'contact',
    },
  ];

  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 768) {
        setNav(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

  
    const storedActiveLink = localStorage.getItem('activeLink');
    setActiveLink(storedActiveLink || 'home');

   
    if (storedActiveLink && storedActiveLink !== 'home') {
      const element = document.getElementById(storedActiveLink);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const handleSetActiveLink = (link) => {
    setActiveLink(link);
    localStorage.setItem('activeLink', link);
  };

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className={`flex justify-between items-center w-full h-20 px-4 border-b border-gray-300 bg-white z-10 md:fixed relative top-0 left-0`}>
        <div>
          <h1 className='text-xl font-bold ml-2 cursor-pointer hover:scale-110 duration-200'>pranto</h1>
        </div>
        <ul className={`hidden md:flex ${nav ? 'hidden' : ''}`}>
          {links.map((link) => (
            <li
              key={link.id}
              className={`p-4 cursor-pointer capitalize font-semibold hover:scale-110 duration-200 ${link.isActive ? 'underline decoration-lime-400 decoration-4 underline-offset-8' : ''}`}
            >
              
              <Link to={link.link} smooth duration={500} offset={-20} onClick={() => handleSetActiveLink(link.link)}>
                {link.link}
              </Link>
            </li>
          ))}
        </ul>
        <div onClick={toggleNav} className='cursor-pointer pr-4 z-10 md:hidden'>
          {nav ? <i className="uil uil-times text-2xl"></i> : <i className="uil uil-bars text-2xl"></i>}
        </div>
      </div>
      {nav && <div className="w-full h-36 md:hidden" />}
      <ul className={`flex flex-col justify-center items-center absolute top-20 left-0 w-full md:hidden bg-white z-30 ${nav ? 'block' : 'hidden'}`}>
        {links.map((link) => (
          <li
            key={link.id}
            className={`px-4 cursor-pointer capitalize  hover:scale-110 duration-200 font-semibold py-2 ${link.isActive ? 'underline decoration-lime-400 decoration-4 underline-offset-8' : ''}`}
          >
           
            <Link to={link.link} smooth duration={500} offset={-20} onClick={() => handleSetActiveLink(link.link)}>
              {link.link}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavBar;
