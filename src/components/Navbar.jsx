import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router'
import profileImage from '../assets/images/image-avatar.jpg'
import sun from '../assets/images/icon-sun.svg'
import moon from '../assets/images/icon-moon.svg'
import menuIcon from '../assets/images/icon-menu.svg'
import menuCloseIcon from '../assets/images/icon-menu-close.svg'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('light');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    },[theme])

  return (
    <>
    <nav className=" max-w-[640px] mx-auto flex items-center justify-between border border-[#EFEDEB] shadow-sm shadow-[#EFEDEB] dark:shadow-[#34302D] dark:border-[#34302D] rounded-[10px] w-full min-h-[53px] px-[10px] mt-[20px] ">
      <img src={profileImage} alt="profile image" className="w-[40px] h-[40px] rounded-[8px]" />

      <div className="flex items-center gap-[20px]">
      <ul className="hidden md:flex gap-[25px]">
  <li>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? "dark:text-white text-[#34302D] border-b-2 border-[#75B0DE]" : " text-[#4A4846] dark:text-[#A39E9B]"
      }
    >
      Home
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/blog"
      className={({ isActive }) =>
        isActive ? "dark:text-white text-[#34302D] border-b-2 border-[#75B0DE]" : " text-[#4A4846] dark:text-[#A39E9B]"
      }
    >
      Blog
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/about"
      className={({ isActive }) =>
        isActive ? "dark:text-white text-[#34302D] border-b-2 border-[#75B0DE]" : " text-[#4A4846] dark:text-[#A39E9B]"
      }
    >
      About
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/newsletter"
      className={({ isActive }) =>
        isActive ? "dark:text-white text-[#34302D] border-b-2 border-[#75B0DE]" : " text-[#4A4846] dark:text-[#A39E9B]"
      }
    >
      Newsletter
    </NavLink>
  </li>
</ul>


        {/* Hamburger */}
        <div className="md:hidden">
        <button onClick={toggleMenu} className={`flex items-center justify-center rounded-[8px] w-[40px] h-[40px] ${isOpen ? 'bg-white' : 'bg-[#1C1A19]'}`}>
        {isOpen ? 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 5 5 15M5 5l10 10"/>
            </svg> : 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 10h15m-15-5h15m-15 10h15"/>
            </svg>}
        </button>

        </div>

        {/* Dark Mode */}
        <button className="flex items-center justify-center bg-[#FBF9F7] dark:bg-[#1C1A19] border border-[#EFEDEB] dark:border-[#34302D] w-[40px] h-[40px] rounded-[8px]" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? (
            <img src={sun} alt="sun" />) :
            (<img src={moon} alt="moon" />) 

          }
          
        </button>
      </div>
    </nav>

    {isOpen && (
      <div className="flex flex-col gap-3 mt-[12px] md:hidden border border-[#34302D] rounded-[10px] p-4 ">
        <NavLink to="/" onClick={toggleMenu} className={"border-b border-[#34302D] pb-[13px]"}>Home</NavLink>
        <NavLink to="/blog" onClick={toggleMenu} className={"border-b border-[#34302D] pb-[13px]"}>Blog</NavLink>
        <NavLink to="/about" onClick={toggleMenu} className={"border-b border-[#34302D] pb-[13px]"}>About</NavLink>
        <NavLink to="/newsletter" onClick={toggleMenu} >Newsletter</NavLink>
      </div>
    )}
  </>
  )
}

export default Navbar