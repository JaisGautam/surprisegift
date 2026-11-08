// // import React, { useMemo, useState } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import { ShoppingCart, Check } from "lucide-react";
// // import { PACKAGES } from "../data/catalog";
// // import { useCart } from "../context/CartContext";

// // export default function ProductView() {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const { addToCart } = useCart();
// //   const pkg = useMemo(() => PACKAGES.find((item) => item._id === id), [id]);
// //   const [relation, setRelation] = useState("Best Friend");
// //   const [favouriteItem, setFavouriteItem] = useState("");
// //   const [customNote, setCustomNote] = useState("");

// //   if (!pkg) return <div className="max-w-3xl mx-auto py-20 px-4 text-center text-white"><h1 className="text-2xl font-bold">Package not found</h1><button onClick={() => navigate("/packages")} className="mt-5 rounded-xl bg-pink-500 px-5 py-3 font-bold">Browse packages</button></div>;

// //   const addCustomizedPackage = () => {
// //     addToCart({ ...pkg, title: pkg.name, image: pkg.image, type: "package", packageId: pkg._id, customizationDetails: { relation, favouriteItem: favouriteItem.trim(), customNote: customNote.trim() } });
// //     navigate("/cart");
// //   };

// //   return <section className="max-w-5xl mx-auto px-4 py-10 text-white">
// //     <button onClick={() => navigate("/packages")} className="text-sm text-pink-300 hover:underline mb-5">← Back to packages</button>
// //     <div className="grid md:grid-cols-2 gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5 md:p-8">
// //       <img src={pkg.image} alt={pkg.name} className="w-full h-80 rounded-2xl object-cover"/>
// //       <div><span className="rounded-full bg-pink-500/15 px-3 py-1 text-xs text-pink-200">{pkg.badge}</span><h1 className="text-3xl font-black mt-4">{pkg.name}</h1><p className="text-3xl font-black text-pink-300 mt-3">₹{pkg.price.toLocaleString("en-IN")}</p><p className="text-neutral-300 mt-3">{pkg.description}</p><ul className="mt-4 space-y-2">{pkg.features.map((f) => <li key={f} className="flex gap-2 text-sm"><Check size={17} className="text-emerald-400"/>{f}</li>)}</ul></div>
// //     </div>
// //     <form onSubmit={(e) => { e.preventDefault(); addCustomizedPackage(); }} className="mt-7 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8 space-y-5">
// //       <h2 className="text-2xl font-bold">Personalize your package</h2>
// //       <div className="grid sm:grid-cols-2 gap-4"><label className="text-sm text-neutral-300">Who is it for?<select value={relation} onChange={(e) => setRelation(e.target.value)} className="mt-2 block w-full rounded-xl border border-white/15 bg-[#1a1022] p-3 text-white"><option>Girlfriend</option><option>Boyfriend</option><option>Best Friend</option><option>Mom</option><option>Dad</option><option>Sibling</option><option>Colleague</option></select></label><label className="text-sm text-neutral-300">Favourite item (optional)<input value={favouriteItem} onChange={(e) => setFavouriteItem(e.target.value)} maxLength={120} placeholder="Flowers, chocolates, books…" className="mt-2 block w-full rounded-xl border border-white/15 bg-white/5 p-3 text-white"/></label></div>
// //       <label className="block text-sm text-neutral-300">Personal message (optional)<textarea value={customNote} onChange={(e) => setCustomNote(e.target.value)} maxLength={500} rows={3} placeholder="Write a message for your gift…" className="mt-2 block w-full rounded-xl border border-white/15 bg-white/5 p-3 text-white"/></label>
// //       <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-4 font-bold flex items-center justify-center gap-2"><ShoppingCart size={18}/> Add Package to Cart</button>
// //     </form>
// //   </section>;
// // }

// import React, { useMemo, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { ShoppingCart, Check, ShieldCheck, Gift } from "lucide-react";
// import { PACKAGES } from "../data/catalog";
// import { useCart } from "../context/CartContext";

// export default function ProductView() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useCart();

//   const pkg = useMemo(() => PACKAGES.find((item) => item._id === id), [id]);

//   const [relation, setRelation] = useState("Best Friend");
//   const [favouriteItem, setFavouriteItem] = useState("");
//   const [customNote, setCustomNote] = useState("");

//   if (!pkg) {
//     return (
//       <div className="max-w-3xl mx-auto py-20 px-4 text-center">
//         <h1 className="text-2xl font-bold text-gray-900">Package not found</h1>
//         <button
//           onClick={() => navigate("/packages")}
//           className="mt-5 rounded-xl bg-pink-500 px-5 py-3 font-bold text-white"
//         >
//           Browse packages
//         </button>
//       </div>
//     );
//   }

//   const addCustomizedPackage = () => {
//     addToCart({
//       ...pkg,
//       title: pkg.name,
//       image: pkg.image,
//       type: "package",
//       packageId: pkg._id,
//       customizationDetails: {
//         relation,
//         favouriteItem: favouriteItem.trim(),
//         customNote: customNote.trim(),
//       },
//     });
//     navigate("/cart");
//   };

//   return (
//     <section className="max-w-6xl mx-auto px-4 py-12 bg-gray-50 min-h-screen">
//       <button
//         onClick={() => navigate("/packages")}
//         className="text-sm font-bold text-pink-600 hover:underline mb-6 flex items-center gap-1"
//       >
//         ← Back to packages
//       </button>

//       <div className="grid md:grid-cols-2 gap-10">
//         {/* Left: Image */}
//         <div className="space-y-4">
//           <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gray-100 h-[450px]">
//             <img
//               src={pkg.image}
//               alt={pkg.name}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Trust Badges */}
//           <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-200">
//             <div className="flex items-center gap-2 text-green-600 text-sm font-bold">
//               <ShieldCheck size={18} /> 100% Secure
//             </div>
//             <div className="flex items-center gap-2 text-pink-600 text-sm font-bold">
//               <Gift size={18} /> Premium Quality
//             </div>
//           </div>
//         </div>

//         {/* Right: Details & Form */}
//         <div>
//           <span className="bg-pink-100 text-pink-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
//             {pkg.badge}
//           </span>
//           <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
//             {pkg.name}
//           </h1>
//           <p className="text-3xl font-black text-pink-600 mb-4">
//             ₹{pkg.price.toLocaleString("en-IN")}
//           </p>
//           <p className="text-gray-600 mb-6 leading-relaxed">
//             {pkg.description}
//           </p>

//           {/* 🔥 What's Inside & How We Curate */}
//           <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-8 shadow-sm">
//             <h4 className="font-bold text-gray-900 mb-3 text-lg">
//               What's Inside?
//             </h4>
//             <ul className="space-y-2 mb-4">
//               {pkg.features.map((f) => (
//                 <li
//                   key={f}
//                   className="flex gap-2 text-sm text-gray-700 items-center"
//                 >
//                   <Check size={16} className="text-green-500 shrink-0" /> {f}
//                 </li>
//               ))}
//             </ul>

//             {/* 🔥 IMPORTANT: Razorpay ke liye Curated message */}
//             <div className="border-t border-gray-100 pt-4 mt-4">
//               <p className="text-xs text-gray-500 leading-relaxed">
//                 <strong className="text-gray-900 block mb-1">
//                   How We Curate Your Box:
//                 </strong>
//                 Every box is handcrafted by our experts. We carefully select
//                 premium items based on your chosen budget and the recipient.
//                 While the exact items remain a surprise, we guarantee a
//                 high-quality and valuable gift experience.
//               </p>
//             </div>
//           </div>

//           {/* Form */}
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               addCustomizedPackage();
//             }}
//             className="bg-white border border-gray-200 rounded-3xl p-6 space-y-5 shadow-sm"
//           >
//             <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3">
//               Personalize your package
//             </h2>

//             <div className="grid sm:grid-cols-2 gap-4">
//               <label className="text-sm font-semibold text-gray-700">
//                 Who is it for?
//                 <select
//                   value={relation}
//                   onChange={(e) => setRelation(e.target.value)}
//                   className="mt-2 block w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-gray-900 focus:border-pink-500 outline-none transition"
//                 >
//                   <option>Girlfriend</option>
//                   <option>Boyfriend</option>
//                   <option>Best Friend</option>
//                   <option>Mom</option>
//                   <option>Dad</option>
//                   <option>Sibling</option>
//                   <option>Colleague</option>
//                 </select>
//               </label>

//               <label className="text-sm font-semibold text-gray-700">
//                 Favourite item (optional)
//                 <input
//                   value={favouriteItem}
//                   onChange={(e) => setFavouriteItem(e.target.value)}
//                   maxLength={120}
//                   placeholder="Flowers, chocolates, books…"
//                   className="mt-2 block w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-gray-900 focus:border-pink-500 outline-none transition"
//                 />
//               </label>
//             </div>

//             <label className="block text-sm font-semibold text-gray-700">
//               Personal message (optional)
//               <textarea
//                 value={customNote}
//                 onChange={(e) => setCustomNote(e.target.value)}
//                 maxLength={500}
//                 rows={3}
//                 placeholder="Write a message for your gift…"
//                 className="mt-2 block w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-gray-900 focus:border-pink-500 outline-none transition"
//               />
//             </label>

//             <button
//               type="submit"
//               className="w-full rounded-xl bg-pink-500 hover:bg-pink-600 text-white px-5 py-4 font-bold flex items-center justify-center gap-2 shadow-lg shadow-pink-500/30 transition"
//             >
//               <ShoppingCart size={20} /> Add Package to Cart
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShoppingCart, Check, ShieldCheck, Gift } from "lucide-react";
import { PACKAGES } from "../data/catalog";
import { useCart } from "../context/CartContext";

export default function ProductView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const pkg = useMemo(() => PACKAGES.find((item) => item._id === id), [id]);

  const [relation, setRelation] = useState("Best Friend");
  const [favouriteItem, setFavouriteItem] = useState("");
  const [customNote, setCustomNote] = useState("");

  // Agar package na mile toh error screen
  if (!pkg) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Package not found</h1>
        <button
          onClick={() => navigate("/packages")}
          className="mt-5 rounded-xl bg-pink-500 px-5 py-3 font-bold text-white"
        >
          Browse packages
        </button>
      </div>
    );
  }

  const addCustomizedPackage = () => {
    addToCart({
      ...pkg,
      title: pkg.name,
      image: pkg.image,
      type: "package",
      packageId: pkg._id,
      customizationDetails: {
        relation,
        favouriteItem: favouriteItem.trim(),
        customNote: customNote.trim(),
      },
    });
    navigate("/cart");
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      <button
        onClick={() => navigate("/packages")}
        className="text-sm font-bold text-pink-600 hover:underline mb-6 flex items-center gap-1"
      >
        ← Back to packages
      </button>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left: Image */}
        <div className="space-y-4">
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gray-100 h-[450px]">
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Trust Badges */}
          <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 text-green-600 text-sm font-bold">
              <ShieldCheck size={18} /> 100% Secure
            </div>
            <div className="flex items-center gap-2 text-pink-600 text-sm font-bold">
              <Gift size={18} /> Premium Quality
            </div>
          </div>
        </div>

        {/* Right: Details & Form */}
        <div>
          <span className="bg-pink-100 text-pink-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
            {pkg.badge}
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
            {pkg.name}
          </h1>
          <p className="text-3xl font-black text-pink-600 mb-4">
            ₹{pkg.price.toLocaleString("en-IN")}
          </p>

          {/* 🔥 What to Expect (Yahan features hata diye hain) */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-8 shadow-sm">
            <h4 className="font-bold text-gray-900 mb-3 text-lg">
              What to Expect?
            </h4>

            <p className="text-sm text-gray-700 mb-3 leading-relaxed">
              {pkg.description}
            </p>

            <div className="bg-pink-50 border border-pink-100 p-4 rounded-xl mb-4">
              <p className="text-sm font-semibold text-pink-700 mb-1">
                Example Items (Suggestion Only):
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                We may include items like premium chocolates, scented candles, a
                personalized handwritten card, and elegant packaging.
              </p>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed italic">
              <strong className="text-gray-800">Note:</strong> The exact items
              in your box are a <strong>surprise</strong> and may vary based on
              your chosen budget and preferences. We guarantee a high-quality,
              valuable gift experience that will make your loved one smile.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addCustomizedPackage();
            }}
            className="bg-white border border-gray-200 rounded-3xl p-6 space-y-5 shadow-sm"
          >
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3">
              Personalize your package
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <label className="text-sm font-semibold text-gray-700">
                Who is it for?
                <select
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  className="mt-2 block w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-gray-900 focus:border-pink-500 outline-none transition"
                >
                  <option>Girlfriend</option>
                  <option>Boyfriend</option>
                  <option>Best Friend</option>
                  <option>Mom</option>
                  <option>Dad</option>
                  <option>Sibling</option>
                  <option>Colleague</option>
                </select>
              </label>

              <label className="text-sm font-semibold text-gray-700">
                Favourite item (optional)
                <input
                  value={favouriteItem}
                  onChange={(e) => setFavouriteItem(e.target.value)}
                  maxLength={120}
                  placeholder="Flowers, chocolates, books…"
                  className="mt-2 block w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-gray-900 focus:border-pink-500 outline-none transition"
                />
              </label>
            </div>

            <label className="block text-sm font-semibold text-gray-700">
              Personal message (optional)
              <textarea
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                maxLength={500}
                rows={3}
                placeholder="Write a message for your gift…"
                className="mt-2 block w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-gray-900 focus:border-pink-500 outline-none transition"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-pink-500 hover:bg-pink-600 text-white px-5 py-4 font-bold flex items-center justify-center gap-2 shadow-lg shadow-pink-500/30 transition"
            >
              <ShoppingCart size={20} /> Add Package to Cart
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
