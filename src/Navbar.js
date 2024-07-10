import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <nav className="navbar">
        <h1 className="navbar-logo">Components&Props</h1>
        <ul className="nav-links">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#services" className="nav-link">Services</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>
      </nav>
      {isMobile && (
        <div className={`mobile-menu ${isMobile ? 'show' : ''}`}>
          <ul className="mobile-nav-links">
            <li><a href="#home" className="mobile-nav-link" onClick={() => setIsMobile(false)}>Home</a></li>
            <li><a href="#about" className="mobile-nav-link" onClick={() => setIsMobile(false)}>About</a></li>
            <li><a href="#services" className="mobile-nav-link" onClick={() => setIsMobile(false)}>Services</a></li>
            <li><a href="#contact" className="mobile-nav-link" onClick={() => setIsMobile(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
