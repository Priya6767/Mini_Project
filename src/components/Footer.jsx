import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-0">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left: Personal Information */}
        <div className="flex flex-col items-start">
          <span className="text-2xl font-bold">Seasonal Companion</span>
          <span className="text-lg mt-2">Developed by PU</span>
          {/* <span className="text-lg mt-2">Phone: +91 7859059587</span> */}
          <span className="text-lg">Email: info@seasonalcompanion.com</span>
        </div>
        {/* Center: Copyright */}
        <div className="my-4 md:my-0 flex-1 flex justify-center">
          <span className="text-lg font-semibold text-center">
            &copy; 2025 All rights reserved.
          </span>
        </div>
        {/* Right: Social Media */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition text-lg">
            <i className="fab fa-github mr-1"></i>GitHub
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition text-lg">
            <i className="fab fa-twitter mr-1"></i>Twitter
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition text-lg">
            <i className="fab fa-facebook mr-1"></i>Facebook
          </a>
          <a href="mailto:info@seasonalcompanion.com" className="hover:text-yellow-300 transition text-lg">
            <i className="fas fa-envelope mr-1"></i>Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer