import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className=" bg-blue-600 text-white shadow-md ">
      <div className="container mx-auto flex items-center justify-between py-4 px-10">
        <div className="flex items-center">
          {/* Logo */}
          <img
            src={logo}
            alt="Seasonal Companion Logo"
            className="h-20 w-20 mr-3"
          />
          {/* Name */}
          <span className="text-2xl font-bold tracking-wide">
            Seasonal Companion
          </span>
        </div>
        {/* Dashboard Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-100 transition"
        >
          Dashboard
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
