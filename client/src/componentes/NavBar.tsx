import {useState} from 'react';

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="  text-white bg-BgPurple mx-auto p-6 w-full fixed top-0 left-0 z-10 shadow-custom-yellow rounded-b-3xl">
      <div className="flex items-center justify-between">

        <a href="/" className="md:pl-20">
          <img src="https://wissal-merabet-portfolio.netlify.app/assets/navBarLogo.png" alt="logo" className="object-cover w-30 h-10"/>
        </a>

        <ul className="hidden md:flex ml-14 space-x-12">
          <li><a href="#home"className="hover:text-bgYellow">Home</a></li>
          <li><a href="#about"className="hover:text-bgYellow">About</a></li>
          <li><a href="#skills"className="hover:text-bgYellow">Skills</a></li>
          <li><a href="#project"className="hover:text-bgYellow">Project</a></li>
          <li><a href="#contact"  className=" btn border-2 border-bgYellow text-bgYellow font-bold p-2 rounded-full  hover:bg-bgYellow hover:text-BgPurple">
              Contact Me
              </a>
          </li> 
        </ul>

        <FontAwesomeIcon
          icon={menuOpen ? faTimes : faBars}
          size="2x"
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-BgPurple p-7`}>
          <ul className="space-y-7">
            <li><a href="#home" className="hover:text-bgYellow" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="hover:text-bgYellow" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#skills" className="hover:text-bgYellow" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#project" className="hover:text-bgYellow" onClick={() => setMenuOpen(false)}>Project</a></li>
            <li><a href="#contact" className=" btn border-2 border-bgYellow text-bgYellow font-bold p-2 rounded-full  hover:bg-bgYellow hover:text-BgPurple" onClick={() => setMenuOpen(false)}>Contact Me</a></li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
}
