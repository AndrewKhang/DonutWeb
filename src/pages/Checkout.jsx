import React from "react";
import { Link } from "react-router-dom";

const Checkout = ({ cart, updateQuantity, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <div>
          <p className="">Your cart is empty.</p>
          <Link to="/menu" className="text-blue-500 hover:underline">
            Go to Menu
          </Link>
        </div>
      ) : (
        <>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-3/4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center border-b py-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded mr-4"
                  />
                  <div className="flex-grow">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 px-2 py-1 rounded"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 px-2 py-1 rounded"
                    >
                      +
                    </button>
                  </div>
                  <p className="ml-4 font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="md:w-1/4">
              <div className="bg-gray-100 p-6 rounded">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping:</span>
                  <span>$5.00</span>
                </div>
                <div className="flex justify-between font-semibold text-lg mt-4">
                  <span>Total:</span>
                  <span>${(total + 5).toFixed(2)}</span>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded mt-6 hover:bg-blue-600">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
          <Link
            to="/menu"
            className="text-blue-500 hover:underline mt-8 inline-block mb-5 "
          >
            Continue Shopping
          </Link>
        </>
      )}
    </div>
  );
};

export default Checkout;
