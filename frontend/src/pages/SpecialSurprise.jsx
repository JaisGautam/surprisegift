import React, { useState } from "react";
import API from "../services/api";

export const SpecialSurprise = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    recipientName: "",
    relationship: "Girlfriend",
    occasion: "Birthday",
    preferredDate: "",
    location: "",
    budget: "₹2000-₹5000",
    serviceType: "Room Decoration",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/special-requests", form);
      alert("Special Setup Request Logged Successfully!");
    } catch (err) {
      alert("Submission failed");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-extrabold text-white mb-6 text-center">
        Plan Special Surprise
      </h2>
      <form
        onSubmit={handleSubmit}
        className="glass-panel p-8 rounded-3xl space-y-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full p-3 bg-luxury-card border text-white rounded-xl"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          required
          className="w-full p-3 bg-luxury-card border text-white rounded-xl"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          className="w-full p-3 bg-luxury-card border text-white rounded-xl"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Recipient Name"
          required
          className="w-full p-3 bg-luxury-card border text-white rounded-xl"
          onChange={(e) => setForm({ ...form, recipientName: e.target.value })}
        />
        <input
          type="date"
          required
          className="w-full p-3 bg-luxury-card border text-white rounded-xl"
          onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location City"
          required
          className="w-full p-3 bg-luxury-card border text-white rounded-xl"
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />
        <button
          type="submit"
          className="w-full py-4 bg-luxury-pink text-white font-bold rounded-xl"
        >
          Request Custom Setup
        </button>
      </form>
    </div>
  );
};
