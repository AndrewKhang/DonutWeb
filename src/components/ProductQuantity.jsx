import React, { useState, useEffect } from "react";

const ProductQuantity = ({ className, onChange }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    onChange(quantity);
  }, [quantity, onChange]);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className={`flex items-center ${className}`}>
      <button
        className="bg-gray-300 text-black px-3 py-1 rounded"
        onClick={decreaseQuantity}
        disabled={quantity <= 1}
      >
        -
      </button>
      <span className="mx-3 text-xl">{quantity}</span>
      <button
        className="bg-gray-300 text-black px-3 py-1 rounded"
        onClick={increaseQuantity}
      >
        +
      </button>
    </div>
  );
};

export default ProductQuantity;
