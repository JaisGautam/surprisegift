import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Check, ShoppingCart, SlidersHorizontal, Sparkles } from "lucide-react";
import { PACKAGES } from "../data/catalog";
import { useCart } from "../context/CartContext";

const categories = ["All packages", "Budget", "Classic", "Surprise", "Premium", "Luxury"];

export default function Packages() {
  const [category, setCategory] = useState("All packages");
  const [addedId, setAddedId] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart } = useCart();
  const relation = new URLSearchParams(location.search).get("relation") || "";
  const relationPackages = {
    girlfriend: ["luxury-pkg", "surprise-box", "normal-pkg"],
    boyfriend: ["normal-pkg", "luxury-pkg", "surprise-box"],
    friends: ["home-pkg", "normal-pkg", "surprise-box"],
    mom: ["mom-special", "home-pkg", "normal-pkg"],
    dad: ["dad-special", "normal-pkg", "luxury-pkg"],
    colleagues: ["normal-pkg", "dad-special", "home-pkg"],
  };
  const relationIds = relationPackages[relation.toLowerCase()];
  const filtered = useMemo(() => PACKAGES.filter((item) =>
    (category === "All packages" || item.category === category) &&
    (!relationIds || relationIds.includes(item._id))
  ), [category, relation]);

  const addPackage = (pkg) => {
    addToCart({ ...pkg, title: pkg.name, image: pkg.image, type: "package", packageId: pkg._id });
    setAddedId(pkg._id);
    navigate("/cart");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 md:py-14 text-white">
      <div className="text-center max-w-3xl mx-auto mb-9">
        <span className="inline-flex items-center gap-2 rounded-full border border-pink-400/30 bg-pink-400/10 px-4 py-2 text-sm text-pink-200"><Sparkles size={16}/> Curated with care</span>
        <h1 className="mt-5 text-4xl md:text-5xl font-black">Gift <span className="text-pink-400">Packages</span></h1>
        <p className="mt-3 text-neutral-300">Choose a package, personalize the surprise, add it to your cart, then checkout when you're ready.</p>
        {relation && <p className="mt-3 inline-block rounded-full border border-pink-400/30 bg-pink-400/10 px-4 py-2 text-sm text-pink-200">Curated for: {relation.charAt(0).toUpperCase() + relation.slice(1)}</p>}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        <SlidersHorizontal size={17} className="text-pink-300 mr-1"/>
        {categories.map((name) => <button key={name} onClick={() => setCategory(name)} className={`rounded-full px-4 py-2 text-sm border transition ${category === name ? "bg-pink-500 border-pink-400 text-white" : "border-white/15 bg-white/5 text-neutral-300 hover:border-pink-400/60"}`}>{name}</button>)}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((pkg) => (
          <article key={pkg._id} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] shadow-xl flex flex-col">
            <div className="relative h-56">
              <img src={pkg.image} alt={pkg.name} loading="lazy" className="h-full w-full object-cover"/>
              <span className="absolute left-4 top-4 rounded-full bg-black/65 px-3 py-1 text-xs font-semibold text-pink-200 backdrop-blur">{pkg.badge}</span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between gap-3"><h2 className="text-xl font-bold">{pkg.name}</h2><span className="text-xl font-black text-pink-300 whitespace-nowrap">₹{pkg.price.toLocaleString("en-IN")}</span></div>
              <p className="text-sm text-neutral-300 mt-2">{pkg.description}</p>
              <ul className="mt-4 mb-6 space-y-2 text-sm text-neutral-200">{pkg.features.map((feature) => <li key={feature} className="flex gap-2"><Check size={17} className="text-emerald-400 shrink-0"/>{feature}</li>)}</ul>
              <div className="mt-auto grid grid-cols-2 gap-3">
                <button onClick={() => navigate(`/product/${pkg._id}`)} className="rounded-xl border border-pink-400/60 px-3 py-3 text-sm font-bold text-pink-200 hover:bg-pink-500/10">Customize</button>
                <button onClick={() => addPackage(pkg)} className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-3 py-3 text-sm font-bold text-white flex items-center justify-center gap-2 hover:brightness-110"><ShoppingCart size={17}/>{addedId === pkg._id ? "Add again" : "Add to Cart"}</button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="text-center text-xs text-neutral-500 mt-8">Package pricing is shown in INR. Final availability is confirmed before fulfillment.</p>
    </section>
  );
}
