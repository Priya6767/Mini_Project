import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on page load
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user); // true if user exists
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-10">
        {/* Left - Logo + App Name */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="App Logo"
            className="h-16 w-16 mr-3"
          />
          <span className="text-2xl font-bold tracking-wide">
            Seasonal Companion
          </span>
        </div>

        {/* Right - Navigation Buttons */}
        <div className="flex space-x-4">
          {/* <button
            onClick={() => navigate("/dashboard")}
            className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-100 transition"
          >
            Dashboard
          </button> */}

          {!isLoggedIn ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/register")}
                className="bg-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
              >
                Register
              </button>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-red-700 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
