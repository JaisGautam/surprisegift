import React, { useState, useEffect } from "react";
import API from "../services/api";

export const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await API.get("/orders/admin/all");
        setOrders(data.orders);
      } catch (err) {
        console.error(err);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-black text-white mb-6">Admin Dashboard</h2>
      <div className="glass-panel p-6 rounded-3xl space-y-4">
        {orders.map((o) => (
          <div
            key={o._id}
            className="p-4 bg-luxury-card rounded-xl border border-luxury-border flex justify-between items-center"
          >
            <div>
              <p className="text-white font-bold">Order: {o._id}</p>
              <p className="text-xs text-neutral-400">
                Total: ₹{o.totalAmount} | Status: {o.orderStatus}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
