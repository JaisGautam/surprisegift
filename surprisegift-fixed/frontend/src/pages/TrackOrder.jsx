// // // import React, { useEffect, useState } from "react";
// // // import { useLocation } from "react-router-dom";
// // // import API from "../services/api";

// // // const TrackOrder = () => {
// // //   const location = useLocation();
// // //   const [orderId, setOrderId] = useState("");
// // //   const [order, setOrder] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState("");

// // //   useEffect(() => {
// // //     const params = new URLSearchParams(location.search);
// // //     const initialId = params.get("orderId") || params.get("id") ||
// // //       JSON.parse(localStorage.getItem("lastPlacedOrder") || "null")?.orderId || "";
// // //     if (initialId) {
// // //       setOrderId(initialId);
// // //       loadOrder(initialId);
// // //     }
// // //     // eslint-disable-next-line react-hooks/exhaustive-deps
// // //   }, [location.search]);

// // //   const loadOrder = async (value) => {
// // //     const trimmed = value.trim();
// // //     if (!trimmed) return;
// // //     setLoading(true);
// // //     setError("");
// // //     setOrder(null);
// // //     try {
// // //       const { data } = await API.get(`/orders/track/${encodeURIComponent(trimmed)}`);
// // //       setOrder(data.order);
// // //     } catch (err) {
// // //       setError(err.response?.status === 401
// // //         ? "Please log in to track your order."
// // //         : err.response?.data?.message || "Order not found, or it does not belong to this account.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleSubmit = (event) => {
// // //     event.preventDefault();
// // //     loadOrder(orderId);
// // //   };

// // //   return (
// // //     <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
// // //       <div className="text-center space-y-2">
// // //         <h1 className="text-3xl md:text-4xl font-black">Track Your Surprise Package</h1>
// // //         <p className="text-gray-400 text-sm">Check the latest saved status of your order.</p>
// // //       </div>
// // //       <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
// // //         <input
// // //           type="text"
// // //           value={orderId}
// // //           onChange={(event) => setOrderId(event.target.value)}
// // //           placeholder="Enter your order ID"
// // //           required
// // //           className="flex-1 bg-white/5 border border-white/20 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:border-pink-500"
// // //         />
// // //         <button type="submit" disabled={loading} className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 rounded-2xl font-bold disabled:opacity-60">
// // //           {loading ? "Checking…" : "Track"}
// // //         </button>
// // //       </form>
// // //       {error && <p role="alert" className="text-red-400 text-center">{error}</p>}
// // //       {order && (
// // //         <section className="bg-white/[0.05] border border-pink-500/30 rounded-3xl p-6 md:p-8 space-y-4">
// // //           <p className="text-xs text-gray-400">Order reference</p>
// // //           <p className="font-extrabold text-pink-400 break-all">{order._id}</p>
// // //           <p className="text-white">Order status: <strong>{order.orderStatus}</strong></p>
// // //           <p className="text-white">Payment status: <strong>{order.paymentStatus}</strong></p>
// // //           <p className="text-white">Total: ₹{Number(order.totalAmount).toFixed(2)}</p>
// // //           <p className="text-gray-300">Recipient: {order.shippingAddress?.recipientName}</p>
// // //           <p className="text-gray-400 text-sm">Last updated: {new Date(order.updatedAt).toLocaleString()}</p>
// // //         </section>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default TrackOrder;

// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import {
// //   Package,
// //   Truck,
// //   CheckCircle2,
// //   ChevronRight,
// //   Search,
// // } from "lucide-react";

// // const TrackOrder = () => {
// //   const [orderId, setOrderId] = useState("");
// //   const [orderData, setOrderData] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");

// //   // Page load hote hi localStorage se Order ID uthao
// //   useEffect(() => {
// //     const savedOrderId = localStorage.getItem("lastOrderId");
// //     if (savedOrderId) {
// //       setOrderId(savedOrderId);
// //       fetchOrder(savedOrderId);
// //     }
// //   }, []);

// //   const fetchOrder = async (id) => {
// //     setLoading(true);
// //     setError("");
// //     try {
// //       // Backend ko call karein order details lene ke liye
// //       const res = await fetch(`/api/orders/${id}`);
// //       const data = await res.json();

// //       if (res.ok) {
// //         setOrderData(data.order);
// //       } else {
// //         setError("Order nahi mila. Kripya ID check karein.");
// //       }
// //     } catch (err) {
// //       setError("Server se connect nahi ho paya.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleManualSearch = (e) => {
// //     e.preventDefault();
// //     if (orderId.trim()) {
// //       fetchOrder(orderId.trim());
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#0f0f1a] text-white p-4 py-10 flex justify-center">
// //       <div className="w-full max-w-2xl space-y-8">
// //         <div className="text-center">
// //           <h1 className="text-3xl md:text-4xl font-black mb-2">
// //             Track Your Order
// //           </h1>
// //           <p className="text-gray-400">
// //             Apne surprise gift ki live location check karein.
// //           </p>
// //         </div>

// //         {/* Agar Order ID saved nahi hai toh manual search dikhao */}
// //         {!orderData && (
// //           <form onSubmit={handleManualSearch} className="flex gap-2">
// //             <div className="relative flex-1">
// //               <Search
// //                 className="absolute left-3 top-3.5 text-gray-400"
// //                 size={20}
// //               />
// //               <input
// //                 type="text"
// //                 value={orderId}
// //                 onChange={(e) => setOrderId(e.target.value)}
// //                 placeholder="Enter Order ID (e.g. order_xyz123)"
// //                 className="w-full bg-[#1a1a2e] border border-gray-700 rounded-xl pl-10 pr-4 py-3 text-white focus:border-pink-500 outline-none"
// //               />
// //             </div>
// //             <button
// //               type="submit"
// //               className="bg-pink-500 hover:bg-pink-600 px-6 rounded-xl font-bold transition"
// //             >
// //               Track
// //             </button>
// //           </form>
// //         )}

// //         {loading && (
// //           <p className="text-center text-pink-400 animate-pulse">
// //             Fetching order details...
// //           </p>
// //         )}
// //         {error && (
// //           <p className="text-center text-red-400 bg-red-500/10 p-3 rounded-lg">
// //             {error}
// //           </p>
// //         )}

// //         {/* Order Details Show Karein */}
// //         {orderData && (
// //           <div className="bg-[#1a1a2e] border border-gray-800 rounded-2xl p-6 md:p-8 space-y-6 animate-slide-in">
// //             <div className="flex justify-between items-center border-b border-gray-700 pb-4">
// //               <div>
// //                 <p className="text-sm text-gray-400">Order ID</p>
// //                 <p className="font-bold text-lg text-pink-400">
// //                   {orderData.orderId}
// //                 </p>
// //               </div>
// //               <div className="text-right">
// //                 <p className="text-sm text-gray-400">Total Amount</p>
// //                 <p className="font-bold text-lg text-white">
// //                   ₹{orderData.amount}
// //                 </p>
// //               </div>
// //             </div>

// //             {/* Items List */}
// //             <div>
// //               <h3 className="font-bold text-gray-300 mb-3">
// //                 Items in this order:
// //               </h3>
// //               <div className="space-y-3">
// //                 {orderData.cartItems?.map((item, idx) => (
// //                   <div
// //                     key={idx}
// //                     className="flex justify-between text-sm bg-black/20 p-3 rounded-lg"
// //                   >
// //                     <span>
// //                       {item.title || item.name} (x{item.quantity})
// //                     </span>
// //                     <span className="text-pink-400">₹{item.price}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Tracking Timeline */}
// //             <div>
// //               <h3 className="font-bold text-gray-300 mb-4">Order Status</h3>
// //               <div className="relative border-l-2 border-gray-700 ml-3 space-y-8">
// //                 {/* Step 1: Confirmed */}
// //                 <div className="relative pl-6">
// //                   <span className="absolute -left-[9px] top-0 bg-green-500 rounded-full w-4 h-4 border-4 border-[#1a1a2e]"></span>
// //                   <p className="font-bold text-white">Order Confirmed</p>
// //                   <p className="text-xs text-gray-400">
// //                     We have received your order.
// //                   </p>
// //                 </div>

// //                 {/* Step 2: Packed */}
// //                 <div
// //                   className={`relative pl-6 ${orderData.status === "PENDING" ? "opacity-50" : ""}`}
// //                 >
// //                   <span
// //                     className={`absolute -left-[9px] top-0 rounded-full w-4 h-4 border-4 border-[#1a1a2e] ${orderData.status !== "PENDING" ? "bg-green-500" : "bg-gray-600"}`}
// //                   ></span>
// //                   <p className="font-bold text-white">Packed & Ready</p>
// //                   <p className="text-xs text-gray-400">
// //                     Your gift is being beautifully packed.
// //                   </p>
// //                 </div>

// //                 {/* Step 3: Out for delivery */}
// //                 <div
// //                   className={`relative pl-6 ${orderData.status === "DELIVERED" ? "opacity-100" : "opacity-50"}`}
// //                 >
// //                   <span
// //                     className={`absolute -left-[9px] top-0 rounded-full w-4 h-4 border-4 border-[#1a1a2e] ${orderData.status === "DELIVERED" ? "bg-green-500" : "bg-gray-600"}`}
// //                   ></span>
// //                   <p className="font-bold text-white">Out for Delivery</p>
// //                   <p className="text-xs text-gray-400">
// //                     Our delivery partner is on the way.
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="pt-4 border-t border-gray-700 flex justify-center">
// //               <Link
// //                 to="/shop"
// //                 className="text-pink-400 hover:text-pink-300 font-semibold text-sm"
// //               >
// //                 Continue Shopping →
// //               </Link>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default TrackOrder;

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Package,
//   Truck,
//   CheckCircle2,
//   Search,
//   MapPin,
//   Box,
//   Home,
// } from "lucide-react";

// const TrackOrder = () => {
//   const [orderId, setOrderId] = useState("");
//   const [orderData, setOrderData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // Status ke hisaab se animation ki position set karenge (0% to 100%)
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const savedOrderId = localStorage.getItem("lastOrderId");
//     if (savedOrderId) {
//       setOrderId(savedOrderId);
//       fetchOrder(savedOrderId);
//     }
//   }, []);

//   const fetchOrder = async (id) => {
//     setLoading(true);
//     setError("");
//     try {
//       // Local testing ke liye localhost:5000 use karein, Vercel par /api/orders/${id}
//       const res = await fetch(`/api/orders/${id}`);
//       const data = await res.json();

//       if (res.ok) {
//         setOrderData(data.order);

//         // 🔥 Order Status ke hisaab se truck ki position set karna
//         if (data.order.status === "PENDING")
//           setProgress(15); // Factory se nikla
//         else if (data.order.status === "PACKED")
//           setProgress(40); // Packaging hui
//         else if (data.order.status === "OUT_FOR_DELIVERY")
//           setProgress(75); // Delivery boy ke paas
//         else if (data.order.status === "DELIVERED") setProgress(100); // Deliver ho gaya
//       } else {
//         setError("Order nahi mila. Kripya ID check karein.");
//       }
//     } catch (err) {
//       setError("Server se connect nahi ho paya.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleManualSearch = (e) => {
//     e.preventDefault();
//     if (orderId.trim()) fetchOrder(orderId.trim());
//   };

//   return (
//     <div className="min-h-screen bg-[#0f0f1a] text-white p-4 py-10 flex justify-center">
//       <div className="w-full max-w-4xl space-y-8">
//         <div className="text-center">
//           <h1 className="text-3xl md:text-4xl font-black mb-2">
//             Live Order Tracking
//           </h1>
//           <p className="text-gray-400">
//             Apne surprise gift ki live location check karein.
//           </p>
//         </div>

//         {/* Agar data nahi hai toh search bar */}
//         {!orderData && (
//           <form
//             onSubmit={handleManualSearch}
//             className="flex gap-2 max-w-xl mx-auto"
//           >
//             <div className="relative flex-1">
//               <Search
//                 className="absolute left-3 top-3.5 text-gray-400"
//                 size={20}
//               />
//               <input
//                 type="text"
//                 value={orderId}
//                 onChange={(e) => setOrderId(e.target.value)}
//                 placeholder="Enter Order ID (e.g. order_xyz123)"
//                 className="w-full bg-[#1a1a2e] border border-gray-700 rounded-xl pl-10 pr-4 py-3 text-white focus:border-pink-500 outline-none"
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-pink-500 hover:bg-pink-600 px-6 rounded-xl font-bold transition"
//             >
//               Track
//             </button>
//           </form>
//         )}

//         {loading && (
//           <p className="text-center text-pink-400 animate-pulse">
//             Connecting to delivery satellite...
//           </p>
//         )}
//         {error && (
//           <p className="text-center text-red-400 bg-red-500/10 p-3 rounded-xl max-w-xl mx-auto">
//             {error}
//           </p>
//         )}

//         {orderData && (
//           <div className="space-y-8 animate-fadeIn">
//             {/* 🔥 LIVE MAP ANIMATION SECTION */}
//             <div className="bg-[#1a1a2e] border border-gray-800 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
//               {/* Map Background Design */}
//               <div
//                 className="absolute inset-0 opacity-10 pointer-events-none"
//                 style={{
//                   backgroundImage:
//                     "radial-gradient(#ec4899 1px, transparent 1px)",
//                   backgroundSize: "20px 20px",
//                 }}
//               ></div>

//               <h2 className="text-xl font-bold mb-10 text-center text-gray-300">
//                 Live Tracking Map
//               </h2>

//               {/* The Animated Track */}
//               <div className="relative h-2 bg-gray-700 rounded-full w-full max-w-2xl mx-auto mb-4">
//                 {/* Colored Progress Bar */}
//                 <div
//                   className="absolute h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-[2000ms] ease-in-out"
//                   style={{ width: `${progress}%` }}
//                 ></div>

//                 {/* Moving Delivery Truck Icon */}
//                 <div
//                   className="absolute -top-5 transition-all duration-[2000ms] ease-in-out transform -translate-x-1/2"
//                   style={{ left: `${progress}%` }}
//                 >
//                   <div className="bg-pink-500 p-2 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.8)] animate-bounce relative">
//                     <Truck size={24} className="text-white" />
//                     {/* Glowing effect under the truck */}
//                     <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-2 bg-pink-500 blur-md rounded-full opacity-70"></div>
//                   </div>
//                 </div>

//                 {/* Static Checkpoints (Icons) */}
//                 <div className="absolute inset-0 flex justify-between -top-6">
//                   <div className="flex flex-col items-center">
//                     <div
//                       className={`p-1.5 rounded-full bg-[#1a1a2e] border-2 ${progress >= 15 ? "border-pink-500 text-pink-400" : "border-gray-600 text-gray-600"}`}
//                     >
//                       <Box size={18} />
//                     </div>
//                     <span className="text-[10px] text-gray-400 mt-2">
//                       Factory
//                     </span>
//                   </div>
//                   <div className="flex flex-col items-center">
//                     <div
//                       className={`p-1.5 rounded-full bg-[#1a1a2e] border-2 ${progress >= 40 ? "border-pink-500 text-pink-400" : "border-gray-600 text-gray-600"}`}
//                     >
//                       <Package size={18} />
//                     </div>
//                     <span className="text-[10px] text-gray-400 mt-2">
//                       Packed
//                     </span>
//                   </div>
//                   <div className="flex flex-col items-center">
//                     <div
//                       className={`p-1.5 rounded-full bg-[#1a1a2e] border-2 ${progress >= 75 ? "border-pink-500 text-pink-400" : "border-gray-600 text-gray-600"}`}
//                     >
//                       <Truck size={18} />
//                     </div>
//                     <span className="text-[10px] text-gray-400 mt-2">
//                       Out for Delivery
//                     </span>
//                   </div>
//                   <div className="flex flex-col items-center">
//                     <div
//                       className={`p-1.5 rounded-full bg-[#1a1a2e] border-2 ${progress === 100 ? "border-green-500 text-green-400" : "border-gray-600 text-gray-600"}`}
//                     >
//                       <Home size={18} />
//                     </div>
//                     <span className="text-[10px] text-gray-400 mt-2">
//                       Delivered
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="text-center mt-12">
//                 <p className="text-lg font-bold text-white mb-1">
//                   {progress === 100
//                     ? "Delivered Successfully! 🎉"
//                     : "Your gift is on the way!"}
//                 </p>
//                 <p className="text-sm text-gray-400">
//                   Estimated Delivery:{" "}
//                   {new Date(
//                     new Date(orderData.createdAt).getTime() +
//                       3 * 24 * 60 * 60 * 1000,
//                   ).toLocaleDateString("en-IN", {
//                     day: "numeric",
//                     month: "short",
//                   })}
//                 </p>
//               </div>
//             </div>

//             {/* Order Details (Items list) */}
//             <div className="bg-[#1a1a2e] border border-gray-800 rounded-2xl p-6">
//               <h3 className="font-bold text-lg mb-4 text-white">
//                 Order Details
//               </h3>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
//                 <div>
//                   <p className="text-gray-400 mb-1">Order ID</p>
//                   <p className="font-mono text-pink-400">{orderData.orderId}</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-400 mb-1">Total Amount</p>
//                   <p className="font-bold">₹{orderData.amount}</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-400 mb-1">Status</p>
//                   <p className="font-bold text-green-400">{orderData.status}</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-400 mb-1">Delivery Date</p>
//                   <p className="font-bold">11 Oct - 13 Oct, 2026</p>
//                 </div>
//               </div>

//               <div className="border-t border-gray-800 pt-4">
//                 <h4 className="font-bold text-gray-300 mb-3">
//                   Items in this order:
//                 </h4>
//                 <div className="space-y-3">
//                   {orderData.cartItems?.map((item, idx) => (
//                     <div
//                       key={idx}
//                       className="flex justify-between text-sm bg-black/20 p-3 rounded-lg"
//                     >
//                       <span>
//                         {item.title || item.name} (x{item.quantity})
//                       </span>
//                       <span className="text-pink-400">₹{item.price}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="text-center">
//               <Link
//                 to="/shop"
//                 className="text-pink-400 hover:text-pink-300 font-semibold text-sm"
//               >
//                 ← Back to Shop
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TrackOrder;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Truck, Search, Box, Home } from "lucide-react";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const savedOrderId = localStorage.getItem("lastOrderId");
    if (savedOrderId) {
      setOrderId(savedOrderId);
      fetchOrder(savedOrderId);
    }
  }, []);

  const fetchOrder = async (id) => {
    setLoading(true);
    setError("");
    try {
      // 🔥 CHANGE 3: Yahan VITE_API_URL add kiya hai
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/orders/status/${id}`,
      );
      const data = await res.json();

      if (res.ok) {
        setOrderData(data.order);
        if (data.order.status === "PENDING") setProgress(15);
        else if (data.order.status === "PACKED") setProgress(40);
        else if (data.order.status === "OUT_FOR_DELIVERY") setProgress(75);
        else if (data.order.status === "DELIVERED") setProgress(100);
      } else {
        setError("Order nahi mila. Kripya ID check karein.");
      }
    } catch (err) {
      setError("Server se connect nahi ho paya.");
    } finally {
      setLoading(false);
    }
  };

  const handleManualSearch = (e) => {
    e.preventDefault();
    if (orderId.trim()) fetchOrder(orderId.trim());
  };

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white p-4 py-10 flex justify-center">
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-black mb-2">
            Live Order Tracking
          </h1>
          <p className="text-gray-400">
            Apne surprise gift ki live location check karein.
          </p>
        </div>

        {!orderData && (
          <form
            onSubmit={handleManualSearch}
            className="flex gap-2 max-w-xl mx-auto"
          >
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-3.5 text-gray-400"
                size={20}
              />
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter Order ID (e.g. order_xyz123)"
                className="w-full bg-[#1a1a2e] border border-gray-700 rounded-xl pl-10 pr-4 py-3 text-white focus:border-pink-500 outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 px-6 rounded-xl font-bold transition"
            >
              Track
            </button>
          </form>
        )}

        {loading && (
          <p className="text-center text-pink-400 animate-pulse">
            Connecting to delivery satellite...
          </p>
        )}
        {error && (
          <p className="text-center text-red-400 bg-red-500/10 p-3 rounded-xl max-w-xl mx-auto">
            {error}
          </p>
        )}

        {orderData && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-[#1a1a2e] border border-gray-800 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(#ec4899 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>
              <h2 className="text-xl font-bold mb-10 text-center text-gray-300">
                Live Tracking Map
              </h2>
              <div className="relative h-2 bg-gray-700 rounded-full w-full max-w-2xl mx-auto mb-4">
                <div
                  className="absolute h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-[2000ms] ease-in-out"
                  style={{ width: `${progress}%` }}
                ></div>
                <div
                  className="absolute -top-5 transition-all duration-[2000ms] ease-in-out transform -translate-x-1/2"
                  style={{ left: `${progress}%` }}
                >
                  <div className="bg-pink-500 p-2 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.8)] animate-bounce relative">
                    <Truck size={24} className="text-white" />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-2 bg-pink-500 blur-md rounded-full opacity-70"></div>
                  </div>
                </div>
                <div className="absolute inset-0 flex justify-between -top-6">
                  <div className="flex flex-col items-center">
                    <div
                      className={`p-1.5 rounded-full bg-[#1a1a2e] border-2 ${progress >= 15 ? "border-pink-500 text-pink-400" : "border-gray-600 text-gray-600"}`}
                    >
                      <Box size={18} />
                    </div>
                    <span className="text-[10px] text-gray-400 mt-2">
                      Factory
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div
                      className={`p-1.5 rounded-full bg-[#1a1a2e] border-2 ${progress >= 40 ? "border-pink-500 text-pink-400" : "border-gray-600 text-gray-600"}`}
                    >
                      <Box size={18} />
                    </div>
                    <span className="text-[10px] text-gray-400 mt-2">
                      Packed
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div
                      className={`p-1.5 rounded-full bg-[#1a1a2e] border-2 ${progress >= 75 ? "border-pink-500 text-pink-400" : "border-gray-600 text-gray-600"}`}
                    >
                      <Truck size={18} />
                    </div>
                    <span className="text-[10px] text-gray-400 mt-2">
                      Out for Delivery
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div
                      className={`p-1.5 rounded-full bg-[#1a1a2e] border-2 ${progress === 100 ? "border-green-500 text-green-400" : "border-gray-600 text-gray-600"}`}
                    >
                      <Home size={18} />
                    </div>
                    <span className="text-[10px] text-gray-400 mt-2">
                      Delivered
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <p className="text-lg font-bold text-white mb-1">
                  {progress === 100
                    ? "Delivered Successfully! 🎉"
                    : "Your gift is on the way!"}
                </p>
                <p className="text-sm text-gray-400">
                  Estimated Delivery:{" "}
                  {new Date(
                    new Date(orderData.createdAt).getTime() +
                      3 * 24 * 60 * 60 * 1000,
                  ).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                  })}
                </p>
              </div>
            </div>

            <div className="bg-[#1a1a2e] border border-gray-800 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-4 text-white">
                Order Details
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
                <div>
                  <p className="text-gray-400 mb-1">Order ID</p>
                  <p className="font-mono text-pink-400">{orderData.orderId}</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Total Amount</p>
                  <p className="font-bold">₹{orderData.amount}</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Status</p>
                  <p className="font-bold text-green-400">{orderData.status}</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Delivery Date</p>
                  <p className="font-bold">11 Oct - 13 Oct, 2026</p>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-4">
                <h4 className="font-bold text-gray-300 mb-3">
                  Items in this order:
                </h4>
                <div className="space-y-3">
                  {orderData.cartItems?.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between text-sm bg-black/20 p-3 rounded-lg"
                    >
                      <span>
                        {item.title || item.name} (x{item.quantity})
                      </span>
                      <span className="text-pink-400">₹{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/shop"
                className="text-pink-400 hover:text-pink-300 font-semibold text-sm"
              >
                ← Back to Shop
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;
