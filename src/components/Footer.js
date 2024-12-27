import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">&copy; 2024 IT Department, วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนาเชียงใหม่</p>
        <div className="footer-links">
          <a href="#" className="footer-link">Facebook</a>
          <a href="#" className="footer-link">Twitter</a>
          <a href="#" className="footer-link">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;