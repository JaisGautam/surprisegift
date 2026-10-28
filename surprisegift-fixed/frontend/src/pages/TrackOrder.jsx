import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../services/api";

const TrackOrder = () => {
  const location = useLocation();
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const initialId = params.get("orderId") || params.get("id") ||
      JSON.parse(localStorage.getItem("lastPlacedOrder") || "null")?.orderId || "";
    if (initialId) {
      setOrderId(initialId);
      loadOrder(initialId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  const loadOrder = async (value) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    setLoading(true);
    setError("");
    setOrder(null);
    try {
      const { data } = await API.get(`/orders/track/${encodeURIComponent(trimmed)}`);
      setOrder(data.order);
    } catch (err) {
      setError(err.response?.status === 401
        ? "Please log in to track your order."
        : err.response?.data?.message || "Order not found, or it does not belong to this account.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loadOrder(orderId);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-black">Track Your Surprise Package</h1>
        <p className="text-gray-400 text-sm">Check the latest saved status of your order.</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={orderId}
          onChange={(event) => setOrderId(event.target.value)}
          placeholder="Enter your order ID"
          required
          className="flex-1 bg-white/5 border border-white/20 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:border-pink-500"
        />
        <button type="submit" disabled={loading} className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 rounded-2xl font-bold disabled:opacity-60">
          {loading ? "Checking…" : "Track"}
        </button>
      </form>
      {error && <p role="alert" className="text-red-400 text-center">{error}</p>}
      {order && (
        <section className="bg-white/[0.05] border border-pink-500/30 rounded-3xl p-6 md:p-8 space-y-4">
          <p className="text-xs text-gray-400">Order reference</p>
          <p className="font-extrabold text-pink-400 break-all">{order._id}</p>
          <p className="text-white">Order status: <strong>{order.orderStatus}</strong></p>
          <p className="text-white">Payment status: <strong>{order.paymentStatus}</strong></p>
          <p className="text-white">Total: ₹{Number(order.totalAmount).toFixed(2)}</p>
          <p className="text-gray-300">Recipient: {order.shippingAddress?.recipientName}</p>
          <p className="text-gray-400 text-sm">Last updated: {new Date(order.updatedAt).toLocaleString()}</p>
        </section>
      )}
    </div>
  );
};

export default TrackOrder;
