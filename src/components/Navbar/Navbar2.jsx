import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo2.png";

const Navbar2 = () => {
  return (
    <>
     
     <nav className="bg-transparent px-6 py-4 flex justify-between items-center w-full">
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
    </>
  )
}

export default Navbar2
