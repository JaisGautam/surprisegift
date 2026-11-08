import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { Package, LogOut, ArrowRight } from "lucide-react";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    const fetchOrders = async () => {
      try {
        const { data } = await API.get("/orders/my-orders");
        setOrders(data.orders || []);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-black">
              {user.name?.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-2xl font-black text-gray-900">
                Hello, {user.name}
              </h1>
              <p className="text-gray-500">
                {user.email} • {user.phone}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            className="flex items-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 px-5 py-3 rounded-xl font-bold transition"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
            <Package className="text-pink-500" size={24} />
            <h2 className="text-xl font-bold text-gray-900">My Orders</h2>
          </div>

          {loading ? (
            <p className="text-gray-500 animate-pulse">
              Loading your orders...
            </p>
          ) : orders.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500 mb-4">
                You have not placed any orders yet.
              </p>
              <button
                onClick={() => navigate("/packages")}
                className="bg-pink-500 text-white px-6 py-2 rounded-xl font-bold"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order._id}
                  className="border border-gray-200 rounded-2xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-md transition"
                >
                  <div>
                    <p className="font-bold text-gray-900">
                      Order ID:{" "}
                      <span className="text-pink-600">{order.orderId}</span>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Date:{" "}
                      {new Date(order.createdAt).toLocaleDateString("en-IN")}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-black text-gray-900">
                      ₹{order.amount}
                    </p>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${order.status === "SUCCESS" || order.status === "CONFIRMED" ? "bg-green-100 text-green-700" : order.status === "DELIVERED" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"}`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <button
                    onClick={() => navigate("/track-order")}
                    className="bg-gray-900 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-1 hover:bg-gray-800 transition"
                  >
                    Track <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
