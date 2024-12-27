import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">IT Dept</div>
        <ul className="navbar-nav">
          <li><a href="/" className="nav-item">Home</a></li>
          <li><a href="/about" className="nav-item">About Us</a></li>
          <li><a href="/courses" className="nav-item">Courses</a></li>
          <li><a href="/contact" className="nav-item">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;