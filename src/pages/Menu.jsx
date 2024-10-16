import React from "react";
import donut1 from "../images/donut1.jpg";
import donut2 from "../images/donut2.jpg";
import donut3 from "../images/donut3.jpg";
import donut4 from "../images/donut4.jpg";
import donut5 from "../images/donut5.jpg";
import donut6 from "../images/donut6.jpg";
import donut7 from "../images/donut7.jpg";
import donut8 from "../images/donut8.jpg";
import donut9 from "../images/donut9.jpg";
import donut10 from "../images/donut10.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Menubutton from "../components/Menubutton";
import Add from "../components/Add";
import ProductQuantity from "../components/ProductQuantity";

const Menu = () => {
  const classicDonuts = [
    {
      id: 1, 
      name: "Chocolate Glazed",
      price: "$2.00",
      img: donut1,
    },
    {
      id: 2,
      name: "Strawberry Sprinkles",
      price: "$2.50",
      img: donut2,
    },
    {
      id: 3,
      name: "Classic Vanilla Sprinkles",
      price: "$1.75",
      img: donut3,
    },
    {
      id: 4,
      name: "Bavarian Cream Donuts",
      price: "$2.25",
      img: donut4,
    },
    {
      id: 5,
      name: "Old-Fashioned Donut",
      price: "$2.00",
      img: donut9,
    },
  ];

  const LongJohnDonuts = [
    {
      id: 6,
      name: "Chocolate Long John with Sprinkles",
      price: "$2.25",
      img: donut5,
    },
    {
      id: 7,
      name: "Chocolate Iced Peanut Long John",
      price: "$2.25",
      img: donut6,
    },
    {
      id: 8,
      name: "Creme Filled Long John",
      price: "$2.25",
      img: donut7,
    },
    {
      id: 9,
      name: "Maple Bacon Bar",
      price: "$2.25",
      img: donut8,
    },
    {
      id: 10,
      name: "Custard-Filled Long John",
      price: "$2.60",
      img: donut10,
    },
  ];

  return (
    <div>
      {/* Menu Button */}
      <div className="text-4xl font-bold flex justify-center items-center mt-10">
        <Menubutton />
      </div>

      {/* Classic Donuts Slider */}
      <div className="container mx-auto mt-12">
        <h2 className="text-3xl font-bold mb-4">Classic Donuts</h2>
        <Swiper
          spaceBetween={20}
          navigation={true} // Enable navigation
          modules={[Navigation]} // Add Navigation module
          breakpoints={{
            // When window width is >= 640px, show 1 item per slide
            640: {
              slidesPerView: 1,
            },
            // When window width is >= 768px, show 2 items per slide
            768: {
              slidesPerView: 2,
            },
            // When window width is >= 1024px, show 3 items per slide
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {classicDonuts.map((donut) => (
            <SwiperSlide key={donut.id}>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
                <img
                  src={donut.img}
                  alt={donut.name}
                  className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-sm font-semibold">{donut.name}</h3>
                <p className="text-lg text-gray-600 mt-2 mb-2">{donut.price}</p>
                <ProductQuantity className="flex items-center justify-center mb-2" />
                <Add />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Long John Donuts Slider */}
      <div className="container mx-auto mt-12">
        <h2 className="text-3xl font-bold mb-4">Long John Donuts</h2>
        <Swiper
          spaceBetween={20}
          navigation={true} // Enable navigation
          modules={[Navigation]} // Add Navigation module
          breakpoints={{
            // When window width is >= 640px, show 1 item per slide
            640: {
              slidesPerView: 1,
            },
            // When window width is >= 768px, show 2 items per slide
            768: {
              slidesPerView: 2,
            },
            // When window width is >= 1024px, show 3 items per slide
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {LongJohnDonuts.map((donut) => (
            <SwiperSlide key={donut.id}>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300">
                <img
                  src={donut.img}
                  alt={donut.name}
                  className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-sm font-semibold">{donut.name}</h3>
                <p className="text-lg text-gray-600 mt-2 mb-2">{donut.price}</p>
                <ProductQuantity className="flex items-center justify-center mb-2" />
                <Add />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Menu;
