import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export const InteractivePlanner = () => {
  const { addToCart } = useCart();
  const [budget, setBudget] = useState("₹1,000–₹2,000");
  const [color, setColor] = useState("Soft Pink");
  const [relationship, setRelationship] = useState("Girlfriend");

  const budgets = [
    "Under ₹500",
    "₹500–₹1,000",
    "₹1,000–₹2,000",
    "₹2,000–₹5,000",
    "₹5,000+",
  ];
  const colors = [
    "Red & Gold",
    "Soft Pink",
    "Royal Blue",
    "Midnight Black",
    "Lavender Purple",
  ];
  const relationships = [
    "Girlfriend",
    "Boyfriend",
    "Best Friend",
    "Mother",
    "Father",
    "Spouse",
  ];

  const handleAddToCart = () => {
    const customPackage = {
      _id: `custom_${Date.now()}`,
      title: `Surprise Box for ${relationship}`,
      price:
        budget === "Under ₹500" ? 499 : budget === "₹500–₹1,000" ? 899 : 1499,
      category: "Custom Package",
      description: `Curated package in ${color} theme.`,
      images: [
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop",
      ],
    };
    addToCart(customPackage);
    alert("Configured Surprise Package Added To Cart!");
  };

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-5xl font-black text-white mb-3">
          Create Your Perfect Surprise
        </h2>
        <p className="text-neutral-400">
          Configure parameters to generate a custom surprise package.
        </p>
      </div>

      <div className="glass-panel p-8 rounded-3xl space-y-8">
        <div>
          <label className="text-sm font-bold text-luxury-pink uppercase block mb-3">
            1. Budget
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {budgets.map((b) => (
              <button
                key={b}
                onClick={() => setBudget(b)}
                className={`py-3 px-2 text-xs font-bold rounded-xl border ${budget === b ? "bg-luxury-pink text-white border-luxury-pink" : "bg-luxury-card border-luxury-border text-neutral-300"}`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-bold text-luxury-pink uppercase block mb-3">
            2. Color Theme
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {colors.map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`py-3 px-2 text-xs font-bold rounded-xl border ${color === c ? "bg-luxury-pink text-white border-luxury-pink" : "bg-luxury-card border-luxury-border text-neutral-300"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-bold text-luxury-pink uppercase block mb-3">
            3. Relationship
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
            {relationships.map((r) => (
              <button
                key={r}
                onClick={() => setRelationship(r)}
                className={`py-3 px-2 text-xs font-bold rounded-xl border ${relationship === r ? "bg-luxury-pink text-white border-luxury-pink" : "bg-luxury-card border-luxury-border text-neutral-300"}`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full py-4 bg-gradient-to-r from-luxury-pink to-purple-600 text-white font-bold rounded-xl shadow-lg"
        >
          Add Custom Package To Cart
        </button>
      </div>
    </section>
  );
};
