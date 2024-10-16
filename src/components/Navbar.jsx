import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { IonIcon } from "@ionic/react"; // Import Ionicon for menu icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu on navigation
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white p-5">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold ml-4">Delicious Donuts</h1>
        </div>

        {/* Navigation Links */}
        <div
          className={`nav-links duration-500 lg:static absolute bg-white lg:min-h-fit min-h-[30vh] left-0 ${
            isMenuOpen ? "top-[9%] z-50" : "top-[-100%] z-0"
          } lg:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex lg:flex-row flex-col lg:items-center lg:gap-[4vw] gap-8">
            <li>
              <Link to="/home" className="hover:text-gray-500" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-gray-500" onClick={closeMenu}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-500" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-500" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Menu Icon (visible on mobile screens) */}
        <IonIcon
          name={isMenuOpen ? "close" : "menu"}
          className="text-3xl cursor-pointer lg:hidden"
          onClick={handleMenuToggle}
        />
      </nav>
    </header>
  );
};

export default Navbar;
