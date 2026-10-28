import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const total = getCartTotal();

  if (!cart.length) return <div className="max-w-3xl mx-auto px-4 py-24 text-center text-white"><ShoppingBag size={48} className="mx-auto text-pink-300 mb-4"/><h1 className="text-3xl font-black">Your cart is empty</h1><p className="text-neutral-300 mt-3">Add a package or gift item before moving to checkout.</p><div className="flex justify-center gap-3 mt-7"><Link to="/packages" className="rounded-xl bg-pink-500 px-5 py-3 font-bold">Explore Packages</Link><Link to="/shop" className="rounded-xl border border-white/20 px-5 py-3 font-bold">Browse Shop</Link></div></div>;

  return <section className="max-w-5xl mx-auto px-4 py-10 text-white"><h1 className="text-3xl md:text-4xl font-black mb-2">Your Cart</h1><p className="text-neutral-300 mb-7">{cart.reduce((n, item) => n + item.quantity, 0)} item(s) ready for your surprise.</p>
    <div className="grid lg:grid-cols-[1fr_320px] gap-6 items-start"><div className="space-y-4">{cart.map((item) => <article key={item._id} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <img src={item.image || item.images?.[0] || "https://images.unsplash.com/photo-1513885535751-8b9238bd482a?q=80&w=400"} alt={item.title} className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover"/>
      <div className="flex-1 min-w-0"><p className="text-xs uppercase text-pink-300">{item.type === "package" ? "Gift package" : item.category || "Gift item"}</p><h2 className="font-bold text-lg mt-1">{item.title || item.name}</h2><p className="text-pink-300 font-bold mt-1">₹{Number(item.price).toLocaleString("en-IN")} each</p><div className="flex items-center gap-3 mt-3"><button aria-label="Decrease quantity" onClick={() => item.quantity > 1 ? updateQuantity(item._id, item.quantity - 1) : removeFromCart(item._id)} className="rounded-lg border border-white/20 p-1.5"><Minus size={15}/></button><span className="min-w-4 text-center">{item.quantity}</span><button aria-label="Increase quantity" onClick={() => updateQuantity(item._id, item.quantity + 1)} className="rounded-lg border border-white/20 p-1.5"><Plus size={15}/></button><button onClick={() => removeFromCart(item._id)} className="ml-auto text-red-300 flex items-center gap-1 text-sm"><Trash2 size={16}/>Remove</button></div></div>
      <strong className="hidden sm:block whitespace-nowrap">₹{(item.price * item.quantity).toLocaleString("en-IN")}</strong>
    </article>)}</div>
    <aside className="rounded-2xl border border-pink-400/25 bg-white/[0.04] p-6 sticky top-24"><h2 className="text-xl font-bold">Order Summary</h2><div className="flex justify-between mt-5 text-neutral-300"><span>Subtotal</span><span>₹{total.toLocaleString("en-IN")}</span></div><div className="flex justify-between mt-3 text-neutral-300"><span>Delivery</span><span>Calculated later</span></div><div className="border-t border-white/10 mt-5 pt-5 flex justify-between text-lg font-black"><span>Total</span><span className="text-pink-300">₹{total.toLocaleString("en-IN")}</span></div><Link to="/checkout" className="mt-6 w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-3 font-bold flex items-center justify-center gap-2">Continue to Checkout <ArrowRight size={17}/></Link><Link to="/shop" className="block text-center mt-4 text-sm text-neutral-300 underline">Continue shopping</Link></aside></div>
  </section>;
};
