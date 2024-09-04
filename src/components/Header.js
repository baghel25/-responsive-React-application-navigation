// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Header.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">MyApp</div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        {/* <ul> */}
          <div><Link to="/one">One</Link></div>
          <div><Link to="/two">Two</Link></div>
          <div><Link to="/three">Three</Link></div>
        {/* </ul> */}
      </nav>
      <div className="menu-icon" onClick={() => setMenuOpen(!isMenuOpen)}>
        ☰
      </div>
    </header>
  );
};

export default Header;
