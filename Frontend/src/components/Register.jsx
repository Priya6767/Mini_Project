import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import universityLogo from "../assets/logo.png"; // Use your actual logo path

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  // Submit handler that connects to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registration successful!");
        navigate("/login");
      } else {
        alert(data.message || "Registration failed ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-3xl overflow-hidden w-full max-w-5xl">
        {/* Left Side - Logo + University Info */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 bg-gradient-to-br from-blue-700 to-indigo-800 text-white p-10">
          <img
            src={universityLogo}
            alt="University Logo"
            className="w-32 h-32 mb-4 object-contain drop-shadow-lg"
          />
          <h1 className="text-4xl font-bold text-center leading-snug">
            Pondicherry University
          </h1>
          <p className="text-blue-100 mt-3 text-center text-lg italic">
            Empowering Students for a Brighter Future
          </p>
        </div>

        {/* Right Side - Registration Form */}
        <div className="flex items-center justify-center w-full md:w-1/2 p-10">
          <form
            onSubmit={handleSubmit}
            className="bg-white w-full max-w-md space-y-5"
          >
            <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
              Create Your Account
            </h2>

            <div>
              <label className="block text-gray-700 mb-1 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md font-semibold text-lg hover:bg-green-700 transition-all duration-200"
            >
              Register
            </button>

            <p className="text-sm text-center mt-4 text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
