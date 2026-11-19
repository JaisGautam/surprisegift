// // // import React, { useEffect, useState } from "react";
// // // import API from "../services/api";
// // // import { Package, RefreshCw } from "lucide-react";

// // // const AdminDashboard = () => {
// // //   const [orders, setOrders] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   const fetchOrders = async () => {
// // //     setLoading(true);
// // //     try {
// // //       const { data } = await API.get("/orders/admin/all");
// // //       setOrders(data.orders || []);
// // //     } catch (error) {
// // //       alert("Failed to load orders. Are you an admin?");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchOrders();
// // //   }, []);

// // //   const updateStatus = async (orderId, newStatus) => {
// // //     try {
// // //       await API.put(`/orders/admin/${orderId}/status`, { status: newStatus });
// // //       fetchOrders();
// // //     } catch (error) {
// // //       alert("Failed to update status");
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 p-4 md:p-8">
// // //       <div className="max-w-6xl mx-auto">
// // //         <div className="flex justify-between items-center mb-8">
// // //           <h1 className="text-3xl font-black text-gray-900 flex items-center gap-2">
// // //             <Package /> Admin Orders
// // //           </h1>
// // //           <button
// // //             onClick={fetchOrders}
// // //             className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md"
// // //           >
// // //             <RefreshCw size={20} className={loading ? "animate-spin" : ""} />
// // //           </button>
// // //         </div>
// // //         <div className="space-y-4">
// // //           {orders.map((order) => (
// // //             <div
// // //               key={order._id}
// // //               className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
// // //             >
// // //               <div>
// // //                 <p className="font-bold text-gray-900 text-lg">
// // //                   {order.orderId}
// // //                 </p>
// // //                 <p className="text-gray-600 text-sm">
// // //                   {order.customerDetails?.name} • {order.customerDetails?.phone}
// // //                 </p>
// // //                 <p className="text-gray-600 text-sm">
// // //                   {order.customerDetails?.address},{" "}
// // //                   {order.customerDetails?.pincode}
// // //                 </p>
// // //               </div>
// // //               <div className="text-right">
// // //                 <p className="font-black text-xl text-pink-600">
// // //                   ₹{order.amount}
// // //                 </p>
// // //                 <p className="text-xs text-gray-500">{order.paymentMethod}</p>
// // //               </div>
// // //               <div className="flex flex-col gap-2">
// // //                 <label className="text-xs font-bold text-gray-500">
// // //                   Update Status:
// // //                 </label>
// // //                 <select
// // //                   value={order.status}
// // //                   onChange={(e) => updateStatus(order.orderId, e.target.value)}
// // //                   className="border border-gray-300 rounded-lg p-2 text-sm font-bold bg-gray-50"
// // //                 >
// // //                   <option value="PENDING">PENDING</option>
// // //                   <option value="CONFIRMED">CONFIRMED</option>
// // //                   <option value="OUT_FOR_DELIVERY">OUT FOR DELIVERY</option>
// // //                   <option value="DELIVERED">DELIVERED</option>
// // //                 </select>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AdminDashboard;

// // import React, { useEffect, useState } from "react";
// // import API from "../services/api";
// // import {
// //   Package,
// //   RefreshCw,
// //   IndianRupee,
// //   TrendingUp,
// //   Truck,
// //   CheckCircle,
// //   Search,
// //   MapPin,
// //   Phone,
// //   User,
// // } from "lucide-react";

// // const AdminDashboard = () => {
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [filterType, setFilterType] = useState("ALL"); // ALL, COD, ONLINE
// //   const [filterStatus, setFilterStatus] = useState("ALL"); // ALL, PENDING, DELIVERED etc.

// //   const fetchOrders = async () => {
// //     setLoading(true);
// //     try {
// //       const { data } = await API.get("/orders/admin/all");
// //       setOrders(data.orders || []);
// //     } catch (error) {
// //       alert("Failed to load orders. Are you an admin?");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchOrders();
// //   }, []);

// //   const updateStatus = async (orderId, newStatus) => {
// //     try {
// //       await API.put(`/orders/admin/${orderId}/status`, { status: newStatus });
// //       fetchOrders();
// //     } catch (error) {
// //       alert("Failed to update status");
// //     }
// //   };

// //   // 🔥 Filters Logic
// //   const filteredOrders = orders.filter((order) => {
// //     const matchType =
// //       filterType === "ALL" || order.paymentMethod === filterType;
// //     const matchStatus = filterStatus === "ALL" || order.status === filterStatus;
// //     return matchType && matchStatus;
// //   });

// //   // 🔥 Stats Calculation (Charts ke liye)
// //   const totalOrders = orders.length;
// //   const totalRevenue = orders.reduce(
// //     (sum, order) => sum + Number(order.amount),
// //     0,
// //   );
// //   const codOrders = orders.filter((o) => o.paymentMethod === "COD").length;
// //   const onlineOrders = orders.filter(
// //     (o) => o.paymentMethod === "ONLINE",
// //   ).length;

// //   return (
// //     <div className="min-h-screen bg-gray-50 p-4 md:p-8">
// //       <div className="max-w-7xl mx-auto space-y-8">
// //         {/* Header */}
// //         <div className="flex justify-between items-center">
// //           <div>
// //             <h1 className="text-3xl font-black text-gray-900 flex items-center gap-2">
// //               <Package className="text-pink-600" size={32} /> Admin Dashboard
// //             </h1>
// //             <p className="text-gray-500 mt-1">
// //               Manage your orders and track performance.
// //             </p>
// //           </div>
// //           <button
// //             onClick={fetchOrders}
// //             className="bg-white p-3 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
// //           >
// //             <RefreshCw
// //               size={20}
// //               className={
// //                 loading ? "animate-spin text-pink-600" : "text-gray-700"
// //               }
// //             />
// //           </button>
// //         </div>

// //         {/* 📊 Stats Cards (Visual Charts) */}
// //         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
// //           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
// //             <div className="flex items-center gap-3 mb-2">
// //               <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
// //                 <TrendingUp size={20} />
// //               </div>
// //               <p className="text-sm font-bold text-gray-500">Total Orders</p>
// //             </div>
// //             <h3 className="text-3xl font-black text-gray-900">{totalOrders}</h3>
// //           </div>

// //           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
// //             <div className="flex items-center gap-3 mb-2">
// //               <div className="bg-green-50 p-2 rounded-lg text-green-600">
// //                 <IndianRupee size={20} />
// //               </div>
// //               <p className="text-sm font-bold text-gray-500">Total Revenue</p>
// //             </div>
// //             <h3 className="text-3xl font-black text-gray-900">
// //               ₹{totalRevenue}
// //             </h3>
// //           </div>

// //           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
// //             <div className="flex items-center gap-3 mb-2">
// //               <div className="bg-yellow-50 p-2 rounded-lg text-yellow-600">
// //                 <Truck size={20} />
// //               </div>
// //               <p className="text-sm font-bold text-gray-500">COD Orders</p>
// //             </div>
// //             <h3 className="text-3xl font-black text-gray-900">{codOrders}</h3>
// //           </div>

// //           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
// //             <div className="flex items-center gap-3 mb-2">
// //               <div className="bg-purple-50 p-2 rounded-lg text-purple-600">
// //                 <CheckCircle size={20} />
// //               </div>
// //               <p className="text-sm font-bold text-gray-500">Online Payments</p>
// //             </div>
// //             <h3 className="text-3xl font-black text-gray-900">
// //               {onlineOrders}
// //             </h3>
// //           </div>
// //         </div>

// //         {/* 🔍 Filters Section */}
// //         <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap gap-4 items-center">
// //           <div className="flex items-center gap-2">
// //             <span className="text-sm font-bold text-gray-500">Payment:</span>
// //             <select
// //               value={filterType}
// //               onChange={(e) => setFilterType(e.target.value)}
// //               className="border border-gray-300 rounded-lg p-2 text-sm font-semibold outline-none focus:border-pink-500"
// //             >
// //               <option value="ALL">All</option>
// //               <option value="COD">COD</option>
// //               <option value="ONLINE">Online</option>
// //             </select>
// //           </div>

// //           <div className="flex items-center gap-2">
// //             <span className="text-sm font-bold text-gray-500">Status:</span>
// //             <select
// //               value={filterStatus}
// //               onChange={(e) => setFilterStatus(e.target.value)}
// //               className="border border-gray-300 rounded-lg p-2 text-sm font-semibold outline-none focus:border-pink-500"
// //             >
// //               <option value="ALL">All</option>
// //               <option value="PENDING">Pending</option>
// //               <option value="CONFIRMED">Confirmed</option>
// //               <option value="OUT_FOR_DELIVERY">Out for Delivery</option>
// //               <option value="DELIVERED">Delivered</option>
// //             </select>
// //           </div>
// //         </div>

// //         {/* 📦 Orders List */}
// //         <div className="space-y-4">
// //           {loading ? (
// //             <p className="text-center text-gray-500 animate-pulse">
// //               Loading orders...
// //             </p>
// //           ) : filteredOrders.length === 0 ? (
// //             <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
// //               <p className="text-gray-500">
// //                 No orders found matching your filters.
// //               </p>
// //             </div>
// //           ) : (
// //             filteredOrders.map((order) => (
// //               <div
// //                 key={order._id}
// //                 className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6"
// //               >
// //                 {/* Order Info & Customer Details */}
// //                 <div className="flex-1 space-y-2">
// //                   <div className="flex items-center gap-3">
// //                     <p className="font-black text-lg text-gray-900 bg-gray-100 px-3 py-1 rounded-md">
// //                       {order.orderId}
// //                     </p>
// //                     <span
// //                       className={`text-xs font-bold px-2 py-1 rounded-md ${order.paymentMethod === "COD" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}
// //                     >
// //                       {order.paymentMethod}
// //                     </span>
// //                   </div>

// //                   <div className="flex items-start gap-2 text-sm text-gray-600">
// //                     <User size={16} className="mt-0.5 shrink-0" />
// //                     <p>
// //                       <strong>{order.customerDetails?.name}</strong>
// //                     </p>
// //                   </div>
// //                   <div className="flex items-start gap-2 text-sm text-gray-600">
// //                     <Phone size={16} className="mt-0.5 shrink-0" />
// //                     <p>{order.customerDetails?.phone}</p>
// //                   </div>
// //                   <div className="flex items-start gap-2 text-sm text-gray-600">
// //                     <MapPin size={16} className="mt-0.5 shrink-0" />
// //                     <p>
// //                       {order.customerDetails?.address},{" "}
// //                       {order.customerDetails?.pincode}
// //                     </p>
// //                   </div>
// //                 </div>

// //                 {/* Price */}
// //                 <div className="lg:text-right w-full lg:w-auto border-t lg:border-t-0 border-gray-100 pt-3 lg:pt-0">
// //                   <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
// //                     Amount
// //                   </p>
// //                   <p className="font-black text-2xl text-pink-600">
// //                     ₹{order.amount}
// //                   </p>
// //                 </div>

// //                 {/* Status Update */}
// //                 <div className="w-full lg:w-auto flex flex-col gap-2">
// //                   <label className="text-xs font-bold text-gray-500 uppercase">
// //                     Order Status
// //                   </label>
// //                   <select
// //                     value={order.status}
// //                     onChange={(e) =>
// //                       updateStatus(order.orderId, e.target.value)
// //                     }
// //                     className={`border-2 rounded-lg p-2 text-sm font-bold outline-none cursor-pointer ${
// //                       order.status === "DELIVERED"
// //                         ? "border-green-500 text-green-700 bg-green-50"
// //                         : order.status === "PENDING"
// //                           ? "border-yellow-500 text-yellow-700 bg-yellow-50"
// //                           : "border-gray-300 text-gray-700 bg-white"
// //                     }`}
// //                   >
// //                     <option value="PENDING">⏳ PENDING</option>
// //                     <option value="CONFIRMED">✅ CONFIRMED</option>
// //                     <option value="OUT_FOR_DELIVERY">
// //                       🚚 OUT FOR DELIVERY
// //                     </option>
// //                     <option value="DELIVERED">🎉 DELIVERED</option>
// //                   </select>
// //                 </div>
// //               </div>
// //             ))
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;

// import React, { useEffect, useState, useMemo } from "react";
// import API from "../services/api";
// import {
//   Package,
//   RefreshCw,
//   IndianRupee,
//   TrendingUp,
//   Truck,
//   CheckCircle,
//   Search,
//   MapPin,
//   Phone,
//   User,
//   PieChart,
//   BarChart3,
//   Filter,
//   LayoutDashboard,
//   Wallet,
//   ArrowUpRight,
//   Clock,
// } from "lucide-react";

// // 🔥 YAHAN APNE REGIONS AUR PROFIT % CHANGE KARO
// const REGIONS = [
//   { id: "DELHI", name: "Delhi NCR", share: 80, color: "#ec4899" },
//   { id: "MUMBAI", name: "Mumbai", share: 35, color: "#8b5cf6" },
//   { id: "VARANSI", name: "VARANSI", share: 80, color: "#06b6d4" },
// ];

// // Order se region nikalne ka helper — tumhare data ke hisaab se adjust karo
// const getOrderRegion = (order) => {
//   const raw =
//     order.region ||
//     order.customerDetails?.region ||
//     order.customerDetails?.state ||
//     "";
//   const value = String(raw).toUpperCase();
//   if (value.includes("DELHI") || value.includes("NCR")) return "DELHI";
//   if (value.includes("MUMBAI") || value.includes("MAHARASHTRA"))
//     return "MUMBAI";
//   if (
//     value.includes("BANGALORE") ||
//     value.includes("BENGALURU") ||
//     value.includes("KARNATAKA")
//   )
//     return "BANGALORE";
//   return "OTHER";
// };

// const AdminDashboard = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [filterType, setFilterType] = useState("ALL");
//   const [filterStatus, setFilterStatus] = useState("ALL");
//   const [filterRegion, setFilterRegion] = useState("ALL"); // 🔥 naya
//   const [searchTerm, setSearchTerm] = useState(""); // 🔥 naya
//   const [activeTab, setActiveTab] = useState("overview"); // overview | orders | profit

//   const fetchOrders = async () => {
//     setLoading(true);
//     try {
//       const { data } = await API.get("/orders/admin/all");
//       setOrders(data.orders || []);
//     } catch (error) {
//       alert("Failed to load orders. Are you an admin?");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const updateStatus = async (orderId, newStatus) => {
//     try {
//       await API.put(`/orders/admin/${orderId}/status`, { status: newStatus });
//       fetchOrders();
//     } catch (error) {
//       alert("Failed to update status");
//     }
//   };

//   // 🔥 Region + search + payment + status — sab ek saath filter
//   const filteredOrders = useMemo(() => {
//     return orders.filter((order) => {
//       const matchType =
//         filterType === "ALL" || order.paymentMethod === filterType;
//       const matchStatus =
//         filterStatus === "ALL" || order.status === filterStatus;
//       const matchRegion =
//         filterRegion === "ALL" || getOrderRegion(order) === filterRegion;
//       const matchSearch =
//         !searchTerm ||
//         order.orderId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         order.customerDetails?.name
//           ?.toLowerCase()
//           .includes(searchTerm.toLowerCase()) ||
//         order.customerDetails?.phone?.includes(searchTerm);
//       return matchType && matchStatus && matchRegion && matchSearch;
//     });
//   }, [orders, filterType, filterStatus, filterRegion, searchTerm]);

//   // 🔥 Stats — filtered orders ke base pe (region filter ka asar dikhe)
//   const totalOrders = filteredOrders.length;
//   const totalRevenue = filteredOrders.reduce(
//     (sum, order) => sum + Number(order.amount || 0),
//     0,
//   );
//   const codOrders = filteredOrders.filter(
//     (o) => o.paymentMethod === "COD",
//   ).length;
//   const onlineOrders = filteredOrders.filter(
//     (o) => o.paymentMethod === "ONLINE",
//   ).length;
//   const pendingOrders = filteredOrders.filter(
//     (o) => o.status === "PENDING",
//   ).length;
//   const deliveredOrders = filteredOrders.filter(
//     (o) => o.status === "DELIVERED",
//   ).length;

//   // 🔥 Region-wise profit share calculation
//   const regionStats = useMemo(() => {
//     const stats = {};
//     REGIONS.forEach((r) => {
//       stats[r.id] = { ...r, orders: 0, revenue: 0, profit: 0 };
//     });
//     stats.OTHER = {
//       id: "OTHER",
//       name: "Other",
//       share: 0,
//       color: "#94a3b8",
//       orders: 0,
//       revenue: 0,
//       profit: 0,
//     };

//     filteredOrders.forEach((order) => {
//       const region = getOrderRegion(order);
//       const target = stats[region] || stats.OTHER;
//       target.orders += 1;
//       target.revenue += Number(order.amount || 0);
//     });

//     // Profit = region revenue × region share %
//     Object.values(stats).forEach((s) => {
//       s.profit = Math.round((s.revenue * s.share) / 100);
//     });

//     return Object.values(stats).filter((s) => s.orders > 0 || s.id !== "OTHER");
//   }, [filteredOrders]);

//   const totalProfit = regionStats.reduce((sum, r) => sum + r.profit, 0);

//   const statusColor = (status) => {
//     switch (status) {
//       case "DELIVERED":
//         return "border-green-500 text-green-700 bg-green-50";
//       case "PENDING":
//         return "border-yellow-500 text-yellow-700 bg-yellow-50";
//       case "CONFIRMED":
//         return "border-blue-500 text-blue-700 bg-blue-50";
//       case "OUT_FOR_DELIVERY":
//         return "border-purple-500 text-purple-700 bg-purple-50";
//       default:
//         return "border-gray-300 text-gray-700 bg-white";
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-pink-50/30 p-4 md:p-8">
//       <div className="max-w-7xl mx-auto space-y-6">
//         {/* ===== HEADER ===== */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//           <div>
//             <div className="flex items-center gap-3">
//               <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-2.5 rounded-xl shadow-lg shadow-pink-500/30">
//                 <LayoutDashboard className="text-white" size={26} />
//               </div>
//               <div>
//                 <h1 className="text-3xl font-black text-gray-900">
//                   Admin Control Center
//                 </h1>
//                 <p className="text-gray-500 text-sm">
//                   Real-time orders, revenue & region-wise profit analytics
//                 </p>
//               </div>
//             </div>
//           </div>
//           <button
//             onClick={fetchOrders}
//             className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-xl hover:bg-gray-800 transition shadow-md"
//           >
//             <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
//             <span className="text-sm font-bold">Refresh</span>
//           </button>
//         </div>

//         {/* ===== KPI CARDS ===== */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//           <KpiCard
//             icon={<TrendingUp size={20} />}
//             label="Total Orders"
//             value={totalOrders}
//             tint="blue"
//             trend={pendingOrders > 0 ? `${pendingOrders} pending` : "All clear"}
//           />
//           <KpiCard
//             icon={<IndianRupee size={20} />}
//             label="Revenue"
//             value={`₹${totalRevenue.toLocaleString("en-IN")}`}
//             tint="green"
//             trend={`${deliveredOrders} delivered`}
//           />
//           <KpiCard
//             icon={<Wallet size={20} />}
//             label="Total Profit"
//             value={`₹${totalProfit.toLocaleString("en-IN")}`}
//             tint="pink"
//             trend="Region share applied"
//           />
//           <KpiCard
//             icon={<Truck size={20} />}
//             label="COD / Online"
//             value={`${codOrders} / ${onlineOrders}`}
//             tint="purple"
//             trend="Payment split"
//           />
//         </div>

//         {/* ===== REGION FILTER TABS ===== */}
//         <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap gap-2">
//           <RegionTab
//             active={filterRegion === "ALL"}
//             onClick={() => setFilterRegion("ALL")}
//             icon={<BarChart3 size={16} />}
//             label="All Regions"
//             count={orders.length}
//           />
//           {REGIONS.map((r) => (
//             <RegionTab
//               key={r.id}
//               active={filterRegion === r.id}
//               onClick={() => setFilterRegion(r.id)}
//               icon={<MapPin size={16} />}
//               label={`${r.name} · ${r.share}%`}
//               count={orders.filter((o) => getOrderRegion(o) === r.id).length}
//               color={r.color}
//             />
//           ))}
//         </div>

//         {/* ===== PROFIT SHARE PANEL ===== */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//           <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="font-black text-gray-900 flex items-center gap-2">
//                 <PieChart size={18} className="text-pink-600" />
//                 Region-wise Profit Share
//               </h3>
//               <span className="text-xs font-bold text-gray-400 uppercase">
//                 Total Profit ₹{totalProfit.toLocaleString("en-IN")}
//               </span>
//             </div>

//             <div className="space-y-4">
//               {regionStats.map((r) => {
//                 const maxRevenue = Math.max(
//                   ...regionStats.map((x) => x.revenue),
//                   1,
//                 );
//                 const width = (r.revenue / maxRevenue) * 100;
//                 return (
//                   <div key={r.id}>
//                     <div className="flex justify-between text-sm mb-1.5">
//                       <span className="font-bold text-gray-700 flex items-center gap-2">
//                         <span
//                           className="w-2.5 h-2.5 rounded-full"
//                           style={{ backgroundColor: r.color }}
//                         />
//                         {r.name}
//                         <span className="text-xs text-gray-400 font-normal">
//                           ({r.share}%)
//                         </span>
//                       </span>
//                       <span className="font-black text-gray-900">
//                         ₹{r.profit.toLocaleString("en-IN")}
//                         <span className="text-xs text-gray-400 font-normal ml-2">
//                           {r.orders} orders
//                         </span>
//                       </span>
//                     </div>
//                     <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
//                       <div
//                         className="h-full rounded-full transition-all duration-700"
//                         style={{
//                           width: `${width}%`,
//                           backgroundColor: r.color,
//                         }}
//                       />
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Payment split mini card */}
//           <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-lg text-white">
//             <h3 className="font-black flex items-center gap-2 mb-4">
//               <ArrowUpRight size={18} className="text-pink-400" />
//               Payment Split
//             </h3>
//             <div className="space-y-3">
//               <SplitRow
//                 label="Online"
//                 value={onlineOrders}
//                 total={totalOrders}
//                 color="bg-green-400"
//               />
//               <SplitRow
//                 label="COD"
//                 value={codOrders}
//                 total={totalOrders}
//                 color="bg-yellow-400"
//               />
//               <SplitRow
//                 label="Pending"
//                 value={pendingOrders}
//                 total={totalOrders}
//                 color="bg-red-400"
//               />
//               <SplitRow
//                 label="Delivered"
//                 value={deliveredOrders}
//                 total={totalOrders}
//                 color="bg-blue-400"
//               />
//             </div>
//           </div>
//         </div>

//         {/* ===== FILTER BAR ===== */}
//         <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap gap-3 items-center">
//           <div className="flex items-center gap-2 flex-1 min-w-[200px]">
//             <Search size={16} className="text-gray-400" />
//             <input
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               placeholder="Search order ID, name, phone..."
//               className="w-full border border-gray-300 rounded-lg p-2 text-sm outline-none focus:border-pink-500"
//             />
//           </div>
//           <FilterSelect
//             label="Payment"
//             value={filterType}
//             onChange={setFilterType}
//             options={[
//               ["ALL", "All"],
//               ["COD", "COD"],
//               ["ONLINE", "Online"],
//             ]}
//           />
//           <FilterSelect
//             label="Status"
//             value={filterStatus}
//             onChange={setFilterStatus}
//             options={[
//               ["ALL", "All"],
//               ["PENDING", "Pending"],
//               ["CONFIRMED", "Confirmed"],
//               ["OUT_FOR_DELIVERY", "Out for Delivery"],
//               ["DELIVERED", "Delivered"],
//             ]}
//           />
//           <FilterSelect
//             label="Region"
//             value={filterRegion}
//             onChange={setFilterRegion}
//             options={[["ALL", "All"], ...REGIONS.map((r) => [r.id, r.name])]}
//           />
//         </div>

//         {/* ===== ORDERS LIST ===== */}
//         <div className="space-y-3">
//           {loading ? (
//             <p className="text-center text-gray-500 animate-pulse py-10">
//               Loading orders...
//             </p>
//           ) : filteredOrders.length === 0 ? (
//             <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
//               <Package size={48} className="mx-auto text-gray-300 mb-3" />
//               <p className="text-gray-500 font-semibold">
//                 No orders match your filters.
//               </p>
//             </div>
//           ) : (
//             filteredOrders.map((order) => {
//               const region = getOrderRegion(order);
//               const regionMeta = REGIONS.find((r) => r.id === region) || {
//                 name: "Other",
//                 color: "#94a3b8",
//                 share: 0,
//               };
//               return (
//                 <div
//                   key={order._id}
//                   className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5"
//                 >
//                   <div className="flex-1 space-y-1.5">
//                     <div className="flex items-center gap-2 flex-wrap">
//                       <p className="font-black text-lg text-gray-900 bg-gray-100 px-3 py-1 rounded-md">
//                         {order.orderId}
//                       </p>
//                       <span
//                         className={`text-xs font-bold px-2 py-1 rounded-md ${order.paymentMethod === "COD" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}
//                       >
//                         {order.paymentMethod}
//                       </span>
//                       <span
//                         className="text-xs font-bold px-2 py-1 rounded-md text-white"
//                         style={{ backgroundColor: regionMeta.color }}
//                       >
//                         {regionMeta.name}
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-2 text-sm text-gray-600">
//                       <User size={14} /> {order.customerDetails?.name}
//                     </div>
//                     <div className="flex items-center gap-2 text-sm text-gray-600">
//                       <Phone size={14} /> {order.customerDetails?.phone}
//                     </div>
//                     <div className="flex items-center gap-2 text-sm text-gray-600">
//                       <MapPin size={14} /> {order.customerDetails?.address},{" "}
//                       {order.customerDetails?.pincode}
//                     </div>
//                   </div>

//                   <div className="lg:text-right">
//                     <p className="text-xs font-bold text-gray-400 uppercase">
//                       Amount
//                     </p>
//                     <p className="font-black text-2xl text-pink-600">
//                       ₹{order.amount}
//                     </p>
//                   </div>

//                   <div className="w-full lg:w-auto flex flex-col gap-1">
//                     <label className="text-xs font-bold text-gray-500 uppercase">
//                       Status
//                     </label>
//                     <select
//                       value={order.status}
//                       onChange={(e) =>
//                         updateStatus(order.orderId, e.target.value)
//                       }
//                       className={`border-2 rounded-lg p-2 text-sm font-bold outline-none cursor-pointer ${statusColor(order.status)}`}
//                     >
//                       <option value="PENDING">⏳ PENDING</option>
//                       <option value="CONFIRMED">✅ CONFIRMED</option>
//                       <option value="OUT_FOR_DELIVERY">
//                         🚚 OUT FOR DELIVERY
//                       </option>
//                       <option value="DELIVERED">🎉 DELIVERED</option>
//                     </select>
//                   </div>
//                 </div>
//               );
//             })
//           )}
//         </div>

//         <p className="text-center text-xs text-gray-400 pt-4 flex items-center justify-center gap-1">
//           <Clock size={12} /> Data refreshes on demand ·{" "}
//           {new Date().toLocaleString("en-IN")}
//         </p>
//       </div>
//     </div>
//   );
// };

// // ===== Reusable UI components =====
// const KpiCard = ({ icon, label, value, tint, trend }) => {
//   const tints = {
//     blue: "bg-blue-50 text-blue-600",
//     green: "bg-green-50 text-green-600",
//     pink: "bg-pink-50 text-pink-600",
//     purple: "bg-purple-50 text-purple-600",
//   };
//   return (
//     <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
//       <div className="flex items-center gap-3 mb-2">
//         <div className={`p-2 rounded-lg ${tints[tint]}`}>{icon}</div>
//         <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
//           {label}
//         </p>
//       </div>
//       <h3 className="text-2xl font-black text-gray-900">{value}</h3>
//       <p className="text-xs text-gray-400 mt-1">{trend}</p>
//     </div>
//   );
// };

// const RegionTab = ({ active, onClick, icon, label, count, color }) => (
//   <button
//     onClick={onClick}
//     className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition ${
//       active
//         ? "bg-gray-900 text-white shadow-md"
//         : "bg-gray-50 text-gray-600 hover:bg-gray-100"
//     }`}
//   >
//     <span style={{ color: active ? "white" : color || "#6b7280" }}>{icon}</span>
//     {label}
//     <span
//       className={`text-xs px-2 py-0.5 rounded-full ${active ? "bg-white/20" : "bg-gray-200"}`}
//     >
//       {count}
//     </span>
//   </button>
// );

// const SplitRow = ({ label, value, total, color }) => {
//   const pct = total ? Math.round((value / total) * 100) : 0;
//   return (
//     <div>
//       <div className="flex justify-between text-xs font-bold mb-1">
//         <span className="text-gray-300">{label}</span>
//         <span>
//           {value} · {pct}%
//         </span>
//       </div>
//       <div className="h-2 bg-white/10 rounded-full overflow-hidden">
//         <div
//           className={`h-full ${color} rounded-full transition-all duration-700`}
//           style={{ width: `${pct}%` }}
//         />
//       </div>
//     </div>
//   );
// };

// const FilterSelect = ({ label, value, onChange, options }) => (
//   <div className="flex items-center gap-2">
//     <Filter size={14} className="text-gray-400" />
//     <span className="text-xs font-bold text-gray-500">{label}:</span>
//     <select
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       className="border border-gray-300 rounded-lg p-2 text-xs font-bold outline-none focus:border-pink-500"
//     >
//       {options.map(([v, l]) => (
//         <option key={v} value={v}>
//           {l}
//         </option>
//       ))}
//     </select>
//   </div>
// );

// export default AdminDashboard;

import React, { useEffect, useState, useMemo } from "react";
import API from "../services/api";
import {
  Package,
  RefreshCw,
  Truck,
  CheckCircle,
  Search,
  MapPin,
  Phone,
  User,
  Filter,
  LayoutDashboard,
  Clock,
  CreditCard,
  Boxes,
} from "lucide-react";

// 🔥 REGIONS (Ab koi profit share nahi, sirf location tracking)
const REGIONS = [
  { id: "DELHI", name: "Delhi NCR", color: "#ec4899" },
  { id: "MUMBAI", name: "Mumbai", color: "#8b5cf6" },
  { id: "VARANASI", name: "Varanasi", color: "#06b6d4" },
];

// 🔥 SMART REGION DETECTOR (Pincode + Address dono check karega)
const getOrderRegion = (order) => {
  const pin = String(order.customerDetails?.pincode || "");
  const address = String(order.customerDetails?.address || "").toUpperCase();
  const state = String(order.customerDetails?.state || "").toUpperCase();

  // 1. Pincode check (Sabse reliable)
  if (pin.startsWith("11")) return "DELHI"; // 110xxx
  if (pin.startsWith("40")) return "MUMBAI"; // 400xxx
  if (pin.startsWith("22")) return "VARANASI"; // 221xxx

  // 2. Address/State check (Agar pincode na ho)
  if (address.includes("DELHI") || state.includes("DELHI")) return "DELHI";
  if (address.includes("MUMBAI") || state.includes("MAHARASHTRA"))
    return "MUMBAI";
  if (address.includes("VARANASI") || state.includes("UTTAR PRADESH"))
    return "VARANASI";

  return "OTHER";
};

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState("ALL"); // ALL, COD, ONLINE
  const [filterStatus, setFilterStatus] = useState("ALL"); // ALL, PENDING, DELIVERED etc.
  const [filterRegion, setFilterRegion] = useState("ALL"); // ALL, DELHI, MUMBAI, VARANASI
  const [searchTerm, setSearchTerm] = useState("");

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

  // 🔥 Filter Logic (Region + Search + Payment + Status)
  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchType =
        filterType === "ALL" || order.paymentMethod === filterType;
      const matchStatus =
        filterStatus === "ALL" || order.status === filterStatus;
      const matchRegion =
        filterRegion === "ALL" || getOrderRegion(order) === filterRegion;
      const matchSearch =
        !searchTerm ||
        order.orderId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customerDetails?.name
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        order.customerDetails?.phone?.includes(searchTerm);
      return matchType && matchStatus && matchRegion && matchSearch;
    });
  }, [orders, filterType, filterStatus, filterRegion, searchTerm]);

  // 🔥 Stats (Sirf Count, Koi Paisa Nahi)
  const totalOrders = filteredOrders.length;
  const codOrders = filteredOrders.filter(
    (o) => o.paymentMethod === "COD",
  ).length;
  const onlineOrders = filteredOrders.filter(
    (o) => o.paymentMethod === "ONLINE",
  ).length;
  const pendingOrders = filteredOrders.filter(
    (o) => o.status === "PENDING",
  ).length;
  const deliveredOrders = filteredOrders.filter(
    (o) => o.status === "DELIVERED",
  ).length;

  const statusColor = (status) => {
    switch (status) {
      case "DELIVERED":
        return "border-green-500 text-green-700 bg-green-50";
      case "PENDING":
        return "border-yellow-500 text-yellow-700 bg-yellow-50";
      case "CONFIRMED":
        return "border-blue-500 text-blue-700 bg-blue-50";
      case "OUT_FOR_DELIVERY":
        return "border-purple-500 text-purple-700 bg-purple-50";
      default:
        return "border-gray-300 text-gray-700 bg-white";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-pink-50/30 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* ===== HEADER ===== */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-2.5 rounded-xl shadow-lg shadow-pink-500/30">
                <LayoutDashboard className="text-white" size={26} />
              </div>
              <div>
                <h1 className="text-3xl font-black text-gray-900">
                  Admin Operations
                </h1>
                <p className="text-gray-500 text-sm">
                  Track orders by region, payment & status
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={fetchOrders}
            className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-xl hover:bg-gray-800 transition shadow-md"
          >
            <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
            <span className="text-sm font-bold">Refresh</span>
          </button>
        </div>

        {/* ===== KPI CARDS (No Revenue/Profit) ===== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard
            icon={<Boxes size={20} />}
            label="Total Orders"
            value={totalOrders}
            tint="blue"
          />
          <KpiCard
            icon={<Truck size={20} />}
            label="COD Orders"
            value={codOrders}
            tint="yellow"
          />
          <KpiCard
            icon={<CreditCard size={20} />}
            label="Online Orders"
            value={onlineOrders}
            tint="green"
          />
          <KpiCard
            icon={<CheckCircle size={20} />}
            label="Delivered"
            value={deliveredOrders}
            tint="purple"
          />
        </div>

        {/* ===== REGION FILTER TABS ===== */}
        <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap gap-2">
          <RegionTab
            active={filterRegion === "ALL"}
            onClick={() => setFilterRegion("ALL")}
            icon={<MapPin size={16} />}
            label="All Regions"
            count={orders.length}
          />
          {REGIONS.map((r) => (
            <RegionTab
              key={r.id}
              active={filterRegion === r.id}
              onClick={() => setFilterRegion(r.id)}
              icon={<MapPin size={16} />}
              label={r.name}
              count={orders.filter((o) => getOrderRegion(o) === r.id).length}
              color={r.color}
            />
          ))}
        </div>

        {/* ===== FILTER BAR ===== */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap gap-3 items-center">
          <div className="flex items-center gap-2 flex-1 min-w-[200px]">
            <Search size={16} className="text-gray-400" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search order ID, name, phone..."
              className="w-full border border-gray-300 rounded-lg p-2 text-sm outline-none focus:border-pink-500"
            />
          </div>
          <FilterSelect
            label="Payment"
            value={filterType}
            onChange={setFilterType}
            options={[
              ["ALL", "All"],
              ["COD", "COD"],
              ["ONLINE", "Online"],
            ]}
          />
          <FilterSelect
            label="Status"
            value={filterStatus}
            onChange={setFilterStatus}
            options={[
              ["ALL", "All"],
              ["PENDING", "Pending"],
              ["CONFIRMED", "Confirmed"],
              ["OUT_FOR_DELIVERY", "Out for Delivery"],
              ["DELIVERED", "Delivered"],
            ]}
          />
        </div>

        {/* ===== ORDERS LIST ===== */}
        <div className="space-y-3">
          {loading ? (
            <p className="text-center text-gray-500 animate-pulse py-10">
              Loading orders...
            </p>
          ) : filteredOrders.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
              <Package size={48} className="mx-auto text-gray-300 mb-3" />
              <p className="text-gray-500 font-semibold">
                No orders match your filters.
              </p>
            </div>
          ) : (
            filteredOrders.map((order) => {
              const region = getOrderRegion(order);
              const regionMeta = REGIONS.find((r) => r.id === region) || {
                name: "Other",
                color: "#94a3b8",
              };
              return (
                <div
                  key={order._id}
                  className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5"
                >
                  <div className="flex-1 space-y-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-black text-lg text-gray-900 bg-gray-100 px-3 py-1 rounded-md">
                        {order.orderId}
                      </p>
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded-md ${order.paymentMethod === "COD" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}
                      >
                        {order.paymentMethod}
                      </span>
                      <span
                        className="text-xs font-bold px-2 py-1 rounded-md text-white flex items-center gap-1"
                        style={{ backgroundColor: regionMeta.color }}
                      >
                        <MapPin size={12} /> {regionMeta.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User size={14} /> {order.customerDetails?.name}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone size={14} /> {order.customerDetails?.phone}
                    </div>
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <MapPin size={14} className="mt-0.5 shrink-0" />
                      <p>
                        {order.customerDetails?.address} -{" "}
                        <span className="font-bold">
                          {order.customerDetails?.pincode}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="w-full lg:w-auto flex flex-col gap-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">
                      Status
                    </label>
                    <select
                      value={order.status}
                      onChange={(e) =>
                        updateStatus(order.orderId, e.target.value)
                      }
                      className={`border-2 rounded-lg p-2 text-sm font-bold outline-none cursor-pointer ${statusColor(order.status)}`}
                    >
                      <option value="PENDING">⏳ PENDING</option>
                      <option value="CONFIRMED">✅ CONFIRMED</option>
                      <option value="OUT_FOR_DELIVERY">
                        🚚 OUT FOR DELIVERY
                      </option>
                      <option value="DELIVERED">🎉 DELIVERED</option>
                    </select>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <p className="text-center text-xs text-gray-400 pt-4 flex items-center justify-center gap-1">
          <Clock size={12} /> Data refreshes on demand ·{" "}
          {new Date().toLocaleString("en-IN")}
        </p>
      </div>
    </div>
  );
};

// ===== Reusable UI components =====
const KpiCard = ({ icon, label, value, tint }) => {
  const tints = {
    blue: "bg-blue-50 text-blue-600",
    yellow: "bg-yellow-50 text-yellow-600",
    green: "bg-green-50 text-green-600",
    purple: "bg-purple-50 text-purple-600",
  };
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
      <div className="flex items-center gap-3 mb-2">
        <div className={`p-2 rounded-lg ${tints[tint]}`}>{icon}</div>
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
          {label}
        </p>
      </div>
      <h3 className="text-2xl font-black text-gray-900">{value}</h3>
    </div>
  );
};

const RegionTab = ({ active, onClick, icon, label, count, color }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition ${active ? "bg-gray-900 text-white shadow-md" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`}
  >
    <span style={{ color: active ? "white" : color || "#6b7280" }}>{icon}</span>
    {label}
    <span
      className={`text-xs px-2 py-0.5 rounded-full ${active ? "bg-white/20" : "bg-gray-200"}`}
    >
      {count}
    </span>
  </button>
);

const FilterSelect = ({ label, value, onChange, options }) => (
  <div className="flex items-center gap-2">
    <Filter size={14} className="text-gray-400" />
    <span className="text-xs font-bold text-gray-500">{label}:</span>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-300 rounded-lg p-2 text-xs font-bold outline-none focus:border-pink-500"
    >
      {options.map(([v, l]) => (
        <option key={v} value={v}>
          {l}
        </option>
      ))}
    </select>
  </div>
);

export default AdminDashboard;
