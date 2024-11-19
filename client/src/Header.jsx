import React from 'react';
import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2';
import Navbar3 from './Navbar3';
import '../styles/header.css';

const Header = () => (
  <header>
    <Navbar1 />
    <Navbar2 />
    <Navbar3 />
    <div className="fim-header"></div>
  </header>
);

export default Header;