import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { cartOutline } from "ionicons/icons";
import donut16 from "../images/donut16.jpg";

const Navbar = ({ cartItemsCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white p-5">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div className="flex items-center">
          <img
            src={donut16}
            alt="Delicious Donuts Logo"
            className="w-10 h-10"
          />
          <h1 className="text-2xl font-bold ml-4">Delicious Donuts</h1>
        </div>

        <div className="flex items-center">
          <div
            className={`nav-links duration-500 lg:static absolute bg-white lg:min-h-fit min-h-[30vh] left-0 ${
              isMenuOpen ? "top-[9%] z-50" : "top-[-100%] z-0"
            } lg:w-auto w-full flex items-center px-5`}
          >
            <ul className="flex lg:flex-row flex-col lg:items-center lg:gap-[4vw] gap-8">
              <li>
                <Link
                  to="/home"
                  className="hover:text-gray-500"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="hover:text-gray-500"
                  onClick={closeMenu}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-gray-500"
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-gray-500"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Cart Icon */}
          <div className="relative ml-6">
            <Link to="/checkout">
              <IonIcon icon={cartOutline} className="text-3xl cursor-pointer" />
              {cartItemsCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>

          <IonIcon
            name={isMenuOpen ? "close" : "menu"}
            className="text-3xl cursor-pointer lg:hidden ml-4"
            onClick={handleMenuToggle}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
