import React from 'react';
import '../styles/navbar3.css';

const Navbar3 = () => (
  <nav className="navbar3">
    {[...Array(18)].map((_, index) => (
      <button key={index} className="navbar-ods">
        <a href="#">
          <img src={`/ods/${index + 1}.png`} alt={`ODS-${index + 1}`} />
        </a>
      </button>
    ))}
  </nav>
);

export default Navbar3;
