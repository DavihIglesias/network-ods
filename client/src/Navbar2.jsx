import React from 'react';
import '../styles/navbar2.css';

const Navbar2 = () => (
  <nav className="navbar2">
    <div className="navbar2-link">
      <a href="#">Lorem, ipsum.</a>
      <a href="#">Lorem, ipsum.</a>
      <a href="#">Lorem, ipsum.</a>
    </div>
    <div className="busca">
      <input type="text" className="busca-input" placeholder="Pesquisar..." />
      <span className="busca-icon">🔍</span>
    </div>
  </nav>
);

export default Navbar2;
