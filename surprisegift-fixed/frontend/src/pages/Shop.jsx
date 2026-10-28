import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Search, Gift } from "lucide-react";
import API from "../services/api";
import { FEATURED_PRODUCTS } from "../data/catalog";
import { useCart } from "../context/CartContext";

export default function Shop() {
  const [products, setProducts] = useState(FEATURED_PRODUCTS);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    let active = true;
    API.get("/products")
      .then(({ data }) => {
        const remote = Array.isArray(data?.products) ? data.products : [];
        if (active && remote.length) {
          setProducts(remote.map((p) => ({
            ...p, type: "product", title: p.title || p.name, name: p.title || p.name,
            image: p.image || p.images?.[0] || "",
            images: p.images?.length ? p.images : p.image ? [p.image] : [],
          })));
        }
      })
      .catch((error) => console.warn("Catalogue API unavailable; showing featured items.", error.message))
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);

  const categories = ["All", ...new Set(products.map((p) => p.category).filter(Boolean))];
  const shown = products.filter((p) =>
    (category === "All" || p.category === category) &&
    `${p.title || p.name} ${p.description || ""}`.toLowerCase().includes(query.toLowerCase())
  );

  const add = (product) => {
    addToCart({ ...product, _id: product._id || product.id, title: product.title || product.name, type: "product" });
    navigate("/cart");
  };

  return <section className="max-w-7xl mx-auto px-4 py-10 text-white">
    <div className="text-center mb-9"><span className="text-pink-300 inline-flex items-center gap-2"><Gift size={17}/> Thoughtful finds</span><h1 className="text-4xl md:text-5xl font-black mt-3">Gift <span className="text-pink-400">Shop</span></h1><p className="text-neutral-300 mt-3">Explore gifts by category. Add any item to your cart before checkout.</p></div>
    <div className="flex flex-col md:flex-row gap-3 justify-between mb-7">
      <div className="relative flex-1 max-w-xl"><Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search gifts..." className="w-full rounded-xl bg-white/5 border border-white/15 py-3 pl-10 pr-4 text-white outline-none focus:border-pink-400"/></div>
      <div className="flex flex-wrap gap-2">{categories.map((c) => <button key={c} onClick={() => setCategory(c)} className={`rounded-full border px-3 py-2 text-sm ${c === category ? "bg-pink-500 border-pink-400" : "border-white/15 text-neutral-300"}`}>{c}</button>)}</div>
    </div>
    {loading && <p className="text-center text-neutral-400 mb-4">Checking latest catalogue…</p>}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {shown.map((p) => <article key={p._id || p.id || p.title} className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] flex flex-col">
        <img src={p.image || p.images?.[0] || "https://images.unsplash.com/photo-1513885535751-8b9238bd482a?q=80&w=800"} alt={p.title || p.name} loading="lazy" className="h-52 w-full object-cover"/>
        <div className="p-5 flex flex-col flex-1"><p className="text-xs uppercase tracking-wider text-pink-300">{p.category || "Gift"}</p><h2 className="font-bold text-lg mt-1">{p.title || p.name}</h2><p className="text-sm text-neutral-300 mt-2 flex-1">{p.description || "A thoughtful gift for a special moment."}</p><p className="text-xl font-black text-pink-300 mt-4">₹{Number(p.price || 0).toLocaleString("en-IN")}</p><button onClick={() => add(p)} className="mt-4 rounded-xl bg-pink-500 hover:bg-pink-400 px-4 py-3 font-bold flex justify-center items-center gap-2"><ShoppingCart size={17}/>Add to Cart</button></div>
      </article>)}
    </div>
    {!shown.length && <p className="text-center py-16 text-neutral-300">No gifts match this search. Try another category or keyword.</p>}
  </section>;
}
