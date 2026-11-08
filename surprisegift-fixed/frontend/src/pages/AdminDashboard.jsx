import React, { useEffect, useState } from "react";
import API from "../services/api";
import { Package, RefreshCw } from "lucide-react";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const { data } = await API.get("/orders/admin/all");
      setOrders(data.orders || []);
    } catch (error) {
      alert("Failed to load orders. Are you an admin?");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (orderId, newStatus) => {
    try {
      await API.put(`/orders/admin/${orderId}/status`, { status: newStatus });
      fetchOrders();
    } catch (error) {
      alert("Failed to update status");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-black text-gray-900 flex items-center gap-2">
            <Package /> Admin Orders
          </h1>
          <button
            onClick={fetchOrders}
            className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md"
          >
            <RefreshCw size={20} className={loading ? "animate-spin" : ""} />
          </button>
        </div>
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              <div>
                <p className="font-bold text-gray-900 text-lg">
                  {order.orderId}
                </p>
                <p className="text-gray-600 text-sm">
                  {order.customerDetails?.name} • {order.customerDetails?.phone}
                </p>
                <p className="text-gray-600 text-sm">
                  {order.customerDetails?.address},{" "}
                  {order.customerDetails?.pincode}
                </p>
              </div>
              <div className="text-right">
                <p className="font-black text-xl text-pink-600">
                  ₹{order.amount}
                </p>
                <p className="text-xs text-gray-500">{order.paymentMethod}</p>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-500">
                  Update Status:
                </label>
                <select
                  value={order.status}
                  onChange={(e) => updateStatus(order.orderId, e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 text-sm font-bold bg-gray-50"
                >
                  <option value="PENDING">PENDING</option>
                  <option value="CONFIRMED">CONFIRMED</option>
                  <option value="OUT_FOR_DELIVERY">OUT FOR DELIVERY</option>
                  <option value="DELIVERED">DELIVERED</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
