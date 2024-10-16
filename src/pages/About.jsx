import React from "react";
import backgroundImage from "../images/doughnuts-wallpaper-preview.jpg";
const About = () => {
  return (
    <div
    className="relative h-64 bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50">
      <div className="relative flex justify-center items-center flex-col text-white h-full">
        <h1 className="text-4xl font-bold">About</h1>
        <h2 className="text-xl "><a href="/home" className="hover:underline" > Home </a>/ About</h2>
        </div>
        </div>
        </div>
  );
};

export default About;
