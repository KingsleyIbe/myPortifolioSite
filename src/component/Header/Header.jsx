import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <div className="header bg-[#3c3a39] p-10 fixed z-50">
    <header>
      <nav className="flex gap-x-10 items-center text-[20px] font-bold text-[#fff]">
        <span>
          <h1>Let&#39;s connect</h1>
        </span>
        <ul className="flex gap-x-10 items-center justify-end">
          <li><NavLink to="/">Portfolio</NavLink></li>
          <li><NavLink to="/#about">About</NavLink></li>
          <li><NavLink to="/#contact">Contact</NavLink></li>
          <li><NavLink to="/#envelop"><FontAwesomeIcon icon={faEnvelope} /></NavLink></li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Header;
