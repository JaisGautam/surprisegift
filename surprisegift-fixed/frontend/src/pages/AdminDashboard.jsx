import React, { useCallback, useEffect, useState } from "react";
import API from "../services/api";

export const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchOrders = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const { data } = await API.get("/orders/admin/all");
      setOrders(Array.isArray(data.orders) ? data.orders : []);
    } catch (err) {
      setError(err.response?.data?.message || "Could not load orders. Check that you are logged in as an admin.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchOrders(); }, [fetchOrders]);

  const updatePayment = async (orderId, paymentStatus) => {
    const confirmation = paymentStatus === "PAID"
      ? "Confirm that you checked the payment in your bank/UPI app and it is received?"
      : "Mark this payment as failed and cancel the order?";
    if (!window.confirm(confirmation)) return;
    try {
      await API.put(`/orders/admin/${orderId}/payment-status`, { paymentStatus });
      await fetchOrders();
    } catch (err) {
      setError(err.response?.data?.message || "Could not update payment status.");
    }
  };

  const updateStatus = async (orderId, orderStatus) => {
    try {
      await API.put(`/orders/admin/${orderId}/status`, { orderStatus });
      await fetchOrders();
    } catch (err) {
      setError(err.response?.data?.message || "Could not update order status.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-black text-white mb-6">Admin Dashboard</h2>
      {error && <p role="alert" className="mb-4 text-red-400">{error}</p>}
      <div className="glass-panel p-6 rounded-3xl space-y-4">
        {loading ? <p className="text-neutral-300">Loading orders…</p> : orders.length === 0 ? (
          <p className="text-neutral-300">No orders found.</p>
        ) : orders.map((order) => (
          <div key={order._id} className="p-4 bg-luxury-card rounded-xl border border-luxury-border space-y-3">
            <div>
              <p className="text-white font-bold break-all">Order: {order._id}</p>
              <p className="text-xs text-neutral-400">
                Customer: {order.user?.name || "Unknown"} · {order.user?.email || ""}
              </p>
              <p className="text-sm text-neutral-200">
                Total: ₹{Number(order.totalAmount).toFixed(2)} · Payment: {order.paymentStatus} · Order: {order.orderStatus}
              </p>
              {order.upiRefNumber && <p className="text-sm text-neutral-300">UPI reference: {order.upiRefNumber}</p>}
            </div>
            {order.paymentStatus !== "PAID" && (
              <div className="flex flex-wrap gap-2">
                <button onClick={() => updatePayment(order._id, "PAID")} className="rounded-lg bg-emerald-700 px-3 py-2 text-sm font-semibold text-white">
                  Confirm payment received
                </button>
                <button onClick={() => updatePayment(order._id, "FAILED")} className="rounded-lg bg-red-700 px-3 py-2 text-sm font-semibold text-white">
                  Mark payment failed
                </button>
              </div>
            )}
            <label className="flex flex-wrap items-center gap-2 text-sm text-neutral-300">
              Order status
              <select value={order.orderStatus} onChange={(event) => updateStatus(order._id, event.target.value)} className="rounded-lg bg-black/30 border border-white/20 p-2 text-white">
                {["PENDING_PAYMENT", "VERIFYING_PAYMENT", "CONFIRMED", "OUT_FOR_DELIVERY", "DELIVERED", "CANCELLED"].map((status) => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
