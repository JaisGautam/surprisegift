// import React, { useState } from "react";

// // Floating Balloons Background Component
// const FloatingBalloons = () => {
//   const balloons = Array.from({ length: 12 });
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
//       {balloons.map((_, i) => (
//         <div
//           key={i}
//           className="absolute bottom-[-50px] text-pink-500/15 animate-pulse"
//           style={{
//             left: `${Math.random() * 100}%`,
//             animationDuration: `${Math.random() * 5 + 5}s`,
//             transform: `scale(${Math.random() * 0.5 + 0.5})`,
//           }}
//         >
//           ❤️
//         </div>
//       ))}
//     </div>
//   );
// };

// export default function SurpriseGiftApp() {
//   const [activeTab, setActiveTab] = useState(1);

//   const pages = [
//     { id: 1, name: "1. Home Page" },
//     { id: 2, name: "2. Gift Packages" },
//     { id: 3, name: "3. Product View" },
//     { id: 4, name: "4. Track Order" },
//     { id: 5, name: "5. Emotion Discount" },
//     { id: 6, name: "6. Category / Occasion" },
//     { id: 7, name: "7. Checkout Page" },
//     { id: 8, name: "8. Payment Gateway" },
//     { id: 9, name: "9. Order Confirmation" },
//   ];

//   return (
//     <div className="min-h-screen bg-[#0b0614] text-white relative font-sans overflow-x-hidden pb-12">
//       <FloatingBalloons />

//       {/* TOP LIVE PAGE SWITCHER BAR (For instant testing & viewing all 9 pages) */}
//       <div className="bg-black/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 px-4 py-3 shadow-2xl">
//         <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto space-x-2 no-scrollbar">
//           <span className="text-pink-400 font-bold text-sm whitespace-nowrap flex items-center gap-1">
//             ✨ UI Viewer (9 Pages):
//           </span>
//           <div className="flex space-x-2">
//             {pages.map((p) => (
//               <button
//                 key={p.id}
//                 onClick={() => setActiveTab(p.id)}
//                 className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
//                   activeTab === p.id
//                     ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_15px_rgba(236,72,153,0.5)]"
//                     : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
//                 }`}
//               >
//                 {p.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* GLOBAL NAVBAR */}
//       <header className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center relative z-10 border-b border-white/10">
//         <div className="flex items-center space-x-2">
//           <span className="text-2xl font-black bg-gradient-to-r from-pink-500 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow">
//             🎁 SurpriseGift
//           </span>
//         </div>
//         <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
//           <span className="hover:text-pink-400 cursor-pointer">Home</span>
//           <span className="hover:text-pink-400 cursor-pointer">Packages</span>
//           <span className="hover:text-pink-400 cursor-pointer">Shop</span>
//           <span className="hover:text-pink-400 cursor-pointer">
//             Track Order
//           </span>
//           <span className="hover:text-pink-400 cursor-pointer">Contact</span>
//         </nav>
//       </header>

//       {/* DYNAMIC PAGE RENDERER CONTAINER */}
//       <main className="max-w-7xl mx-auto px-6 py-8 relative z-10">
//         {/* PAGE 1: HOME PAGE */}
//         {activeTab === 1 && (
//           <div className="space-y-10 animate-fadeIn">
//             <div className="rounded-3xl bg-gradient-to-r from-purple-950/70 via-pink-950/50 to-black/90 p-8 md:p-12 border border-pink-500/30 shadow-[0_0_40px_rgba(236,72,153,0.2)] backdrop-blur-2xl flex flex-col md:flex-row justify-between items-center">
//               <div className="max-w-xl">
//                 <span className="bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs px-3.5 py-1.5 rounded-full uppercase tracking-widest font-bold">
//                   Special Collection
//                 </span>
//                 <h1 className="text-4xl md:text-6xl font-black mt-4 mb-4 leading-tight">
//                   Small Budget... <br />
//                   <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
//                     Big Surprises!
//                   </span>
//                 </h1>
//                 <p className="text-gray-300 mb-6 text-sm">
//                   Custom gift packages for every emotion, occasion and
//                   relationship crafted with love.
//                 </p>
//                 <button
//                   onClick={() => setActiveTab(2)}
//                   className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg hover:scale-105 transition"
//                 >
//                   Explore Packages
//                 </button>
//               </div>
//               <div className="mt-8 md:mt-0 w-72 h-72 rounded-3xl bg-gradient-to-br from-white/10 to-pink-500/20 border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl rotate-3">
//                 <span className="text-8xl">🎁</span>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-2xl font-bold mb-4">Popular Gift Packages</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {[
//                   "Home Package",
//                   "Normal Package",
//                   "Luxury Package",
//                   "Surprise Box",
//                 ].map((name, i) => (
//                   <div
//                     key={i}
//                     className="bg-white/[0.05] border border-white/10 rounded-3xl p-5 backdrop-blur-xl hover:border-pink-500/50 transition group"
//                   >
//                     <div className="h-40 rounded-2xl bg-gradient-to-tr from-pink-500/20 to-purple-500/20 mb-4 flex items-center justify-center text-4xl group-hover:scale-105 transition">
//                       🎁
//                     </div>
//                     <h3 className="font-bold text-lg">{name}</h3>
//                     <p className="text-xs text-gray-400 mt-1 mb-4">
//                       Curated with pure love & care
//                     </p>
//                     <div className="flex justify-between items-center pt-3 border-t border-white/10">
//                       <span className="text-pink-400 font-extrabold text-lg">
//                         ₹{499 * (i + 1)}
//                       </span>
//                       <button
//                         onClick={() => setActiveTab(3)}
//                         className="text-xs bg-white/10 px-4 py-2 rounded-xl hover:bg-pink-500 transition"
//                       >
//                         View
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* PAGE 2: GIFT PACKAGES PAGE */}
//         {activeTab === 2 && (
//           <div className="space-y-6 animate-fadeIn">
//             <div className="text-center max-w-2xl mx-auto mb-10">
//               <h1 className="text-3xl md:text-5xl font-black">
//                 Choose Your Perfect{" "}
//                 <span className="text-pink-400">Gift Package</span>
//               </h1>
//               <p className="text-gray-400 text-sm mt-2">
//                 Select a package, set your budget, and let us create something
//                 special.
//               </p>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {[
//                 {
//                   title: "Home Package",
//                   price: "₹499 - ₹999",
//                   items: [
//                     "Cute/Thoughtful items",
//                     "Custom card",
//                     "Beautiful packaging",
//                   ],
//                 },
//                 {
//                   title: "Normal Package",
//                   price: "₹999 - ₹1,499",
//                   items: [
//                     "Premium items",
//                     "Personalized note",
//                     "Elegant wrapping",
//                   ],
//                 },
//                 {
//                   title: "Luxury Package",
//                   price: "₹2,499 - ₹3,499",
//                   items: [
//                     "High-end products",
//                     "Premium box",
//                     "Special customization",
//                   ],
//                 },
//               ].map((pkg, i) => (
//                 <div
//                   key={i}
//                   className="bg-white/[0.05] border border-pink-500/30 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between shadow-[0_0_25px_rgba(236,72,153,0.1)]"
//                 >
//                   <div>
//                     <div className="h-48 rounded-2xl bg-gradient-to-tr from-pink-600/20 to-purple-600/20 mb-4 flex items-center justify-center text-5xl">
//                       🎁
//                     </div>
//                     <h3 className="text-xl font-bold">{pkg.title}</h3>
//                     <p className="text-pink-400 font-black text-lg my-2">
//                       {pkg.price}
//                     </p>
//                     <ul className="space-y-2 text-sm text-gray-300 my-4">
//                       {pkg.items.map((item, idx) => (
//                         <li key={idx} className="flex items-center gap-2">
//                           ✓ {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <button
//                     onClick={() => setActiveTab(3)}
//                     className="w-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold py-3 rounded-xl shadow-lg hover:scale-105 transition"
//                   >
//                     Select Package
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* PAGE 3: PRODUCT / ITEM VIEW PAGE */}
//         {activeTab === 3 && (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fadeIn">
//             <div className="bg-white/[0.05] border border-white/10 rounded-3xl p-6 backdrop-blur-xl flex flex-col items-center justify-center h-96">
//               <span className="text-9xl animate-bounce">🎁</span>
//             </div>
//             <div className="space-y-6">
//               <span className="bg-pink-500/20 text-pink-400 text-xs px-3 py-1 rounded-full font-bold">
//                 Best Seller
//               </span>
//               <h1 className="text-3xl md:text-4xl font-black">
//                 Luxury Gift Package
//               </h1>
//               <div className="flex items-center space-x-3">
//                 <span className="text-3xl font-black text-pink-400">
//                   ₹2,499
//                 </span>
//                 <span className="text-gray-500 line-through text-lg">
//                   ₹3,499
//                 </span>
//                 <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded">
//                   Save 29%
//                 </span>
//               </div>
//               <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
//                 <h4 className="font-bold mb-2 text-pink-300">What's Inside?</h4>
//                 <ul className="text-sm text-gray-300 space-y-1">
//                   <li>✔️ Premium Teddy Bear & Chocolates</li>
//                   <li>✔️ LED Fairy Lights & Custom Card</li>
//                   <li>✔️ Beautiful Luxury Gift Box</li>
//                 </ul>
//               </div>
//               <button
//                 onClick={() => setActiveTab(7)}
//                 className="w-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold py-4 rounded-2xl shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-105 transition"
//               >
//                 Add to Cart & Checkout
//               </button>
//             </div>
//           </div>
//         )}

//         {/* PAGE 4: TRACK ORDER PAGE */}
//         {activeTab === 4 && (
//           <div className="max-w-2xl mx-auto space-y-8 animate-fadeIn text-center">
//             <h1 className="text-3xl font-black">Track Your Surprise</h1>
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 placeholder="Enter Order ID (e.g. #SG20251008)"
//                 className="flex-1 bg-white/5 border border-white/20 rounded-2xl px-5 py-3.5 text-white focus:outline-none focus:border-pink-500"
//               />
//               <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 rounded-2xl font-bold">
//                 Track
//               </button>
//             </div>
//             <div className="bg-white/[0.05] border border-white/10 rounded-3xl p-6 backdrop-blur-xl text-left space-y-6">
//               <div className="flex justify-between items-center border-b border-white/10 pb-4">
//                 <div>
//                   <p className="text-xs text-gray-400">Order ID</p>
//                   <p className="font-bold text-pink-400">#SG20251008</p>
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-400">Estimated Delivery</p>
//                   <p className="font-bold">11 Oct - 13 Oct, 2026</p>
//                 </div>
//               </div>
//               <div className="flex justify-between items-center text-sm font-semibold">
//                 <span className="text-green-400">● Order Confirmed</span>
//                 <span className="text-green-400">● Processing</span>
//                 <span className="text-gray-400">○ Out for Delivery</span>
//                 <span className="text-gray-400">○ Delivered</span>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* PAGE 5: EMOTION DISCOUNT PAGE */}
//         {activeTab === 5 && (
//           <div className="max-w-3xl mx-auto text-center space-y-8 animate-fadeIn">
//             <div className="bg-gradient-to-r from-pink-950/60 to-purple-950/60 border border-pink-500/30 rounded-3xl p-8 backdrop-blur-xl">
//               <span className="bg-pink-500/20 text-pink-300 text-xs px-3 py-1 rounded-full font-bold">
//                 +10% OFF
//               </span>
//               <h1 className="text-3xl md:text-5xl font-black mt-4">
//                 Share Your Emotions & Get Special Discount!
//               </h1>
//               <p className="text-gray-300 text-sm mt-3">
//                 Upload a short video or clip of your emotions & reaction on your
//                 next order.
//               </p>
//               <button className="mt-6 bg-gradient-to-r from-pink-500 to-purple-600 font-bold px-8 py-3.5 rounded-2xl shadow-lg hover:scale-105 transition">
//                 Upload Your Video
//               </button>
//             </div>
//           </div>
//         )}

//         {/* PAGE 6: CATEGORY / OCCASION PAGE */}
//         {activeTab === 6 && (
//           <div className="space-y-6 animate-fadeIn">
//             <h1 className="text-3xl font-black">Shop by Category / Occasion</h1>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               {[
//                 "For Friends",
//                 "For Girlfriend",
//                 "For Boyfriend",
//                 "Anniversary",
//                 "Birthday",
//                 "Festival",
//                 "Mom",
//                 "Dad",
//               ].map((cat, i) => (
//                 <div
//                   key={i}
//                   className="bg-white/[0.05] border border-white/10 rounded-3xl p-6 backdrop-blur-xl text-center hover:border-pink-500/50 transition cursor-pointer group"
//                 >
//                   <div className="h-28 rounded-2xl bg-gradient-to-tr from-pink-500/20 to-purple-500/20 mb-3 flex items-center justify-center text-3xl group-hover:scale-105 transition">
//                     🎁
//                   </div>
//                   <h3 className="font-bold">{cat}</h3>
//                   <p className="text-xs text-pink-400 mt-1">Starts @ ₹499</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* PAGE 7: ORDER / CHECKOUT PAGE */}
//         {activeTab === 7 && (
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fadeIn">
//             <div className="lg:col-span-2 bg-white/[0.05] border border-white/10 rounded-3xl p-6 backdrop-blur-xl space-y-4">
//               <h2 className="text-xl font-bold text-pink-400">
//                 Customer & Delivery Details
//               </h2>
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white"
//               />
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white"
//               />
//               <input
//                 type="text"
//                 placeholder="Phone Number"
//                 className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white"
//               />
//               <textarea
//                 placeholder="Complete Delivery Address"
//                 className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white"
//               ></textarea>
//             </div>
//             <div className="bg-white/[0.05] border border-white/10 rounded-3xl p-6 backdrop-blur-xl space-y-4">
//               <h2 className="text-xl font-bold">Order Summary</h2>
//               <div className="flex justify-between text-sm text-gray-300">
//                 <span>Luxury Package</span>
//                 <span>₹2,499</span>
//               </div>
//               <div className="flex justify-between text-sm text-gray-300 border-b border-white/10 pb-3">
//                 <span>Delivery Charge</span>
//                 <span>₹99</span>
//               </div>
//               <div className="flex justify-between text-lg font-bold text-pink-400">
//                 <span>Total Payable</span>
//                 <span>₹2,598</span>
//               </div>
//               <button
//                 onClick={() => setActiveTab(8)}
//                 className="w-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold py-3.5 rounded-xl shadow-lg hover:scale-105 transition"
//               >
//                 Proceed to Payment
//               </button>
//             </div>
//           </div>
//         )}

//         {/* PAGE 8: PAYMENT GATEWAY INTEGRATION */}
//         {activeTab === 8 && (
//           <div className="max-w-xl mx-auto bg-white/[0.05] border border-pink-500/30 rounded-3xl p-8 backdrop-blur-xl space-y-6 animate-fadeIn">
//             <h2 className="text-2xl font-black">Secure Payment</h2>
//             <p className="text-xs text-gray-400">
//               Your payment is 100% secure and encrypted.
//             </p>
//             <div className="space-y-4">
//               <div className="border border-pink-500 bg-pink-500/10 rounded-2xl p-4 cursor-pointer">
//                 <div className="font-bold text-pink-300">
//                   UPI (Zero Friction Auto-Verify)
//                 </div>
//                 <p className="text-xs text-gray-300 mt-1">
//                   Scan QR & Pay instantly via GPay / PhonePay
//                 </p>
//               </div>
//               <div className="border border-white/10 bg-white/5 rounded-2xl p-4 cursor-pointer">
//                 <div className="font-bold">Credit / Debit Card</div>
//               </div>
//             </div>
//             <button
//               onClick={() => setActiveTab(9)}
//               className="w-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold py-4 rounded-2xl shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:scale-105 transition"
//             >
//               Pay ₹2,598 Now
//             </button>
//           </div>
//         )}

//         {/* PAGE 9: ORDER CONFIRMATION PAGE */}
//         {activeTab === 9 && (
//           <div className="max-w-xl mx-auto text-center space-y-6 bg-white/[0.05] border border-green-500/30 rounded-3xl p-8 backdrop-blur-xl animate-fadeIn">
//             <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto text-4xl text-green-400 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
//               ✓
//             </div>
//             <h1 className="text-3xl font-black text-white">Order Confirmed!</h1>
//             <p className="text-gray-300 text-sm">
//               Your gift order has been successfully placed. We will start
//               processing it right away.
//             </p>
//             <div className="bg-white/5 rounded-2xl p-4 text-left space-y-2 border border-white/10">
//               <div className="flex justify-between text-sm">
//                 <span className="text-gray-400">Order ID:</span>{" "}
//                 <span className="font-bold text-pink-400">#SG20251008</span>
//               </div>
//               <div className="flex justify-between text-sm">
//                 <span className="text-gray-400">Estimated Delivery:</span>{" "}
//                 <span className="font-bold">11 Oct - 13 Oct, 2026</span>
//               </div>
//             </div>
//             <div className="flex gap-4">
//               <button
//                 onClick={() => setActiveTab(4)}
//                 className="flex-1 bg-white/10 font-bold py-3.5 rounded-xl hover:bg-white/20 transition"
//               >
//                 Track Order
//               </button>
//               <button
//                 onClick={() => setActiveTab(1)}
//                 className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 font-bold py-3.5 rounded-xl hover:scale-105 transition"
//               >
//                 Home
//               </button>
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

import React, { useState } from "react";

// Floating Heart Balloons Background Component
const FloatingBalloons = () => {
  const balloons = Array.from({ length: 14 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {balloons.map((_, i) => (
        <div
          key={i}
          className="absolute bottom-[-50px] text-pink-500/20 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 6 + 4}s`,
            transform: `scale(${Math.random() * 0.6 + 0.4})`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default function SurpriseGiftApp() {
  const [activeTab, setActiveTab] = useState(1);

  // High-Quality Unsplash Gift Images
  const IMAGES = {
    hero: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop",
    homePkg:
      "https://images.unsplash.com/photo-1513885535751-8b9238bd482a?q=80&w=600&auto=format&fit=crop",
    normalPkg:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop",
    luxuryPkg:
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=600&auto=format&fit=crop",
    surpriseBox:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop",
    teddy:
      "https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=600&auto=format&fit=crop",
    rose: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop",
  };

  const pages = [
    { id: 1, name: "1. Home Page" },
    { id: 2, name: "2. Gift Packages" },
    { id: 3, name: "3. Product View" },
    { id: 4, name: "4. Track Order" },
    { id: 5, name: "5. Emotion Discount" },
    { id: 6, name: "6. Category / Occasion" },
    { id: 7, name: "7. Checkout Page" },
    { id: 8, name: "8. Payment Gateway" },
    { id: 9, name: "9. Order Confirmation" },
  ];

  return (
    <div className="min-h-screen bg-[#0b0614] text-white relative font-sans overflow-x-hidden pb-12">
      <FloatingBalloons />

      {/* TOP LIVE PAGE SWITCHER BAR */}
      <div className="bg-black/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 px-4 py-3 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto space-x-2 no-scrollbar">
          <span className="text-pink-400 font-bold text-sm whitespace-nowrap flex items-center gap-1">
            ✨ UI Viewer (9 Pages):
          </span>
          <div className="flex space-x-2">
            {pages.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeTab === p.id
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_15px_rgba(236,72,153,0.6)]"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* GLOBAL NAVBAR */}
      <header className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center relative z-10 border-b border-white/10">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-black bg-gradient-to-r from-pink-500 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow">
            🎁 SurpriseGift
          </span>
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <span className="hover:text-pink-400 cursor-pointer transition">
            Home
          </span>
          <span className="hover:text-pink-400 cursor-pointer transition">
            Packages
          </span>
          <span className="hover:text-pink-400 cursor-pointer transition">
            Shop
          </span>
          <span className="hover:text-pink-400 cursor-pointer transition">
            Track Order
          </span>
          <span className="hover:text-pink-400 cursor-pointer transition">
            Contact
          </span>
        </nav>
      </header>

      {/* DYNAMIC PAGE RENDERER CONTAINER */}
      <main className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        {/* PAGE 1: HOME PAGE */}
        {activeTab === 1 && (
          <div className="space-y-12 animate-fadeIn">
            <div className="rounded-3xl bg-gradient-to-r from-purple-950/80 via-pink-950/60 to-black/90 p-8 md:p-14 border border-pink-500/30 shadow-[0_0_50px_rgba(236,72,153,0.2)] backdrop-blur-2xl flex flex-col md:flex-row justify-between items-center">
              <div className="max-w-xl">
                <span className="bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs px-3.5 py-1.5 rounded-full uppercase tracking-widest font-bold">
                  Special Collection
                </span>
                <h1 className="text-4xl md:text-6xl font-black mt-5 mb-5 leading-tight">
                  Small Budget... <br />
                  <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Big Surprises!
                  </span>
                </h1>
                <p className="text-gray-300 mb-8 text-sm md:text-base">
                  Custom gift packages for every emotion, occasion and
                  relationship crafted with love.
                </p>
                <button
                  onClick={() => setActiveTab(2)}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-105 transition duration-300"
                >
                  Explore Packages
                </button>
              </div>
              <div className="mt-8 md:mt-0 w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-pink-500/30 shadow-[0_0_30px_rgba(236,72,153,0.3)] rotate-2 hover:rotate-0 transition duration-500">
                <img
                  src={IMAGES.hero}
                  alt="Luxury Gift Box"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Popular Gift Packages</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    name: "Home Package",
                    price: "₹499",
                    img: IMAGES.homePkg,
                    tag: "Best for daily gifting",
                  },
                  {
                    name: "Normal Package",
                    price: "₹999",
                    img: IMAGES.normalPkg,
                    tag: "Simple yet special",
                  },
                  {
                    name: "Luxury Package",
                    price: "₹2,499",
                    img: IMAGES.luxuryPkg,
                    tag: "Premium & unforgettable",
                  },
                  {
                    name: "Surprise Box",
                    price: "₹1,499",
                    img: IMAGES.surpriseBox,
                    tag: "Mystery gifts, more joy",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/[0.05] border border-white/10 rounded-3xl p-5 backdrop-blur-xl hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(236,72,153,0.2)] transition duration-300 group"
                  >
                    <div className="h-44 rounded-2xl overflow-hidden mb-4 border border-white/10 group-hover:scale-105 transition duration-300">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-xs text-gray-400 mt-1 mb-4">
                      {item.tag}
                    </p>
                    <div className="flex justify-between items-center pt-3 border-t border-white/10">
                      <span className="text-pink-400 font-extrabold text-lg">
                        {item.price}
                      </span>
                      <button
                        onClick={() => setActiveTab(3)}
                        className="text-xs bg-white/10 px-4 py-2 rounded-xl hover:bg-pink-500 transition font-semibold"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PAGE 2: GIFT PACKAGES PAGE */}
        {activeTab === 2 && (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h1 className="text-3xl md:text-5xl font-black">
                Choose Your Perfect{" "}
                <span className="text-pink-400">Gift Package</span>
              </h1>
              <p className="text-gray-400 text-sm mt-2">
                Select a package, set your budget, and let us create something
                special.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Home Package",
                  price: "₹499 - ₹999",
                  img: IMAGES.homePkg,
                  items: [
                    "Cute/Thoughtful items",
                    "Custom card",
                    "Beautiful packaging",
                  ],
                },
                {
                  title: "Normal Package",
                  price: "₹999 - ₹1,499",
                  img: IMAGES.normalPkg,
                  items: [
                    "Premium items",
                    "Personalized note",
                    "Elegant wrapping",
                  ],
                },
                {
                  title: "Luxury Package",
                  price: "₹2,499 - ₹3,499",
                  img: IMAGES.luxuryPkg,
                  items: [
                    "High-end products",
                    "Premium box",
                    "Special customization",
                  ],
                },
              ].map((pkg, i) => (
                <div
                  key={i}
                  className="bg-white/[0.05] border border-pink-500/30 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between shadow-[0_0_25px_rgba(236,72,153,0.15)]"
                >
                  <div>
                    <div className="h-52 rounded-2xl overflow-hidden mb-5 border border-white/10">
                      <img
                        src={pkg.img}
                        alt={pkg.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold">{pkg.title}</h3>
                    <p className="text-pink-400 font-black text-xl my-2">
                      {pkg.price}
                    </p>
                    <ul className="space-y-2 text-sm text-gray-300 my-4">
                      {pkg.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-gray-200"
                        >
                          ✓ {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => setActiveTab(3)}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold py-3.5 rounded-xl shadow-lg hover:scale-105 transition mt-4"
                  >
                    Choose Package
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PAGE 3: PRODUCT / ITEM VIEW PAGE */}
        {activeTab === 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fadeIn">
            <div className="h-[420px] rounded-3xl overflow-hidden border-2 border-pink-500/30 shadow-[0_0_40px_rgba(236,72,153,0.2)]">
              <img
                src={IMAGES.luxuryPkg}
                alt="Luxury Package"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <span className="bg-pink-500/20 text-pink-400 text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider">
                Best Seller
              </span>
              <h1 className="text-3xl md:text-5xl font-black">
                Luxury Gift Package
              </h1>
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-black text-pink-400">
                  ₹2,499
                </span>
                <span className="text-gray-500 line-through text-xl">
                  ₹3,499
                </span>
                <span className="bg-green-500/20 text-green-400 text-xs px-2.5 py-1 rounded-md font-bold">
                  Save 29%
                </span>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                <h4 className="font-bold mb-3 text-pink-300">What's Inside?</h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>✨ Premium Teddy Bear & Chocolates</li>
                  <li>✨ LED Fairy Lights & Custom Card</li>
                  <li>✨ Beautiful Luxury Gift Box Wrap</li>
                </ul>
              </div>
              <button
                onClick={() => setActiveTab(7)}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold py-4 rounded-2xl shadow-[0_0_25px_rgba(236,72,153,0.5)] hover:scale-105 transition duration-300"
              >
                Add to Cart & Checkout
              </button>
            </div>
          </div>
        )}

        {/* PAGE 4: TRACK ORDER PAGE */}
        {activeTab === 4 && (
          <div className="max-w-2xl mx-auto space-y-8 animate-fadeIn text-center">
            <h1 className="text-3xl md:text-4xl font-black">
              Track Your Surprise
            </h1>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Enter Order ID (e.g. #SG20251008)"
                className="flex-1 bg-white/5 border border-white/20 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-pink-500"
              />
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 rounded-2xl font-bold shadow-lg">
                Track
              </button>
            </div>
            <div className="bg-white/[0.05] border border-white/10 rounded-3xl p-6 backdrop-blur-xl text-left space-y-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs text-gray-400">Order ID</p>
                  <p className="font-bold text-pink-400 text-lg">#SG20251008</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Estimated Delivery</p>
                  <p className="font-bold">11 Oct - 13 Oct, 2026</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs md:text-sm font-semibold">
                <span className="text-green-400">● Order Confirmed</span>
                <span className="text-green-400">● Processing</span>
                <span className="text-gray-400">○ Out for Delivery</span>
                <span className="text-gray-400">○ Delivered</span>
              </div>
            </div>
          </div>
        )}

        {/* PAGE 5: EMOTION DISCOUNT PAGE */}
        {activeTab === 5 && (
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fadeIn">
            <div className="bg-gradient-to-r from-pink-950/60 to-purple-950/60 border border-pink-500/30 rounded-3xl p-10 backdrop-blur-xl">
              <span className="bg-pink-500/20 text-pink-300 text-xs px-4 py-1.5 rounded-full font-bold uppercase tracking-wider">
                +10% OFF Discount
              </span>
              <h1 className="text-3xl md:text-5xl font-black mt-4">
                Share Your Emotions & Get Special Discount!
              </h1>
              <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                Upload a short video or clip of your emotions & reaction when
                receiving the gift to get instant discount coupons.
              </p>
              <button className="mt-8 bg-gradient-to-r from-pink-500 to-purple-600 font-bold px-10 py-4 rounded-2xl shadow-xl hover:scale-105 transition">
                Upload Your Video
              </button>
            </div>
          </div>
        )}

        {/* PAGE 6: CATEGORY / OCCASION PAGE */}
        {activeTab === 6 && (
          <div className="space-y-6 animate-fadeIn">
            <h1 className="text-3xl font-black">Shop by Category / Occasion</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "For Friends", img: IMAGES.teddy },
                { name: "For Girlfriend", img: IMAGES.rose },
                { name: "For Boyfriend", img: IMAGES.luxuryPkg },
                { name: "Anniversary", img: IMAGES.hero },
                { name: "Birthday", img: IMAGES.surpriseBox },
                { name: "Festival", img: IMAGES.homePkg },
                { name: "Mom", img: IMAGES.normalPkg },
                { name: "Dad", img: IMAGES.luxuryPkg },
              ].map((cat, i) => (
                <div
                  key={i}
                  className="bg-white/[0.05] border border-white/10 rounded-3xl p-5 backdrop-blur-xl text-center hover:border-pink-500/50 transition cursor-pointer group"
                >
                  <div className="h-32 rounded-2xl overflow-hidden mb-3 border border-white/10 group-hover:scale-105 transition duration-300">
                    <img
                      src={cat.img}
                      alt={cat.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-white">{cat.name}</h3>
                  <p className="text-xs text-pink-400 mt-1">Starts @ ₹499</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PAGE 7: ORDER / CHECKOUT PAGE */}
        {activeTab === 7 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fadeIn">
            <div className="lg:col-span-2 bg-white/[0.05] border border-white/10 rounded-3xl p-6 backdrop-blur-xl space-y-4">
              <h2 className="text-xl font-bold text-pink-400">
                Customer & Delivery Details
              </h2>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3.5 text-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3.5 text-white"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3.5 text-white"
              />
              <textarea
                placeholder="Complete Delivery Address"
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3.5 text-white"
              ></textarea>
            </div>
            <div className="bg-white/[0.05] border border-white/10 rounded-3xl p-6 backdrop-blur-xl space-y-4">
              <h2 className="text-xl font-bold">Order Summary</h2>
              <div className="flex justify-between text-sm text-gray-300">
                <span>Luxury Package</span>
                <span>₹2,499</span>
              </div>
              <div className="flex justify-between text-sm text-gray-300 border-b border-white/10 pb-3">
                <span>Delivery Charge</span>
                <span>₹99</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-pink-400">
                <span>Total Payable</span>
                <span>₹2,598</span>
              </div>
              <button
                onClick={() => setActiveTab(8)}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold py-3.5 rounded-xl shadow-lg hover:scale-105 transition"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        )}

        {/* PAGE 8: PAYMENT GATEWAY INTEGRATION */}
        {activeTab === 8 && (
          <div className="max-w-xl mx-auto bg-white/[0.05] border border-pink-500/30 rounded-3xl p-8 backdrop-blur-xl space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-black">Secure Payment</h2>
            <p className="text-xs text-gray-400">
              Your payment is 100% secure and encrypted.
            </p>
            <div className="space-y-4">
              <div className="border-2 border-pink-500 bg-pink-500/10 rounded-2xl p-4 cursor-pointer flex items-center justify-between">
                <div>
                  <div className="font-bold text-pink-300">UPI Instant Pay</div>
                  <p className="text-xs text-gray-300 mt-1">
                    Scan QR & Pay via GPay / PhonePe / Paytm
                  </p>
                </div>
                <span className="text-xl">📱</span>
              </div>
              <div className="border border-white/10 bg-white/5 rounded-2xl p-4 cursor-pointer flex items-center justify-between">
                <div className="font-bold">Credit / Debit Card</div>
                <span className="text-xl">💳</span>
              </div>
            </div>
            <button
              onClick={() => setActiveTab(9)}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold py-4 rounded-2xl shadow-[0_0_25px_rgba(236,72,153,0.5)] hover:scale-105 transition"
            >
              Pay ₹2,598 Now
            </button>
          </div>
        )}

        {/* PAGE 9: ORDER CONFIRMATION PAGE */}
        {activeTab === 9 && (
          <div className="max-w-xl mx-auto text-center space-y-6 bg-white/[0.05] border border-green-500/30 rounded-3xl p-8 backdrop-blur-xl animate-fadeIn">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto text-4xl text-green-400 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
              ✓
            </div>
            <h1 className="text-3xl font-black text-white">Order Confirmed!</h1>
            <p className="text-gray-300 text-sm">
              Your gift order has been successfully placed. We will start
              processing it right away.
            </p>
            <div className="bg-white/5 rounded-2xl p-4 text-left space-y-2 border border-white/10">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Order ID:</span>{" "}
                <span className="font-bold text-pink-400">#SG20251008</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Estimated Delivery:</span>{" "}
                <span className="font-bold">11 Oct - 13 Oct, 2026</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab(4)}
                className="flex-1 bg-white/10 font-bold py-3.5 rounded-xl hover:bg-white/20 transition"
              >
                Track Order
              </button>
              <button
                onClick={() => setActiveTab(1)}
                className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 font-bold py-3.5 rounded-xl hover:scale-105 transition"
              >
                Home
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
