// import React, { useState } from "react";
// import API from "../services/api";

// export const TrackOrder = () => {
//   const [orderId, setOrderId] = useState("");
//   const [order, setOrder] = useState(null);

//   const handleTrack = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await API.get(`/orders/track/${orderId}`);
//       setOrder(data.order);
//     } catch (err) {
//       alert("Order ID not found");
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto px-4 py-12">
//       <h2 className="text-3xl font-extrabold text-white mb-6 text-center">
//         Track Order
//       </h2>
//       <form onSubmit={handleTrack} className="flex gap-4 mb-8">
//         <input
//           type="text"
//           placeholder="Enter Order ID"
//           value={orderId}
//           onChange={(e) => setOrderId(e.target.value)}
//           required
//           className="flex-grow p-4 rounded-xl bg-luxury-card border text-white"
//         />
//         <button
//           type="submit"
//           className="px-6 bg-luxury-pink text-white font-bold rounded-xl"
//         >
//           Track
//         </button>
//       </form>

//       {order && (
//         <div className="glass-panel p-8 rounded-3xl space-y-3">
//           <p className="text-luxury-pink font-bold">
//             Status: {order.orderStatus}
//           </p>
//           <p className="text-white">Amount: ₹{order.totalAmount}</p>
//           <p className="text-neutral-400">
//             Recipient: {order.shippingAddress.recipientName}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const TrackOrder = () => {
  const location = useLocation();
  const [orderIdInput, setOrderIdInput] = useState("");
  const [activeOrder, setActiveOrder] = useState(null);

  useEffect(() => {
    // 1. URL search param check (e.g. /track-order?id=#SG-12345)
    const params = new URLSearchParams(location.search);
    const paramId = params.get("id");

    if (paramId) {
      setOrderIdInput(paramId);
      setActiveOrder({
        id: paramId,
        status: "Processing",
        step: 2,
        estimatedDelivery: "14 Oct - 16 Oct, 2026",
      });
    } else {
      // 2. Local storage active order auto-load
      const savedOrder = JSON.parse(localStorage.getItem("lastPlacedOrder"));
      if (savedOrder) {
        setOrderIdInput(savedOrder.orderId);
        setActiveOrder({
          id: savedOrder.orderId,
          status: "Processing",
          step: 2,
          estimatedDelivery: "14 Oct - 16 Oct, 2026",
        });
      }
    }
  }, [location]);

  const handleManualSearch = (e) => {
    e.preventDefault();
    if (orderIdInput) {
      setActiveOrder({
        id: orderIdInput,
        status: "Processing",
        step: 2,
        estimatedDelivery: "14 Oct - 16 Oct, 2026",
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-black">
          Track Your Surprise Package
        </h1>
        <p className="text-gray-400 text-sm">
          Real-time status of your special surprise gift delivery
        </p>
      </div>

      {/* Manual Search Bar (Optional fallback) */}
      <form onSubmit={handleManualSearch} className="flex gap-3">
        <input
          type="text"
          value={orderIdInput}
          onChange={(e) => setOrderIdInput(e.target.value)}
          placeholder="Enter Order ID or Phone Number"
          className="flex-1 bg-white/5 border border-white/20 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:border-pink-500"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 rounded-2xl font-bold shadow-lg"
        >
          Track
        </button>
      </form>

      {/* Automatic Live Order Tracking Card (Amazon / Flipkart Style) */}
      {activeOrder ? (
        <div className="bg-white/[0.05] border border-pink-500/30 rounded-3xl p-6 md:p-8 backdrop-blur-xl space-y-6 shadow-xl">
          <div className="flex flex-col md:flex-row justify-between md:items-center border-b border-white/10 pb-4 gap-2">
            <div>
              <p className="text-xs text-gray-400">Order Reference</p>
              <p className="font-extrabold text-pink-400 text-xl">
                {activeOrder.id}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Estimated Delivery</p>
              <p className="font-bold text-white">
                {activeOrder.estimatedDelivery}
              </p>
            </div>
          </div>

          {/* Stepper Timeline */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-4">
            <div
              className={`p-3 rounded-2xl border ${activeOrder.step >= 1 ? "bg-green-500/20 border-green-500 text-green-300" : "bg-white/5 border-white/10 text-gray-400"}`}
            >
              <div className="text-xl mb-1">✓</div>
              <p className="text-xs font-bold">Order Confirmed</p>
            </div>
            <div
              className={`p-3 rounded-2xl border ${activeOrder.step >= 2 ? "bg-pink-500/20 border-pink-500 text-pink-300" : "bg-white/5 border-white/10 text-gray-400"}`}
            >
              <div className="text-xl mb-1">🎁</div>
              <p className="text-xs font-bold">Gift Preparing</p>
            </div>
            <div
              className={`p-3 rounded-2xl border ${activeOrder.step >= 3 ? "bg-purple-500/20 border-purple-500 text-purple-300" : "bg-white/5 border-white/10 text-gray-400"}`}
            >
              <div className="text-xl mb-1">🚚</div>
              <p className="text-xs font-bold">Out for Delivery</p>
            </div>
            <div
              className={`p-3 rounded-2xl border ${activeOrder.step >= 4 ? "bg-green-500/20 border-green-500 text-green-300" : "bg-white/5 border-white/10 text-gray-400"}`}
            >
              <div className="text-xl mb-1">✨</div>
              <p className="text-xs font-bold">Surprise Delivered</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-white/5 rounded-3xl border border-white/10 text-gray-400">
          No recent order found. Please place an order or enter your Order ID
          above.
        </div>
      )}
    </div>
  );
};

export default TrackOrder;
