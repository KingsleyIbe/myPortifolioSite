/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const navLinksStyles = ({ isActive }) => ({
    borderBottom: isActive ? '4px solid #ff6b00' : 'none',
    color: isActive ? '#ff6b00' : '#fff',
  });

  return (
    <div className="mobile-header">
      <header>
        <nav>
          <ul className="flex gap-10 items-center ul-items z-50 fixed bg-[#111114] p-5">
            <li>
              <NavLink to="/contact" className="logo">Let&#39;s connect</NavLink>
            </li>
            <li><button type="button" onClick={openMenu}><FontAwesomeIcon icon={faBars} className="menuBar" /></button></li>
          </ul>
        </nav>
      </header>
      {open ? (
        <ul className="flex gap-x-10 items-center absolute right-0 mr-10">
          <li><NavLink to="/" className="hover:opacity-[0.5]" style={navLinksStyles}>Home</NavLink></li>
          <li><NavLink to="/portfolio" className="hover:opacity-[0.5]" style={navLinksStyles}>Portfolio</NavLink></li>
          <li><NavLink to="/about" className="hover:opacity-[0.5]" style={navLinksStyles}>About</NavLink></li>
          <li><NavLink to="/contact" className="hover:opacity-[0.5]" style={navLinksStyles}>Contact</NavLink></li>
          <li><a href="mailto:ibekingsley66@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} className="text-[30px]" /></a></li>
          <li className="ml-[100px] b-border p-2 btn-hover"><button type="button"><NavLink to="/resume">Get My Resume</NavLink></button></li>
        </ul>
      ) : ''}
    </div>
  );
};

export default MobileHeader;
