// // // // import React from "react";
// // // // import { Hero } from "../components/Hero";
// // // // import { InteractivePlanner } from "../components/InteractivePlanner";
// // // // import { PackagePreview } from "../components/PackagePreview";

// // // // export const Home = () => {
// // // //   return (
// // // //     <div className="space-y-16">
// // // //       <Hero />
// // // //       <InteractivePlanner />
// // // //       <PackagePreview />
// // // //     </div>
// // // //   );
// // // // };

// // // import React from "react";
// // // import Layout from "../components/Layout";
// // // import { useNavigate } from "react-router-dom";

// // // const Home = () => {
// // //   const navigate = useNavigate();

// // //   return (
// // //     <Layout>
// // //       <div className="max-w-7xl mx-auto px-4 py-6">
// // //         {/* Navigation Header */}
// // //         <header className="flex justify-between items-center py-4 border-b border-white/10 mb-8 backdrop-blur-md sticky top-0 z-50 bg-[#0b0614]/80 px-4 rounded-2xl">
// // //           <div className="flex items-center space-x-2">
// // //             <span className="text-2xl font-black bg-gradient-to-r from-pink-500 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
// // //               🎁 SurpriseGift
// // //             </span>
// // //           </div>
// // //           <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
// // //             <a href="/" className="hover:text-pink-400 transition">
// // //               Home
// // //             </a>
// // //             <a href="/packages" className="hover:text-pink-400 transition">
// // //               Packages
// // //             </a>
// // //             <a href="/shop" className="hover:text-pink-400 transition">
// // //               Shop
// // //             </a>
// // //             <a href="/track" className="hover:text-pink-400 transition">
// // //               Track Order
// // //             </a>
// // //             <a href="/contact" className="hover:text-pink-400 transition">
// // //               Contact
// // //             </a>
// // //           </nav>
// // //         </header>

// // //         {/* Hero Section - Glassmorphism Transparent & Glowing */}
// // //         <div className="relative rounded-3xl bg-gradient-to-r from-purple-950/60 via-pink-950/40 to-black/80 p-8 md:p-14 border border-pink-500/30 shadow-[0_0_50px_rgba(236,72,153,0.15)] backdrop-blur-xl overflow-hidden flex flex-col md:flex-row items-center justify-between">
// // //           {/* Background Ambient Glow inside hero */}
// // //           <div className="absolute -top-24 -left-24 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>
// // //           <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

// // //           <div className="max-w-xl z-10">
// // //             <span className="bg-gradient-to-r from-pink-500/30 to-purple-500/30 border border-pink-500/40 text-pink-300 text-xs px-3.5 py-1.5 rounded-full uppercase tracking-widest font-bold shadow-inner">
// // //               ✨ Special Collection
// // //             </span>
// // //             <h1 className="text-4xl md:text-6xl font-black mt-5 mb-5 leading-tight tracking-tight text-white drop-shadow-md">
// // //               Small Budget... <br />
// // //               <span className="bg-gradient-to-r from-pink-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
// // //                 Big Surprises!
// // //               </span>
// // //             </h1>
// // //             <p className="text-gray-300 mb-8 text-sm md:text-base font-normal leading-relaxed">
// // //               Custom gift packages for every emotion, occasion and relationship
// // //               crafted with pure love and elegance.
// // //             </p>
// // //             <div className="flex space-x-4">
// // //               <button
// // //                 onClick={() => navigate("/packages")}
// // //                 className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_25px_rgba(236,72,153,0.7)] hover:scale-105 transition duration-300"
// // //               >
// // //                 Explore Packages
// // //               </button>
// // //             </div>
// // //           </div>

// // //           {/* Transparent Floating Gift Box Graphic */}
// // //           <div className="mt-8 md:mt-0 z-10">
// // //             <div className="w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-white/10 via-pink-500/10 to-purple-600/20 rounded-3xl border border-white/20 backdrop-blur-2xl flex items-center justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rotate-3 hover:rotate-0 transition duration-500 group">
// // //               <span className="text-8xl drop-shadow-[0_0_20px_rgba(236,72,153,0.6)] group-hover:scale-110 transition duration-300">
// // //                 🎁
// // //               </span>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Popular Gift Packages Section */}
// // //         <div className="mt-14 mb-12">
// // //           <div className="flex justify-between items-end mb-6">
// // //             <div>
// // //               <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
// // //                 Popular Gift Packages
// // //               </h2>
// // //               <p className="text-gray-400 text-sm mt-1">
// // //                 Choose from our curated gift packages or create your own.
// // //               </p>
// // //             </div>
// // //           </div>

// // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // //             {[
// // //               {
// // //                 name: "Home Package",
// // //                 price: "₹499",
// // //                 tag: "Best for daily gifting",
// // //                 gradient: "from-pink-500/20 to-purple-500/20",
// // //               },
// // //               {
// // //                 name: "Normal Package",
// // //                 price: "₹999",
// // //                 tag: "Simple yet special",
// // //                 gradient: "from-purple-500/20 to-indigo-500/20",
// // //               },
// // //               {
// // //                 name: "Luxury Package",
// // //                 price: "₹2,499",
// // //                 tag: "Premium & unforgettable",
// // //                 gradient: "from-pink-600/20 to-rose-500/20",
// // //               },
// // //               {
// // //                 name: "Surprise Box",
// // //                 price: "₹1,499",
// // //                 tag: "Mystery gifts, more joy",
// // //                 gradient: "from-violet-500/20 to-pink-500/20",
// // //               },
// // //             ].map((pkg, idx) => (
// // //               <div
// // //                 key={idx}
// // //                 className="bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] transition-all duration-300 group flex flex-col justify-between"
// // //               >
// // //                 <div>
// // //                   <div
// // //                     className={`h-44 rounded-2xl bg-gradient-to-tr ${pkg.gradient} border border-white/10 mb-5 flex items-center justify-center text-5xl shadow-inner group-hover:scale-105 transition duration-300`}
// // //                   >
// // //                     🎁
// // //                   </div>
// // //                   <h3 className="font-bold text-lg text-white group-hover:text-pink-400 transition">
// // //                     {pkg.name}
// // //                   </h3>
// // //                   <p className="text-xs text-gray-400 mt-1 mb-4">{pkg.tag}</p>
// // //                 </div>
// // //                 <div className="flex justify-between items-center pt-4 border-t border-white/10">
// // //                   <span className="text-pink-400 font-extrabold text-lg">
// // //                     {pkg.price}
// // //                   </span>
// // //                   <button
// // //                     onClick={() => navigate("/packages")}
// // //                     className="text-xs bg-white/10 text-white font-semibold px-4 py-2 rounded-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:shadow-lg transition duration-300"
// // //                   >
// // //                     View Details
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </Layout>
// // //   );
// // // };

// // // export default Home;

// // import React from "react";
// // import { useNavigate } from "react-router-dom";

// // const Home = () => {
// //   const navigate = useNavigate();

// //   const categories = [
// //     {
// //       id: "girlfriend",
// //       title: "For Girlfriend",
// //       img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400",
// //       tag: "Romantic & Glowing",
// //     },
// //     {
// //       id: "boyfriend",
// //       title: "For Boyfriend",
// //       img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400",
// //       tag: "Classy & Useful",
// //     },
// //     {
// //       id: "friends",
// //       title: "For Friends",
// //       img: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=400",
// //       tag: "Fun & Trendy",
// //     },
// //     {
// //       id: "mom",
// //       title: "For Mom",
// //       img: "https://images.unsplash.com/photo-1513885535751-8b9238bd482a?q=80&w=400",
// //       tag: "Heartfelt & Elegant",
// //     },
// //     {
// //       id: "dad",
// //       title: "For Dad",
// //       img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=400",
// //       tag: "Premium & Respect",
// //     },
// //     {
// //       id: "colleagues",
// //       title: "For Colleagues",
// //       img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=400",
// //       tag: "Corporate & Neat",
// //     },
// //   ];

// //   const packages = [
// //     {
// //       id: "home-pkg",
// //       name: "Home Package",
// //       price: "₹499",
// //       details:
// //         "Cute Greeting Card, Scented Candle, Custom Message Note, Fairy Lights Packaging.",
// //     },
// //     {
// //       id: "normal-pkg",
// //       name: "Normal Package",
// //       price: "₹999",
// //       details:
// //         "Personalized Photo Frame, Premium Chocolates, LED Bottle Light, Handmade Card.",
// //     },
// //     {
// //       id: "luxury-pkg",
// //       name: "Luxury Package",
// //       price: "₹2,499",
// //       details:
// //         "Customized Teddy/Watch, Imported Chocolates, Memory Scrapbook, Premium Wooden Box Wrap.",
// //     },
// //     {
// //       id: "surprise-box",
// //       name: "Surprise Box",
// //       price: "₹1,499",
// //       details:
// //         "Mystery Customized Gift Items tailored according to recipient relationship & favourite choices.",
// //     },
// //   ];

// //   return (
// //     <div className="max-w-7xl mx-auto px-4 py-8 space-y-14">
// //       {/* Hero Banner */}
// //       <div className="rounded-3xl bg-gradient-to-r from-purple-950/80 via-pink-950/60 to-black/90 p-8 md:p-12 border border-pink-500/30 shadow-[0_0_50px_rgba(236,72,153,0.2)] backdrop-blur-xl flex flex-col md:flex-row justify-between items-center">
// //         <div className="max-w-xl">
// //           <span className="bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs px-3.5 py-1.5 rounded-full uppercase tracking-widest font-bold">
// //             ✨ Premium Surprise Store
// //           </span>
// //           <h1 className="text-4xl md:text-6xl font-black mt-4 mb-4 leading-tight">
// //             Small Budget... <br />
// //             <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
// //               Big Surprises!
// //             </span>
// //           </h1>
// //           <p className="text-gray-300 mb-6 text-sm md:text-base">
// //             Select your relation, share favourite preferences, and let us create
// //             memorable gifts!
// //           </p>
// //           <button
// //             onClick={() => navigate("/packages")}
// //             className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg hover:scale-105 transition"
// //           >
// //             Browse All Packages
// //           </button>
// //         </div>
// //         <div className="mt-8 md:mt-0 w-72 h-72 rounded-3xl overflow-hidden border-2 border-pink-500/30 shadow-2xl">
// //           <img
// //             src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600"
// //             alt="Surprise Box"
// //             className="w-full h-full object-cover"
// //           />
// //         </div>
// //       </div>

// //       {/* SHOP BY CATEGORY / RELATIONSHIP */}
// //       <div>
// //         <h2 className="text-2xl md:text-3xl font-black mb-2">
// //           Shop by Category & Relationship
// //         </h2>
// //         <p className="text-gray-400 text-sm mb-6">
// //           Choose who you are sending the surprise gift to:
// //         </p>
// //         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
// //           {categories.map((cat) => (
// //             <div
// //               key={cat.id}
// //               onClick={() => navigate(`/packages?relation=${cat.id}`)}
// //               className="bg-white/[0.05] border border-white/10 rounded-2xl p-3 text-center backdrop-blur-md hover:border-pink-500/60 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] cursor-pointer transition group"
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

// //       {/* PACKAGES WITH CLEAR WHAT-IS-INSIDE DETAILS */}
// //       <div>
// //         <h2 className="text-2xl md:text-3xl font-black mb-2">
// //           Popular Gift Packages
// //         </h2>
// //         <p className="text-gray-400 text-sm mb-6">
// //           Here is exactly what we deliver inside each budget package:
// //         </p>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //           {packages.map((pkg) => (
// //             <div
// //               key={pkg.id}
// //               className="bg-white/[0.05] border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(236,72,153,0.2)] transition flex flex-col justify-between"
// //             >
// //               <div>
// //                 <span className="text-xs bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full font-semibold">
// //                   Budget Package
// //                 </span>
// //                 <h3 className="text-xl font-bold mt-3">{pkg.name}</h3>
// //                 <p className="text-2xl font-black text-pink-400 my-2">
// //                   {pkg.price}
// //                 </p>
// //                 <div className="bg-white/5 border border-white/10 rounded-xl p-3 my-3">
// //                   <p className="text-xs font-semibold text-pink-300 mb-1">
// //                     🎁 What's Included:
// //                   </p>
// //                   <p className="text-xs text-gray-300 leading-relaxed">
// //                     {pkg.details}
// //                   </p>
// //                 </div>
// //               </div>
// //               <button
// //                 onClick={() => navigate(`/product/${pkg.id}`)}
// //                 className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-600 font-bold py-2.5 rounded-xl hover:scale-105 transition text-sm shadow-md"
// //               >
// //                 Customize & Order
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;

// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";

// // const Home = () => {
// //   const navigate = useNavigate();

// //   // Dynamic Deep Emotional Quotes List
// //   const emotionalQuotes = [
// //     "Kuch log hamari zindagi mein itne khaas hote hain ki unke hone se hi sab khoobsurat lagta hai... Par hum aksar unhe yeh batana bhool jaate hain.",
// //     "Waqt tezi se nikal raha hai... Kisi ke chehre par ek sachhi muskaan laane ka mauka baar-baar nahi milta.",
// //     "Rishte sirf chalte nahi, unhe mehsoos karana padta hai. Aaj ek chhota sa gesture unke poore din ko khas bana sakta hai.",
// //   ];

// //   const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

// //   // Auto rotate quotes every 6 seconds
// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setCurrentQuoteIndex((prev) => (prev + 1) % emotionalQuotes.length);
// //     }, 6000);
// //     return () => clearInterval(timer);
// //   }, [emotionalQuotes.length]);

// //   return (
// //     <div className="max-w-7xl mx-auto px-4 py-6 space-y-10">
// //       {/* 💖 TOP DEEP EMOTIONAL BANNER (FIRST THING USER SEES) */}
// //       <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-950/90 via-pink-950/80 to-black border border-pink-500/40 p-6 md:p-8 text-center shadow-[0_0_35px_rgba(236,72,153,0.25)] backdrop-blur-2xl">
// //         <div className="absolute top-2 left-4 text-pink-500/30 text-4xl select-none">
// //           “
// //         </div>
// //         <div className="absolute bottom-2 right-4 text-pink-500/30 text-4xl select-none">
// //           ”
// //         </div>

// //         <span className="inline-block bg-pink-500/20 border border-pink-500/30 text-pink-300 text-[11px] px-3.5 py-1 rounded-full uppercase tracking-widest font-bold mb-3 animate-pulse">
// //           ✨ A Gentle Reminder
// //         </span>

// //         {/* Dynamic Emotional Quote */}
// //         <p className="text-lg md:text-2xl font-serif italic text-pink-100 max-w-4xl mx-auto leading-relaxed transition-all duration-700">
// //           "{emotionalQuotes[currentQuoteIndex]}"
// //         </p>

// //         <p className="text-xs text-gray-400 mt-3 font-sans">
// //           Kya aapne aaj apne un khas insaan se baat ki? Unhe batayein ki wo
// //           aapke liye kitne kimti hain...
// //         </p>
// //       </div>

// //       {/* HERO SECTION */}
// //       <div className="rounded-3xl bg-gradient-to-r from-purple-950/80 via-pink-950/60 to-black/90 p-8 md:p-12 border border-pink-500/30 shadow-2xl backdrop-blur-xl flex flex-col md:flex-row justify-between items-center">
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
// //             Har rishte ke liye ek yaadgaar surprise package. Budget chaho jo bhi
// //             ho, emotions hamesha 100% pure honge.
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
// //             src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600"
// //             alt="Surprise Box"
// //             className="w-full h-full object-cover"
// //           />
// //         </div>
// //       </div>

// //       {/* Rest of Categories & Packages below... */}
// //     </div>
// //   );
// // };

// // export default Home;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();

//   // Dynamic Deep Emotional Quotes List
//   // const emotionalQuotes = [
//   //   "Kuch log hamari zindagi mein itne khaas hote hain ki unke hone se hi sab khoobsurat lagta hai... Par hum aksar unhe yeh batana bhool jaate hain.",
//   //   "Waqt tezi se nikal raha hai... Kisi ke chehre par ek sachhi muskaan laane ka mauka baar-baar nahi milta.",
//   //   "Rishte sirf chalte nahi, unhe mehsoos karana padta hai. Aaj ek chhota sa gesture unke poore din ko khas bana sakta hai.",
//   // ];

//   // frontend/src/data/emotionalQuotes.js

//   const emotionalQuotes = [
//     {
//       id: 1,
//       quote:
//         "जिंदगी में कुछ लोग ऐसे होते हैं, जिनके होने मात्र से ही दिल को सुकून मिल जाता है... आज उन्हें बताइए कि वो आपके लिए कितने ख़ास हैं।",
//       tagline: "✨ हर ख़ास इंसान के लिए",
//     },
//     {
//       id: 2,
//       quote:
//         "बात महँगे या सस्ते की नहीं है... बात तो उस एहसास की है, जो बताता है कि दूर रहकर भी कोई आपका कितना ख़याल रखता है।",
//       tagline: "❤️ अहसास जो दिल को छु ले",
//     },
//     {
//       id: 3,
//       quote:
//         "जो बिना वजह आपकी फ़िक्र करते हैं, आपके हर सुख-दुख में खामोशी से साथ खड़े रहते हैं... उनके चेहरे पर एक छोटी सी मुस्कान लाना तो बनता है।",
//       tagline: "🎁 अपनों की अनमोल मुस्कान",
//     },
//     {
//       id: 4,
//       quote:
//         "वक्त के साथ सब बदल जाता है, लेकिन कुछ लोगों का दिया हुआ प्यार और साथ ताउम्र दिल में ज़िंदा रहता है।",
//       tagline: "🌟 ताउम्र की ख़ूबसूरत यादें",
//     },
//     {
//       id: 5,
//       quote:
//         "कभी-कभी लफ़्ज़ों में शुक्रगुज़ार होना मुश्किल होता है... पर एक प्यारा सा सरप्राइज बिना कुछ कहे दिल की हर बात बयां कर देता है।",
//       tagline: "बयानों से परे प्यार",
//     },
//   ];

//   const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

//   // Auto rotate quotes every 6 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentQuoteIndex((prev) => (prev + 1) % emotionalQuotes.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, [emotionalQuotes.length]);

//   const categories = [
//     {
//       id: "girlfriend",
//       title: "For Girlfriend",
//       img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400",
//       tag: "Romantic & Glowing",
//     },
//     {
//       id: "boyfriend",
//       title: "For Boyfriend",
//       img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400",
//       tag: "Classy & Useful",
//     },
//     {
//       id: "friends",
//       title: "For Friends",
//       img: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=400",
//       tag: "Fun & Trendy",
//     },
//     {
//       id: "mom",
//       title: "For Mom",
//       img: "https://images.unsplash.com/photo-1513885535751-8b9238bd482a?q=80&w=400",
//       tag: "Heartfelt & Elegant",
//     },
//     {
//       id: "dad",
//       title: "For Dad",
//       img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=400",
//       tag: "Premium & Respect",
//     },
//     {
//       id: "colleagues",
//       title: "For Colleagues",
//       img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=400",
//       tag: "Corporate & Neat",
//     },
//   ];

//   const packages = [
//     {
//       id: "home-pkg",
//       name: "Home Package",
//       price: "₹499",
//       details:
//         "Cute Greeting Card, Scented Candle, Custom Message Note, Fairy Lights Packaging.",
//     },
//     {
//       id: "normal-pkg",
//       name: "Normal Package",
//       price: "₹999",
//       details:
//         "Personalized Photo Frame, Premium Chocolates, LED Bottle Light, Handmade Card.",
//     },
//     {
//       id: "luxury-pkg",
//       name: "Luxury Package",
//       price: "₹2,499",
//       details:
//         "Customized Teddy/Watch, Imported Chocolates, Memory Scrapbook, Premium Wooden Box Wrap.",
//     },
//     {
//       id: "surprise-box",
//       name: "Surprise Box",
//       price: "₹1,499",
//       details:
//         "Mystery Customized Gift Items tailored according to recipient relationship & favourite choices.",
//     },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-6 space-y-12">
//       {/* 💖 1. TOP DEEP EMOTIONAL BANNER */}
//       <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-950/90 via-pink-950/80 to-black border border-pink-500/40 p-6 md:p-8 text-center shadow-[0_0_35px_rgba(236,72,153,0.25)] backdrop-blur-2xl">
//         <div className="absolute top-2 left-4 text-pink-500/30 text-4xl select-none">
//           “
//         </div>
//         <div className="absolute bottom-2 right-4 text-pink-500/30 text-4xl select-none">
//           ”
//         </div>

//         <span className="inline-block bg-pink-500/20 border border-pink-500/30 text-pink-300 text-[11px] px-3.5 py-1 rounded-full uppercase tracking-widest font-bold mb-3 animate-pulse">
//           ✨ A Gentle Reminder
//         </span>

//         <p className="text-lg md:text-2xl font-serif italic text-pink-100 max-w-4xl mx-auto leading-relaxed transition-all duration-700">
//           "{emotionalQuotes[currentQuoteIndex]}"
//         </p>

//         <p className="text-xs text-gray-400 mt-3 font-sans">
//           Kya aapne aaj apne un khas insaan se baat ki? Unhe batayein ki wo
//           aapke liye kitne kimti hain...
//         </p>
//       </div>

//       {/* 🚀 2. HERO BANNER */}
//       <div className="rounded-3xl bg-gradient-to-r from-purple-950/80 via-pink-950/60 to-black/90 p-8 md:p-12 border border-pink-500/30 shadow-[0_0_50px_rgba(236,72,153,0.2)] backdrop-blur-xl flex flex-col md:flex-row justify-between items-center">
//         <div className="max-w-xl">
//           <span className="bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs px-3.5 py-1.5 rounded-full uppercase tracking-widest font-bold">
//             ✨ Pure Emotions, Tailored Gifts
//           </span>
//           <h1 className="text-4xl md:text-6xl font-black mt-4 mb-4 leading-tight">
//             Small Budget... <br />
//             <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
//               Big Surprises!
//             </span>
//           </h1>
//           <p className="text-gray-300 mb-6 text-sm md:text-base">
//             Har rishte ke liye ek yaadgaar surprise package. Budget chaho jo bhi
//             ho, emotions hamesha 100% pure honge.
//           </p>
//           <button
//             onClick={() => navigate("/packages")}
//             className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-105 transition"
//           >
//             Explore Packages Now
//           </button>
//         </div>
//         <div className="mt-8 md:mt-0 w-72 h-72 rounded-3xl overflow-hidden border-2 border-pink-500/30 shadow-2xl">
//           <img
//             src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600"
//             alt="Surprise Box"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       {/* 🎁 3. SHOP BY CATEGORY / RELATIONSHIP */}
//       <div>
//         <h2 className="text-2xl md:text-3xl font-black mb-2">
//           Shop by Category & Relationship
//         </h2>
//         <p className="text-gray-400 text-sm mb-6">
//           Choose who you are sending the surprise gift to:
//         </p>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//           {categories.map((cat) => (
//             <div
//               key={cat.id}
//               onClick={() => navigate(`/packages?relation=${cat.id}`)}
//               className="bg-white/[0.05] border border-white/10 rounded-2xl p-3 text-center backdrop-blur-md hover:border-pink-500/60 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] cursor-pointer transition group"
//             >
//               <div className="h-28 rounded-xl overflow-hidden mb-3 border border-white/10 group-hover:scale-105 transition">
//                 <img
//                   src={cat.img}
//                   alt={cat.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <h3 className="font-bold text-sm text-white">{cat.title}</h3>
//               <p className="text-[10px] text-pink-400 mt-1">{cat.tag}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* 📦 4. POPULAR GIFT PACKAGES WITH DETAILS */}
//       <div>
//         <h2 className="text-2xl md:text-3xl font-black mb-2">
//           Popular Gift Packages
//         </h2>
//         <p className="text-gray-400 text-sm mb-6">
//           Here is exactly what we deliver inside each budget package:
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {packages.map((pkg) => (
//             <div
//               key={pkg.id}
//               className="bg-white/[0.05] border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(236,72,153,0.2)] transition flex flex-col justify-between"
//             >
//               <div>
//                 <span className="text-xs bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full font-semibold">
//                   Budget Package
//                 </span>
//                 <h3 className="text-xl font-bold mt-3">{pkg.name}</h3>
//                 <p className="text-2xl font-black text-pink-400 my-2">
//                   {pkg.price}
//                 </p>
//                 <div className="bg-white/5 border border-white/10 rounded-xl p-3 my-3">
//                   <p className="text-xs font-semibold text-pink-300 mb-1">
//                     🎁 What's Included:
//                   </p>
//                   <p className="text-xs text-gray-300 leading-relaxed">
//                     {pkg.details}
//                   </p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => navigate(`/product/${pkg.id}`)}
//                 className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-600 font-bold py-2.5 rounded-xl hover:scale-105 transition text-sm shadow-md"
//               >
//                 Customize & Order
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Dynamic Deep Emotional Quotes List (Pure Hindi Universal Objects)
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
    {
      id: 4,
      quote:
        "वक्त के साथ सब बदल जाता है, लेकिन कुछ लोगों का दिया हुआ प्यार और साथ ताउम्र दिल में ज़िंदा रहता है।",
      tagline: "🌟 ताउम्र की ख़ूबसूरत यादें",
    },
    {
      id: 5,
      quote:
        "कभी-कभी लफ़्ज़ों में शुक्रगुज़ार होना मुश्किल होता है... पर एक प्यारा सा सरप्राइज बिना कुछ कहे दिल की हर बात बयां कर देता है।",
      tagline: "बयानों से परे प्यार",
    },
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Auto rotate quotes every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % emotionalQuotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [emotionalQuotes.length]);

  const categories = [
    {
      id: "girlfriend",
      title: "For Girlfriend",
      img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400",
      tag: "Romantic & Glowing",
    },
    {
      id: "boyfriend",
      title: "For Boyfriend",
      img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400",
      tag: "Classy & Useful",
    },
    {
      id: "friends",
      title: "For Friends",
      img: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=400",
      tag: "Fun & Trendy",
    },
    {
      id: "mom",
      title: "For Mom",
      img: "https://images.unsplash.com/photo-1513885535751-8b9238bd482a?q=80&w=400",
      tag: "Heartfelt & Elegant",
    },
    {
      id: "dad",
      title: "For Dad",
      img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=400",
      tag: "Premium & Respect",
    },
    {
      id: "colleagues",
      title: "For Colleagues",
      img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=400",
      tag: "Corporate & Neat",
    },
  ];

  const packages = [
    {
      id: "home-pkg",
      name: "Home Package",
      price: "₹499",
      details:
        "Cute Greeting Card, Scented Candle, Custom Message Note, Fairy Lights Packaging.",
    },
    {
      id: "normal-pkg",
      name: "Normal Package",
      price: "₹999",
      details:
        "Personalized Photo Frame, Premium Chocolates, LED Bottle Light, Handmade Card.",
    },
    {
      id: "luxury-pkg",
      name: "Luxury Package",
      price: "₹2,499",
      details:
        "Customized Teddy/Watch, Imported Chocolates, Memory Scrapbook, Premium Wooden Box Wrap.",
    },
    {
      id: "surprise-box",
      name: "Surprise Box",
      price: "₹1,499",
      details:
        "Mystery Customized Gift Items tailored according to recipient relationship & favourite choices.",
    },
  ];

  // Current Quote object extract kar rahe hain
  const activeQuote = emotionalQuotes[currentQuoteIndex];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-12">
      {/* 💖 1. TOP DEEP EMOTIONAL BANNER */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-950/90 via-pink-950/80 to-black border border-pink-500/40 p-6 md:p-8 text-center shadow-[0_0_35px_rgba(236,72,153,0.25)] backdrop-blur-2xl">
        <div className="absolute top-2 left-4 text-pink-500/30 text-4xl select-none">
          “
        </div>
        <div className="absolute bottom-2 right-4 text-pink-500/30 text-4xl select-none">
          ”
        </div>

        {/* ✅ Tagline render ki gayi hai */}
        <span className="inline-block bg-pink-500/20 border border-pink-500/30 text-pink-300 text-[11px] px-3.5 py-1 rounded-full uppercase tracking-widest font-bold mb-3 animate-pulse">
          {activeQuote.tagline}
        </span>

        {/* ✅ Quote ki string render ki gayi hai */}
        <p className="text-lg md:text-2xl font-serif italic text-pink-100 max-w-4xl mx-auto leading-relaxed transition-all duration-700">
          "{activeQuote.quote}"
        </p>

        <p className="text-xs text-gray-400 mt-3 font-sans">
          Kya aapne aaj apne un khas insaan se baat ki? Unhe batayein ki wo
          aapke liye kitne kimti hain...
        </p>
      </div>

      {/* 🚀 2. HERO BANNER */}
      <div className="rounded-3xl bg-gradient-to-r from-purple-950/80 via-pink-950/60 to-black/90 p-8 md:p-12 border border-pink-500/30 shadow-[0_0_50px_rgba(236,72,153,0.2)] backdrop-blur-xl flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-xl">
          <span className="bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs px-3.5 py-1.5 rounded-full uppercase tracking-widest font-bold">
            ✨ Pure Emotions, Tailored Gifts
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-4 mb-4 leading-tight">
            Small Budget... <br />
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Big Surprises!
            </span>
          </h1>
          <p className="text-gray-300 mb-6 text-sm md:text-base">
            Har rishte ke liye ek yaadgaar surprise package. Budget chaho jo bhi
            ho, emotions hamesha 100% pure honge.
          </p>
          <button
            onClick={() => navigate("/packages")}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-105 transition"
          >
            Explore Packages Now
          </button>
        </div>
        <div className="mt-8 md:mt-0 w-72 h-72 rounded-3xl overflow-hidden border-2 border-pink-500/30 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600"
            alt="Surprise Box"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 🎁 3. SHOP BY CATEGORY / RELATIONSHIP */}
      <div>
        <h2 className="text-2xl md:text-3xl font-black mb-2">
          Shop by Category & Relationship
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          Choose who you are sending the surprise gift to:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigate(`/packages?relation=${cat.id}`)}
              className="bg-white/[0.05] border border-white/10 rounded-2xl p-3 text-center backdrop-blur-md hover:border-pink-500/60 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] cursor-pointer transition group"
            >
              <div className="h-28 rounded-xl overflow-hidden mb-3 border border-white/10 group-hover:scale-105 transition">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-sm text-white">{cat.title}</h3>
              <p className="text-[10px] text-pink-400 mt-1">{cat.tag}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 📦 4. POPULAR GIFT PACKAGES WITH DETAILS */}
      <div>
        <h2 className="text-2xl md:text-3xl font-black mb-2">
          Popular Gift Packages
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          Here is exactly what we deliver inside each budget package:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white/[0.05] border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(236,72,153,0.2)] transition flex flex-col justify-between"
            >
              <div>
                <span className="text-xs bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full font-semibold">
                  Budget Package
                </span>
                <h3 className="text-xl font-bold mt-3">{pkg.name}</h3>
                <p className="text-2xl font-black text-pink-400 my-2">
                  {pkg.price}
                </p>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 my-3">
                  <p className="text-xs font-semibold text-pink-300 mb-1">
                    🎁 What's Included:
                  </p>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {pkg.details}
                  </p>
                </div>
              </div>
              <button
                onClick={() => navigate(`/product/${pkg.id}`)}
                className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-600 font-bold py-2.5 rounded-xl hover:scale-105 transition text-sm shadow-md"
              >
                Customize & Order
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
