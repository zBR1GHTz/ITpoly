import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <div className="container">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา - สาขาเทคโนโลยีสารสนเทศ
        </p>
        <p className="text-sm">
          เบอร์โทรศัพท์: 012-345-6789 | อีเมล: info@lanna-polytechnic.ac.th
        </p>
        <p className="text-sm mt-2">
          <a href="#" className="text-blue-400 hover:text-blue-300 transition duration-300">Facebook</a> |
          <a href="#" className="text-blue-400 hover:text-blue-300 ml-2 transition duration-300">Twitter</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
