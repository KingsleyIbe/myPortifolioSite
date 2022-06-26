import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <div className="header fixed z-50 bg-[#3c3a39] p-10">
    <header className="">
      <nav className="flex gap-x-10 items-center text-[25px] font-bold text-[#fff] relative">
        <span>
          <NavLink to="/">Let&#39;s connect</NavLink>
        </span>
        <ul className="flex gap-x-10 items-center">
          <li><NavLink to="/" className="hover:opacity-[0.5]">Home</NavLink></li>
          <li><NavLink to="/portfolio" className="hover:opacity-[0.5]">Portfolio</NavLink></li>
          <li><NavLink to="/#about" className="hover:opacity-[0.5]">About</NavLink></li>
          <li><NavLink to="/#contact" className="hover:opacity-[0.5]">Contact</NavLink></li>
          <li><NavLink to="/#envelop"><FontAwesomeIcon icon={faEnvelope} className="text-[30px]" /></NavLink></li>
          <li className="ml-[100px] b-border p-2"><button type="button"><a href="./images/kingsley-ibe-cv.pdf" download="Kingsley Ibe resume">Get My Resume</a></button></li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Header;
