import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="header-logo">GlamConnect</Link>
        </div>
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/mua-profiles" className="nav-link">MUA Profiles</Link>
          <Link to="/masterclasses" className="nav-link">Masterclasses</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/membership" className="nav-link">Membership</Link>
          <Link to="/contact-us" className="nav-link">Contact Us</Link>
          <Link to="/register-mua" className="nav-link">Register as a Makeup Artist</Link>
        </nav>
        <div className="header-buttons">
          <Link to="/login" className="header-button">Login</Link>
          <Link to="/signup" className="header-button">Sign Up</Link> {/* Make sure this link is correct */}
        </div>
      </div>
    </header>
  );
}

export default Header;
