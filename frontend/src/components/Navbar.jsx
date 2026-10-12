import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Gift } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export const Navbar = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 glass-panel border-b border-luxury-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-extrabold"
        >
          <Gift className="text-luxury-pink w-8 h-8 animate-pulse" />
          <span className="bg-gradient-to-r from-luxury-pink via-pink-400 to-purple-400 bg-clip-text text-transparent">
            SurpriseGift
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <Link to="/" className="hover:text-luxury-pink transition">
            Home
          </Link>
          <Link to="/Packages" className="hover:text-luxury-pink transition">
            Packages
          </Link>
          {/* <Link
            to="/special-surprise"
            className="hover:text-luxury-pink transition"
          >
            Special Setup
          </Link> */}
          <Link to="/track-order" className="hover:text-luxury-pink transition">
            Track Order
          </Link>
          <Link
            to="/emotion-reward"
            className="hover:text-luxury-pink transition"
          >
            Emotion Rewards
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            className="relative p-2 text-neutral-200 hover:text-luxury-pink transition"
          >
            <ShoppingBag className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-luxury-pink text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </Link>
          {user ? (
            <div className="flex items-center gap-3">
              {user.role === "admin" && (
                <Link
                  to="/admin"
                  className="px-3 py-1.5 text-xs font-semibold rounded-full bg-luxury-border text-pink-300 border border-luxury-pink/40 hover:bg-luxury-pink hover:text-white transition"
                >
                  Admin
                </Link>
              )}
              <button
                onClick={logout}
                className="text-xs text-neutral-400 hover:text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 text-xs font-bold rounded-xl bg-luxury-pink text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
