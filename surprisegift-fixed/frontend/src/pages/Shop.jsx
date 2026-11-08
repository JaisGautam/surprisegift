// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ShoppingCart, Search, Gift } from "lucide-react";
// import API from "../services/api";
// import { FEATURED_PRODUCTS } from "../data/catalog";
// import { useCart } from "../context/CartContext";

// export default function Shop() {
//   const [products, setProducts] = useState(FEATURED_PRODUCTS);
//   const [query, setQuery] = useState("");
//   const [category, setCategory] = useState("All");
//   const [loading, setLoading] = useState(true);
//   const { addToCart } = useCart();
//   const navigate = useNavigate();

//   useEffect(() => {
//     let active = true;
//     API.get("/products")
//       .then(({ data }) => {
//         const remote = Array.isArray(data?.products) ? data.products : [];
//         if (active && remote.length) {
//           setProducts(remote.map((p) => ({
//             ...p, type: "product", title: p.title || p.name, name: p.title || p.name,
//             image: p.image || p.images?.[0] || "",
//             images: p.images?.length ? p.images : p.image ? [p.image] : [],
//           })));
//         }
//       })
//       .catch((error) => console.warn("Catalogue API unavailable; showing featured items.", error.message))
//       .finally(() => { if (active) setLoading(false); });
//     return () => { active = false; };
//   }, []);

//   const categories = ["All", ...new Set(products.map((p) => p.category).filter(Boolean))];
//   const shown = products.filter((p) =>
//     (category === "All" || p.category === category) &&
//     `${p.title || p.name} ${p.description || ""}`.toLowerCase().includes(query.toLowerCase())
//   );

//   const add = (product) => {
//     addToCart({ ...product, _id: product._id || product.id, title: product.title || product.name, type: "product" });
//     navigate("/cart");
//   };

//   return <section className="max-w-7xl mx-auto px-4 py-10 text-white">
//     <div className="text-center mb-9"><span className="text-pink-300 inline-flex items-center gap-2"><Gift size={17}/> Thoughtful finds</span><h1 className="text-4xl md:text-5xl font-black mt-3">Gift <span className="text-pink-400">Shop</span></h1><p className="text-neutral-300 mt-3">Explore gifts by category. Add any item to your cart before checkout.</p></div>
//     <div className="flex flex-col md:flex-row gap-3 justify-between mb-7">
//       <div className="relative flex-1 max-w-xl"><Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search gifts..." className="w-full rounded-xl bg-white/5 border border-white/15 py-3 pl-10 pr-4 text-white outline-none focus:border-pink-400"/></div>
//       <div className="flex flex-wrap gap-2">{categories.map((c) => <button key={c} onClick={() => setCategory(c)} className={`rounded-full border px-3 py-2 text-sm ${c === category ? "bg-pink-500 border-pink-400" : "border-white/15 text-neutral-300"}`}>{c}</button>)}</div>
//     </div>
//     {loading && <p className="text-center text-neutral-400 mb-4">Checking latest catalogue…</p>}
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//       {shown.map((p) => <article key={p._id || p.id || p.title} className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] flex flex-col">
//         <img src={p.image || p.images?.[0] || "https://images.unsplash.com/photo-1513885535751-8b9238bd482a?q=80&w=800"} alt={p.title || p.name} loading="lazy" className="h-52 w-full object-cover"/>
//         <div className="p-5 flex flex-col flex-1"><p className="text-xs uppercase tracking-wider text-pink-300">{p.category || "Gift"}</p><h2 className="font-bold text-lg mt-1">{p.title || p.name}</h2><p className="text-sm text-neutral-300 mt-2 flex-1">{p.description || "A thoughtful gift for a special moment."}</p><p className="text-xl font-black text-pink-300 mt-4">₹{Number(p.price || 0).toLocaleString("en-IN")}</p><button onClick={() => add(p)} className="mt-4 rounded-xl bg-pink-500 hover:bg-pink-400 px-4 py-3 font-bold flex justify-center items-center gap-2"><ShoppingCart size={17}/>Add to Cart</button></div>
//       </article>)}
//     </div>
//     {!shown.length && <p className="text-center py-16 text-neutral-300">No gifts match this search. Try another category or keyword.</p>}
//   </section>;
// }

import React from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Gift, Heart, Star } from "lucide-react";
import { PACKAGES } from "../data/catalog"; // Apna data yahan se lein
import { useCart } from "../context/CartContext";

export default function Shop() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Aapke packages (jo catalog me hain)
  const products = PACKAGES;

  // Categories (Occasion ya Recipient ke hisaab se)
  const categories = [
    {
      name: "For Girlfriend",
      img: "images/img1.png",
      link: "/packages?relation=girlfriend",
    },
    {
      name: "For Boyfriend",
      img: "images/img2.png",
      link: "/packages?relation=boyfriend",
    },
    { name: "For Mom", img: "images/img3.png", link: "/packages?relation=mom" },
    { name: "For Dad", img: "images/img5.png", link: "/packages?relation=dad" },
    {
      name: "For Friends",
      img: "images/img6.jpg",
      link: "/packages?relation=friends",
    },
    {
      name: "Corporate",
      img: "images/img7.jpg",
      link: "/packages?relation=colleagues",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 bg-white min-h-screen text-gray-800">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 text-pink-600 font-bold text-sm tracking-widest uppercase mb-2">
          <Gift size={16} /> Thoughtful Finds
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          Shop by <span className="text-pink-500">Recipient</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Because every person is unique. Find the perfect handcrafted surprise
          for your loved ones, curated with love.
        </p>
      </div>

      {/* Categories Grid (Premium Look) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            onClick={() => navigate(cat.link)}
            className="group cursor-pointer flex flex-col items-center"
          >
            <div className="w-full aspect-square rounded-full overflow-hidden border-4 border-gray-50 shadow-md group-hover:border-pink-200 group-hover:scale-105 transition-all duration-300 mb-3">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-sm text-gray-700 group-hover:text-pink-600 transition text-center">
              {cat.name}
            </span>
          </div>
        ))}
      </div>

      {/* Featured / Best Seller Products (Jahan Inventory nahi hai, wahan curated gifts dikhao) */}
      <div className="border-t border-gray-100 pt-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-black text-gray-900">
              Our Signature Boxes
            </h2>
            <p className="text-gray-500 mt-2">
              Handcrafted hampers, personalized for you.
            </p>
          </div>
          <button
            onClick={() => navigate("/packages")}
            className="text-pink-600 font-bold hover:underline hidden md:block"
          >
            View All Packages →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((item) => (
            <div
              key={item._id}
              className="group relative bg-white border border-gray-100 rounded-3xl p-4 shadow-sm hover:shadow-xl transition duration-300 flex flex-col"
            >
              {/* Image with hover zoom */}
              <div className="h-64 rounded-2xl overflow-hidden mb-4 relative bg-gray-50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-pink-600 shadow-sm">
                  {item.badge || "Exclusive"}
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1 mb-4 flex-1">
                  {item.description}
                </p>

                <div className="flex justify-between items-center mt-auto border-t border-gray-100 pt-4">
                  <span className="text-xl font-black text-gray-900">
                    ₹{item.price}
                  </span>
                  <button
                    onClick={() => {
                      addToCart(item);
                      navigate("/cart");
                    }}
                    className="bg-pink-50 text-pink-600 hover:bg-pink-500 hover:text-white px-4 py-2 rounded-xl font-bold transition flex items-center gap-2 text-sm"
                  >
                    <ShoppingCart size={16} /> Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Banner (Boutique feel) */}
      <div className="mt-20 bg-pink-50 rounded-3xl p-8 text-center border border-pink-100">
        <Star
          className="mx-auto text-pink-400 mb-3"
          size={32}
          fill="currentColor"
        />
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Why Choose MysticBox?
        </h3>
        <p className="text-gray-600 max-w-lg mx-auto">
          We don't mass produce. Every box is hand-packed with a personalized
          handwritten letter, ensuring a unique unboxing experience for your
          loved one.
        </p>
      </div>
    </section>
  );
}
