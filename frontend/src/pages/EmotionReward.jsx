import React, { useState } from "react";
import API from "../services/api";

export const EmotionReward = () => {
  const [orderId, setOrderId] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/emotions/submit", { orderId, videoUrl });
      alert("Video submitted for review!");
    } catch (err) {
      alert("Submission failed.");
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h2 className="text-3xl font-extrabold text-white mb-6 text-center">
        Share Happiness
      </h2>
      <form
        onSubmit={handleSubmit}
        className="glass-panel p-8 rounded-3xl space-y-4"
      >
        <input
          type="text"
          placeholder="Order ID"
          required
          className="w-full p-3 bg-luxury-card border text-white rounded-xl"
          onChange={(e) => setOrderId(e.target.value)}
        />
        <input
          type="url"
          placeholder="Video Link"
          required
          className="w-full p-3 bg-luxury-card border text-white rounded-xl"
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <button
          type="submit"
          className="w-full py-4 bg-luxury-pink text-white font-bold rounded-xl"
        >
          Submit Reaction
        </button>
      </form>
    </div>
  );
};
