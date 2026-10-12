// // import React, { useState, useEffect } from "react";
// // import API from "../services/api";
// // import { useCart } from "../context/CartContext";
// // import { ShoppingBag } from "lucide-react";

// // export const Shop = () => {
// //   const [products, setProducts] = useState([]);
// //   const { addToCart } = useCart();

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         const { data } = await API.get("/products");
// //         setProducts(data.products);
// //       } catch (err) {
// //         console.error(err);
// //       }
// //     };
// //     fetchProducts();
// //   }, []);

// //   return (
// //     <div className="max-w-7xl mx-auto px-4 py-12">
// //       <h2 className="text-4xl font-extrabold text-white mb-8">
// //         Curated Gift Packages
// //       </h2>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// //         {products.map((p) => (
// //           <div key={p._id} className="glass-panel p-6 rounded-3xl space-y-4">
// //             <img
// //               src={p.images[0]}
// //               alt={p.title}
// //               className="w-full h-64 object-cover rounded-2xl"
// //             />
// //             <h3 className="text-xl font-bold text-white">{p.title}</h3>
// //             <p className="text-neutral-400 text-xs line-clamp-2">
// //               {p.description}
// //             </p>
// //             <div className="flex justify-between items-center pt-2">
// //               <span className="text-2xl font-black text-white">₹{p.price}</span>
// //               <button
// //                 onClick={() => addToCart(p)}
// //                 className="px-4 py-2 bg-luxury-pink text-white text-sm font-bold rounded-xl flex items-center gap-2"
// //               >
// //                 <ShoppingBag className="w-4 h-4" /> Add
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Packages = () => {
//   const navigate = useNavigate();

//   const allPackages = [
//     {
//       id: "home-pkg",
//       name: "Home Package",
//       price: "₹499",
//       items: ["Scented Candle", "Handmade Card", "Fairy Lights Box"],
//     },
//     {
//       id: "normal-pkg",
//       name: "Normal Package",
//       price: "₹999",
//       items: ["Customized Frame", "Premium Chocolates", "Personalized Note"],
//     },
//     {
//       id: "luxury-pkg",
//       name: "Luxury Package",
//       price: "₹2,499",
//       items: ["High-end Gift Item", "Imported Chocolates", "Luxury Gift Box"],
//     },
//     {
//       id: "surprise-box",
//       name: "Surprise Box",
//       price: "₹1,499",
//       items: ["Mystery Customized Gift", "Memory Card", "LED Lights"],
//     },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
//       <div className="text-center max-w-2xl mx-auto">
//         <h1 className="text-3xl md:text-5xl font-black">
//           Choose Your Perfect{" "}
//           <span className="text-pink-400">Gift Package</span>
//         </h1>
//         <p className="text-gray-400 text-sm mt-2">
//           All packages include custom relations and custom favourite items
//           options.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {allPackages.map((pkg) => (
//           <div
//             key={pkg.id}
//             className="bg-white/[0.05] border border-pink-500/30 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between"
//           >
//             <div>
//               <h3 className="text-2xl font-bold">{pkg.name}</h3>
//               <p className="text-pink-400 font-black text-2xl my-2">
//                 {pkg.price}
//               </p>
//               <ul className="text-sm text-gray-300 space-y-2 my-4">
//                 {pkg.items.map((item, i) => (
//                   <li key={i}>✓ {item}</li>
//                 ))}
//               </ul>
//             </div>
//             <button
//               onClick={() => navigate(`/product/${pkg.id}`)}
//               className="w-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold py-3 rounded-xl hover:scale-105 transition"
//             >
//               Select Package
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Packages;

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Packages = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedRelation, setSelectedRelation] = useState("all");

  // URL se relation query nikalna (e.g. ?relation=girlfriend)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const rel = params.get("relation");
    if (rel) {
      setSelectedRelation(rel);
    }
  }, [location.search]);

  // Unsplash HD Images for Gift Vouchers/Packages
  const allPackages = [
    {
      id: "home-pkg",
      name: "Home Budget Package",
      price: "₹499",
      relationTarget: "all",
      img: "https://images.unsplash.com/photo-1513885535751-8b9238bd482a?q=80&w=600&auto=format&fit=crop",
      items: ["Cute Greeting Card", "Scented Candle", "Fairy Lights Box"],
    },
    {
      id: "normal-pkg",
      name: "Normal Gift Voucher",
      price: "₹999",
      relationTarget: "all",
      img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop",
      items: [
        "Personalized Photo Frame",
        "Premium Chocolates",
        "LED Bottle Light",
      ],
    },
    {
      id: "luxury-pkg",
      name: "Luxury Romance Voucher",
      price: "₹2,499",
      relationTarget: "girlfriend",
      img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop",
      items: [
        "Imported Red Roses",
        "Designer Chocolates",
        "Custom Love Letter Box",
      ],
    },
    {
      id: "surprise-box",
      name: "Mystery Surprise Box",
      price: "₹1,499",
      relationTarget: "boyfriend",
      img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop",
      items: [
        "Customized Wallets/Grooming",
        "Memory Keychain",
        "LED Lights Box",
      ],
    },
    {
      id: "mom-special",
      name: "Heartfelt Mom Hamper",
      price: "₹1,999",
      relationTarget: "mom",
      img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=600&auto=format&fit=crop",
      items: [
        "Best Mom Trophy",
        "Special Photo Frame",
        "Scented Care Products",
      ],
    },
    {
      id: "dad-special",
      name: "Respectful Dad Gift Box",
      price: "₹1,899",
      relationTarget: "dad",
      img: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=600&auto=format&fit=crop",
      items: ["Classic Pen & Diary Set", "Customized Mug", "Wallets"],
    },
  ];

  // Filter packages based on selected relation category
  const filteredPackages =
    selectedRelation === "all"
      ? allPackages
      : allPackages.filter(
          (p) =>
            p.relationTarget === selectedRelation || p.relationTarget === "all",
        );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <span className="bg-pink-500/20 text-pink-300 text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider">
          ✨ Curated Gift Vouchers
        </span>
        <h1 className="text-3xl md:text-5xl font-black mt-3">
          Choose Your Perfect{" "}
          <span className="text-pink-400">Gift Package</span>
        </h1>
        <p className="text-gray-400 text-sm mt-2">
          {selectedRelation !== "all"
            ? `Showing specially tailored vouchers for: ${selectedRelation.toUpperCase()}`
            : "Select a package, set your preferences, and let us create magic."}
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex justify-center gap-2 flex-wrap">
        {["all", "girlfriend", "boyfriend", "mom", "dad", "friends"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => setSelectedRelation(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition ${
                selectedRelation === cat
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ),
        )}
      </div>

      {/* Package / Voucher Cards Grid with Unsplash Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white/[0.05] border border-pink-500/30 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between shadow-[0_0_25px_rgba(236,72,153,0.15)] hover:border-pink-500 transition group"
          >
            <div>
              <div className="h-52 rounded-2xl overflow-hidden mb-5 border border-white/10 group-hover:scale-105 transition duration-500">
                <img
                  src={pkg.img}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
              <p className="text-pink-400 font-black text-2xl my-2">
                {pkg.price}
              </p>
              <ul className="space-y-2 text-sm text-gray-300 my-4">
                {pkg.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() =>
                navigate(`/product/${pkg.id}?relation=${selectedRelation}`)
              }
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold py-3.5 rounded-xl shadow-lg hover:scale-105 transition mt-4"
            >
              Customize Voucher
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
