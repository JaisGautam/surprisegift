// // // // // // // // // import React from "react";
// // // // // // // // // import { Hero } from "../components/Hero";
// // // // // // // // // import { InteractivePlanner } from "../components/InteractivePlanner";
// // // // // // // // // import { PackagePreview } from "../components/PackagePreview";

// // // // // // // // // export const Home = () => {
// // // // // // // // //   return (
// // // // // // // // //     <div className="space-y-16">
// // // // // // // // //       <Hero />
// // // // // // // // //       <InteractivePlanner />
// // // // // // // // //       <PackagePreview />
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // import React from "react";
// // // // // // // // import Layout from "../components/Layout";
// // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // // const Home = () => {
// // // // // // // //   const navigate = useNavigate();

// // // // // // // //   return (
// // // // // // // //     <Layout>
// // // // // // // //       <div className="max-w-7xl mx-auto px-4 py-6">
// // // // // // // //         {/* Navigation Header */}
// // // // // // // //         <header className="flex justify-between items-center py-4 border-b border-white/10 mb-8 backdrop-blur-md sticky top-0 z-50 bg-[#0b0614]/80 px-4 rounded-2xl">
// // // // // // // //           <div className="flex items-center space-x-2">
// // // // // // // //             <span className="text-2xl font-black bg-gradient-to-r from-pink-500 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
// // // // // // // //               🎁 SurpriseGift
// // // // // // // //             </span>
// // // // // // // //           </div>
// // // // // // // //           <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
// // // // // // // //             <a href="/" className="hover:text-pink-400 transition">
// // // // // // // //               Home
// // // // // // // //             </a>
// // // // // // // //             <a href="/packages" className="hover:text-pink-400 transition">
// // // // // // // //               Packages
// // // // // // // //             </a>
// // // // // // // //             <a href="/shop" className="hover:text-pink-400 transition">
// // // // // // // //               Shop
// // // // // // // //             </a>
// // // // // // // //             <a href="/track" className="hover:text-pink-400 transition">
// // // // // // // //               Track Order
// // // // // // // //             </a>
// // // // // // // //             <a href="/contact" className="hover:text-pink-400 transition">
// // // // // // // //               Contact
// // // // // // // //             </a>
// // // // // // // //           </nav>
// // // // // // // //         </header>

// // // // // // // //         {/* Hero Section - Glassmorphism Transparent & Glowing */}
// // // // // // // //         <div className="relative rounded-3xl bg-gradient-to-r from-purple-950/60 via-pink-950/40 to-black/80 p-8 md:p-14 border border-pink-500/30 shadow-[0_0_50px_rgba(236,72,153,0.15)] backdrop-blur-xl overflow-hidden flex flex-col md:flex-row items-center justify-between">
// // // // // // // //           {/* Background Ambient Glow inside hero */}
// // // // // // // //           <div className="absolute -top-24 -left-24 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>
// // // // // // // //           <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

// // // // // // // //           <div className="max-w-xl z-10">
// // // // // // // //             <span className="bg-gradient-to-r from-pink-500/30 to-purple-500/30 border border-pink-500/40 text-pink-300 text-xs px-3.5 py-1.5 rounded-full uppercase tracking-widest font-bold shadow-inner">
// // // // // // // //               ✨ Special Collection
// // // // // // // //             </span>
// // // // // // // //             <h1 className="text-4xl md:text-6xl font-black mt-5 mb-5 leading-tight tracking-tight text-white drop-shadow-md">
// // // // // // // //               Small Budget... <br />
// // // // // // // //               <span className="bg-gradient-to-r from-pink-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
// // // // // // // //                 Big Surprises!
// // // // // // // //               </span>
// // // // // // // //             </h1>
// // // // // // // //             <p className="text-gray-300 mb-8 text-sm md:text-base font-normal leading-relaxed">
// // // // // // // //               Custom gift packages for every emotion, occasion and relationship
// // // // // // // //               crafted with pure love and elegance.
// // // // // // // //             </p>
// // // // // // // //             <div className="flex space-x-4">
// // // // // // // //               <button
// // // // // // // //                 onClick={() => navigate("/packages")}
// // // // // // // //                 className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_25px_rgba(236,72,153,0.7)] hover:scale-105 transition duration-300"
// // // // // // // //               >
// // // // // // // //                 Explore Packages
// // // // // // // //               </button>
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* Transparent Floating Gift Box Graphic */}
// // // // // // // //           <div className="mt-8 md:mt-0 z-10">
// // // // // // // //             <div className="w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-white/10 via-pink-500/10 to-purple-600/20 rounded-3xl border border-white/20 backdrop-blur-2xl flex items-center justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rotate-3 hover:rotate-0 transition duration-500 group">
// // // // // // // //               <span className="text-8xl drop-shadow-[0_0_20px_rgba(236,72,153,0.6)] group-hover:scale-110 transition duration-300">
// // // // // // // //                 🎁
// // // // // // // //               </span>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* Popular Gift Packages Section */}
// // // // // // // //         <div className="mt-14 mb-12">
// // // // // // // //           <div className="flex justify-between items-end mb-6">
// // // // // // // //             <div>
// // // // // // // //               <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
// // // // // // // //                 Popular Gift Packages
// // // // // // // //               </h2>
// // // // // // // //               <p className="text-gray-400 text-sm mt-1">
// // // // // // // //                 Choose from our curated gift packages or create your own.
// // // // // // // //               </p>
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // // // // // // //             {[
// // // // // // // //               {
// // // // // // // //                 name: "Home Package",
// // // // // // // //                 price: "₹499",
// // // // // // // //                 tag: "Best for daily gifting",
// // // // // // // //                 gradient: "from-pink-500/20 to-purple-500/20",
// // // // // // // //               },
// // // // // // // //               {
// // // // // // // //                 name: "Normal Package",
// // // // // // // //                 price: "₹999",
// // // // // // // //                 tag: "Simple yet special",
// // // // // // // //                 gradient: "from-purple-500/20 to-indigo-500/20",
// // // // // // // //               },
// // // // // // // //               {
// // // // // // // //                 name: "Luxury Package",
// // // // // // // //                 price: "₹2,499",
// // // // // // // //                 tag: "Premium & unforgettable",
// // // // // // // //                 gradient: "from-pink-600/20 to-rose-500/20",
// // // // // // // //               },
// // // // // // // //               {
// // // // // // // //                 name: "Surprise Box",
// // // // // // // //                 price: "₹1,499",
// // // // // // // //                 tag: "Mystery gifts, more joy",
// // // // // // // //                 gradient: "from-violet-500/20 to-pink-500/20",
// // // // // // // //               },
// // // // // // // //             ].map((pkg, idx) => (
// // // // // // // //               <div
// // // // // // // //                 key={idx}
// // // // // // // //                 className="bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] transition-all duration-300 group flex flex-col justify-between"
// // // // // // // //               >
// // // // // // // //                 <div>
// // // // // // // //                   <div
// // // // // // // //                     className={`h-44 rounded-2xl bg-gradient-to-tr ${pkg.gradient} border border-white/10 mb-5 flex items-center justify-center text-5xl shadow-inner group-hover:scale-105 transition duration-300`}
// // // // // // // //                   >
// // // // // // // //                     🎁
// // // // // // // //                   </div>
// // // // // // // //                   <h3 className="font-bold text-lg text-white group-hover:text-pink-400 transition">
// // // // // // // //                     {pkg.name}
// // // // // // // //                   </h3>
// // // // // // // //                   <p className="text-xs text-gray-400 mt-1 mb-4">{pkg.tag}</p>
// // // // // // // //                 </div>
// // // // // // // //                 <div className="flex justify-between items-center pt-4 border-t border-white/10">
// // // // // // // //                   <span className="text-pink-400 font-extrabold text-lg">
// // // // // // // //                     {pkg.price}
// // // // // // // //                   </span>
// // // // // // // //                   <button
// // // // // // // //                     onClick={() => navigate("/packages")}
// // // // // // // //                     className="text-xs bg-white/10 text-white font-semibold px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:shadow-lg transition duration-300"
// // // // // // // //                   >
// // // // // // // //                     View Details
// // // // // // // //                   </button>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </Layout>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Home;

// // // // // // // import React from "react";
// // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // const Home = () => {
// // // // // // //   const navigate = useNavigate();

// // // // // // //   const categories = [
// // // // // // //     {
// // // // // // //       id: "girlfriend",
// // // // // // //       title: "For Girlfriend",
// // // // // // //       img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400",
// // // // // // //       tag: "Romantic & Glowing",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: "boyfriend",
// // // // // // //       title: "For Boyfriend",
// // // // // // //       img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400",
// // // // // // //       tag: "Classy & Useful",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: "friends",
// // // // // // //       title: "For Friends",
// // // // // // //       img: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=400",
// // // // // // //       tag: "Fun & Trendy",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: "mom",
// // // // // // //       title: "For Mom",
// // // // // // //       img: "https://images.unsplash.com/photo-1513885535751-8b9238bd482a?q=80&w=400",
// // // // // // //       tag: "Heartfelt & Elegant",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: "dad",
// // // // // // //       title: "For Dad",
// // // // // // //       img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=400",
// // // // // // //       tag: "Premium & Respect",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: "colleagues",
// // // // // // //       title: "For Colleagues",
// // // // // // //       img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=400",
// // // // // // //       tag: "Corporate & Neat",
// // // // // // //     },
// // // // // // //   ];

// // // // // // //   const packages = [
// // // // // // //     {
// // // // // // //       id: "home-pkg",
// // // // // // //       name: "Home Package",
// // // // // // //       price: "₹499",
// // // // // // //       details:
// // // // // // //         "Cute Greeting Card, Scented Candle, Custom Message Note, Fairy Lights Packaging.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: "normal-pkg",
// // // // // // //       name: "Normal Package",
// // // // // // //       price: "₹999",
// // // // // // //       details:
// // // // // // //         "Personalized Photo Frame, Premium Chocolates, LED Bottle Light, Handmade Card.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: "luxury-pkg",
// // // // // // //       name: "Luxury Package",
// // // // // // //       price: "₹2,499",
// // // // // // //       details:
// // // // // // //         "Customized Teddy/Watch, Imported Chocolates, Memory Scrapbook, Premium Wooden Box Wrap.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: "surprise-box",
// // // // // // //       name: "Surprise Box",
// // // // // // //       price: "₹1,499",
// // // // // // //       details:
// // // // // // //         "Mystery Customized Gift Items tailored according to recipient relationship & favourite choices.",
// // // // // // //     },
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <div className="max-w-7xl mx-auto px-4 py-8 space-y-14">
// // // // // // //       {/* Hero Banner */}
// // // // // // //       <div className="rounded-3xl bg-gradient-to-r from-purple-950/80 via-pink-950/60 to-black/90 p-8 md:p-12 border border-pink-500/30 shadow-[0_0_50px_rgba(236,72,153,0.2)] backdrop-blur-xl flex flex-col md:flex-row justify-between items-center">
// // // // // // //         <div className="max-w-xl">
// // // // // // //           <span className="bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs px-3.5 py-1.5 rounded-full uppercase tracking-widest font-bold">
// // // // // // //             ✨ Premium Surprise Store
// // // // // // //           </span>
// // // // // // //           <h1 className="text-4xl md:text-6xl font-black mt-4 mb-4 leading-tight">
// // // // // // //             Small Budget... <br />
// // // // // // //             <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
// // // // // // //               Big Surprises!
// // // // // // //             </span>
// // // // // // //           </h1>
// // // // // // //           <p className="text-gray-300 mb-6 text-sm md:text-base">
// // // // // // //             Select your relation, share favourite preferences, and let us create
// // // // // // //             memorable gifts!
// // // // // // //           </p>
// // // // // // //           <button
// // // // // // //             onClick={() => navigate("/packages")}
// // // // // // //             className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg hover:scale-105 transition"
// // // // // // //           >
// // // // // // //             Browse All Packages
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //         <div className="mt-8 md:mt-0 w-72 h-72 rounded-3xl overflow-hidden border-2 border-pink-500/30 shadow-2xl">
// // // // // // //           <img
// // // // // // //             src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600"
// // // // // // //             alt="Surprise Box"
// // // // // // //             className="w-full h-full object-cover"
// // // // // // //           />
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* SHOP BY CATEGORY / RELATIONSHIP */}
// // // // // // //       <div>
// // // // // // //         <h2 className="text-2xl md:text-3xl font-black mb-2">
// // // // // // //           Shop by Category & Relationship
// // // // // // //         </h2>
// // // // // // //         <p className="text-gray-400 text-sm mb-6">
// // // // // // //           Choose who you are sending the surprise gift to:
// // // // // // //         </p>
// // // // // // //         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
// // // // // // //           {categories.map((cat) => (
// // // // // // //             <div
// // // // // // //               key={cat.id}
// // // // // // //               onClick={() => navigate(`/packages?relation=${cat.id}`)}
// // // // // // //               className="bg-white/[0.05] border border-white/10 rounded-2xl p-3 text-center backdrop-blur-md hover:border-pink-500/60 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] cursor-pointer transition group"
// // // // // // //             >
// // // // // // //               <div className="h-28 rounded-xl overflow-hidden mb-3 border border-white/10 group-hover:scale-105 transition">
// // // // // // //                 <img
// // // // // // //                   src={cat.img}
// // // // // // //                   alt={cat.title}
// // // // // // //                   className="w-full h-full object-cover"
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //               <h3 className="font-bold text-sm text-white">{cat.title}</h3>
// // // // // // //               <p className="text-[10px] text-pink-400 mt-1">{cat.tag}</p>
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* PACKAGES WITH CLEAR WHAT-IS-INSIDE DETAILS */}
// // // // // // //       <div>
// // // // // // //         <h2 className="text-2xl md:text-3xl font-black mb-2">
// // // // // // //           Popular Gift Packages
// // // // // // //         </h2>
// // // // // // //         <p className="text-gray-400 text-sm mb-6">
// // // // // // //           Here is exactly what we deliver inside each budget package:
// // // // // // //         </p>
// // // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // // // // // //           {packages.map((pkg) => (
// // // // // // //             <div
// // // // // // //               key={pkg.id}
// // // // // // //               className="bg-white/[0.05] border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(236,72,153,0.2)] transition flex flex-col justify-between"
// // // // // // //             >
// // // // // // //               <div>
// // // // // // //                 <span className="text-xs bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full font-semibold">
// // // // // // //                   Budget Package
// // // // // // //                 </span>
// // // // // // //                 <h3 className="text-xl font-bold mt-3">{pkg.name}</h3>
// // // // // // //                 <p className="text-2xl font-black text-pink-400 my-2">
// // // // // // //                   {pkg.price}
// // // // // // //                 </p>
// // // // // // //                 <div className="bg-white/5 border border-white/10 rounded-xl p-3 my-3">
// // // // // // //                   <p className="text-xs font-semibold text-pink-300 mb-1">
// // // // // // //                     🎁 What's Included:
// // // // // // //                   </p>
// // // // // // //                   <p className="text-xs text-gray-300 leading-relaxed">
// // // // // // //                     {pkg.details}
// // // // // // //                   </p>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //               <button
// // // // // // //                 onClick={() => navigate(`/product/${pkg.id}`)}
// // // // // // //                 className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-600 font-bold py-2.5 rounded-xl hover:scale-105 transition text-sm shadow-md"
// // // // // // //               >
// // // // // // //                 Customize & Order
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Home;

// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // const Home = () => {
// // // // // // //   const navigate = useNavigate();

// // // // // // //   // Dynamic Deep Emotional Quotes List
// // // // // // //   const emotionalQuotes = [
// // // // // // //     "Kuch log hamari zindagi mein itne khaas hote hain ki unke hone se hi sab khoobsurat lagta hai... Par hum aksar unhe yeh batana bhool jaate hain.",
// // // // // // //     "Waqt tezi se nikal raha hai... Kisi ke chehre par ek sachhi muskaan laane ka mauka baar-baar nahi milta.",
// // // // // // //     "Rishte sirf chalte nahi, unhe mehsoos karana padta hai. Aaj ek chhota sa gesture unke poore din ko khas bana sakta hai.",
// // // // // // //   ];

// // // // // // //   const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

// // // // // // //   // Auto rotate quotes every 6 seconds
// // // // // // //   useEffect(() => {
// // // // // // //     const timer = setInterval(() => {
// // // // // // //       setCurrentQuoteIndex((prev) => (prev + 1) % emotionalQuotes.length);
// // // // // // //     }, 6000);
// // // // // // //     return () => clearInterval(timer);
// // // // // // //   }, [emotionalQuotes.length]);

// // // // // // //   return (
// // // // // // //     <div className="max-w-7xl mx-auto px-4 py-6 space-y-10">
// // // // // // //       {/* 💖 TOP DEEP EMOTIONAL BANNER (FIRST THING USER SEES) */}
// // // // // // //       <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-950/90 via-pink-950/80 to-black border border-pink-500/40 p-6 md:p-8 text-center shadow-[0_0_35px_rgba(236,72,153,0.25)] backdrop-blur-2xl">
// // // // // // //         <div className="absolute top-2 left-4 text-pink-500/30 text-4xl select-none">
// // // // // // //           “
// // // // // // //         </div>
// // // // // // //         <div className="absolute bottom-2 right-4 text-pink-500/30 text-4xl select-none">
// // // // // // //           ”
// // // // // // //         </div>

// // // // // // //         <span className="inline-block bg-pink-500/20 border border-pink-500/30 text-pink-300 text-[11px] px-3.5 py-1 rounded-full uppercase tracking-widest font-bold mb-3 animate-pulse">
// // // // // // //           ✨ A Gentle Reminder
// // // // // // //         </span>

// // // // // // //         {/* Dynamic Emotional Quote */}
// // // // // // //         <p className="text-lg md:text-2xl font-serif italic text-pink-100 max-w-4xl mx-auto leading-relaxed transition-all duration-700">
// // // // // // //           "{emotionalQuotes[currentQuoteIndex]}"
// // // // // // //         </p>

// // // // // // //         <p className="text-xs text-gray-400 mt-3 font-sans">
// // // // // // //           Kya aapne aaj apne un khas insaan se baat ki? Unhe batayein ki wo
// // // // // // //           aapke liye kitne kimti hain...
// // // // // // //         </p>
// // // // // // //       </div>

// // // // // // //       {/* HERO SECTION */}
// // // // // // //       <div className="rounded-3xl bg-gradient-to-r from-purple-950/80 via-pink-950/60 to-black/90 p-8 md:p-12 border border-pink-500/30 shadow-2xl backdrop-blur-xl flex flex-col md:flex-row justify-between items-center">
// // // // // // //         <div className="max-w-xl">
// // // // // // //           <span className="bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs px-3.5 py-1.5 rounded-full uppercase tracking-widest font-bold">
// // // // // // //             ✨ Pure Emotions, Tailored Gifts
// // // // // // //           </span>
// // // // // // //           <h1 className="text-4xl md:text-6xl font-black mt-4 mb-4 leading-tight">
// // // // // // //             Small Budget... <br />
// // // // // // //             <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
// // // // // // //               Big Surprises!
// // // // // // //             </span>
// // // // // // //           </h1>
// // // // // // //           <p className="text-gray-300 mb-6 text-sm md:text-base">
// // // // // // //             Har rishte ke liye ek yaadgaar surprise package. Budget chaho jo bhi
// // // // // // //             ho, emotions hamesha 100% pure honge.
// // // // // // //           </p>
// // // // // // //           <button
// // // // // // //             onClick={() => navigate("/packages")}
// // // // // // //             className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-105 transition"
// // // // // // //           >
// // // // // // //             Explore Packages Now
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //         <div className="mt-8 md:mt-0 w-72 h-72 rounded-3xl overflow-hidden border-2 border-pink-500/30 shadow-2xl">
// // // // // // //           <img
// // // // // // //             src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600"
// // // // // // //             alt="Surprise Box"
// // // // // // //             className="w-full h-full object-cover"
// // // // // // //           />
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Rest of Categories & Packages below... */}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Home;

// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import { useNavigate } from "react-router-dom";

// // // // // // const Home = () => {
// // // // // //   const navigate = useNavigate();

// // // // // //   // Dynamic Deep Emotional Quotes List
// // // // // //   // const emotionalQuotes = [
// // // // // //   //   "Kuch log hamari zindagi mein itne khaas hote hain ki unke hone se hi sab khoobsurat lagta hai... Par hum aksar unhe yeh batana bhool jaate hain.",
// // // // // //   //   "Waqt tezi se nikal raha hai... Kisi ke chehre par ek sachhi muskaan laane ka mauka baar-baar nahi milta.",
// // // // // //   //   "Rishte sirf chalte nahi, unhe mehsoos karana padta hai. Aaj ek chhota sa gesture unke poore din ko khas bana sakta hai.",
// // // // // //   // ];

// // // // // //   // frontend/src/data/emotionalQuotes.js

// // // // // //   const emotionalQuotes = [
// // // // // //     {
// // // // // //       id: 1,
// // // // // //       quote:
// // // // // //         "जिंदगी में कुछ लोग ऐसे होते हैं, जिनके होने मात्र से ही दिल को सुकून मिल जाता है... आज उन्हें बताइए कि वो आपके लिए कितने ख़ास हैं।",
// // // // // //       tagline: "✨ हर ख़ास इंसान के लिए",
// // // // // //     },
// // // // // //     {
// // // // // //       id: 2,
// // // // // //       quote:
// // // // // //         "बात महँगे या सस्ते की नहीं है... बात तो उस एहसास की है, जो बताता है कि दूर रहकर भी कोई आपका कितना ख़याल रखता है।",
// // // // // //       tagline: "❤️ अहसास जो दिल को छु ले",
// // // // // //     },
// // // // // //     {
// // // // // //       id: 3,
// // // // // //       quote:
// // // // // //         "जो बिना वजह आपकी फ़िक्र करते हैं, आपके हर सुख-दुख में खामोशी से साथ खड़े रहते हैं... उनके चेहरे पर एक छोटी सी मुस्कान लाना तो बनता है।",
// // // // // //       tagline: "🎁 अपनों की अनमोल मुस्कान",
// // // // // //     },
// // // // // //     {
// // // // // //       id: 4,
// // // // // //       quote:
// // // // // //         "वक्त के साथ सब बदल जाता है, लेकिन कुछ लोगों का दिया हुआ प्यार और साथ ताउम्र दिल में ज़िंदा रहता है।",
// // // // // //       tagline: "🌟 ताउम्र की ख़ूबसूरत यादें",
// // // // // //     },
// // // // // //     {
// // // // // //       id: 5,
// // // // // //       quote:
// // // // // //         "कभी-कभी लफ़्ज़ों में शुक्रगुज़ार होना मुश्किल होता है... पर एक प्यारा सा सरप्राइज बिना कुछ कहे दिल की हर बात बयां कर देता है।",
// // // // // //       tagline: "बयानों से परे प्यार",
// // // // // //     },
// // // // // //   ];

// // // // // //   const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

// // // // // //   // Auto rotate quotes every 6 seconds
// // // // // //   useEffect(() => {
// // // // // //     const timer = setInterval(() => {
// // // // // //       setCurrentQuoteIndex((prev) => (prev + 1) % emotionalQuotes.length);
// // // // // //     }, 6000);
// // // // // //     return () => clearInterval(timer);
// // // // // //   }, [emotionalQuotes.length]);

// // // // // //   const categories = [
// // // // // //     {
// // // // // //       id: "girlfriend",
// // // // // //       title: "For Girlfriend",
// // // // // //       img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400",
// // // // // //       tag: "Romantic & Glowing",
// // // // // //     },
// // // // // //     {
// // // // // //       id: "boyfriend",
// // // // // //       title: "For Boyfriend",
// // // // // //       img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400",
// // // // // //       tag: "Classy & Useful",
// // // // // //     },
// // // // // //     {
// // // // // //       id: "friends",
// // // // // //       title: "For Friends",
// // // // // //       img: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=400",
// // // // // //       tag: "Fun & Trendy",
// // // // // //     },
// // // // // //     {
// // // // // //       id: "mom",
// // // // // //       title: "For Mom",
// // // // // //       img: "https://images.unsplash.com/photo-1513885535751-8b9238bd482a?q=80&w=400",
// // // // // //       tag: "Heartfelt & Elegant",
// // // // // //     },
// // // // // //     {
// // // // // //       id: "dad",
// // // // // //       title: "For Dad",
// // // // // //       img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=400",
// // // // // //       tag: "Premium & Respect",
// // // // // //     },
// // // // // //     {
// // // // // //       id: "colleagues",
// // // // // //       title: "For Colleagues",
// // // // // //       img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=400",
// // // // // //       tag: "Corporate & Neat",
// // // // // //     },
// // // // // //   ];

// // // // // //   const packages = [
// // // // // //     {
// // // // // //       id: "home-pkg",
// // // // // //       name: "Home Package",
// // // // // //       price: "₹499",
// // // // // //       details:
// // // // // //         "Cute Greeting Card, Scented Candle, Custom Message Note, Fairy Lights Packaging.",
// // // // // //     },
// // // // // //     {
// // // // // //       id: "normal-pkg",
// // // // // //       name: "Normal Package",
// // // // // //       price: "₹999",
// // // // // //       details:
// // // // // //         "Personalized Photo Frame, Premium Chocolates, LED Bottle Light, Handmade Card.",
// // // // // //     },
// // // // // //     {
// // // // // //       id: "luxury-pkg",
// // // // // //       name: "Luxury Package",
// // // // // //       price: "₹2,499",
// // // // // //       details:
// // // // // //         "Customized Teddy/Watch, Imported Chocolates, Memory Scrapbook, Premium Wooden Box Wrap.",
// // // // // //     },
// // // // // //     {
// // // // // //       id: "surprise-box",
// // // // // //       name: "Surprise Box",
// // // // // //       price: "₹1,499",
// // // // // //       details:
// // // // // //         "Mystery Customized Gift Items tailored according to recipient relationship & favourite choices.",
// // // // // //     },
// // // // // //   ];

// // // // // //   return (
// // // // // //     <div className="max-w-7xl mx-auto px-4 py-6 space-y-12">
// // // // // //       {/* 💖 1. TOP DEEP EMOTIONAL BANNER */}
// // // // // //       <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-950/90 via-pink-950/80 to-black border border-pink-500/40 p-6 md:p-8 text-center shadow-[0_0_35px_rgba(236,72,153,0.25)] backdrop-blur-2xl">
// // // // // //         <div className="absolute top-2 left-4 text-pink-500/30 text-4xl select-none">
// // // // // //           “
// // // // // //         </div>
// // // // // //         <div className="absolute bottom-2 right-4 text-pink-500/30 text-4xl select-none">
// // // // // //           ”
// // // // // //         </div>

// // // // // //         <span className="inline-block bg-pink-500/20 border border-pink-500/30 text-pink-300 text-[11px] px-3.5 py-1 rounded-full uppercase tracking-widest font-bold mb-3 animate-pulse">
// // // // // //           ✨ A Gentle Reminder
// // // // // //         </span>

// // // // // //         <p className="text-lg md:text-2xl font-serif italic text-pink-100 max-w-4xl mx-auto leading-relaxed transition-all duration-700">
// // // // // //           "{emotionalQuotes[currentQuoteIndex]}"
// // // // // //         </p>

// // // // // //         <p className="text-xs text-gray-400 mt-3 font-sans">
// // // // // //           Kya aapne aaj apne un khas insaan se baat ki? Unhe batayein ki wo
// // // // // //           aapke liye kitne kimti hain...
// // // // // //         </p>
// // // // // //       </div>

// // // // // //       {/* 🚀 2. HERO BANNER */}
// // // // // //       <div className="rounded-3xl bg-gradient-to-r from-purple-950/80 via-pink-950/60 to-black/90 p-8 md:p-12 border border-pink-500/30 shadow-[0_0_50px_rgba(236,72,153,0.2)] backdrop-blur-xl flex flex-col md:flex-row justify-between items-center">
// // // // // //         <div className="max-w-xl">
// // // // // //           <span className="bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs px-3.5 py-1.5 rounded-full uppercase tracking-widest font-bold">
// // // // // //             ✨ Pure Emotions, Tailored Gifts
// // // // // //           </span>
// // // // // //           <h1 className="text-4xl md:text-6xl font-black mt-4 mb-4 leading-tight">
// // // // // //             Small Budget... <br />
// // // // // //             <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
// // // // // //               Big Surprises!
// // // // // //             </span>
// // // // // //           </h1>
// // // // // //           <p className="text-gray-300 mb-6 text-sm md:text-base">
// // // // // //             Har rishte ke liye ek yaadgaar surprise package. Budget chaho jo bhi
// // // // // //             ho, emotions hamesha 100% pure honge.
// // // // // //           </p>
// // // // // //           <button
// // // // // //             onClick={() => navigate("/packages")}
// // // // // //             className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-105 transition"
// // // // // //           >
// // // // // //             Explore Packages Now
// // // // // //           </button>
// // // // // //         </div>
// // // // // //         <div className="mt-8 md:mt-0 w-72 h-72 rounded-3xl overflow-hidden border-2 border-pink-500/30 shadow-2xl">
// // // // // //           <img
// // // // // //             src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600"
// // // // // //             alt="Surprise Box"
// // // // // //             className="w-full h-full object-cover"
// // // // // //           />
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* 🎁 3. SHOP BY CATEGORY / RELATIONSHIP */}
// // // // // //       <div>
// // // // // //         <h2 className="text-2xl md:text-3xl font-black mb-2">
// // // // // //           Shop by Category & Relationship
// // // // // //         </h2>
// // // // // //         <p className="text-gray-400 text-sm mb-6">
// // // // // //           Choose who you are sending the surprise gift to:
// // // // // //         </p>
// // // // // //         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
// // // // // //           {categories.map((cat) => (
// // // // // //             <div
// // // // // //               key={cat.id}
// // // // // //               onClick={() => navigate(`/packages?relation=${cat.id}`)}
// // // // // //               className="bg-white/[0.05] border border-white/10 rounded-2xl p-3 text-center backdrop-blur-md hover:border-pink-500/60 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] cursor-pointer transition group"
// // // // // //             >
// // // // // //               <div className="h-28 rounded-xl overflow-hidden mb-3 border border-white/10 group-hover:scale-105 transition">
// // // // // //                 <img
// // // // // //                   src={cat.img}
// // // // // //                   alt={cat.title}
// // // // // //                   className="w-full h-full object-cover"
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <h3 className="font-bold text-sm text-white">{cat.title}</h3>
// // // // // //               <p className="text-[10px] text-pink-400 mt-1">{cat.tag}</p>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* 📦 4. POPULAR GIFT PACKAGES WITH DETAILS */}
// // // // // //       <div>
// // // // // //         <h2 className="text-2xl md:text-3xl font-black mb-2">
// // // // // //           Popular Gift Packages
// // // // // //         </h2>
// // // // // //         <p className="text-gray-400 text-sm mb-6">
// // // // // //           Here is exactly what we deliver inside each budget package:
// // // // // //         </p>
// // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // // // // //           {packages.map((pkg) => (
// // // // // //             <div
// // // // // //               key={pkg.id}
// // // // // //               className="bg-white/[0.05] border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(236,72,153,0.2)] transition flex flex-col justify-between"
// // // // // //             >
// // // // // //               <div>
// // // // // //                 <span className="text-xs bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full font-semibold">
// // // // // //                   Budget Package
// // // // // //                 </span>
// // // // // //                 <h3 className="text-xl font-bold mt-3">{pkg.name}</h3>
// // // // // //                 <p className="text-2xl font-black text-pink-400 my-2">
// // // // // //                   {pkg.price}
// // // // // //                 </p>
// // // // // //                 <div className="bg-white/5 border border-white/10 rounded-xl p-3 my-3">
// // // // // //                   <p className="text-xs font-semibold text-pink-300 mb-1">
// // // // // //                     🎁 What's Included:
// // // // // //                   </p>
// // // // // //                   <p className="text-xs text-gray-300 leading-relaxed">
// // // // // //                     {pkg.details}
// // // // // //                   </p>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //               <button
// // // // // //                 onClick={() => navigate(`/product/${pkg.id}`)}
// // // // // //                 className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-600 font-bold py-2.5 rounded-xl hover:scale-105 transition text-sm shadow-md"
// // // // // //               >
// // // // // //                 Customize & Order
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Home;

// // // // // import React, { useState, useEffect } from "react";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import { ShoppingCart } from "lucide-react";
// // // // // import { useCart } from "../context/CartContext";
// // // // // import { PACKAGES } from "../data/catalog";

// // // // // const Home = () => {
// // // // //   const navigate = useNavigate();
// // // // //   const { addToCart } = useCart();
// // // // //   const addPackageToCart = (id) => {
// // // // //     const pkg = PACKAGES.find((item) => item._id === id);
// // // // //     if (!pkg) return;
// // // // //     addToCart({
// // // // //       ...pkg,
// // // // //       title: pkg.name,
// // // // //       image: pkg.image,
// // // // //       type: "package",
// // // // //       packageId: pkg._id,
// // // // //     });
// // // // //     navigate("/cart");
// // // // //   };

// // // // //   // Dynamic Deep Emotional Quotes List (Pure Hindi Universal Objects)
// // // // //   const emotionalQuotes = [
// // // // //     {
// // // // //       id: 1,
// // // // //       quote:
// // // // //         "जिंदगी में कुछ लोग ऐसे होते हैं, जिनके होने मात्र से ही दिल को सुकून मिल जाता है... आज उन्हें बताइए कि वो आपके लिए कितने ख़ास हैं।",
// // // // //       tagline: "✨ हर ख़ास इंसान के लिए",
// // // // //     },
// // // // //     {
// // // // //       id: 2,
// // // // //       quote:
// // // // //         "बात महँगे या सस्ते की नहीं है... बात तो उस एहसास की है, जो बताता है कि दूर रहकर भी कोई आपका कितना ख़याल रखता है।",
// // // // //       tagline: "❤️ अहसास जो दिल को छु ले",
// // // // //     },
// // // // //     {
// // // // //       id: 3,
// // // // //       quote:
// // // // //         "जो बिना वजह आपकी फ़िक्र करते हैं, आपके हर सुख-दुख में खामोशी से साथ खड़े रहते हैं... उनके चेहरे पर एक छोटी सी मुस्कान लाना तो बनता है।",
// // // // //       tagline: "🎁 अपनों की अनमोल मुस्कान",
// // // // //     },
// // // // //     {
// // // // //       id: 4,
// // // // //       quote:
// // // // //         "वक्त के साथ सब बदल जाता है, लेकिन कुछ लोगों का दिया हुआ प्यार और साथ ताउम्र दिल में ज़िंदा रहता है।",
// // // // //       tagline: "🌟 ताउम्र की ख़ूबसूरत यादें",
// // // // //     },
// // // // //     {
// // // // //       id: 5,
// // // // //       quote:
// // // // //         "कभी-कभी लफ़्ज़ों में शुक्रगुज़ार होना मुश्किल होता है... पर एक प्यारा सा सरप्राइज बिना कुछ कहे दिल की हर बात बयां कर देता है।",
// // // // //       tagline: "बयानों से परे प्यार",
// // // // //     },
// // // // //   ];

// // // // //   const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

// // // // //   // Auto rotate quotes every 6 seconds
// // // // //   useEffect(() => {
// // // // //     const timer = setInterval(() => {
// // // // //       setCurrentQuoteIndex((prev) => (prev + 1) % emotionalQuotes.length);
// // // // //     }, 6000);
// // // // //     return () => clearInterval(timer);
// // // // //   }, [emotionalQuotes.length]);

// // // // //   // const categories = [
// // // // //   //   {
// // // // //   //     id: "girlfriend",
// // // // //   //     title: "For Girlfriend",
// // // // //   //     img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400",
// // // // //   //     tag: "Romantic & Glowing",
// // // // //   //   },
// // // // //   //   {
// // // // //   //     id: "boyfriend",
// // // // //   //     title: "For Boyfriend",
// // // // //   //     img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400",
// // // // //   //     tag: "Classy & Useful",
// // // // //   //   },
// // // // //   //   {
// // // // //   //     id: "friends",
// // // // //   //     title: "For Friends",
// // // // //   //     img: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=400",
// // // // //   //     tag: "Fun & Trendy",
// // // // //   //   },
// // // // //   //   {
// // // // //   //     id: "mom",
// // // // //   //     title: "For Mom",
// // // // //   //     img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400",
// // // // //   //     tag: "Heartfelt & Elegant",
// // // // //   //   },
// // // // //   //   {
// // // // //   //     id: "dad",
// // // // //   //     title: "For Dad",
// // // // //   //     img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=400",
// // // // //   //     tag: "Premium & Respect",
// // // // //   //   },
// // // // //   //   {
// // // // //   //     id: "colleagues",
// // // // //   //     title: "For Colleagues",
// // // // //   //     img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=400",
// // // // //   //     tag: "Corporate & Neat",
// // // // //   //   },
// // // // //   // ];

// // // // //   const categories = [
// // // // //     {
// // // // //       id: "girlfriend",
// // // // //       title: "For Girlfriend",
// // // // //       // Romantic, red roses, luxury gift box, warm vibe
// // // // //       // img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop",
// // // // //       img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop",
// // // // //       tag: "Romantic & Glowing",
// // // // //     },
// // // // //     {
// // // // //       id: "boyfriend",
// // // // //       title: "For Boyfriend",
// // // // //       // Elegant watch, masculine aesthetic, dark vibe
// // // // //       img: "/img1.png",
// // // // //       tag: "Classy & Useful",
// // // // //     },
// // // // //     {
// // // // //       id: "friends",
// // // // //       title: "For Friends",
// // // // //       // Fun, party, colorful balloons and celebration
// // // // //       img: "img5.png",
// // // // //       tag: "Fun & Trendy",
// // // // //     },
// // // // //     {
// // // // //       id: "mom",
// // // // //       title: "For Mom",
// // // // //       // Flowers, soft warm colors, elegant and heartfelt
// // // // //       img: "img3.png",
// // // // //       tag: "Heartfelt & Elegant",
// // // // //     },
// // // // //     {
// // // // //       id: "dad",
// // // // //       title: "For Dad",
// // // // //       // Premium leather gift, sophisticated vibe
// // // // //       img: "img2.png",
// // // // //       tag: "Premium & Respect",
// // // // //     },
// // // // //     {
// // // // //       id: "colleagues",
// // // // //       title: "For Colleagues",
// // // // //       // Clean, corporate, neat and professional
// // // // //       img: "img5.png",
// // // // //       tag: "Corporate & Neat",
// // // // //     },
// // // // //   ];
// // // // //   // const packages = [
// // // // //   //   {
// // // // //   //     id: "home-pkg",
// // // // //   //     name: "Home Package",
// // // // //   //     price: "₹1",
// // // // //   //     details:
// // // // //   //       "Cute Greeting Card, Scented Candle, Custom Message Note, Fairy Lights Packaging.",
// // // // //   //   },
// // // // //   //   {
// // // // //   //     id: "normal-pkg",
// // // // //   //     name: "Normal Package",
// // // // //   //     price: "₹1",
// // // // //   //     details:
// // // // //   //       "Personalized Photo Frame, Premium Chocolates, LED Bottle Light, Handmade Card.",
// // // // //   //   },
// // // // //   //   {
// // // // //   //     id: "luxury-pkg",
// // // // //   //     name: "Luxury Package",
// // // // //   //     price: "₹2",
// // // // //   //     details:
// // // // //   //       "Customized Teddy/Watch, Imported Chocolates, Memory Scrapbook, Premium Wooden Box Wrap.",
// // // // //   //   },
// // // // //   //   {
// // // // //   //     id: "surprise-box",
// // // // //   //     name: "Surprise Box",
// // // // //   //     price: "₹1",
// // // // //   //     details:
// // // // //   //       "Mystery Customized Gift Items tailored according to recipient relationship & favourite choices.",
// // // // //   //   },
// // // // //   // ];

// // // // //   const packages = [
// // // // //     {
// // // // //       id: "home-pkg",
// // // // //       name: "Home Package",
// // // // //       price: "₹499",
// // // // //       details:
// // // // //         "Cute Greeting Card, Scented Candle, Custom Message Note, Fairy Lights.",
// // // // //       // Soft, budget-friendly cute gift
// // // // //       img: "img1.png",
// // // // //     },
// // // // //     {
// // // // //       id: "normal-pkg",
// // // // //       name: "Normal Package",
// // // // //       price: "₹999",
// // // // //       details:
// // // // //         "Personalized Photo Frame, Premium Chocolates, LED Bottle Light, Card.",
// // // // //       // Chocolates and a standard premium gift
// // // // //       img: "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=600&auto=format&fit=crop",
// // // // //     },
// // // // //     {
// // // // //       id: "surprise-box",
// // // // //       name: "Surprise Box",
// // // // //       price: "₹1,499",
// // // // //       details:
// // // // //         "Mystery Customized Gift Items tailored according to recipient relationship.",
// // // // //       // A mysterious glowing gift box
// // // // //       img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=600&auto=format&fit=crop",
// // // // //     },
// // // // //     {
// // // // //       id: "luxury-pkg",
// // // // //       name: "Luxury Package",
// // // // //       price: "₹2,499",
// // // // //       details:
// // // // //         "Customized Teddy/Watch, Imported Chocolates, Memory Scrapbook, Wooden Box.",
// // // // //       // Luxury watch/teddy, very premium look
// // // // //       img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop",
// // // // //     },
// // // // //   ];

// // // // //   // Current Quote object extract kar rahe hain
// // // // //   const activeQuote = emotionalQuotes[currentQuoteIndex];

// // // // //   return (
// // // // //     <div className="max-w-7xl mx-auto px-4 py-6 space-y-12">
// // // // //       {/* 💖 1. TOP DEEP EMOTIONAL BANNER */}
// // // // //       <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-950/90 via-pink-950/80 to-black border border-pink-500/40 p-6 md:p-8 text-center shadow-[0_0_35px_rgba(236,72,153,0.25)] backdrop-blur-2xl">
// // // // //         <div className="absolute top-2 left-4 text-pink-500/30 text-4xl select-none">
// // // // //           “
// // // // //         </div>
// // // // //         <div className="absolute bottom-2 right-4 text-pink-500/30 text-4xl select-none">
// // // // //           ”
// // // // //         </div>

// // // // //         {/* ✅ Tagline render ki gayi hai */}
// // // // //         <span className="inline-block bg-pink-500/20 border border-pink-500/30 text-pink-300 text-[11px] px-3.5 py-1 rounded-full uppercase tracking-widest font-bold mb-3 animate-pulse">
// // // // //           {activeQuote.tagline}
// // // // //         </span>

// // // // //         {/* ✅ Quote ki string render ki gayi hai */}
// // // // //         <p className="text-lg md:text-2xl font-serif italic text-pink-100 max-w-4xl mx-auto leading-relaxed transition-all duration-700">
// // // // //           "{activeQuote.quote}"
// // // // //         </p>

// // // // //         <p className="text-xs text-gray-400 mt-3 font-sans">
// // // // //           क्या अपने आज उन खास इंसान से बात की ? उन्हे बताएँ की वो आपके लिए कितने
// // // // //           कीमती हैं॥
// // // // //         </p>
// // // // //       </div>

// // // // //       {/* 🚀 2. HERO BANNER */}
// // // // //       <div className="rounded-3xl bg-gradient-to-r from-purple-950/80 via-pink-950/60 to-black/90 p-8 md:p-12 border border-pink-500/30 shadow-[0_0_50px_rgba(236,72,153,0.2)] backdrop-blur-xl flex flex-col md:flex-row justify-between items-center">
// // // // //         <div className="max-w-xl">
// // // // //           <span className="bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs px-3.5 py-1.5 rounded-full uppercase tracking-widest font-bold">
// // // // //             ✨ Pure Emotions, Tailored Gifts
// // // // //           </span>
// // // // //           <h1 className="text-4xl md:text-6xl font-black mt-4 mb-4 leading-tight">
// // // // //             Small Budget... <br />
// // // // //             <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
// // // // //               Big Surprises!
// // // // //             </span>
// // // // //           </h1>
// // // // //           <p className="text-gray-300 mb-6 text-sm md:text-base">
// // // // //             {/* Har rishte ke liye ek yaadgaar surprise package. Budget chaho jo bhi
// // // // //             ho, emotions hamesha 100% pure honge. */}
// // // // //             हर रिश्ते के लिए एक यादगार Surprise Package. Budget चाहे जितना भी हो
// // // // //             Emotions हमेशा 100% शुद्ध होंगे
// // // // //           </p>
// // // // //           <button
// // // // //             onClick={() => navigate("/packages")}
// // // // //             className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-105 transition"
// // // // //           >
// // // // //             Explore Packages Now
// // // // //           </button>
// // // // //         </div>
// // // // //         <div className="mt-8 md:mt-0 w-72 h-72 rounded-3xl overflow-hidden border-2 border-pink-500/30 shadow-2xl">
// // // // //           <img
// // // // //             src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600"
// // // // //             alt="Surprise Box"
// // // // //             className="w-full h-full object-cover"
// // // // //           />
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* 🎁 3. SHOP BY CATEGORY / RELATIONSHIP */}
// // // // //       <div>
// // // // //         <h2 className="text-2xl md:text-3xl font-black mb-2">
// // // // //           Shop by Category & Relationship
// // // // //         </h2>
// // // // //         <p className="text-gray-400 text-sm mb-6">
// // // // //           Choose who you are sending the surprise gift to:
// // // // //         </p>
// // // // //         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
// // // // //           {categories.map((cat) => (
// // // // //             <div
// // // // //               key={cat.id}
// // // // //               onClick={() => navigate(`/packages?relation=${cat.id}`)}
// // // // //               className="bg-white/[0.05] border border-white/10 rounded-2xl p-3 text-center backdrop-blur-md hover:border-pink-500/60 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] cursor-pointer transition group"
// // // // //             >
// // // // //               <div className="h-28 rounded-xl overflow-hidden mb-3 border border-white/10 group-hover:scale-105 transition">
// // // // //                 <img
// // // // //                   src={cat.img}
// // // // //                   alt={cat.title}
// // // // //                   className="w-full h-full object-cover"
// // // // //                 />
// // // // //               </div>
// // // // //               <h3 className="font-bold text-sm text-white">{cat.title}</h3>
// // // // //               <p className="text-[10px] text-pink-400 mt-1">{cat.tag}</p>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* 📦 4. POPULAR GIFT PACKAGES WITH DETAILS */}
// // // // //       <div>
// // // // //         <h2 className="text-2xl md:text-3xl font-black mb-2">
// // // // //           Popular Gift Packages
// // // // //         </h2>
// // // // //         <p className="text-gray-400 text-sm mb-6">
// // // // //           Here is exactly what we deliver inside each budget package:
// // // // //         </p>
// // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // // // //           {packages.map((pkg) => (
// // // // //             <div
// // // // //               key={pkg.id}
// // // // //               className="bg-white/[0.05] border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(236,72,153,0.2)] transition flex flex-col justify-between"
// // // // //             >
// // // // //               <div>
// // // // //                 <span className="text-xs bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full font-semibold">
// // // // //                   Budget Package
// // // // //                 </span>
// // // // //                 <h3 className="text-xl font-bold mt-3">{pkg.name}</h3>
// // // // //                 <p className="text-2xl font-black text-pink-400 my-2">
// // // // //                   {pkg.price}
// // // // //                 </p>
// // // // //                 <div className="bg-white/5 border border-white/10 rounded-xl p-3 my-3">
// // // // //                   <p className="text-xs font-semibold text-pink-300 mb-1">
// // // // //                     🎁 What's Included:
// // // // //                   </p>
// // // // //                   <p className="text-xs text-gray-300 leading-relaxed">
// // // // //                     {pkg.details}
// // // // //                   </p>
// // // // //                 </div>
// // // // //               </div>
// // // // //               <div className="mt-4 grid grid-cols-2 gap-2">
// // // // //                 <button
// // // // //                   onClick={() => navigate(`/product/${pkg.id}`)}
// // // // //                   className="w-full bg-white/10 border border-pink-400/40 text-pink-100 font-bold py-2.5 rounded-xl hover:bg-pink-500/10 transition text-sm"
// // // // //                 >
// // // // //                   Customize
// // // // //                 </button>
// // // // //                 <button
// // // // //                   onClick={() => addPackageToCart(pkg.id)}
// // // // //                   className="w-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold py-2.5 rounded-xl hover:brightness-110 transition text-sm shadow-md flex items-center justify-center gap-1"
// // // // //                 >
// // // // //                   <ShoppingCart size={15} /> Add to Cart
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Home;

// // // // import React, { useState, useEffect } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import { ShoppingCart } from "lucide-react";
// // // // import { useCart } from "../context/CartContext";
// // // // import { PACKAGES } from "../data/catalog";

// // // // const Home = () => {
// // // //   const navigate = useNavigate();
// // // //   const { addToCart } = useCart();

// // // //   const addPackageToCart = (id) => {
// // // //     const pkg = PACKAGES.find((item) => item._id === id);
// // // //     if (!pkg) return;
// // // //     addToCart({
// // // //       ...pkg,
// // // //       title: pkg.name,
// // // //       image: pkg.image,
// // // //       type: "package",
// // // //       packageId: pkg._id,
// // // //     });
// // // //     navigate("/cart");
// // // //   };

// // // //   const emotionalQuotes = [
// // // //     {
// // // //       id: 1,
// // // //       quote:
// // // //         "जिंदगी में कुछ लोग ऐसे होते हैं, जिनके होने मात्र से ही दिल को सुकून मिल जाता है... आज उन्हें बताइए कि वो आपके लिए कितने ख़ास हैं।",
// // // //       tagline: "✨ हर ख़ास इंसान के लिए",
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       quote:
// // // //         "बात महँगे या सस्ते की नहीं है... बात तो उस एहसास की है, जो बताता है कि दूर रहकर भी कोई आपका कितना ख़याल रखता है।",
// // // //       tagline: "❤️ अहसास जो दिल को छु ले",
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       quote:
// // // //         "जो बिना वजह आपकी फ़िक्र करते हैं, आपके हर सुख-दुख में खामोशी से साथ खड़े रहते हैं... उनके चेहरे पर एक छोटी सी मुस्कान लाना तो बनता है।",
// // // //       tagline: "🎁 अपनों की अनमोल मुस्कान",
// // // //     },
// // // //   ];

// // // //   const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

// // // //   useEffect(() => {
// // // //     const timer = setInterval(() => {
// // // //       setCurrentQuoteIndex((prev) => (prev + 1) % emotionalQuotes.length);
// // // //     }, 6000);
// // // //     return () => clearInterval(timer);
// // // //   }, [emotionalQuotes.length]);

// // // //   // 🔥 Yahan aapki local images use ki gayi hain
// // // //   const categories = [
// // // //     {
// // // //       id: "girlfriend",
// // // //       title: "For Girlfriend",
// // // //       img: "/img1.png",
// // // //       tag: "Romantic & Glowing",
// // // //     },
// // // //     {
// // // //       id: "boyfriend",
// // // //       title: "For Boyfriend",
// // // //       img: "/img2.png",
// // // //       tag: "Classy & Useful",
// // // //     },
// // // //     {
// // // //       id: "friends",
// // // //       title: "For Friends",
// // // //       img: "/img5.png",
// // // //       tag: "Fun & Trendy",
// // // //     },
// // // //     {
// // // //       id: "mom",
// // // //       title: "For Mom",
// // // //       img: "/img3.png",
// // // //       tag: "Heartfelt & Elegant",
// // // //     },
// // // //     { id: "dad", title: "For Dad", img: "/img1.png", tag: "Premium & Respect" },
// // // //     {
// // // //       id: "colleagues",
// // // //       title: "For Colleagues",
// // // //       img: "/img5.png",
// // // //       tag: "Corporate & Neat",
// // // //     },
// // // //   ];

// // // //   const packages = [
// // // //     {
// // // //       id: "home-pkg",
// // // //       name: "Home Package",
// // // //       price: "₹499",
// // // //       details:
// // // //         "Cute Greeting Card, Scented Candle, Custom Message Note, Fairy Lights.",
// // // //       img: "/img1.png",
// // // //     },
// // // //     {
// // // //       id: "normal-pkg",
// // // //       name: "Normal Package",
// // // //       price: "₹999",
// // // //       details:
// // // //         "Personalized Photo Frame, Premium Chocolates, LED Bottle Light, Card.",
// // // //       img: "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=600&auto=format&fit=crop",
// // // //     },
// // // //     {
// // // //       id: "surprise-box",
// // // //       name: "Surprise Box",
// // // //       price: "₹1,499",
// // // //       details:
// // // //         "Mystery Customized Gift Items tailored according to recipient relationship.",
// // // //       img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=600&auto=format&fit=crop",
// // // //     },
// // // //     {
// // // //       id: "luxury-pkg",
// // // //       name: "Luxury Package",
// // // //       price: "₹2,499",
// // // //       details:
// // // //         "Customized Teddy/Watch, Imported Chocolates, Memory Scrapbook, Wooden Box.",
// // // //       img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop",
// // // //     },
// // // //   ];

// // // //   const activeQuote = emotionalQuotes[currentQuoteIndex];

// // // //   return (
// // // //     <div className="max-w-7xl mx-auto px-4 py-6 space-y-12">
// // // //       {/* Quote Banner */}
// // // //       <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-950/90 via-pink-950/80 to-black border border-pink-500/40 p-6 md:p-8 text-center shadow-[0_0_35px_rgba(236,72,153,0.25)] backdrop-blur-2xl">
// // // //         <span className="inline-block bg-pink-500/20 border border-pink-500/30 text-pink-300 text-[11px] px-3.5 py-1 rounded-full uppercase tracking-widest font-bold mb-3 animate-pulse">
// // // //           {activeQuote.tagline}
// // // //         </span>
// // // //         <p className="text-lg md:text-2xl font-serif italic text-pink-100 max-w-4xl mx-auto leading-relaxed transition-all duration-700">
// // // //           "{activeQuote.quote}"
// // // //         </p>
// // // //         <p className="text-xs text-gray-400 mt-3 font-sans">
// // // //           क्या अपने आज उन खास इंसान से बात की ? उन्हे बताएँ की वो आपके लिए कितने
// // // //           कीमती हैं॥
// // // //         </p>
// // // //       </div>

// // // //       {/* Hero Banner with img3.png */}
// // // //       <div className="rounded-3xl bg-gradient-to-r from-purple-950/80 via-pink-950/60 to-black/90 p-8 md:p-12 border border-pink-500/30 shadow-[0_0_50px_rgba(236,72,153,0.2)] backdrop-blur-xl flex flex-col md:flex-row justify-between items-center">
// // // //         <div className="max-w-xl">
// // // //           <span className="bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs px-3.5 py-1.5 rounded-full uppercase tracking-widest font-bold">
// // // //             ✨ Pure Emotions, Tailored Gifts
// // // //           </span>
// // // //           <h1 className="text-4xl md:text-6xl font-black mt-4 mb-4 leading-tight">
// // // //             Small Budget... <br />
// // // //             <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
// // // //               Big Surprises!
// // // //             </span>
// // // //           </h1>
// // // //           <p className="text-gray-300 mb-6 text-sm md:text-base">
// // // //             हर रिश्ते के लिए एक यादगार Surprise Package. Budget चाहे जितना भी हो
// // // //             Emotions हमेशा 100% शुद्ध होंगे
// // // //           </p>
// // // //           <button
// // // //             onClick={() => navigate("/packages")}
// // // //             className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-105 transition"
// // // //           >
// // // //             Explore Packages Now
// // // //           </button>
// // // //         </div>
// // // //         <div className="mt-8 md:mt-0 w-72 h-72 rounded-3xl overflow-hidden border-2 border-pink-500/30 shadow-2xl">
// // // //           {/* 🔥 Hero Image img3.png */}
// // // //           <img
// // // //             src="/img3.png"
// // // //             alt="Surprise Box"
// // // //             className="w-full h-full object-cover"
// // // //           />
// // // //         </div>
// // // //       </div>

// // // //       {/* Categories */}
// // // //       <div>
// // // //         <h2 className="text-2xl md:text-3xl font-black mb-2">
// // // //           Shop by Category & Relationship
// // // //         </h2>
// // // //         <p className="text-gray-400 text-sm mb-6">
// // // //           Choose who you are sending the surprise gift to:
// // // //         </p>
// // // //         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
// // // //           {categories.map((cat) => (
// // // //             <div
// // // //               key={cat.id}
// // // //               onClick={() => navigate(`/packages?relation=${cat.id}`)}
// // // //               className="bg-white/[0.05] border border-white/10 rounded-2xl p-3 text-center backdrop-blur-md hover:border-pink-500/60 cursor-pointer transition group"
// // // //             >
// // // //               <div className="h-28 rounded-xl overflow-hidden mb-3 border border-white/10 group-hover:scale-105 transition">
// // // //                 <img
// // // //                   src={cat.img}
// // // //                   alt={cat.title}
// // // //                   className="w-full h-full object-cover"
// // // //                 />
// // // //               </div>
// // // //               <h3 className="font-bold text-sm text-white">{cat.title}</h3>
// // // //               <p className="text-[10px] text-pink-400 mt-1">{cat.tag}</p>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       {/* Packages */}
// // // //       <div>
// // // //         <h2 className="text-2xl md:text-3xl font-black mb-2">
// // // //           Popular Gift Packages
// // // //         </h2>
// // // //         <p className="text-gray-400 text-sm mb-6">
// // // //           Here is exactly what we deliver inside each budget package:
// // // //         </p>
// // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // // //           {packages.map((pkg) => (
// // // //             <div
// // // //               key={pkg.id}
// // // //               className="bg-white/[0.05] border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-pink-500/50 transition flex flex-col justify-between"
// // // //             >
// // // //               <div>
// // // //                 <span className="text-xs bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full font-semibold">
// // // //                   Budget Package
// // // //                 </span>
// // // //                 <h3 className="text-xl font-bold mt-3">{pkg.name}</h3>
// // // //                 <p className="text-2xl font-black text-pink-400 my-2">
// // // //                   {pkg.price}
// // // //                 </p>
// // // //                 <div className="bg-white/5 border border-white/10 rounded-xl p-3 my-3">
// // // //                   <p className="text-xs font-semibold text-pink-300 mb-1">
// // // //                     🎁 What's Included:
// // // //                   </p>
// // // //                   <p className="text-xs text-gray-300 leading-relaxed">
// // // //                     {pkg.details}
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //               <div className="mt-4 grid grid-cols-2 gap-2">
// // // //                 <button
// // // //                   onClick={() => navigate(`/product/${pkg.id}`)}
// // // //                   className="w-full bg-white/10 border border-pink-400/40 text-pink-100 font-bold py-2.5 rounded-xl hover:bg-pink-500/10 transition text-sm"
// // // //                 >
// // // //                   Customize
// // // //                 </button>
// // // //                 <button
// // // //                   onClick={() => addPackageToCart(pkg.id)}
// // // //                   className="w-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold py-2.5 rounded-xl hover:brightness-110 transition text-sm shadow-md flex items-center justify-center gap-1"
// // // //                 >
// // // //                   <ShoppingCart size={15} /> Add to Cart
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Home;

// // // import React, { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { ShoppingCart } from "lucide-react";
// // // import { useCart } from "../context/CartContext";
// // // import { PACKAGES } from "../data/catalog";

// // // const Home = () => {
// // //   const navigate = useNavigate();
// // //   const { addToCart } = useCart();

// // //   const addPackageToCart = (id) => {
// // //     const pkg = PACKAGES.find((item) => item._id === id);
// // //     if (!pkg) return;
// // //     addToCart({
// // //       ...pkg,
// // //       title: pkg.name,
// // //       image: pkg.image,
// // //       type: "package",
// // //       packageId: pkg._id,
// // //     });
// // //     navigate("/cart");
// // //   };

// // //   const emotionalQuotes = [
// // //     {
// // //       id: 1,
// // //       quote:
// // //         "जिंदगी में कुछ लोग ऐसे होते हैं, जिनके होने मात्र से ही दिल को सुकून मिल जाता है... आज उन्हें बताइए कि वो आपके लिए कितने ख़ास हैं।",
// // //       tagline: "✨ हर ख़ास इंसान के लिए",
// // //     },
// // //     {
// // //       id: 2,
// // //       quote:
// // //         "बात महँगे या सस्ते की नहीं है... बात तो उस एहसास की है, जो बताता है कि दूर रहकर भी कोई आपका कितना ख़याल रखता है।",
// // //       tagline: "❤️ अहसास जो दिल को छु ले",
// // //     },
// // //     {
// // //       id: 3,
// // //       quote:
// // //         "जो बिना वजह आपकी फ़िक्र करते हैं, आपके हर सुख-दुख में खामोशी से साथ खड़े रहते हैं... उनके चेहरे पर एक छोटी सी मुस्कान लाना तो बनता है।",
// // //       tagline: "🎁 अपनों की अनमोल मुस्कान",
// // //     },
// // //   ];

// // //   const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

// // //   useEffect(() => {
// // //     const timer = setInterval(() => {
// // //       setCurrentQuoteIndex((prev) => (prev + 1) % emotionalQuotes.length);
// // //     }, 6000);
// // //     return () => clearInterval(timer);
// // //   }, [emotionalQuotes.length]);

// // //   const categories = [
// // //     {
// // //       id: "girlfriend",
// // //       title: "For Girlfriend",
// // //       img: "/img1.png",
// // //       tag: "Romantic & Glowing",
// // //     },
// // //     {
// // //       id: "boyfriend",
// // //       title: "For Boyfriend",
// // //       img: "/img2.png",
// // //       tag: "Classy & Useful",
// // //     },
// // //     {
// // //       id: "friends",
// // //       title: "For Friends",
// // //       img: "/img5.png",
// // //       tag: "Fun & Trendy",
// // //     },
// // //     {
// // //       id: "mom",
// // //       title: "For Mom",
// // //       img: "/img3.png",
// // //       tag: "Heartfelt & Elegant",
// // //     },
// // //     { id: "dad", title: "For Dad", img: "/img4.png", tag: "Premium & Respect" },
// // //     {
// // //       id: "colleagues",
// // //       title: "For Colleagues",
// // //       img: "/img5.png",
// // //       tag: "Corporate & Neat",
// // //     },
// // //   ];

// // //   const packages = [
// // //     {
// // //       id: "home-pkg",
// // //       name: "Home Package",
// // //       price: "₹499",
// // //       details:
// // //         "Cute Greeting Card, Scented Candle, Custom Message Note, Fairy Lights.",
// // //       img: "/img1.png",
// // //     },
// // //     {
// // //       id: "normal-pkg",
// // //       name: "Normal Package",
// // //       price: "₹999",
// // //       details:
// // //         "Personalized Photo Frame, Premium Chocolates, LED Bottle Light, Card.",
// // //       img: "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=600&auto=format&fit=crop",
// // //     },
// // //     {
// // //       id: "luxury-pkg",
// // //       name: "Luxury Package",
// // //       price: "₹2,499",
// // //       details:
// // //         "Customized Teddy/Watch, Imported Chocolates, Memory Scrapbook, Wooden Box.",
// // //       img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop",
// // //     },
// // //     {
// // //       id: "surprise-box",
// // //       name: "Surprise Box",
// // //       price: "₹1,499",
// // //       details:
// // //         "Mystery Customized Gift Items tailored according to recipient relationship.",
// // //       img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=600&auto=format&fit=crop",
// // //     },
// // //   ];

// // //   const activeQuote = emotionalQuotes[currentQuoteIndex];

// // //   return (
// // //     <div className="max-w-7xl mx-auto px-4 py-6 space-y-12">
// // //       {/* Quote Banner */}
// // //       <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-950/90 via-pink-950/80 to-black border border-pink-500/40 p-6 md:p-8 text-center shadow-[0_0_35px_rgba(236,72,153,0.25)] backdrop-blur-2xl">
// // //         <span className="inline-block bg-pink-500/20 border border-pink-500/30 text-pink-300 text-[11px] px-3.5 py-1 rounded-full uppercase tracking-widest font-bold mb-3 animate-pulse">
// // //           {activeQuote.tagline}
// // //         </span>
// // //         <p className="text-lg md:text-2xl font-serif italic text-pink-100 max-w-4xl mx-auto leading-relaxed transition-all duration-700">
// // //           "{activeQuote.quote}"
// // //         </p>
// // //         <p className="text-xs text-gray-400 mt-3 font-sans">
// // //           क्या अपने आज उन खास इंसान से बात की ? उन्हे बताएँ की वो आपके लिए कितने
// // //           कीमती हैं॥
// // //         </p>
// // //       </div>

// // //       {/* Hero Banner */}
// // //       <div className="rounded-3xl bg-gradient-to-r from-purple-950/80 via-pink-950/60 to-black/90 p-8 md:p-12 border border-pink-500/30 shadow-[0_0_50px_rgba(236,72,153,0.2)] backdrop-blur-xl flex flex-col md:flex-row justify-between items-center">
// // //         <div className="max-w-xl">
// // //           <span className="bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs px-3.5 py-1.5 rounded-full uppercase tracking-widest font-bold">
// // //             ✨ Pure Emotions, Tailored Gifts
// // //           </span>
// // //           <h1 className="text-4xl md:text-6xl font-black mt-4 mb-4 leading-tight">
// // //             Small Budget... <br />
// // //             <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
// // //               Big Surprises!
// // //             </span>
// // //           </h1>
// // //           <p className="text-gray-300 mb-6 text-sm md:text-base">
// // //             हर रिश्ते के लिए एक यादगार Surprise Package. Budget चाहे जितना भी हो
// // //             Emotions हमेशा 100% शुद्ध होंगे
// // //           </p>
// // //           <button
// // //             onClick={() => navigate("/packages")}
// // //             className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-105 transition"
// // //           >
// // //             Explore Packages Now
// // //           </button>
// // //         </div>
// // //         <div className="mt-8 md:mt-0 w-72 h-72 rounded-3xl overflow-hidden border-2 border-pink-500/30 shadow-2xl">
// // //           <img
// // //             src="/img3.png"
// // //             alt="Surprise Box"
// // //             className="w-full h-full object-cover"
// // //           />
// // //         </div>
// // //       </div>

// // //       {/* 🔥 CORPORATE DIWALI GIFTING BANNER 🔥 */}
// // //       <div className="bg-gradient-to-r from-gray-900 to-black border border-yellow-500/30 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center shadow-[0_0_30px_rgba(234,179,8,0.15)] relative overflow-hidden">
// // //         <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>
// // //         <div className="z-10 text-center md:text-left mb-6 md:mb-0">
// // //           <span className="bg-yellow-500/20 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-yellow-500/30">
// // //             Corporate Diwali Gifting
// // //           </span>
// // //           <h2 className="text-3xl md:text-4xl font-black mt-3 mb-2 text-white">
// // //             Gifts for Your <span className="text-yellow-400">Employees</span>
// // //           </h2>
// // //           <p className="text-gray-300 text-sm max-w-lg">
// // //             Bulk ordering made easy. Customized gifts, premium packaging, and
// // //             delivery up to 100km. Hurry, Diwali is almost here!
// // //           </p>
// // //         </div>
// // //         <button
// // //           onClick={() => navigate("/corporate-gifting")}
// // //           className="z-10 whitespace-nowrap bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-3.5 rounded-xl shadow-lg transition"
// // //         >
// // //           Request Bulk Quote
// // //         </button>
// // //       </div>

// // //       {/* Categories */}
// // //       <div>
// // //         <h2 className="text-2xl md:text-3xl font-black mb-2">
// // //           Shop by Category & Relationship
// // //         </h2>
// // //         <p className="text-gray-400 text-sm mb-6">
// // //           Choose who you are sending the surprise gift to:
// // //         </p>
// // //         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
// // //           {categories.map((cat) => (
// // //             <div
// // //               key={cat.id}
// // //               onClick={() => navigate(`/packages?relation=${cat.id}`)}
// // //               className="bg-white/[0.05] border border-white/10 rounded-2xl p-3 text-center backdrop-blur-md hover:border-pink-500/60 cursor-pointer transition group"
// // //             >
// // //               <div className="h-28 rounded-xl overflow-hidden mb-3 border border-white/10 group-hover:scale-105 transition">
// // //                 <img
// // //                   src={cat.img}
// // //                   alt={cat.title}
// // //                   className="w-full h-full object-cover"
// // //                 />
// // //               </div>
// // //               <h3 className="font-bold text-sm text-white">{cat.title}</h3>
// // //               <p className="text-[10px] text-pink-400 mt-1">{cat.tag}</p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* Packages */}
// // //       <div>
// // //         <h2 className="text-2xl md:text-3xl font-black mb-2">
// // //           Popular Gift Packages
// // //         </h2>
// // //         <p className="text-gray-400 text-sm mb-6">
// // //           Here is exactly what we deliver inside each budget package:
// // //         </p>
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // //           {packages.map((pkg) => (
// // //             <div
// // //               key={pkg.id}
// // //               className="bg-white/[0.05] border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-pink-500/50 transition flex flex-col justify-between"
// // //             >
// // //               <div>
// // //                 <span className="text-xs bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full font-semibold">
// // //                   Budget Package
// // //                 </span>
// // //                 <h3 className="text-xl font-bold mt-3">{pkg.name}</h3>
// // //                 <p className="text-2xl font-black text-pink-400 my-2">
// // //                   {pkg.price}
// // //                 </p>
// // //                 <div className="bg-white/5 border border-white/10 rounded-xl p-3 my-3">
// // //                   <p className="text-xs font-semibold text-pink-300 mb-1">
// // //                     🎁 What's Included:
// // //                   </p>
// // //                   <p className="text-xs text-gray-300 leading-relaxed">
// // //                     {pkg.details}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //               <div className="mt-4 grid grid-cols-2 gap-2">
// // //                 <button
// // //                   onClick={() => navigate(`/product/${pkg.id}`)}
// // //                   className="w-full bg-white/10 border border-pink-400/40 text-pink-100 font-bold py-2.5 rounded-xl hover:bg-pink-500/10 transition text-sm"
// // //                 >
// // //                   Customize
// // //                 </button>
// // //                 <button
// // //                   onClick={() => addPackageToCart(pkg.id)}
// // //                   className="w-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold py-2.5 rounded-xl hover:brightness-110 transition text-sm shadow-md flex items-center justify-center gap-1"
// // //                 >
// // //                   <ShoppingCart size={15} /> Add to Cart
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Home;

// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { ShoppingCart } from "lucide-react";
// // import { useCart } from "../context/CartContext";
// // import { PACKAGES } from "../data/catalog";

// // const Home = () => {
// //   const navigate = useNavigate();
// //   const { addToCart } = useCart();

// //   const addPackageToCart = (id) => {
// //     const pkg = PACKAGES.find((item) => item._id === id);
// //     if (!pkg) return;
// //     addToCart({
// //       ...pkg,
// //       title: pkg.name,
// //       image: pkg.image,
// //       type: "package",
// //       packageId: pkg._id,
// //     });
// //     navigate("/cart");
// //   };

// //   const emotionalQuotes = [
// //     {
// //       id: 1,
// //       quote:
// //         "जिंदगी में कुछ लोग ऐसे होते हैं, जिनके होने मात्र से ही दिल को सुकून मिल जाता है... आज उन्हें बताइए कि वो आपके लिए कितने ख़ास हैं।",
// //       tagline: "✨ हर ख़ास इंसान के लिए",
// //     },
// //     {
// //       id: 2,
// //       quote:
// //         "बात महँगे या सस्ते की नहीं है... बात तो उस एहसास की है, जो बताता है कि दूर रहकर भी कोई आपका कितना ख़याल रखता है।",
// //       tagline: "❤️ अहसास जो दिल को छु ले",
// //     },
// //     {
// //       id: 3,
// //       quote:
// //         "जो बिना वजह आपकी फ़िक्र करते हैं, आपके हर सुख-दुख में खामोशी से साथ खड़े रहते हैं... उनके चेहरे पर एक छोटी सी मुस्कान लाना तो बनता है।",
// //       tagline: "🎁 अपनों की अनमोल मुस्कान",
// //     },
// //   ];

// //   const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setCurrentQuoteIndex((prev) => (prev + 1) % emotionalQuotes.length);
// //     }, 6000);
// //     return () => clearInterval(timer);
// //   }, [emotionalQuotes.length]);

// //   const categories = [
// //     {
// //       id: "girlfriend",
// //       title: "For Girlfriend",
// //       img: "/img1.png",
// //       tag: "Romantic & Glowing",
// //     },
// //     {
// //       id: "boyfriend",
// //       title: "For Boyfriend",
// //       img: "/img2.png",
// //       tag: "Classy & Useful",
// //     },
// //     {
// //       id: "friends",
// //       title: "For Friends",
// //       img: "/img5.png",
// //       tag: "Fun & Trendy",
// //     },
// //     {
// //       id: "mom",
// //       title: "For Mom",
// //       img: "/img3.png",
// //       tag: "Heartfelt & Elegant",
// //     },
// //     { id: "dad", title: "For Dad", img: "/img4.png", tag: "Premium & Respect" },
// //     {
// //       id: "colleagues",
// //       title: "For Colleagues",
// //       img: "/img5.png",
// //       tag: "Corporate & Neat",
// //     },
// //   ];

// //   const packages = [
// //     {
// //       id: "home-pkg",
// //       name: "Home Package",
// //       price: "₹499",
// //       details:
// //         "Cute Greeting Card, Scented Candle, Custom Message Note, Fairy Lights.",
// //       img: "/img1.png",
// //     },
// //     {
// //       id: "normal-pkg",
// //       name: "Normal Package",
// //       price: "₹999",
// //       details:
// //         "Personalized Photo Frame, Premium Chocolates, LED Bottle Light, Card.",
// //       img: "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=600&auto=format&fit=crop",
// //     },
// //     {
// //       id: "luxury-pkg",
// //       name: "Luxury Package",
// //       price: "₹2,499",
// //       details:
// //         "Customized Teddy/Watch, Imported Chocolates, Memory Scrapbook, Wooden Box.",
// //       img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop",
// //     },
// //     {
// //       id: "surprise-box",
// //       name: "Surprise Box",
// //       price: "₹1,499",
// //       details:
// //         "Mystery Customized Gift Items tailored according to recipient relationship.",
// //       img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=600&auto=format&fit=crop",
// //     },
// //   ];

// //   const activeQuote = emotionalQuotes[currentQuoteIndex];

// //   return (
// //     <div className="max-w-7xl mx-auto px-4 py-6 space-y-12">
// //       {/* Quote Banner */}
// //       <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-950/90 via-pink-950/80 to-black border border-pink-500/40 p-6 md:p-8 text-center shadow-[0_0_35px_rgba(236,72,153,0.25)] backdrop-blur-2xl">
// //         <span className="inline-block bg-pink-500/20 border border-pink-500/30 text-pink-300 text-[11px] px-3.5 py-1 rounded-full uppercase tracking-widest font-bold mb-3 animate-pulse">
// //           {activeQuote.tagline}
// //         </span>
// //         <p className="text-lg md:text-2xl font-serif italic text-pink-100 max-w-4xl mx-auto leading-relaxed transition-all duration-700">
// //           "{activeQuote.quote}"
// //         </p>
// //         <p className="text-xs text-gray-400 mt-3 font-sans">
// //           क्या अपने आज उन खास इंसान से बात की ? उन्हे बताएँ की वो आपके लिए कितने
// //           कीमती हैं॥
// //         </p>
// //       </div>

// //       {/* Hero Banner */}
// //       <div className="rounded-3xl bg-gradient-to-r from-purple-950/80 via-pink-950/60 to-black/90 p-8 md:p-12 border border-pink-500/30 shadow-[0_0_50px_rgba(236,72,153,0.2)] backdrop-blur-xl flex flex-col md:flex-row justify-between items-center">
// //         <div className="max-w-xl">
// //           <span className="bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs px-3.5 py-1.5 rounded-full uppercase tracking-widest font-bold">
// //             ✨ Pure Emotions, Tailored Gifts
// //           </span>
// //           <h1 className="text-4xl md:text-6xl font-black mt-4 mb-4 leading-tight">
// //             Small Budget... <br />
// //             <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
// //               Big Surprises!
// //             </span>
// //           </h1>
// //           <p className="text-gray-300 mb-6 text-sm md:text-base">
// //             हर रिश्ते के लिए एक यादगार Surprise Package. Budget चाहे जितना भी हो
// //             Emotions हमेशा 100% शुद्ध होंगे
// //           </p>
// //           <button
// //             onClick={() => navigate("/packages")}
// //             className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-105 transition"
// //           >
// //             Explore Packages Now
// //           </button>
// //         </div>
// //         <div className="mt-8 md:mt-0 w-72 h-72 rounded-3xl overflow-hidden border-2 border-pink-500/30 shadow-2xl">
// //           <img
// //             src="/img3.png"
// //             alt="Surprise Box"
// //             className="w-full h-full object-cover"
// //           />
// //         </div>
// //       </div>

// //       {/* 🔥 CORPORATE DIWALI GIFTING BANNER */}
// //       <div className="bg-gradient-to-r from-gray-900 to-black border border-yellow-500/30 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center shadow-[0_0_30px_rgba(234,179,8,0.15)] relative overflow-hidden">
// //         <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>
// //         <div className="z-10 text-center md:text-left mb-6 md:mb-0">
// //           <span className="bg-yellow-500/20 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-yellow-500/30">
// //             Corporate Diwali Gifting
// //           </span>
// //           <h2 className="text-3xl md:text-4xl font-black mt-3 mb-2 text-white">
// //             Gifts for Your <span className="text-yellow-400">Employees</span>
// //           </h2>
// //           <p className="text-gray-300 text-sm max-w-lg">
// //             Bulk ordering made easy. Customized gifts, premium packaging, and
// //             delivery up to 100km.
// //           </p>
// //         </div>
// //         <button
// //           onClick={() => navigate("/corporate-gifting")}
// //           className="z-10 whitespace-nowrap bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-3.5 rounded-xl shadow-lg transition"
// //         >
// //           Request Bulk Quote
// //         </button>
// //       </div>

// //       {/* Categories */}
// //       <div>
// //         <h2 className="text-2xl md:text-3xl font-black mb-2">
// //           Shop by Category
// //         </h2>
// //         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
// //           {categories.map((cat) => (
// //             <div
// //               key={cat.id}
// //               onClick={() => navigate(`/packages?relation=${cat.id}`)}
// //               className="bg-white/[0.05] border border-white/10 rounded-2xl p-3 text-center hover:border-pink-500/60 cursor-pointer transition group"
// //             >
// //               <div className="h-28 rounded-xl overflow-hidden mb-3 border border-white/10 group-hover:scale-105 transition">
// //                 <img
// //                   src={cat.img}
// //                   alt={cat.title}
// //                   className="w-full h-full object-cover"
// //                 />
// //               </div>
// //               <h3 className="font-bold text-sm text-white">{cat.title}</h3>
// //               <p className="text-[10px] text-pink-400 mt-1">{cat.tag}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Packages */}
// //       <div>
// //         <h2 className="text-2xl md:text-3xl font-black mb-2">
// //           Popular Gift Packages
// //         </h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
// //           {packages.map((pkg) => (
// //             <div
// //               key={pkg.id}
// //               className="bg-white/[0.05] border border-white/10 rounded-3xl p-6 hover:border-pink-500/50 transition flex flex-col justify-between"
// //             >
// //               <div>
// //                 <div className="h-40 rounded-2xl overflow-hidden mb-4 border border-white/10">
// //                   <img
// //                     src={pkg.img}
// //                     alt={pkg.name}
// //                     className="w-full h-full object-cover"
// //                   />
// //                 </div>
// //                 <h3 className="text-xl font-bold">{pkg.name}</h3>
// //                 <p className="text-2xl font-black text-pink-400 my-2">
// //                   {pkg.price}
// //                 </p>
// //                 <p className="text-xs text-gray-300 leading-relaxed mb-4">
// //                   {pkg.details}
// //                 </p>
// //               </div>
// //               <div className="mt-4 grid grid-cols-2 gap-2">
// //                 <button
// //                   onClick={() => navigate(`/product/${pkg.id}`)}
// //                   className="w-full bg-white/10 border border-pink-400/40 text-pink-100 font-bold py-2.5 rounded-xl hover:bg-pink-500/10 transition text-sm"
// //                 >
// //                   Customize
// //                 </button>
// //                 <button
// //                   onClick={() => addPackageToCart(pkg.id)}
// //                   className="w-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold py-2.5 rounded-xl hover:brightness-110 transition text-sm shadow-md flex items-center justify-center gap-1"
// //                 >
// //                   <ShoppingCart size={15} /> Add
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { ShoppingCart, ShieldCheck, Truck, Clock, Gift } from "lucide-react";
// import { useCart } from "../context/CartContext";
// import { PACKAGES } from "../data/catalog";

// const Home = () => {
//   const navigate = useNavigate();
//   const { addToCart } = useCart();

//   const addPackageToCart = (id) => {
//     const pkg = PACKAGES.find((item) => item._id === id);
//     if (!pkg) return;
//     addToCart({
//       ...pkg,
//       title: pkg.name,
//       image: pkg.image,
//       type: "package",
//       packageId: pkg._id,
//     });
//     navigate("/cart");
//   };

//   const categories = [
//     { id: "girlfriend", title: "For Girlfriend", img: "/img1.png" },
//     { id: "boyfriend", title: "For Boyfriend", img: "/img2.png" },
//     { id: "mom", title: "For Mom", img: "/img3.png" },
//     { id: "dad", title: "For Dad", img: "/img4.png" },
//     { id: "friends", title: "For Friends", img: "/img5.png" },
//     { id: "colleagues", title: "For Colleagues", img: "/img5.png" },
//   ];

//   const packages = [
//     {
//       id: "home-pkg",
//       name: "Home Package",
//       price: "₹499",
//       details: "Cute Greeting Card, Scented Candle, Custom Message Note.",
//       img: "/img1.png",
//     },
//     {
//       id: "normal-pkg",
//       name: "Normal Package",
//       price: "₹999",
//       details: "Personalized Photo Frame, Premium Chocolates, LED Light.",
//       img: "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=600&auto=format&fit=crop",
//     },
//     {
//       id: "luxury-pkg",
//       name: "Luxury Package",
//       price: "₹2,499",
//       details: "Customized Teddy/Watch, Imported Chocolates, Scrapbook.",
//       img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop",
//     },
//     {
//       id: "surprise-box",
//       name: "Surprise Box",
//       price: "₹1,499",
//       details: "Mystery Customized Gift Items tailored for your loved ones.",
//       img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=600&auto=format&fit=crop",
//     },
//   ];

//   return (
//     <div className="bg-[#f8f9fa] min-h-screen text-gray-800">
//       {/* 🔥 TOP URGENCY BANNER (Business Feel) */}
//       <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white text-center py-2 text-sm font-semibold tracking-wide">
//         🎁 Diwali Special: Order today for Guaranteed Delivery! Cash on Delivery
//         Available.
//       </div>

//       {/* 🔥 HERO SECTION (Premium Look) */}
//       <div className="bg-white">
//         <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">
//           <div className="flex-1 space-y-6">
//             <span className="bg-pink-100 text-pink-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
//               Premium Gifting Brand
//             </span>
//             <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
//               Make Every Moment <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
//                 Unforgettable.
//               </span>
//             </h1>
//             <p className="text-gray-600 text-lg md:text-xl max-w-lg">
//               Curated gift boxes with personalized handwritten letters for your
//               loved ones. Delivered fresh across Thane & Mumbai.
//             </p>
//             <div className="flex gap-4">
//               <button
//                 onClick={() => navigate("/shop")}
//                 className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-pink-500/30 transition-all transform hover:-translate-y-1"
//               >
//                 Shop Gifts
//               </button>
//               <button
//                 onClick={() => navigate("/corporate-gifting")}
//                 className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all"
//               >
//                 Corporate Bulk Orders
//               </button>
//             </div>
//           </div>

//           <div className="flex-1 relative">
//             <div className="absolute inset-0 bg-pink-200 rounded-full blur-3xl opacity-50"></div>
//             <img
//               src="/img3.png"
//               alt="Premium Gift"
//               className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover h-[400px]"
//             />
//           </div>
//         </div>
//       </div>

//       {/* 🔥 TRUST BADGES (Businesses need this) */}
//       <div className="bg-gray-50 border-y border-gray-200 py-6">
//         <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
//           <div className="flex flex-col items-center">
//             <Truck className="text-pink-500 mb-2" size={28} />
//             <span className="font-bold text-sm">Same Day Delivery</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <ShieldCheck className="text-pink-500 mb-2" size={28} />
//             <span className="font-bold text-sm">100% Secure Payment</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <Gift className="text-pink-500 mb-2" size={28} />
//             <span className="font-bold text-sm">Premium Packaging</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <Clock className="text-pink-500 mb-2" size={28} />
//             <span className="font-bold text-sm">On-Time Guarantee</span>
//           </div>
//         </div>
//       </div>

//       {/* 🔥 CATEGORIES */}
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl font-black text-gray-900">
//             Shop by Recipient
//           </h2>
//           <p className="text-gray-500 mt-2">
//             Find the perfect gift for everyone.
//           </p>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//           {categories.map((cat) => (
//             <div
//               key={cat.id}
//               onClick={() => navigate(`/packages?relation=${cat.id}`)}
//               className="cursor-pointer group"
//             >
//               <div className="aspect-square rounded-2xl overflow-hidden mb-3 border border-gray-200 shadow-sm group-hover:shadow-md transition">
//                 <img
//                   src={cat.img}
//                   alt={cat.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
//                 />
//               </div>
//               <h3 className="font-bold text-center text-gray-800 group-hover:text-pink-600 transition">
//                 {cat.title}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* 🔥 FEATURED PACKAGES */}
//       <div className="bg-white py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex justify-between items-end mb-10">
//             <div>
//               <h2 className="text-3xl font-black text-gray-900">
//                 Our Best Sellers
//               </h2>
//               <p className="text-gray-500 mt-2">Highest rated gift boxes.</p>
//             </div>
//             <button
//               onClick={() => navigate("/packages")}
//               className="text-pink-600 font-bold hover:underline hidden md:block"
//             >
//               View All Packages →
//             </button>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {packages.map((pkg) => (
//               <div
//                 key={pkg.id}
//                 className="bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-xl transition duration-300 group flex flex-col"
//               >
//                 <div className="h-56 rounded-xl overflow-hidden mb-4 bg-gray-100">
//                   <img
//                     src={pkg.img}
//                     alt={pkg.name}
//                     className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
//                   />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
//                 <p className="text-2xl font-black text-pink-600 my-2">
//                   {pkg.price}
//                 </p>
//                 <p className="text-sm text-gray-500 mb-4 flex-1">
//                   {pkg.details}
//                 </p>
//                 <div className="flex gap-2 mt-auto">
//                   <button
//                     onClick={() => navigate(`/product/${pkg.id}`)}
//                     className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2.5 rounded-lg transition text-sm"
//                   >
//                     Details
//                   </button>
//                   <button
//                     onClick={() => addPackageToCart(pkg.id)}
//                     className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2.5 rounded-lg transition text-sm flex items-center justify-center gap-1 shadow-md"
//                   >
//                     <ShoppingCart size={16} /> Add
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
//

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  ShieldCheck,
  Truck,
  Clock,
  Gift,
  Star,
  Factory,
  Box,
  Home as HomeIcon,
  Camera,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { PACKAGES } from "../data/catalog";

const Home = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const addPackageToCart = (id) => {
    const pkg = PACKAGES.find((item) => item._id === id);
    if (!pkg) return;
    addToCart({
      ...pkg,
      title: pkg.name,
      image: pkg.image,
      type: "package",
      packageId: pkg._id,
    });
    navigate("/cart");
  };

  // 🔥 1. Shayri (Quotes) - Har 5 second mein change
  const emotionalQuotes = [
    {
      id: 1,
      quote:
        "जिंदगी में कुछ लोग ऐसे होते हैं, जिनके होने मात्र से ही दिल को सुकून मिल जाता है... आज उन्हें बताइए कि वो आपके लिए कितने ख़ास हैं।",
      tagline: "✨ हर ख़ास इंसान के लिए",
    },
    {
      id: 2,
      quote:
        "बात महँगे या सस्ते की नहीं है... बात तो उस एहसास की है, जो बताता है कि दूर रहकर भी कोई आपका कितना ख़याल रखता है।",
      tagline: "❤️ अहसास जो दिल को छु ले",
    },
    {
      id: 3,
      quote:
        "जो बिना वजह आपकी फ़िक्र करते हैं, आपके हर सुख-दुख में खामोशी से साथ खड़े रहते हैं... उनके चेहरे पर एक छोटी सी मुस्कान लाना तो बनता है।",
      tagline: "🎁 अपनों की अनमोल मुस्कान",
    },
  ];
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // 🔥 2. Hero Banner Slider (Har 3 second mein change)
  const heroImages = [
    "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200",
    "https://images.unsplash.com/photo-1513885535751-8b9238bd482a?q=80&w=1200",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200",
    "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1200",
    "https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=1200",
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200",
  ];
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % emotionalQuotes.length);
    }, 5000); // 5 seconds

    const heroTimer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000); // 3 seconds

    return () => {
      clearInterval(quoteTimer);
      clearInterval(heroTimer);
    };
  }, [emotionalQuotes.length, heroImages.length]);

  const activeQuote = emotionalQuotes[currentQuoteIndex];

  // Categories aur Packages Data
  const categories = [
    { id: "girlfriend", title: "For Girlfriend", img: "/img1.png" },
    { id: "boyfriend", title: "For Boyfriend", img: "/img2.png" },
    { id: "mom", title: "For Mom", img: "/img3.png" },
    { id: "dad", title: "For Dad", img: "/img4.png" },
    { id: "friends", title: "For Friends", img: "/img5.png" },
    { id: "colleagues", title: "For Colleagues", img: "/img1.png" },
  ];

  const packages = [
    {
      id: "home-pkg",
      name: "Home Package",
      price: "₹499",
      details: "Cute Greeting Card, Scented Candle, Custom Message Note.",
      img: "/img1.png",
    },
    {
      id: "normal-pkg",
      name: "Normal Package",
      price: "₹999",
      details: "Personalized Photo Frame, Premium Chocolates, LED Light.",
      img: "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "luxury-pkg",
      name: "Luxury Package",
      price: "₹2,499",
      details: "Customized Teddy/Watch, Imported Chocolates, Scrapbook.",
      img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "surprise-box",
      name: "Surprise Box",
      price: "₹1,499",
      details: "Mystery Customized Gift Items tailored for your loved ones.",
      img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=600&auto=format&fit=crop",
    },
  ];

  // 🔥 4. Process Steps (6 Images)
  const processSteps = [
    {
      id: 1,
      title: "Gift Making",
      desc: "Curated at our factory",
      icon: <Factory size={24} />,
      img: "https://images.unsplash.com/photo-1513885535751-8b9238bd482a?q=80&w=300",
    },
    {
      id: 2,
      title: "Quality Check",
      desc: "Arrives at our hub",
      icon: <ShieldCheck size={24} />,
      img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=300",
    },
    {
      id: 3,
      title: "Packaging",
      desc: "Wrapped with love",
      icon: <Box size={24} />,
      img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=300",
    },
    {
      id: 4,
      title: "Customization",
      desc: "Adding your letter",
      icon: <Gift size={24} />,
      img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=300",
    },
    {
      id: 5,
      title: "Out for Delivery",
      desc: "Handed to courier",
      icon: <Truck size={24} />,
      img: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=300",
    },
    {
      id: 6,
      title: "Delivered",
      desc: "Safe at your doorstep",
      icon: <HomeIcon size={24} />,
      img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=300",
    },
  ];

  // 🔥 5. Gallery Images (6 Images)
  const galleryImages = [
    "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600",
    "https://images.unsplash.com/photo-1513885535751-8b9238bd482a?q=80&w=600",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600",
    "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=600",
    "https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=600",
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600",
  ];

  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans">
      {/* TOP BANNER */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white text-center py-2 text-xs md:text-sm font-semibold tracking-wide">
        🎁 Diwali Special: Order today for Guaranteed Delivery! Cash on Delivery
        Available.
      </div>

      {/* SHAYRI BANNER (Rotating every 5s) */}
      <div className="bg-[#0f0f1a] text-white py-12 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000">
          <span className="inline-block bg-pink-500/20 border border-pink-500/30 text-pink-300 text-[11px] px-3.5 py-1 rounded-full uppercase tracking-widest font-bold mb-4">
            {activeQuote.tagline}
          </span>
          <p className="text-xl md:text-3xl font-serif italic text-pink-100 leading-relaxed">
            "{activeQuote.quote}"
          </p>
        </div>
      </div>

      {/* HERO BANNER SLIDER (Rotating every 3s) */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <span className="bg-pink-100 text-pink-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Premium Gifting Brand
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
            Make Every Moment <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Unforgettable.
            </span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
            Curated gift boxes with personalized handwritten letters for your
            loved ones. Delivered fresh across Thane & Mumbai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => navigate("/shop")}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-pink-500/30 transition-all transform hover:-translate-y-1"
            >
              Shop Gifts
            </button>
            <button
              onClick={() => navigate("/corporate-gifting")}
              className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all"
            >
              Corporate Orders
            </button>
          </div>
        </div>

        {/* Slider Image Container */}
        <div className="flex-1 relative w-full max-w-md h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          {heroImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Hero ${index}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentHeroIndex
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0"
              }`}
            />
          ))}
        </div>
      </div>

      {/* TRUST BADGES */}
      <div className="bg-gray-50 border-y border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Truck className="text-pink-500 mb-2" size={28} />
            <span className="font-bold text-sm">Same Day Delivery</span>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="text-pink-500 mb-2" size={28} />
            <span className="font-bold text-sm">100% Secure Payment</span>
          </div>
          <div className="flex flex-col items-center">
            <Gift className="text-pink-500 mb-2" size={28} />
            <span className="font-bold text-sm">Premium Packaging</span>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="text-pink-500 mb-2" size={28} />
            <span className="font-bold text-sm">On-Time Guarantee</span>
          </div>
        </div>
      </div>

      {/* SHOP BY CATEGORY */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-gray-900">
            Shop by Recipient
          </h2>
          <p className="text-gray-500 mt-2">
            Find the perfect gift for everyone.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigate(`/packages?relation=${cat.id}`)}
              className="cursor-pointer group"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-3 border border-gray-200 shadow-sm group-hover:shadow-md transition">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <h3 className="font-bold text-center text-gray-800 group-hover:text-pink-600 transition">
                {cat.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 PROCESS SECTION (6 Steps) */}
      <div className="bg-[#0f0f1a] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white">
              How Your Gift Reaches You
            </h2>
            <p className="text-gray-400 mt-2">
              From our factory to your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-pink-500/30 z-0"></div>

            {processSteps.map((step, idx) => (
              <div
                key={step.id}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#1a1a2e] border-2 border-pink-500/50 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition duration-300 overflow-hidden">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition"
                  />
                  <div className="absolute text-white">{step.icon}</div>
                </div>
                <span className="text-xs font-bold text-pink-400 mb-1">
                  Step {step.id}
                </span>
                <h3 className="font-bold text-white text-sm mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔥 5. PHOTO GALLERY (Naya Section - Process ke theek baad) */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-bold text-pink-600 mb-3">
              <Camera size={14} /> Our Gallery
            </span>
            <h2 className="text-3xl font-black text-gray-900">
              Glimpses of Happiness
            </h2>
            <p className="text-gray-500 mt-2">
              Real unboxing moments from our customers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="aspect-[4/5] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group relative"
              >
                <img
                  src={img}
                  alt={`Gallery ${index}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                  <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition duration-300">
                    MysticBox Moment
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURED PACKAGES */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-black text-gray-900">
                Our Best Sellers
              </h2>
              <p className="text-gray-500 mt-2">Highest rated gift boxes.</p>
            </div>
            <button
              onClick={() => navigate("/packages")}
              className="text-pink-600 font-bold hover:underline hidden md:block"
            >
              View All Packages →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-xl transition duration-300 group flex flex-col"
              >
                <div className="h-56 rounded-xl overflow-hidden mb-4 bg-gray-100">
                  <img
                    src={pkg.img}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                <p className="text-2xl font-black text-pink-600 my-2">
                  {pkg.price}
                </p>
                <p className="text-sm text-gray-500 mb-4 flex-1">
                  {pkg.details}
                </p>
                <div className="flex gap-2 mt-auto">
                  <button
                    onClick={() => navigate(`/product/${pkg.id}`)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2.5 rounded-lg transition text-sm"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => addPackageToCart(pkg.id)}
                    className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2.5 rounded-lg transition text-sm flex items-center justify-center gap-1 shadow-md"
                  >
                    <ShoppingCart size={16} /> Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="bg-[#0f0f1a] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white">
              Loved by Thousands
            </h2>
            <p className="text-gray-400 mt-2">
              Don't just take our word for it.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-[#1a1a2e] p-6 rounded-2xl border border-white/10"
              >
                <div className="flex text-yellow-400 mb-4">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "Bhai, gift bahut hi premium tha. Meri girlfriend bahut khush
                  hui. Packaging dekh kar hi dil khush ho gaya. Thanks
                  MysticBox!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    R
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Rahul S.</p>
                    <p className="text-gray-500 text-xs">Verified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
