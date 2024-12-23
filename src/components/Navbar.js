import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-lg font-semibold text-blue-500 hover:text-blue-700">
          IT Department
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-500 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-blue-500 transition duration-300">About Us</Link>
          </li>
          <li>
            <Link to="/courses" className="text-gray-700 hover:text-blue-500 transition duration-300">Courses</Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-blue-500 transition duration-300">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;