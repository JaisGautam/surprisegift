// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
// // import { useCart } from "../context/CartContext";

// // export const Cart = () => {
// //   const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
// //   const total = getCartTotal();

// //   if (!cart.length) return <div className="max-w-3xl mx-auto px-4 py-24 text-center text-white"><ShoppingBag size={48} className="mx-auto text-pink-300 mb-4"/><h1 className="text-3xl font-black">Your cart is empty</h1><p className="text-neutral-300 mt-3">Add a package or gift item before moving to checkout.</p><div className="flex justify-center gap-3 mt-7"><Link to="/packages" className="rounded-xl bg-pink-500 px-5 py-3 font-bold">Explore Packages</Link><Link to="/shop" className="rounded-xl border border-white/20 px-5 py-3 font-bold">Browse Shop</Link></div></div>;

// //   return <section className="max-w-5xl mx-auto px-4 py-10 text-white"><h1 className="text-3xl md:text-4xl font-black mb-2">Your Cart</h1><p className="text-neutral-300 mb-7">{cart.reduce((n, item) => n + item.quantity, 0)} item(s) ready for your surprise.</p>
// //     <div className="grid lg:grid-cols-[1fr_320px] gap-6 items-start"><div className="space-y-4">{cart.map((item) => <article key={item._id} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
// //       <img src={item.image || item.images?.[0] || "https://images.unsplash.com/photo-1513885535751-8b9238bd482a?q=80&w=400"} alt={item.title} className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover"/>
// //       <div className="flex-1 min-w-0"><p className="text-xs uppercase text-pink-300">{item.type === "package" ? "Gift package" : item.category || "Gift item"}</p><h2 className="font-bold text-lg mt-1">{item.title || item.name}</h2><p className="text-pink-300 font-bold mt-1">₹{Number(item.price).toLocaleString("en-IN")} each</p><div className="flex items-center gap-3 mt-3"><button aria-label="Decrease quantity" onClick={() => item.quantity > 1 ? updateQuantity(item._id, item.quantity - 1) : removeFromCart(item._id)} className="rounded-lg border border-white/20 p-1.5"><Minus size={15}/></button><span className="min-w-4 text-center">{item.quantity}</span><button aria-label="Increase quantity" onClick={() => updateQuantity(item._id, item.quantity + 1)} className="rounded-lg border border-white/20 p-1.5"><Plus size={15}/></button><button onClick={() => removeFromCart(item._id)} className="ml-auto text-red-300 flex items-center gap-1 text-sm"><Trash2 size={16}/>Remove</button></div></div>
// //       <strong className="hidden sm:block whitespace-nowrap">₹{(item.price * item.quantity).toLocaleString("en-IN")}</strong>
// //     </article>)}</div>
// //     <aside className="rounded-2xl border border-pink-400/25 bg-white/[0.04] p-6 sticky top-24"><h2 className="text-xl font-bold">Order Summary</h2><div className="flex justify-between mt-5 text-neutral-300"><span>Subtotal</span><span>₹{total.toLocaleString("en-IN")}</span></div><div className="flex justify-between mt-3 text-neutral-300"><span>Delivery</span><span>Calculated later</span></div><div className="border-t border-white/10 mt-5 pt-5 flex justify-between text-lg font-black"><span>Total</span><span className="text-pink-300">₹{total.toLocaleString("en-IN")}</span></div><Link to="/checkout" className="mt-6 w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-3 font-bold flex items-center justify-center gap-2">Continue to Checkout <ArrowRight size={17}/></Link><Link to="/shop" className="block text-center mt-4 text-sm text-neutral-300 underline">Continue shopping</Link></aside></div>
// //   </section>;
// // };

// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Minus,
//   Plus,
//   ShoppingBag,
//   Trash2,
//   ShieldCheck,
// } from "lucide-react";
// import { useCart } from "../context/CartContext";

// export const Cart = () => {
//   const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
//   const total = getCartTotal();

//   // 🔥 Empty Cart Screen (White Theme)
//   if (!cart.length) {
//     return (
//       <div className="max-w-3xl mx-auto px-4 py-24 text-center bg-gray-50 min-h-screen">
//         <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
//           <ShoppingBag size={64} className="mx-auto text-pink-300 mb-6" />
//           <h1 className="text-3xl font-black text-gray-900 mb-2">
//             Your Cart is Empty
//           </h1>
//           <p className="text-gray-500 mb-8">
//             Add a package or gift item before moving to checkout.
//           </p>
//           <div className="flex justify-center gap-4">
//             <Link
//               to="/packages"
//               className="rounded-xl bg-pink-500 px-6 py-3 font-bold text-white shadow-md hover:bg-pink-600 transition"
//             >
//               Explore Packages
//             </Link>
//             <Link
//               to="/shop"
//               className="rounded-xl border-2 border-pink-500 px-6 py-3 font-bold text-pink-500 hover:bg-pink-50 transition"
//             >
//               Browse Shop
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <section className="max-w-6xl mx-auto px-4 py-12 bg-gray-50 min-h-screen text-gray-800">
//       {/* Header */}
//       <div className="mb-8 text-center md:text-left">
//         <h1 className="text-3xl md:text-4xl font-black text-gray-900">
//           Your Cart
//         </h1>
//         <p className="text-gray-500 mt-2">
//           {cart.reduce((n, item) => n + item.quantity, 0)} item(s) ready for
//           your surprise.
//         </p>
//       </div>

//       <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
//         {/* Left Side: Cart Items */}
//         <div className="space-y-4">
//           {cart.map((item) => (
//             <article
//               key={item._id}
//               className="flex flex-col sm:flex-row gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition"
//             >
//               {/* Product Image */}
//               <div className="w-full sm:w-28 h-32 sm:h-28 rounded-xl overflow-hidden bg-gray-100 shrink-0">
//                 <img
//                   src={
//                     item.image ||
//                     item.images?.[0] ||
//                     "https://images.unsplash.com/photo-1513885535751-8b9238bd482a?q=80&w=400"
//                   }
//                   alt={item.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Product Details */}
//               <div className="flex-1 min-w-0 flex flex-col justify-between">
//                 <div>
//                   <p className="text-xs uppercase tracking-wider text-pink-500 font-bold mb-1">
//                     {item.type === "package"
//                       ? "Gift Package"
//                       : item.category || "Gift Item"}
//                   </p>
//                   <h2 className="font-bold text-lg text-gray-900">
//                     {item.title || item.name}
//                   </h2>
//                   <p className="text-pink-600 font-black mt-1">
//                     ₹{Number(item.price).toLocaleString("en-IN")}
//                   </p>
//                 </div>

//                 {/* Quantity & Remove */}
//                 <div className="flex items-center justify-between mt-4">
//                   <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg p-1">
//                     <button
//                       onClick={() =>
//                         item.quantity > 1
//                           ? updateQuantity(item._id, item.quantity - 1)
//                           : removeFromCart(item._id)
//                       }
//                       className="p-1.5 hover:bg-white rounded-md text-gray-600 transition"
//                     >
//                       <Minus size={16} />
//                     </button>
//                     <span className="min-w-[20px] text-center font-bold text-sm">
//                       {item.quantity}
//                     </span>
//                     <button
//                       onClick={() =>
//                         updateQuantity(item._id, item.quantity + 1)
//                       }
//                       className="p-1.5 hover:bg-white rounded-md text-gray-600 transition"
//                     >
//                       <Plus size={16} />
//                     </button>
//                   </div>

//                   <button
//                     onClick={() => removeFromCart(item._id)}
//                     className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm font-semibold transition"
//                   >
//                     <Trash2 size={16} /> Remove
//                   </button>
//                 </div>
//               </div>

//               {/* Item Total (Desktop Only) */}
//               <div className="hidden sm:flex flex-col items-end justify-center pl-4 border-l border-gray-100">
//                 <p className="text-xs text-gray-400 mb-1">Total</p>
//                 <strong className="whitespace-nowrap text-gray-900">
//                   ₹{(item.price * item.quantity).toLocaleString("en-IN")}
//                 </strong>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* Right Side: Order Summary */}
//         <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sticky top-24">
//           <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4">
//             Order Summary
//           </h2>

//           <div className="space-y-3 mt-4 text-sm">
//             <div className="flex justify-between text-gray-600">
//               <span>Subtotal</span>
//               <span className="font-semibold text-gray-900">
//                 ₹{total.toLocaleString("en-IN")}
//               </span>
//             </div>
//             <div className="flex justify-between text-gray-600">
//               <span>Delivery</span>
//               <span className="text-green-600 font-semibold">
//                 Calculated at checkout
//               </span>
//             </div>
//           </div>

//           <div className="border-t border-gray-100 mt-6 pt-6 flex justify-between items-center">
//             <span className="text-lg font-bold text-gray-900">Total</span>
//             <span className="text-2xl font-black text-pink-600">
//               ₹{total.toLocaleString("en-IN")}
//             </span>
//           </div>

//           <Link
//             to="/checkout"
//             className="mt-8 w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-4 font-bold text-white flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-pink-500/30 transition transform hover:-translate-y-0.5"
//           >
//             Continue to Checkout <ArrowRight size={18} />
//           </Link>

//           <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
//             <ShieldCheck size={16} className="text-green-500" /> 100% Secure
//             Checkout
//           </div>

//           <Link
//             to="/packages"
//             className="block text-center mt-4 text-sm text-gray-500 hover:text-pink-600 underline transition"
//           >
//             Continue Shopping
//           </Link>
//         </aside>
//       </div>
//     </section>
//   );
// };

import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  ShieldCheck,
} from "lucide-react";
import { useCart } from "../context/CartContext";

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const total = getCartTotal();

  // 🔥 Empty Cart Screen (White Theme)
  if (!cart.length) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 w-full">
          <ShoppingBag size={64} className="mx-auto text-pink-300 mb-6" />
          <h1 className="text-3xl font-black text-gray-900 mb-2">
            Your Cart is Empty
          </h1>
          <p className="text-gray-500 mb-8">
            Add a package or gift item before moving to checkout.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/packages"
              className="rounded-xl bg-pink-500 px-6 py-3 font-bold text-white shadow-md hover:bg-pink-600 transition text-center"
            >
              Explore Packages
            </Link>
            <Link
              to="/shop"
              className="rounded-xl border-2 border-pink-500 px-6 py-3 font-bold text-pink-500 hover:bg-pink-50 transition text-center"
            >
              Browse Shop
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 bg-gray-50 min-h-screen text-gray-800">
      {/* Header */}
      <div className="mb-8 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-black text-gray-900">
          Your Cart
        </h1>
        <p className="text-gray-500 mt-2">
          {cart.reduce((n, item) => n + item.quantity, 0)} item(s) ready for
          your surprise.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
        {/* Left Side: Cart Items */}
        <div className="space-y-4">
          {cart.map((item) => (
            <article
              key={item._id}
              className="flex flex-col sm:flex-row gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition"
            >
              {/* Product Image */}
              <div className="w-full sm:w-28 h-40 sm:h-28 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                <img
                  src={
                    item.image ||
                    item.images?.[0] ||
                    "https://images.unsplash.com/photo-1513885535751-8b9238bd482a?q=80&w=400"
                  }
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-pink-500 font-bold mb-1">
                    {item.type === "package"
                      ? "Gift Package"
                      : item.category || "Gift Item"}
                  </p>
                  <h2 className="font-bold text-lg text-gray-900">
                    {item.title || item.name}
                  </h2>
                  <p className="text-pink-600 font-black mt-1">
                    ₹{Number(item.price).toLocaleString("en-IN")}
                  </p>
                </div>

                {/* Quantity & Remove */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg p-1">
                    <button
                      onClick={() =>
                        item.quantity > 1
                          ? updateQuantity(item._id, item.quantity - 1)
                          : removeFromCart(item._id)
                      }
                      className="p-1.5 hover:bg-white rounded-md text-gray-600 transition"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="min-w-[20px] text-center font-bold text-sm">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.quantity + 1)
                      }
                      className="p-1.5 hover:bg-white rounded-md text-gray-600 transition"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm font-semibold transition"
                  >
                    <Trash2 size={16} /> Remove
                  </button>
                </div>
              </div>

              {/* Item Total (Desktop Only) */}
              <div className="hidden sm:flex flex-col items-end justify-center pl-4 border-l border-gray-100">
                <p className="text-xs text-gray-400 mb-1">Total</p>
                <strong className="whitespace-nowrap text-gray-900">
                  ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                </strong>
              </div>
            </article>
          ))}
        </div>

        {/* Right Side: Order Summary */}
        <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sticky top-24">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4">
            Order Summary
          </h2>

          <div className="space-y-3 mt-4 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span className="font-semibold text-gray-900">
                ₹{total.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery</span>
              <span className="text-green-600 font-semibold">
                Calculated at checkout
              </span>
            </div>
          </div>

          <div className="border-t border-gray-100 mt-6 pt-6 flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">Total</span>
            <span className="text-2xl font-black text-pink-600">
              ₹{total.toLocaleString("en-IN")}
            </span>
          </div>

          <Link
            to="/checkout"
            className="mt-8 w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-4 font-bold text-white flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-pink-500/30 transition transform hover:-translate-y-0.5"
          >
            Continue to Checkout <ArrowRight size={18} />
          </Link>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
            <ShieldCheck size={16} className="text-green-500" /> 100% Secure
            Checkout
          </div>

          <Link
            to="/packages"
            className="block text-center mt-4 text-sm text-gray-500 hover:text-pink-600 underline transition"
          >
            Continue Shopping
          </Link>
        </aside>
      </div>
    </section>
  );
};
