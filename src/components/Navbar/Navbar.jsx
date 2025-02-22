import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import land2 from "../../assets/land2.jpg";
import logo from "../../assets/logo2.png";

const Navbar = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
    
      <nav className="bg-transparent  px-6 py-2 flex justify-between items-center z-10 absolute w-full m-0 hover:bg-white">
        {/* Left Section: Logo and Brand Name */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-full mr-4"
          />
          <span className="text-xl font-bold italic text-blue-800">ArmanCar</span>
        </div>

        {/* Right Section: Links and Login Button */}
        <div className="flex items-center">
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/"
                className="text-blue-800 text-sm font-medium hover:border-b-2 border-blue-800 transition"
                activeClassName="border-b-2 border-green-500 pb-1"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faqs"
                className="text-blue-800 text-sm font-medium hover:border-b-2 border-blue-800 transition"
                activeClassName="border-b-2 border-green-500 pb-1"
              >
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                className="text-blue-800 text-sm font-medium hover:border-b-2 border-blue-800 transition"
                activeClassName="border-b-2 border-green-500 pb-1"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <Link to="/login">
            <button className="ml-4 px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-blue-800 transition">
              Admin
            </button>
          </Link>
        </div>
      </nav>

      {/* Background Image and Overlay */}
      <img
        src={land2}
        alt="Landing Background"
        className="absolute w-full h-full object-cover shadow-lg"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to <span className="text-yellow-300">ArmanCar Rentals</span>
          </h1>
          <p className="text-lg mb-6">
            Your trusted partner for premium car rentals. Explore, drive, and enjoy!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
