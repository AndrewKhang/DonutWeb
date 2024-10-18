import React from "react";

const Add = ({ product, quantity, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="relative py-2 px-8 text-black text-base font-bold rounded-full overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-700 before:to-green-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
    >
      Add to cart
    </button>
  );
};

export default Add;
