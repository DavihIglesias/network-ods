import React from 'react';
import '../styles/footer.css';

const Footer = () => (
  <footer>
    <div className="start-footer">
      <h3>Lorem ipsum dolor sit.</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nisi consectetur quod dolor ipsa beatae...
      </p>
    </div>
    {[...Array(3)].map((_, index) => (
      <div key={index} className="footer-links">
        <h4>Lorem, ipsum.</h4>
        <a href="#">Lorem, ipsum dolor.</a>
        <a href="#">Lorem, ipsum dolor.</a>
        <a href="#">Lorem, ipsum dolor.</a>
      </div>
    ))}
  </footer>
);

export default Footer;
