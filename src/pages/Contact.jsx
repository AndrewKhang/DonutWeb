import React from "react";
import backgroundImage from "../images/donutshop.jpg";
const Contact = () => {
  return (
    <div
    className="relative h-64 bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50">
      <div className="relative flex justify-center items-center flex-col text-white h-full">
        <h1 className="text-4xl font-bold">Contact</h1>
        <h2 className="text-xl "><a href="/home" className="hover:underline" > Home </a>/ Contact</h2>
        </div>
        </div>
        <div className="bg-yellow-100 p-8 text-center">
      
        <div className="mt-10">
       
        </div>
      </div>

   


      {/* About Us Section */}
      <div className="bg-gray-200 p-12 mt-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Our Story</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Delicious Donuts started as a small family bakery in 2000. Today,
            we're proud to serve the best donuts in town, using only the finest
            ingredients and time-honored recipes. Our passion for quality and
            creativity keeps our customers coming back for more!
          </p>
        </div>
      </div>
        </div>
        
  );
};

export default Contact;
