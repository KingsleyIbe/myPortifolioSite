/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const navLinksStyles = ({ isActive }) => ({
    borderBottom: isActive ? '4px solid #ff6b00' : 'none',
    color: isActive ? '#ff6b00' : '#fff',
  });

  const [openMenu, setOpenMenu] = useState(false);
  const mobileMenu = () => {
    if (openMenu === false) {
      setOpenMenu(true);
    } else {
      openMenu(false);
    }
  };

  return (
    <div className="header fixed z-50 bg-[#3c3a39] min-w-[100%] p-10">
      <header className="">
        <nav className="flex gap-x-10 items-center text-[25px] font-bold text-[#fff] nav-elems">
          <span>
            <NavLink to="/contact" className="logo" onClick={mobileMenu}>Let&#39;s connect</NavLink>
          </span>
          <ul className="flex lg:gap-x-10 items-center lg:absolute right-0 mr-10 ul-elems">
            <li><NavLink to="/" className="hover:opacity-[0.5]" style={navLinksStyles}>Home</NavLink></li>
            <li><NavLink to="/portfolio" className="hover:opacity-[0.5]" style={navLinksStyles}>Portfolio</NavLink></li>
            <li><NavLink to="/about" className="hover:opacity-[0.5]" style={navLinksStyles}>About</NavLink></li>
            <li><NavLink to="/contact" className="hover:opacity-[0.5]" style={navLinksStyles}>Contact</NavLink></li>
            <li><a href="mailto:ibekingsley66@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} className="text-[30px]" /></a></li>
            <li className="lg:ml-[100px] b-border p-2 btn-hover btn-get-resume"><button type="button"><NavLink to="/resume">Get My Resume</NavLink></button></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
