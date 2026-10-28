import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShoppingCart, Check } from "lucide-react";
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

  if (!pkg) return <div className="max-w-3xl mx-auto py-20 px-4 text-center text-white"><h1 className="text-2xl font-bold">Package not found</h1><button onClick={() => navigate("/packages")} className="mt-5 rounded-xl bg-pink-500 px-5 py-3 font-bold">Browse packages</button></div>;

  const addCustomizedPackage = () => {
    addToCart({ ...pkg, title: pkg.name, image: pkg.image, type: "package", packageId: pkg._id, customizationDetails: { relation, favouriteItem: favouriteItem.trim(), customNote: customNote.trim() } });
    navigate("/cart");
  };

  return <section className="max-w-5xl mx-auto px-4 py-10 text-white">
    <button onClick={() => navigate("/packages")} className="text-sm text-pink-300 hover:underline mb-5">← Back to packages</button>
    <div className="grid md:grid-cols-2 gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5 md:p-8">
      <img src={pkg.image} alt={pkg.name} className="w-full h-80 rounded-2xl object-cover"/>
      <div><span className="rounded-full bg-pink-500/15 px-3 py-1 text-xs text-pink-200">{pkg.badge}</span><h1 className="text-3xl font-black mt-4">{pkg.name}</h1><p className="text-3xl font-black text-pink-300 mt-3">₹{pkg.price.toLocaleString("en-IN")}</p><p className="text-neutral-300 mt-3">{pkg.description}</p><ul className="mt-4 space-y-2">{pkg.features.map((f) => <li key={f} className="flex gap-2 text-sm"><Check size={17} className="text-emerald-400"/>{f}</li>)}</ul></div>
    </div>
    <form onSubmit={(e) => { e.preventDefault(); addCustomizedPackage(); }} className="mt-7 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8 space-y-5">
      <h2 className="text-2xl font-bold">Personalize your package</h2>
      <div className="grid sm:grid-cols-2 gap-4"><label className="text-sm text-neutral-300">Who is it for?<select value={relation} onChange={(e) => setRelation(e.target.value)} className="mt-2 block w-full rounded-xl border border-white/15 bg-[#1a1022] p-3 text-white"><option>Girlfriend</option><option>Boyfriend</option><option>Best Friend</option><option>Mom</option><option>Dad</option><option>Sibling</option><option>Colleague</option></select></label><label className="text-sm text-neutral-300">Favourite item (optional)<input value={favouriteItem} onChange={(e) => setFavouriteItem(e.target.value)} maxLength={120} placeholder="Flowers, chocolates, books…" className="mt-2 block w-full rounded-xl border border-white/15 bg-white/5 p-3 text-white"/></label></div>
      <label className="block text-sm text-neutral-300">Personal message (optional)<textarea value={customNote} onChange={(e) => setCustomNote(e.target.value)} maxLength={500} rows={3} placeholder="Write a message for your gift…" className="mt-2 block w-full rounded-xl border border-white/15 bg-white/5 p-3 text-white"/></label>
      <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-4 font-bold flex items-center justify-center gap-2"><ShoppingCart size={18}/> Add Package to Cart</button>
    </form>
  </section>;
}
