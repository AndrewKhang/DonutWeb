import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Delightful Donuts</h3>
            <p className="text-sm">
              Serving happiness, one donut at a time since 2010. Our passion is
              creating the most delicious and unique donuts in town.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Treats</h3>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="/" className="hover:text-pink-600">
                  🍩 Classic Donuts
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:text-pink-600">
                  🍓 Specialty Flavors
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:text-pink-600">
                  🎂 Donut Cakes
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:text-pink-600">
                  ☕ Coffee & Beverages
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Visit Us</h3>
            <div className="text-sm space-y-2">
              <p>🕒 Mon-Sat: 6am-8pm, Sun: 7am-6pm</p>
              <p>📍 123 Sprinkle Street, Sweetville, DC 12345</p>
              <p>📞 (123) 456-7890</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <div className="flex space-x-4 text-2xl">
              <a href="/" className="hover:text-pink-600">
                📘
              </a>
              <a href="/" className="hover:text-pink-600">
                🐦
              </a>
              <a href="/" className="hover:text-pink-600">
                📷
              </a>
            </div>
            <p className="mt-4 text-sm">
              Follow us for sweet deals and donut inspiration!
            </p>
          </div>
        </div>
        <div className="border-t border-pink-200 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} Delightful Donuts. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
