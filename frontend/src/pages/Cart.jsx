import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Trash2, ArrowRight } from "lucide-react";

export const Cart = () => {
  const { cart, removeFromCart, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-white mb-4">
          Your Cart Is Empty
        </h2>
        <Link to="/shop" className="text-luxury-pink underline font-bold">
          Explore Packages
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-extrabold text-white mb-6">Your Cart</h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item._id}
            className="glass-panel p-4 rounded-2xl flex justify-between items-center"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-xl"
              />
              <div>
                <h4 className="text-white font-bold">{item.title}</h4>
                <p className="text-luxury-pink font-bold">
                  ₹{item.price} x {item.quantity}
                </p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item._id)}
              className="text-red-400"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
        <div className="p-6 glass-panel rounded-2xl flex justify-between items-center">
          <span className="text-xl font-bold text-white">
            Total: ₹{getCartTotal()}
          </span>
          <Link
            to="/checkout"
            className="px-6 py-3 bg-luxury-pink text-white font-bold rounded-xl flex items-center gap-2"
          >
            Checkout <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
