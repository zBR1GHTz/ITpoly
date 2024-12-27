import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <h1 className="header-title">Welcome to the IT Department</h1>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/about" className="nav-link">About Us</a></li>
            <li><a href="/courses" className="nav-link">Courses</a></li>
            <li><a href="/contact" className="nav-link">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;