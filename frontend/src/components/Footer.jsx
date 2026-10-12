import React from "react";
import { Gift, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="glass-panel border-t border-luxury-border mt-20 text-neutral-400 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-black text-white mb-4"
          >
            <Gift className="text-luxury-pink" /> SurpriseGift
          </Link>
          <p className="text-sm">“Because Every Gift Tells a Story.”</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/shop" className="hover:text-luxury-pink">
                Explore Packages
              </Link>
            </li>
            <li>
              <Link to="/special-surprise" className="hover:text-luxury-pink">
                Special Setup Request
              </Link>
            </li>
            <li>
              <Link to="/track-order" className="hover:text-luxury-pink">
                Track My Order
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/emotion-reward" className="hover:text-luxury-pink">
                Emotion Rewards
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-luxury-pink">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-luxury-pink">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Contact Us</h4>
          <p className="text-sm">WhatsApp: +91 8858176643</p>
          <p className="text-sm">Email: gautamjais574@gmail.com</p>
        </div>
      </div>
      <div className="text-center text-xs mt-12 pt-6 border-t border-luxury-border">
        © 2026 SurpriseGift. All Rights Reserved.
      </div>
    </footer>
  );
};
