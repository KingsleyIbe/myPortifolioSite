import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <header>
      <nav>
        <ul>
          <li><NavLink to="/">Portfolio</NavLink></li>
          <li><NavLink to="/#about">About</NavLink></li>
          <li><NavLink to="/#contact">Contact</NavLink></li>
          <li><NavLink to="/#contact">Envelop</NavLink></li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Header;
