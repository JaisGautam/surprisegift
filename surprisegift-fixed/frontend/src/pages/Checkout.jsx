// // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // import { Link, useNavigate } from "react-router-dom";
// // // // // // // // // import { CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";
// // // // // // // // // import { useCart } from "../context/CartContext";
// // // // // // // // // import API from "../services/api";

// // // // // // // // // export const Checkout = () => {
// // // // // // // // //   const { cart, getCartTotal, clearCart } = useCart();
// // // // // // // // //   const navigate = useNavigate();
// // // // // // // // //   const [shipping, setShipping] = useState({ recipientName:"", phone:"", street:"", city:"", state:"", pincode:"", deliveryDate:"", deliveryTimeSlot:"18:00 - 21:00" });
// // // // // // // // //   const [upiData, setUpiData] = useState(null);
// // // // // // // // //   const [utrNumber, setUtrNumber] = useState("");
// // // // // // // // //   const [busy, setBusy] = useState(false);
// // // // // // // // //   const [error, setError] = useState("");
// // // // // // // // //   const total = getCartTotal();

// // // // // // // // //   useEffect(() => { if (!cart.length && !upiData) navigate("/cart", { replace: true }); }, [cart.length, upiData, navigate]);

// // // // // // // // //   const change = (e) => setShipping((prev) => ({ ...prev, [e.target.name]: e.target.value }));

// // // // // // // // //   const handleInitialCheckout = async (e) => {
// // // // // // // // //     e.preventDefault();
// // // // // // // // //     setError("");
// // // // // // // // //     if (!localStorage.getItem("token")) { setError("Please log in before placing an order. Your cart will remain saved."); return; }
// // // // // // // // //     if (!cart.length || total <= 0) { setError("Your cart is empty. Add a gift before checkout."); return; }
// // // // // // // // //     setBusy(true);
// // // // // // // // //     try {
// // // // // // // // //       const payloadItems = cart.map((item) => ({
// // // // // // // // //         _id: item._id,
// // // // // // // // //         product: item.type === "product" ? item._id : undefined,
// // // // // // // // //         packageId: item.type === "package" ? item._id : undefined,
// // // // // // // // //         type: item.type,
// // // // // // // // //         title: item.title || item.name,
// // // // // // // // //         price: Number(item.price),
// // // // // // // // //         quantity: Number(item.quantity),
// // // // // // // // //         customizationDetails: item.customizationDetails || {},
// // // // // // // // //       }));
// // // // // // // // //       const { data } = await API.post("/payments/create-upi-order", { items: payloadItems, shippingAddress: shipping });
// // // // // // // // //       setUpiData(data);
// // // // // // // // //     } catch (err) {
// // // // // // // // //       setError(err.response?.data?.message || "Could not create the order. Check login and backend connection.");
// // // // // // // // //     } finally { setBusy(false); }
// // // // // // // // //   };

// // // // // // // // //   const handleSubmitReference = async (e) => {
// // // // // // // // //     e.preventDefault();
// // // // // // // // //     if (!upiData?.dbOrderId) return;
// // // // // // // // //     setError("");
// // // // // // // // //     setBusy(true);
// // // // // // // // //     try {
// // // // // // // // //       const { data } = await API.post("/payments/verify-upi", { dbOrderId: upiData.dbOrderId, upiRefNumber: utrNumber.trim() });
// // // // // // // // //       clearCart();
// // // // // // // // //       navigate(`/track-order?orderId=${encodeURIComponent(data.orderId || upiData.dbOrderId)}`, { replace: true });
// // // // // // // // //     } catch (err) {
// // // // // // // // //       setError(err.response?.data?.message || "Could not submit the transaction reference.");
// // // // // // // // //     } finally { setBusy(false); }
// // // // // // // // //   };

// // // // // // // // //   if (!cart.length && !upiData) return null;

// // // // // // // // //   if (upiData) return <section className="max-w-2xl mx-auto px-4 py-12 text-white"><div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8 text-center"><CheckCircle2 size={48} className="mx-auto text-emerald-400"/><h1 className="text-3xl font-black mt-4">Order created</h1><p className="text-neutral-300 mt-2">Pay the exact amount using your UPI app. The order will remain pending until the payment is verified.</p><p className="text-4xl font-black text-pink-300 mt-6">₹{Number(upiData.amount).toLocaleString("en-IN")}</p><p className="text-sm text-neutral-300 mt-2">UPI ID: <strong className="text-white">{upiData.upiId}</strong></p><a href={upiData.upiDeepLink} className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-bold">Open UPI app <ExternalLink size={17}/></a><form onSubmit={handleSubmitReference} className="mt-8 text-left space-y-4"><label className="block text-sm text-neutral-300">UPI transaction reference / UTR<input required minLength={8} maxLength={40} pattern="[A-Za-z0-9-]{8,40}" value={utrNumber} onChange={(e) => setUtrNumber(e.target.value)} placeholder="Enter transaction reference after paying" className="mt-2 block w-full rounded-xl border border-white/15 bg-white/5 p-3 text-white"/></label>{error && <p role="alert" className="text-sm text-red-300">{error}</p>}<button disabled={busy} className="w-full rounded-xl bg-pink-500 px-5 py-3 font-bold disabled:opacity-50">{busy ? "Submitting…" : "I have paid — submit reference"}</button><p className="text-xs text-neutral-400 flex gap-2"><ShieldCheck size={16} className="shrink-0"/>Submitting a reference does not automatically mark payment as paid. The payment must be verified.</p></form></div></section>;

// // // // // // // // //   return <section className="max-w-5xl mx-auto px-4 py-10 text-white"><h1 className="text-3xl md:text-4xl font-black mb-2">Checkout</h1><p className="text-neutral-300 mb-7">Confirm delivery details and review your order before generating the UPI payment.</p><div className="grid lg:grid-cols-[1fr_320px] gap-6 items-start"><form onSubmit={handleInitialCheckout} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-7 space-y-4">
// // // // // // // // //     <h2 className="text-xl font-bold mb-2">Delivery details</h2>
// // // // // // // // //     <div className="grid sm:grid-cols-2 gap-4"><input name="recipientName" value={shipping.recipientName} onChange={change} placeholder="Recipient name" required minLength={2} className="rounded-xl border border-white/15 bg-white/5 p-3 text-white"/><input name="phone" value={shipping.phone} onChange={change} placeholder="Phone number" required pattern="[0-9+() -]{10,16}" className="rounded-xl border border-white/15 bg-white/5 p-3 text-white"/></div>
// // // // // // // // //     <input name="street" value={shipping.street} onChange={change} placeholder="Full street address" required className="w-full rounded-xl border border-white/15 bg-white/5 p-3 text-white"/>
// // // // // // // // //     <div className="grid sm:grid-cols-3 gap-4"><input name="city" value={shipping.city} onChange={change} placeholder="City" required className="rounded-xl border border-white/15 bg-white/5 p-3 text-white"/><input name="state" value={shipping.state} onChange={change} placeholder="State" required className="rounded-xl border border-white/15 bg-white/5 p-3 text-white"/><input name="pincode" value={shipping.pincode} onChange={change} placeholder="Pincode" required pattern="[0-9]{6}" className="rounded-xl border border-white/15 bg-white/5 p-3 text-white"/></div>
// // // // // // // // //     <div className="grid sm:grid-cols-2 gap-4"><label className="text-sm text-neutral-300">Delivery date<input type="date" name="deliveryDate" min={new Date().toISOString().slice(0,10)} value={shipping.deliveryDate} onChange={change} required className="mt-2 block w-full rounded-xl border border-white/15 bg-white/5 p-3 text-white"/></label><label className="text-sm text-neutral-300">Preferred time<select name="deliveryTimeSlot" value={shipping.deliveryTimeSlot} onChange={change} className="mt-2 block w-full rounded-xl border border-white/15 bg-[#1a1022] p-3 text-white"><option>09:00 - 12:00</option><option>12:00 - 15:00</option><option>15:00 - 18:00</option><option>18:00 - 21:00</option></select></label></div>
// // // // // // // // //     {error && <div role="alert" className="rounded-xl bg-red-500/10 p-3 text-sm text-red-300">{error}{!localStorage.getItem("token") && <Link to="/login" className="ml-2 underline font-bold">Log in</Link>}</div>}<button disabled={busy || !cart.length || total <= 0} className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-4 font-bold disabled:opacity-50">{busy ? "Creating order…" : `Continue to UPI payment · ₹${total.toLocaleString("en-IN")}`}</button><p className="text-xs text-neutral-400">Payment status remains pending until the transaction is verified.</p>
// // // // // // // // //     </form><aside className="rounded-2xl border border-pink-400/25 bg-white/[0.04] p-6"><h2 className="text-xl font-bold">Order summary</h2><div className="mt-4 space-y-3">{cart.map((item) => <div key={item._id} className="flex justify-between gap-3 text-sm"><span className="text-neutral-300">{item.title} × {item.quantity}</span><span className="whitespace-nowrap">₹{(item.price * item.quantity).toLocaleString("en-IN")}</span></div>)}</div><div className="border-t border-white/10 mt-5 pt-5 flex justify-between text-lg font-black"><span>Total</span><span className="text-pink-300">₹{total.toLocaleString("en-IN")}</span></div><Link to="/cart" className="block text-center mt-5 text-sm text-neutral-300 underline">Back to cart</Link></aside></div></section>;
// // // // // // // // // };

// // // // // // // // import React, { useState, useContext } from "react";
// // // // // // // // import { QRCodeSVG } from "qrcode.react";
// // // // // // // // import { useCart } from "../context/CartContext";

// // // // // // // // const Checkout = () => {
// // // // // // // //   const { cart } = useContext(CartContext);
// // // // // // // //   const [utr, setUtr] = useState("");

// // // // // // // //   // 1. PRICE FIX: Cart se total nikal rahe hain. Agar cart khali hai to 1 rs lega testing ke liye.
// // // // // // // //   const totalAmount =
// // // // // // // //     cart && cart.length > 0
// // // // // // // //       ? cart.reduce((total, item) => total + item.price, 0)
// // // // // // // //       : 1;

// // // // // // // //   // 2. AAPKI UPI ID
// // // // // // // //   const myUpiId = "8858176643@ibl";
// // // // // // // //   const myName = "Surprise Gift";

// // // // // // // //   // 3. UPI QR CODE URL: Jab koi is QR ko scan karega, uske UPI app me aapki ID aur amount apne aap bhar jayega.
// // // // // // // //   const upiUrl = `upi://pay?pa=${myUpiId}&pn=${myName}&am=${totalAmount}&cu=INR`;

// // // // // // // //   // Form submit karne ka function
// // // // // // // //   const handleSubmit = (e) => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     if (utr.length < 12) {
// // // // // // // //       alert(
// // // // // // // //         "Kripya UPI app se 12 digit ka Reference Number/UTR copy karke yahan daalein.",
// // // // // // // //       );
// // // // // // // //       return;
// // // // // // // //     }
// // // // // // // //     // Yahan aap backend me order save karne ka API call laga sakte hain
// // // // // // // //     alert(
// // // // // // // //       "Reference submit ho gaya! Aapka payment verify hone ke baad order confirm ho jayega.",
// // // // // // // //     );
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="flex justify-center items-center min-h-screen bg-[#0f0f1a] text-white p-4">
// // // // // // // //       <div className="bg-[#1a1a2e] border border-gray-700 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
// // // // // // // //         {/* Header Icon */}
// // // // // // // //         <div className="flex justify-center mb-4">
// // // // // // // //           <div className="bg-green-500/20 p-3 rounded-full">
// // // // // // // //             <svg
// // // // // // // //               className="w-10 h-10 text-green-400"
// // // // // // // //               fill="none"
// // // // // // // //               stroke="currentColor"
// // // // // // // //               viewBox="0 0 24 24"
// // // // // // // //             >
// // // // // // // //               <path
// // // // // // // //                 strokeLinecap="round"
// // // // // // // //                 strokeLinejoin="round"
// // // // // // // //                 strokeWidth="2"
// // // // // // // //                 d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
// // // // // // // //               ></path>
// // // // // // // //             </svg>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         <h2 className="text-2xl font-bold mb-2">Order Created</h2>
// // // // // // // //         <p className="text-gray-400 text-sm mb-6">
// // // // // // // //           Neeche diye gaye QR code ko kisi bhi UPI App (GPay, PhonePe, Paytm) se
// // // // // // // //           scan karein.
// // // // // // // //         </p>

// // // // // // // //         {/* Total Amount */}
// // // // // // // //         <div className="text-4xl font-extrabold text-pink-500 mb-6">
// // // // // // // //           ₹{totalAmount}
// // // // // // // //         </div>

// // // // // // // //         {/* --- QR CODE SECTION (Aapki UPI ID ka) --- */}
// // // // // // // //         <div className="bg-white p-4 rounded-xl inline-block mb-4 shadow-lg">
// // // // // // // //           <QRCodeSVG
// // // // // // // //             value={upiUrl}
// // // // // // // //             size={220}
// // // // // // // //             bgColor={"#ffffff"}
// // // // // // // //             fgColor={"#000000"}
// // // // // // // //             level={"H"}
// // // // // // // //           />
// // // // // // // //         </div>

// // // // // // // //         {/* UPI ID Text */}
// // // // // // // //         <p className="text-sm text-gray-300 mb-6 font-mono bg-gray-800 py-2 px-4 rounded-lg inline-block">
// // // // // // // //           UPI ID: {myUpiId}
// // // // // // // //         </p>

// // // // // // // //         {/* --- INSTRUCTIONS FOR NORMAL PERSON --- */}
// // // // // // // //         <div className="text-left bg-gray-800/50 p-4 rounded-lg mb-6 border border-gray-700">
// // // // // // // //           <p className="text-sm font-semibold mb-2 text-pink-400">
// // // // // // // //             Payment kaise karein?
// // // // // // // //           </p>
// // // // // // // //           <ol className="text-sm text-gray-300 list-decimal list-inside space-y-1">
// // // // // // // //             <li>QR Code ko scan karein.</li>
// // // // // // // //             <li>₹{totalAmount} pay karein.</li>
// // // // // // // //             <li>
// // // // // // // //               Payment ke baad aapko ek <strong>12-digit UTR/Ref No.</strong>{" "}
// // // // // // // //               milega.
// // // // // // // //             </li>
// // // // // // // //             <li>Woh number neeche box me daalein.</li>
// // // // // // // //           </ol>
// // // // // // // //         </div>

// // // // // // // //         {/* --- FORM SECTION --- */}
// // // // // // // //         <form onSubmit={handleSubmit} className="space-y-4">
// // // // // // // //           <div className="text-left">
// // // // // // // //             <label className="block text-base font-medium text-gray-200 mb-2">
// // // // // // // //               Payment ke baad 12-digit UTR yahan daalein:
// // // // // // // //             </label>
// // // // // // // //             <input
// // // // // // // //               type="text"
// // // // // // // //               placeholder="e.g. 123456789012"
// // // // // // // //               value={utr}
// // // // // // // //               onChange={(e) => setUtr(e.target.value)}
// // // // // // // //               className="w-full bg-gray-900 border border-gray-600 rounded-lg p-4 text-white text-lg tracking-widest text-center focus:ring-2 focus:ring-pink-500 outline-none transition"
// // // // // // // //               required
// // // // // // // //             />
// // // // // // // //           </div>

// // // // // // // //           <button
// // // // // // // //             type="submit"
// // // // // // // //             className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-lg text-lg transition duration-200 shadow-[0_0_15px_rgba(236,72,153,0.5)]"
// // // // // // // //           >
// // // // // // // //             I Have Paid - Submit Reference
// // // // // // // //           </button>
// // // // // // // //         </form>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Checkout;

// // // // // // // import React, { useState } from "react";
// // // // // // // import { QRCodeSVG } from "qrcode.react";
// // // // // // // import { useCart } from "../context/CartContext"; // Sahi import

// // // // // // // const Checkout = () => {
// // // // // // //   const { cart, getCartTotal } = useCart(); // Hook ka use kiya
// // // // // // //   const [utr, setUtr] = useState("");

// // // // // // //   // Aapke context se total nikal rahe hain. Agar cart khali hai to testing ke liye 1 dikhayega.
// // // // // // //   const totalAmount = cart && cart.length > 0 ? getCartTotal() : 1;

// // // // // // //   // Aapki UPI ID
// // // // // // //   const myUpiId = "8858176643@ibl";
// // // // // // //   const myName = "Surprise Gift";

// // // // // // //   // UPI QR CODE URL
// // // // // // //   const upiUrl = `upi://pay?pa=${myUpiId}&pn=${myName}&am=${totalAmount}&cu=INR`;

// // // // // // //   const handleSubmit = (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     if (utr.length < 12) {
// // // // // // //       alert("Kripya 12 digit ka sahi UPI Reference/UTR daalein.");
// // // // // // //       return;
// // // // // // //     }
// // // // // // //     alert(
// // // // // // //       "Reference submit ho gaya! Payment verify hone ke baad order confirm hoga.",
// // // // // // //     );
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="flex justify-center items-center min-h-screen bg-[#0f0f1a] text-white p-4">
// // // // // // //       <div className="bg-[#1a1a2e] border border-gray-700 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
// // // // // // //         {/* Success Icon */}
// // // // // // //         <div className="flex justify-center mb-4">
// // // // // // //           <div className="bg-green-500/20 p-3 rounded-full">
// // // // // // //             <svg
// // // // // // //               className="w-10 h-10 text-green-400"
// // // // // // //               fill="none"
// // // // // // //               stroke="currentColor"
// // // // // // //               viewBox="0 0 24 24"
// // // // // // //             >
// // // // // // //               <path
// // // // // // //                 strokeLinecap="round"
// // // // // // //                 strokeLinejoin="round"
// // // // // // //                 strokeWidth="2"
// // // // // // //                 d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
// // // // // // //               ></path>
// // // // // // //             </svg>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         <h2 className="text-2xl font-bold mb-2">Order Created</h2>
// // // // // // //         <p className="text-gray-400 text-sm mb-6">
// // // // // // //           Neeche diye gaye QR code ko kisi bhi UPI App se scan karein.
// // // // // // //         </p>

// // // // // // //         {/* Amount */}
// // // // // // //         <div className="text-4xl font-extrabold text-pink-500 mb-6">
// // // // // // //           ₹{totalAmount}
// // // // // // //         </div>

// // // // // // //         {/* QR CODE */}
// // // // // // //         <div className="bg-white p-4 rounded-xl inline-block mb-4 shadow-lg">
// // // // // // //           <QRCodeSVG
// // // // // // //             value={upiUrl}
// // // // // // //             size={220}
// // // // // // //             bgColor={"#ffffff"}
// // // // // // //             fgColor={"#000000"}
// // // // // // //             level={"H"}
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         {/* UPI ID */}
// // // // // // //         <p className="text-sm text-gray-300 mb-6 font-mono bg-gray-800 py-2 px-4 rounded-lg inline-block">
// // // // // // //           UPI ID: {myUpiId}
// // // // // // //         </p>

// // // // // // //         {/* Instructions */}
// // // // // // //         <div className="text-left bg-gray-800/50 p-4 rounded-lg mb-6 border border-gray-700">
// // // // // // //           <p className="text-sm font-semibold mb-2 text-pink-400">
// // // // // // //             Payment kaise karein?
// // // // // // //           </p>
// // // // // // //           <ol className="text-sm text-gray-300 list-decimal list-inside space-y-1">
// // // // // // //             <li>QR Code ko scan karein.</li>
// // // // // // //             <li>₹{totalAmount} pay karein.</li>
// // // // // // //             <li>Payment ke baad 12-digit UTR/Ref No. copy karein.</li>
// // // // // // //             <li>Woh neeche box me daalein.</li>
// // // // // // //           </ol>
// // // // // // //         </div>

// // // // // // //         {/* Form */}
// // // // // // //         <form onSubmit={handleSubmit} className="space-y-4">
// // // // // // //           <div className="text-left">
// // // // // // //             <label className="block text-base font-medium text-gray-200 mb-2">
// // // // // // //               12-digit UTR / Reference Number:
// // // // // // //             </label>
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="e.g. 123456789012"
// // // // // // //               value={utr}
// // // // // // //               onChange={(e) => setUtr(e.target.value)}
// // // // // // //               className="w-full bg-gray-900 border border-gray-600 rounded-lg p-4 text-white text-lg tracking-widest text-center focus:ring-2 focus:ring-pink-500 outline-none transition"
// // // // // // //               required
// // // // // // //             />
// // // // // // //           </div>

// // // // // // //           <button
// // // // // // //             type="submit"
// // // // // // //             className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-lg text-lg transition duration-200 shadow-[0_0_15px_rgba(236,72,153,0.5)]"
// // // // // // //           >
// // // // // // //             I Have Paid - Submit Reference
// // // // // // //           </button>
// // // // // // //         </form>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Checkout;

// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import { QRCodeSVG } from "qrcode.react";
// // // // // // import { useCart } from "../context/CartContext";

// // // // // // const Checkout = () => {
// // // // // //   const { cart, getCartTotal, clearCart } = useCart();
// // // // // //   const [paymentStatus, setPaymentStatus] = useState("idle"); // idle, verifying, success
// // // // // //   const [orderId, setOrderId] = useState(null);

// // // // // //   // 1. Price Lock (Cart ka total fix hoga)
// // // // // //   const lockedAmount = cart && cart.length > 0 ? getCartTotal() : 1;

// // // // // //   const myUpiId = "8858176643@ibl";
// // // // // //   const myName = "Surprise Gift";
// // // // // //   const upiUrl = `upi://pay?pa=${myUpiId}&pn=${encodeURIComponent(myName)}&am=${lockedAmount}&cu=INR`;

// // // // // //   // 2. Page load hote hi Database me PENDING order banao
// // // // // //   useEffect(() => {
// // // // // //     const createOrder = async () => {
// // // // // //       try {
// // // // // //         const res = await fetch(
// // // // // //           "https://your-backend.vercel.app/api/orders/create",
// // // // // //           {
// // // // // //             method: "POST",
// // // // // //             headers: { "Content-Type": "application/json" },
// // // // // //             body: JSON.stringify({ amount: lockedAmount, cartItems: cart }),
// // // // // //           },
// // // // // //         );
// // // // // //         const data = await res.json();
// // // // // //         if (data.orderId) setOrderId(data.orderId);
// // // // // //       } catch (error) {
// // // // // //         console.error("Order creation failed:", error);
// // // // // //       }
// // // // // //     };

// // // // // //     // Agar cart me items hain tabhi order create karo
// // // // // //     if (cart && cart.length > 0) createOrder();
// // // // // //   }, []); // Sirf ek baar chalega

// // // // // //   // 3. Auto-Verification (Har 2 sec me check karega)
// // // // // //   useEffect(() => {
// // // // // //     let interval;
// // // // // //     if (paymentStatus === "verifying" && orderId) {
// // // // // //       interval = setInterval(async () => {
// // // // // //         try {
// // // // // //           const res = await fetch(
// // // // // //             `https://your-backend.vercel.app/api/orders/status/${orderId}`,
// // // // // //           );
// // // // // //           const data = await res.json();

// // // // // //           if (data.status === "SUCCESS") {
// // // // // //             clearInterval(interval);
// // // // // //             setPaymentStatus("success");
// // // // // //             if (clearCart) clearCart(); // Order hote hi cart khali
// // // // // //           }
// // // // // //         } catch (error) {
// // // // // //           console.log("Checking payment status...");
// // // // // //         }
// // // // // //       }, 2000); // 2 second
// // // // // //     }
// // // // // //     return () => clearInterval(interval);
// // // // // //   }, [paymentStatus, orderId, clearCart]);

// // // // // //   // --- SUCCESS SCREEN ---
// // // // // //   if (paymentStatus === "success") {
// // // // // //     return (
// // // // // //       <div className="flex justify-center items-center min-h-screen bg-[#0f0f1a] text-white p-4">
// // // // // //         <div className="bg-[#1a1a2e] border border-green-500/50 p-8 rounded-2xl shadow-[0_0_30px_rgba(34,197,94,0.2)] w-full max-w-md text-center">
// // // // // //           <div className="bg-green-500/20 p-4 rounded-full inline-block mb-4 animate-bounce">
// // // // // //             <svg
// // // // // //               className="w-16 h-16 text-green-400"
// // // // // //               fill="none"
// // // // // //               stroke="currentColor"
// // // // // //               viewBox="0 0 24 24"
// // // // // //             >
// // // // // //               <path
// // // // // //                 strokeLinecap="round"
// // // // // //                 strokeLinejoin="round"
// // // // // //                 strokeWidth="2"
// // // // // //                 d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
// // // // // //               ></path>
// // // // // //             </svg>
// // // // // //           </div>
// // // // // //           <h2 className="text-3xl font-bold text-green-400 mb-2">
// // // // // //             Payment Received!
// // // // // //           </h2>
// // // // // //           <p className="text-gray-300">
// // // // // //             Aapka order successfully place ho gaya hai.
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   // --- CHECKOUT SCREEN ---
// // // // // //   return (
// // // // // //     <div className="flex justify-center items-center min-h-screen bg-[#0f0f1a] text-white p-4">
// // // // // //       <div className="bg-[#1a1a2e] border border-gray-700 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
// // // // // //         <h2 className="text-2xl font-bold mb-2">Scan & Pay ₹{lockedAmount}</h2>

// // // // // //         {paymentStatus === "idle" || paymentStatus === "verifying" ? (
// // // // // //           <>
// // // // // //             <p className="text-gray-400 text-sm mb-6">
// // // // // //               Kisi bhi UPI App se QR scan karein aur pay karein.
// // // // // //             </p>

// // // // // //             <div className="bg-white p-4 rounded-xl inline-block mb-4 shadow-lg">
// // // // // //               <QRCodeSVG
// // // // // //                 value={upiUrl}
// // // // // //                 size={220}
// // // // // //                 bgColor={"#ffffff"}
// // // // // //                 fgColor={"#000000"}
// // // // // //                 level={"H"}
// // // // // //               />
// // // // // //             </div>

// // // // // //             <p className="text-sm text-gray-300 mb-6 font-mono bg-gray-800 py-2 px-4 rounded-lg inline-block">
// // // // // //               UPI ID: {myUpiId}
// // // // // //             </p>

// // // // // //             {/* Verifying spinner ya button */}
// // // // // //             {paymentStatus === "verifying" ? (
// // // // // //               <div className="flex flex-col items-center justify-center mt-4">
// // // // // //                 <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-pink-500 mb-3"></div>
// // // // // //                 <p className="text-pink-400 font-semibold animate-pulse">
// // // // // //                   Verifying Payment...
// // // // // //                 </p>
// // // // // //                 <p className="text-xs text-gray-400 mt-1">Please wait...</p>
// // // // // //               </div>
// // // // // //             ) : (
// // // // // //               <button
// // // // // //                 onClick={() => setPaymentStatus("verifying")}
// // // // // //                 className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-lg text-lg transition duration-200"
// // // // // //               >
// // // // // //                 I Have Paid (Check Status)
// // // // // //               </button>
// // // // // //             )}
// // // // // //           </>
// // // // // //         ) : null}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Checkout;

// // // // // import React, { useState, useEffect } from "react";
// // // // // import { useCart } from "../context/CartContext";
// // // // // import { useNavigate, useSearchParams } from "react-router-dom";

// // // // // const Checkout = () => {
// // // // //   const { cart, getCartTotal, clearCart } = useCart();
// // // // //   const navigate = useNavigate();
// // // // //   const [searchParams] = useSearchParams();
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [error, setError] = useState("");
// // // // //   const [success, setSuccess] = useState(false);

// // // // //   // Production me customer details lena zaroori hai
// // // // //   const [customer, setCustomer] = useState({
// // // // //     name: "",
// // // // //     email: "",
// // // // //     phone: "",
// // // // //     address: "",
// // // // //     pincode: "",
// // // // //   });

// // // // //   // 🔥 PRICE LOCK: Price fix hogi, cart se calculate hogi
// // // // //   const [lockedAmount, setLockedAmount] = useState(0);

// // // // //   useEffect(() => {
// // // // //     if (cart && cart.length > 0) {
// // // // //       setLockedAmount(getCartTotal());
// // // // //     } else if (!searchParams.get("order_id")) {
// // // // //       navigate("/cart"); // Agar cart khali hai aur return url bhi nahi hai, toh cart par bhej do
// // // // //     }
// // // // //   }, [cart, getCartTotal, navigate, searchParams]);

// // // // //   // Return URL Handling: Agar Cashfree se wapas aaye
// // // // //   useEffect(() => {
// // // // //     const orderId = searchParams.get("order_id");
// // // // //     if (orderId) {
// // // // //       verifyPaymentStatus(orderId);
// // // // //     }
// // // // //   }, [searchParams]);

// // // // //   const verifyPaymentStatus = async (orderId) => {
// // // // //     try {
// // // // //       const res = await fetch(
// // // // //         `${import.meta.env.VITE_API_URL}/api/orders/status/${orderId}`,
// // // // //       );
// // // // //       const data = await res.json();

// // // // //       if (data.status === "SUCCESS") {
// // // // //         if (clearCart) clearCart();
// // // // //         setSuccess(true);
// // // // //         setTimeout(() => navigate("/"), 5000); // 5 sec baad home page par bhej do
// // // // //       } else {
// // // // //         setError("Payment pending ya fail ho gaya. Kripya check karein.");
// // // // //       }
// // // // //     } catch (err) {
// // // // //       setError("Status check nahi ho paya. Kripya support se contact karein.");
// // // // //     }
// // // // //   };

// // // // //   const handleInputChange = (e) => {
// // // // //     setCustomer({ ...customer, [e.target.name]: e.target.value });
// // // // //   };

// // // // //   const handlePayment = async (e) => {
// // // // //     e.preventDefault();
// // // // //     if (!customer.name || !customer.phone || !customer.address) {
// // // // //       return setError("Kripya delivery details puri bharein.");
// // // // //     }

// // // // //     setLoading(true);
// // // // //     setError("");

// // // // //     try {
// // // // //       // Backend ko order create request bhejo
// // // // //       const res = await fetch(
// // // // //         `${import.meta.env.VITE_API_URL}/api/orders/create`,
// // // // //         {
// // // // //           method: "POST",
// // // // //           headers: { "Content-Type": "application/json" },
// // // // //           body: JSON.stringify({
// // // // //             amount: lockedAmount,
// // // // //             cartItems: cart,
// // // // //             customerDetails: customer,
// // // // //           }),
// // // // //         },
// // // // //       );

// // // // //       const data = await res.json();

// // // // //       if (data.success && data.payment_session_id) {
// // // // //         // Cashfree Checkout Open karein
// // // // //         const cashfree = window.Cashfree({
// // // // //           mode: import.meta.env.VITE_CASHFREE_ENV,
// // // // //         }); // "sandbox" ya "production"

// // // // //         cashfree
// // // // //           .checkout({
// // // // //             paymentSessionId: data.payment_session_id,
// // // // //             redirectTarget: "_self", // Agar mobile pe hai toh same tab me khule
// // // // //           })
// // // // //           .then((result) => {
// // // // //             if (result.error) {
// // // // //               setError("Payment cancel ho gaya.");
// // // // //               setLoading(false);
// // // // //             }
// // // // //             // Agar success hua toh Cashfree return_url par redirect karega, wahan useEffect handle karega
// // // // //           });
// // // // //       } else {
// // // // //         setError(data.error || "Payment link generate nahi hua.");
// // // // //         setLoading(false);
// // // // //       }
// // // // //     } catch (err) {
// // // // //       setError("Server se connect nahi ho paya. Internet check karein.");
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   if (success) {
// // // // //     return (
// // // // //       <div className="min-h-screen bg-[#0f0f1a] flex items-center justify-center text-white p-4">
// // // // //         <div className="bg-green-500/10 border border-green-500 p-8 rounded-2xl text-center max-w-md w-full">
// // // // //           <div className="text-6xl mb-4">🎉</div>
// // // // //           <h1 className="text-3xl font-bold text-green-400 mb-2">
// // // // //             Order Successful!
// // // // //           </h1>
// // // // //           <p className="text-gray-300">
// // // // //             Aapka gift order confirm ho gaya hai. Jald hi aapko update milega.
// // // // //           </p>
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="min-h-screen bg-[#0f0f1a] text-white p-4 py-10 flex justify-center items-center">
// // // // //       <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8">
// // // // //         {/* Delivery Details Form */}
// // // // //         <div className="bg-[#1a1a2e] border border-gray-800 p-6 md:p-8 rounded-2xl shadow-xl">
// // // // //           <h2 className="text-2xl font-bold mb-6">Delivery Details</h2>
// // // // //           <form onSubmit={handlePayment} className="space-y-4">
// // // // //             <input
// // // // //               type="text"
// // // // //               name="name"
// // // // //               placeholder="Aapka Naam"
// // // // //               required
// // // // //               onChange={handleInputChange}
// // // // //               className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
// // // // //             />
// // // // //             <input
// // // // //               type="email"
// // // // //               name="email"
// // // // //               placeholder="Email Address"
// // // // //               required
// // // // //               onChange={handleInputChange}
// // // // //               className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
// // // // //             />
// // // // //             <input
// // // // //               type="tel"
// // // // //               name="phone"
// // // // //               placeholder="WhatsApp Number"
// // // // //               required
// // // // //               onChange={handleInputChange}
// // // // //               className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
// // // // //             />
// // // // //             <textarea
// // // // //               name="address"
// // // // //               placeholder="Pura Address (Ghar/Gali/Shehar)"
// // // // //               required
// // // // //               onChange={handleInputChange}
// // // // //               className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none h-24"
// // // // //             />
// // // // //             <input
// // // // //               type="text"
// // // // //               name="pincode"
// // // // //               placeholder="Pincode (6 digit)"
// // // // //               required
// // // // //               pattern="[0-9]{6}"
// // // // //               onChange={handleInputChange}
// // // // //               className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
// // // // //             />

// // // // //             {error && (
// // // // //               <div className="bg-red-500/20 text-red-400 p-3 rounded-lg text-sm">
// // // // //                 {error}
// // // // //               </div>
// // // // //             )}

// // // // //             <button
// // // // //               type="submit"
// // // // //               disabled={loading}
// // // // //               className="w-full bg-pink-500 hover:bg-pink-600 font-bold text-lg py-4 rounded-lg transition-colors disabled:opacity-50 mt-4 shadow-[0_0_20px_rgba(236,72,153,0.3)]"
// // // // //             >
// // // // //               {loading ? "Processing..." : `Pay ₹${lockedAmount} Securely`}
// // // // //             </button>
// // // // //             <p className="text-center text-xs text-gray-500 mt-2">
// // // // //               100% Secure Payment by Cashfree
// // // // //             </p>
// // // // //           </form>
// // // // //         </div>

// // // // //         {/* Order Summary */}
// // // // //         <div className="bg-[#1a1a2e] border border-gray-800 p-6 md:p-8 rounded-2xl shadow-xl h-fit">
// // // // //           <h2 className="text-xl font-bold mb-4">Order Summary</h2>
// // // // //           <div className="space-y-3 mb-6">
// // // // //             {cart.map((item) => (
// // // // //               <div
// // // // //                 key={item._id}
// // // // //                 className="flex justify-between text-gray-300 text-sm"
// // // // //               >
// // // // //                 <span>
// // // // //                   {item.title || item.name} x {item.quantity}
// // // // //                 </span>
// // // // //                 <span>₹{item.price * item.quantity}</span>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //           <div className="border-t border-gray-700 pt-4 flex justify-between font-bold text-xl text-pink-400">
// // // // //             <span>Total</span>
// // // // //             <span>₹{lockedAmount}</span>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Checkout;

// // // // import React, { useState, useEffect } from "react";
// // // // import { useCart } from "../context/CartContext";
// // // // import { useNavigate } from "react-router-dom";

// // // // const Checkout = () => {
// // // //   const { cart, getCartTotal, clearCart } = useCart();
// // // //   const navigate = useNavigate();
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState("");
// // // //   const [success, setSuccess] = useState(false);

// // // //   // Customer Details State
// // // //   const [customer, setCustomer] = useState({
// // // //     name: "",
// // // //     email: "",
// // // //     phone: "",
// // // //     address: "",
// // // //     pincode: "",
// // // //   });

// // // //   // Price Lock (Cart Total)
// // // //   const [lockedAmount, setLockedAmount] = useState(0);

// // // //   useEffect(() => {
// // // //     if (cart && cart.length > 0) {
// // // //       setLockedAmount(getCartTotal());
// // // //     } else if (!success) {
// // // //       navigate("/cart"); // Agar cart khali hai toh cart par bhej do
// // // //     }
// // // //   }, [cart, getCartTotal, navigate, success]);

// // // //   const handleInputChange = (e) => {
// // // //     setCustomer({ ...customer, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handlePayment = async (e) => {
// // // //     e.preventDefault();
// // // //     if (!customer.name || !customer.phone || !customer.address) {
// // // //       return setError("Kripya delivery details puri bharein.");
// // // //     }

// // // //     setLoading(true);
// // // //     setError("");

// // // //     try {
// // // //       // 1. Backend se Razorpay Order ID generate karwayein
// // // //       const res = await fetch(
// // // //         `${import.meta.env.VITE_API_URL}/api/payments/create-order`,
// // // //         {
// // // //           method: "POST",
// // // //           headers: { "Content-Type": "application/json" },
// // // //           body: JSON.stringify({
// // // //             amount: lockedAmount,
// // // //             cartItems: cart,
// // // //             customerDetails: customer,
// // // //           }),
// // // //         },
// // // //       );

// // // //       const data = await res.json();

// // // //       if (!data.success) {
// // // //         throw new Error(data.error || "Order create nahi ho paya.");
// // // //       }

// // // //       // 2. Razorpay Checkout Modal Options
// // // //       const options = {
// // // //         key: import.meta.env.VITE_RAZORPAY_KEY_ID,
// // // //         amount: data.amount,
// // // //         currency: data.currency,
// // // //         name: "MysticBox Gifts",
// // // //         description: "Surprise Gift Order",
// // // //         order_id: data.order_id,
// // // //         prefill: {
// // // //           name: customer.name,
// // // //           email: customer.email,
// // // //           contact: customer.phone,
// // // //         },
// // // //         theme: {
// // // //           color: "#ec4899", // Aapki website ka pink color
// // // //         },
// // // //         // 3. Jab Payment Successful ho jaye
// // // //         handler: async function (response) {
// // // //           try {
// // // //             const verifyRes = await fetch(
// // // //               `${import.meta.env.VITE_API_URL}/api/payments/verify-payment`,
// // // //               {
// // // //                 method: "POST",
// // // //                 headers: { "Content-Type": "application/json" },
// // // //                 body: JSON.stringify({
// // // //                   razorpay_order_id: response.razorpay_order_id,
// // // //                   razorpay_payment_id: response.razorpay_payment_id,
// // // //                   razorpay_signature: response.razorpay_signature,
// // // //                 }),
// // // //               },
// // // //             );

// // // //             const verifyData = await verifyRes.json();

// // // //             if (verifyData.success) {
// // // //               if (clearCart) clearCart();
// // // //               setSuccess(true);
// // // //               setTimeout(() => navigate("/"), 5000); // 5 sec baad home par bhej do
// // // //             } else {
// // // //               setError(
// // // //                 "Payment verify nahi ho paya. Kripya support se contact karein.",
// // // //               );
// // // //             }
// // // //           } catch (err) {
// // // //             setError("Verification error. Kripya support se contact karein.");
// // // //           }
// // // //         },
// // // //       };

// // // //       // 4. Razorpay Modal Open Karein
// // // //       const rzp = new window.Razorpay(options);

// // // //       rzp.on("payment.failed", function (response) {
// // // //         setError(`Payment Failed: ${response.error.description}`);
// // // //         setLoading(false);
// // // //       });

// // // //       rzp.open();
// // // //     } catch (err) {
// // // //       setError(
// // // //         err.message || "Server se connect nahi ho paya. Internet check karein.",
// // // //       );
// // // //       setLoading(false);
// // // //     } finally {
// // // //       // Note: Loading false hum success ya failure par karenge,
// // // //       // par agar user modal band kar de toh loading true reh jata hai.
// // // //       // Isliye modal band hone par bhi loading false karna chahiye (rzp.on("modal.closed")).
// // // //       // Loading ko false turant kar rahe hain taaki agar user cancel kare toh button wapas chalu ho jaye
// // // //       // Par yeh tabhi theek hai jab handler call na ho. Asal me rzp.open() block nahi karta.
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   if (success) {
// // // //     return (
// // // //       <div className="min-h-screen bg-[#0f0f1a] flex items-center justify-center text-white p-4">
// // // //         <div className="bg-green-500/10 border border-green-500 p-8 rounded-2xl text-center max-w-md w-full">
// // // //           <div className="text-6xl mb-4">🎉</div>
// // // //           <h1 className="text-3xl font-bold text-green-400 mb-2">
// // // //             Payment Successful!
// // // //           </h1>
// // // //           <p className="text-gray-300">
// // // //             Aapka gift order confirm ho gaya hai. Jald hi aapko update milega.
// // // //           </p>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen bg-[#0f0f1a] text-white p-4 py-10 flex justify-center items-center">
// // // //       <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8">
// // // //         {/* Delivery Details Form */}
// // // //         <div className="bg-[#1a1a2e] border border-gray-800 p-6 md:p-8 rounded-2xl shadow-xl">
// // // //           <h2 className="text-2xl font-bold mb-6">Delivery Details</h2>
// // // //           <form onSubmit={handlePayment} className="space-y-4">
// // // //             <input
// // // //               type="text"
// // // //               name="name"
// // // //               placeholder="Aapka Naam"
// // // //               required
// // // //               onChange={handleInputChange}
// // // //               className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
// // // //             />
// // // //             <input
// // // //               type="email"
// // // //               name="email"
// // // //               placeholder="Email Address"
// // // //               required
// // // //               onChange={handleInputChange}
// // // //               className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
// // // //             />
// // // //             <input
// // // //               type="tel"
// // // //               name="phone"
// // // //               placeholder="WhatsApp Number"
// // // //               required
// // // //               onChange={handleInputChange}
// // // //               className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
// // // //             />
// // // //             <textarea
// // // //               name="address"
// // // //               placeholder="Pura Address (Ghar/Gali/Shehar)"
// // // //               required
// // // //               onChange={handleInputChange}
// // // //               className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none h-24"
// // // //             />
// // // //             <input
// // // //               type="text"
// // // //               name="pincode"
// // // //               placeholder="Pincode (6 digit)"
// // // //               required
// // // //               pattern="[0-9]{6}"
// // // //               onChange={handleInputChange}
// // // //               className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
// // // //             />

// // // //             {error && (
// // // //               <div className="bg-red-500/20 text-red-400 p-3 rounded-lg text-sm">
// // // //                 {error}
// // // //               </div>
// // // //             )}

// // // //             <button
// // // //               type="submit"
// // // //               disabled={loading}
// // // //               className="w-full bg-pink-500 hover:bg-pink-600 font-bold text-lg py-4 rounded-lg transition-colors disabled:opacity-50 mt-4 shadow-[0_0_20px_rgba(236,72,153,0.3)]"
// // // //             >
// // // //               {loading ? "Processing..." : `Pay ₹${lockedAmount} Securely`}
// // // //             </button>
// // // //             <p className="text-center text-xs text-gray-500 mt-2">
// // // //               100% Secure Payment by Razorpay
// // // //             </p>
// // // //           </form>
// // // //         </div>

// // // //         {/* Order Summary */}
// // // //         <div className="bg-[#1a1a2e] border border-gray-800 p-6 md:p-8 rounded-2xl shadow-xl h-fit">
// // // //           <h2 className="text-xl font-bold mb-4">Order Summary</h2>
// // // //           <div className="space-y-3 mb-6">
// // // //             {cart.map((item) => (
// // // //               <div
// // // //                 key={item._id}
// // // //                 className="flex justify-between text-gray-300 text-sm"
// // // //               >
// // // //                 <span>
// // // //                   {item.title || item.name} x {item.quantity}
// // // //                 </span>
// // // //                 <span>₹{item.price * item.quantity}</span>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //           <div className="border-t border-gray-700 pt-4 flex justify-between font-bold text-xl text-pink-400">
// // // //             <span>Total</span>
// // // //             <span>₹{lockedAmount}</span>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Checkout;

// // // import React, { useState, useEffect } from "react";
// // // import { useCart } from "../context/CartContext";
// // // import { useNavigate } from "react-router-dom";

// // // const Checkout = () => {
// // //   const { cart, getCartTotal, clearCart } = useCart();
// // //   const navigate = useNavigate();
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState("");
// // //   const [success, setSuccess] = useState(false);

// // //   // Customer Details State
// // //   const [customer, setCustomer] = useState({
// // //     name: "",
// // //     email: "",
// // //     phone: "",
// // //     address: "",
// // //     pincode: "",
// // //   });

// // //   // Price Lock (Cart Total)
// // //   const [lockedAmount, setLockedAmount] = useState(0);

// // //   useEffect(() => {
// // //     if (cart && cart.length > 0) {
// // //       setLockedAmount(getCartTotal());
// // //     } else if (!success) {
// // //       navigate("/cart"); // Agar cart khali hai toh cart par bhej do
// // //     }
// // //   }, [cart, getCartTotal, navigate, success]);

// // //   const handleInputChange = (e) => {
// // //     setCustomer({ ...customer, [e.target.name]: e.target.value });
// // //   };

// // //   const handlePayment = async (e) => {
// // //     e.preventDefault();
// // //     if (!customer.name || !customer.phone || !customer.address) {
// // //       return setError("Kripya delivery details puri bharein.");
// // //     }

// // //     setLoading(true);
// // //     setError("");

// // //     try {
// // //       // 1. Backend se Razorpay Order ID generate karwayein (Seedha /api par request)
// // //       const res = await fetch(`/api/payments/create-order`, {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({
// // //           amount: lockedAmount,
// // //           cartItems: cart,
// // //           customerDetails: customer,
// // //         }),
// // //       });

// // //       const data = await res.json();

// // //       if (!data.success) {
// // //         throw new Error(data.error || "Order create nahi ho paya.");
// // //       }

// // //       // 2. Razorpay Checkout Modal Options
// // //       const options = {
// // //         key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Key ID yahan se aayegi
// // //         amount: data.amount,
// // //         currency: data.currency,
// // //         name: "MysticBox Gifts",
// // //         description: "Surprise Gift Order",
// // //         order_id: data.order_id,
// // //         prefill: {
// // //           name: customer.name,
// // //           email: customer.email,
// // //           contact: customer.phone,
// // //         },
// // //         theme: {
// // //           color: "#ec4899", // Aapki website ka pink color
// // //         },
// // //         // 3. Jab Payment Successful ho jaye
// // //         handler: async function (response) {
// // //           try {
// // //             // Payment verify karne ke liye backend ko bhejein (Seedha /api par request)
// // //             const verifyRes = await fetch(`/api/payments/verify-payment`, {
// // //               method: "POST",
// // //               headers: { "Content-Type": "application/json" },
// // //               body: JSON.stringify({
// // //                 razorpay_order_id: response.razorpay_order_id,
// // //                 razorpay_payment_id: response.razorpay_payment_id,
// // //                 razorpay_signature: response.razorpay_signature,
// // //               }),
// // //             });

// // //             const verifyData = await verifyRes.json();

// // //             if (verifyData.success) {
// // //               if (clearCart) clearCart();
// // //               setSuccess(true);
// // //               setTimeout(() => navigate("/"), 5000); // 5 sec baad home par bhej do
// // //             } else {
// // //               setError(
// // //                 "Payment verify nahi ho paya. Kripya support se contact karein.",
// // //               );
// // //             }
// // //           } catch (err) {
// // //             setError("Verification error. Kripya support se contact karein.");
// // //           }
// // //         },
// // //       };

// // //       // 4. Razorpay Modal Open Karein
// // //       const rzp = new window.Razorpay(options);

// // //       rzp.on("payment.failed", function (response) {
// // //         setError(`Payment Failed: ${response.error.description}`);
// // //         setLoading(false);
// // //       });

// // //       rzp.open();
// // //       setLoading(false); // Button ko wapas normal kar do
// // //     } catch (err) {
// // //       setError(
// // //         err.message || "Server se connect nahi ho paya. Internet check karein.",
// // //       );
// // //       setLoading(false);
// // //     }
// // //   };

// // //   if (success) {
// // //     return (
// // //       <div className="min-h-screen bg-[#0f0f1a] flex items-center justify-center text-white p-4">
// // //         <div className="bg-green-500/10 border border-green-500 p-8 rounded-2xl text-center max-w-md w-full">
// // //           <div className="text-6xl mb-4">🎉</div>
// // //           <h1 className="text-3xl font-bold text-green-400 mb-2">
// // //             Payment Successful!
// // //           </h1>
// // //           <p className="text-gray-300">
// // //             Aapka gift order confirm ho gaya hai. Jald hi aapko update milega.
// // //           </p>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-[#0f0f1a] text-white p-4 py-10 flex justify-center items-center">
// // //       <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8">
// // //         {/* Delivery Details Form */}
// // //         <div className="bg-[#1a1a2e] border border-gray-800 p-6 md:p-8 rounded-2xl shadow-xl">
// // //           <h2 className="text-2xl font-bold mb-6">Delivery Details</h2>
// // //           <form onSubmit={handlePayment} className="space-y-4">
// // //             <input
// // //               type="text"
// // //               name="name"
// // //               placeholder="Aapka Naam"
// // //               required
// // //               onChange={handleInputChange}
// // //               className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
// // //             />
// // //             <input
// // //               type="email"
// // //               name="email"
// // //               placeholder="Email Address"
// // //               required
// // //               onChange={handleInputChange}
// // //               className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
// // //             />
// // //             <input
// // //               type="tel"
// // //               name="phone"
// // //               placeholder="WhatsApp Number"
// // //               required
// // //               onChange={handleInputChange}
// // //               className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
// // //             />
// // //             <textarea
// // //               name="address"
// // //               placeholder="Pura Address (Ghar/Gali/Shehar)"
// // //               required
// // //               onChange={handleInputChange}
// // //               className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none h-24"
// // //             />
// // //             <input
// // //               type="text"
// // //               name="pincode"
// // //               placeholder="Pincode (6 digit)"
// // //               required
// // //               pattern="[0-9]{6}"
// // //               onChange={handleInputChange}
// // //               className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
// // //             />

// // //             {error && (
// // //               <div className="bg-red-500/20 text-red-400 p-3 rounded-lg text-sm">
// // //                 {error}
// // //               </div>
// // //             )}

// // //             <button
// // //               type="submit"
// // //               disabled={loading}
// // //               className="w-full bg-pink-500 hover:bg-pink-600 font-bold text-lg py-4 rounded-lg transition-colors disabled:opacity-50 mt-4 shadow-[0_0_20px_rgba(236,72,153,0.3)]"
// // //             >
// // //               {loading ? "Processing..." : `Pay ₹${lockedAmount} Securely`}
// // //             </button>
// // //             <p className="text-center text-xs text-gray-500 mt-2">
// // //               100% Secure Payment by Razorpay
// // //             </p>
// // //           </form>
// // //         </div>

// // //         {/* Order Summary */}
// // //         <div className="bg-[#1a1a2e] border border-gray-800 p-6 md:p-8 rounded-2xl shadow-xl h-fit">
// // //           <h2 className="text-xl font-bold mb-4">Order Summary</h2>
// // //           <div className="space-y-3 mb-6">
// // //             {cart.map((item) => (
// // //               <div
// // //                 key={item._id}
// // //                 className="flex justify-between text-gray-300 text-sm"
// // //               >
// // //                 <span>
// // //                   {item.title || item.name} x {item.quantity}
// // //                 </span>
// // //                 <span>₹{item.price * item.quantity}</span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //           <div className="border-t border-gray-700 pt-4 flex justify-between font-bold text-xl text-pink-400">
// // //             <span>Total</span>
// // //             <span>₹{lockedAmount}</span>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Checkout;

// // import React, { useState, useEffect } from "react";
// // import { useCart } from "../context/CartContext";
// // import { useNavigate } from "react-router-dom";

// // const Checkout = () => {
// //   const { cart, getCartTotal, clearCart } = useCart();
// //   const navigate = useNavigate();
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");
// //   const [success, setSuccess] = useState(false);

// //   // Customer State
// //   const [customer, setCustomer] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     address: "",
// //     pincode: "",
// //   });

// //   // Delivery Check State
// //   const [isDeliverable, setIsDeliverable] = useState(true);
// //   const [checkingPincode, setCheckingPincode] = useState(false);

// //   // Asli Price (Normal)
// //   const totalAmount = cart && cart.length > 0 ? getCartTotal() : 0;

// //   useEffect(() => {
// //     if (cart && cart.length === 0 && !success) navigate("/cart");
// //   }, [cart, navigate, success]);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setCustomer({ ...customer, [name]: value });

// //     // 🔥 PINCODE CHECK LOGIC (Jab user 6 digit ka pincode daal de)
// //     if (name === "pincode" && value.length === 6) {
// //       checkDeliveryAvailability(value);
// //     }
// //   };

// //   const checkDeliveryAvailability = async (pincode) => {
// //     setCheckingPincode(true);
// //     setIsDeliverable(true); // Reset
// //     setError("");

// //     try {
// //       // Yahan aap backend API call karenge pincode check karne ke liye
// //       // Example: const res = await fetch(`/api/delivery/check?pincode=${pincode}`);

// //       // Testing ke liye maan lo humne 110001, 110002 allow kiya hai
// //       const allowedPincodes = ["110001", "110002", "110003", "201301"]; // Apne 30km ke pincodes daalein

// //       setTimeout(() => {
// //         // Fake loading delay
// //         if (!allowedPincodes.includes(pincode)) {
// //           setIsDeliverable(false);
// //           setError(
// //             "Sorry, aapka pincode hamare 30km delivery radius se bahar hai.",
// //           );
// //         }
// //         setCheckingPincode(false);
// //       }, 1000);
// //     } catch (err) {
// //       setError("Pincode check nahi ho paya. Kripya try karein.");
// //       setCheckingPincode(false);
// //     }
// //   };

// //   const handlePayment = async (e) => {
// //     e.preventDefault();

// //     // Agar pincode deliverable nahi hai toh payment rok do
// //     if (!isDeliverable) {
// //       return setError("Aap is area mein order nahi kar sakte.");
// //     }

// //     if (
// //       !customer.name ||
// //       !customer.phone ||
// //       !customer.address ||
// //       !customer.pincode
// //     ) {
// //       return setError("Kripya delivery details puri bharein.");
// //     }

// //     setLoading(true);
// //     setError("");

// //     try {
// //       // 1. Backend se Razorpay Order ID create karwayein
// //       const res = await fetch(`/api/payments/create-order`, {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           amount: totalAmount, // Asli amount
// //           cartItems: cart,
// //           customerDetails: customer,
// //         }),
// //       });

// //       const data = await res.json();

// //       if (!data.success)
// //         throw new Error(data.error || "Order create nahi ho paya.");

// //       // 2. Razorpay Checkout
// //       const options = {
// //         key: import.meta.env.VITE_RAZORPAY_KEY_ID,
// //         amount: data.amount,
// //         currency: data.currency,
// //         name: "MysticBox Gifts",
// //         description: "Surprise Gift Order",
// //         order_id: data.order_id,
// //         prefill: {
// //           name: customer.name,
// //           email: customer.email,
// //           contact: customer.phone,
// //         },
// //         theme: { color: "#ec4899" },
// //         handler: async function (response) {
// //           try {
// //             // 3. Verify Payment
// //             const verifyRes = await fetch(`/api/payments/verify-payment`, {
// //               method: "POST",
// //               headers: { "Content-Type": "application/json" },
// //               body: JSON.stringify({
// //                 razorpay_order_id: response.razorpay_order_id,
// //                 razorpay_payment_id: response.razorpay_payment_id,
// //                 razorpay_signature: response.razorpay_signature,
// //               }),
// //             });

// //             const verifyData = await verifyRes.json();

// //             if (verifyData.success) {
// //               if (clearCart) clearCart();
// //               setSuccess(true);
// //               setTimeout(() => navigate("/"), 5000);
// //             } else {
// //               setError(
// //                 "Payment verify nahi ho paya. Support se contact karein.",
// //               );
// //             }
// //           } catch (err) {
// //             setError("Verification error.");
// //           }
// //         },
// //       };

// //       const rzp = new window.Razorpay(options);
// //       rzp.on("payment.failed", function (response) {
// //         setError(`Payment Failed: ${response.error.description}`);
// //         setLoading(false);
// //       });
// //       rzp.open();
// //       setLoading(false);
// //     } catch (err) {
// //       setError(err.message || "Server se connect nahi ho paya.");
// //       setLoading(false);
// //     }
// //   };

// //   if (success) {
// //     return (
// //       <div className="min-h-screen bg-[#0f0f1a] flex items-center justify-center text-white p-4">
// //         <div className="bg-green-500/10 border border-green-500 p-8 rounded-2xl text-center max-w-md w-full">
// //           <div className="text-6xl mb-4">🎉</div>
// //           <h1 className="text-3xl font-bold text-green-400 mb-2">
// //             Payment Successful!
// //           </h1>
// //           <p className="text-gray-300">Aapka gift order confirm ho gaya hai.</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-[#0f0f1a] text-white p-4 py-10 flex justify-center items-center">
// //       <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8">
// //         {/* Form */}
// //         <div className="bg-[#1a1a2e] border border-gray-800 p-6 md:p-8 rounded-2xl shadow-xl">
// //           <h2 className="text-2xl font-bold mb-6">Delivery Details</h2>
// //           <form onSubmit={handlePayment} className="space-y-4">
// //             <input
// //               type="text"
// //               name="name"
// //               placeholder="Aapka Naam"
// //               required
// //               onChange={handleInputChange}
// //               className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
// //             />
// //             <input
// //               type="email"
// //               name="email"
// //               placeholder="Email Address"
// //               required
// //               onChange={handleInputChange}
// //               className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
// //             />
// //             <input
// //               type="tel"
// //               name="phone"
// //               placeholder="WhatsApp Number"
// //               required
// //               onChange={handleInputChange}
// //               className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
// //             />
// //             <textarea
// //               name="address"
// //               placeholder="Pura Address (Ghar/Gali/Shehar)"
// //               required
// //               onChange={handleInputChange}
// //               className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none h-24"
// //             />

// //             {/* Pincode with Loading State */}
// //             <div className="relative">
// //               <input
// //                 type="text"
// //                 name="pincode"
// //                 placeholder="Pincode (6 digit)"
// //                 required
// //                 maxLength={6}
// //                 pattern="[0-9]{6}"
// //                 onChange={handleInputChange}
// //                 className={`w-full bg-gray-900 border ${isDeliverable ? "border-gray-700 focus:border-pink-500" : "border-red-500"} rounded-lg p-3 text-white outline-none`}
// //               />
// //               {checkingPincode && (
// //                 <span className="absolute right-3 top-3 text-sm text-gray-400">
// //                   Checking...
// //                 </span>
// //               )}
// //             </div>

// //             {error && (
// //               <div className="bg-red-500/20 text-red-400 p-3 rounded-lg text-sm">
// //                 {error}
// //               </div>
// //             )}
// //             {!isDeliverable && (
// //               <div className="bg-red-500/10 border border-red-500 text-red-400 p-3 rounded-lg text-sm">
// //                 Sorry, hum abhi yahan delivery nahi kar sakte.
// //               </div>
// //             )}

// //             <button
// //               type="submit"
// //               disabled={loading || !isDeliverable || checkingPincode}
// //               className="w-full bg-pink-500 hover:bg-pink-600 font-bold text-lg py-4 rounded-lg transition-colors disabled:opacity-50 mt-4 shadow-[0_0_20px_rgba(236,72,153,0.3)]"
// //             >
// //               {loading ? "Processing..." : `Pay ₹${totalAmount} Securely`}
// //             </button>
// //           </form>
// //         </div>

// //         {/* Order Summary */}
// //         <div className="bg-[#1a1a2e] border border-gray-800 p-6 md:p-8 rounded-2xl shadow-xl h-fit">
// //           <h2 className="text-xl font-bold mb-4">Order Summary</h2>
// //           <div className="space-y-3 mb-6">
// //             {cart.map((item) => (
// //               <div
// //                 key={item._id}
// //                 className="flex justify-between text-gray-300 text-sm"
// //               >
// //                 <span>
// //                   {item.title || item.name} x {item.quantity}
// //                 </span>
// //                 <span>₹{item.price * item.quantity}</span>
// //               </div>
// //             ))}
// //           </div>
// //           <div className="border-t border-gray-700 pt-4 flex justify-between font-bold text-xl text-pink-400">
// //             <span>Total</span>
// //             <span>₹{totalAmount}</span>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Checkout;

// import React, { useState, useEffect } from "react";
// import { useCart } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";

// const Checkout = () => {
//   const { cart, getCartTotal, clearCart } = useCart();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);

//   // Delivery Check State
//   const [isDeliverable, setIsDeliverable] = useState(true);
//   const [checkingPincode, setCheckingPincode] = useState(false);

//   // Customer State
//   const [customer, setCustomer] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     pincode: "",
//     senderName: "",
//     receiverName: "",
//     letterMessage: "",
//     specialNote: "",
//   });

//   // Asli Price
//   const totalAmount = cart && cart.length > 0 ? getCartTotal() : 0;

//   // ==========================================
//   // 🔥 Moving Placeholder Logic (Diwali/Family)
//   // ==========================================
//   const [placeholderIndex, setPlaceholderIndex] = useState(0);

//   const placeholderMessages = [
//     "Dear Bhaiya, aapke bina Diwali adhoori hai...",
//     "Mummy, aapke haathon ka khana sabse special hai. Happy Diwali!",
//     "To my favourite person, is Diwali aapke saath har pal special hai...",
//     "Papa, aapne hamesha mujhe protect kiya hai. Yeh chhota sa gift aapke liye...",
//     "Happy Diwali Buddy! Let's make this festival unforgettable.",
//     "Didi, aapke bina ghar suna suna lagta hai. Miss you!",
//     "To the one who brings light to my life, Happy Diwali.",
//     "Aapki smile mere liye sabse bada gift hai. Have a blast!",
//     "Nani, aapki kahaniyan aur Diwali ka maza hi alag hai...",
//     "This Diwali, I just want to say 'Thank You' for being in my life.",
//     "Bhai, is baar ka gift kuch alag hai... explore karo!",
//     "Hey, just wanted to make your day a little brighter.",
//     "Aapke saath ki Diwali hamesha yaad rahegi.",
//     "Sending you lots of love and light this festive season.",
//     "For my best friend, a special surprise awaits you inside!",
//     "Ghar ki rounak aap ho. Happy Diwali from your favorite person.",
//     "May this Diwali bring you endless joy and prosperity.",
//     "Aapke liye ek chhota sa surprise, dil se...",
//     "Smile please! Your gift is just a click away.",
//     "Kuch khaas likhna hai? Share your heart out here.",
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPlaceholderIndex(
//         (prevIndex) => (prevIndex + 1) % placeholderMessages.length,
//       );
//     }, 2500); // Har 2.5 second mein naya message

//     return () => clearInterval(interval);
//   }, [placeholderMessages.length]);

//   // ==========================================
//   // Baaki Logic
//   // ==========================================

//   useEffect(() => {
//     if (cart && cart.length === 0 && !success) navigate("/cart");
//   }, [cart, navigate, success]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCustomer({ ...customer, [name]: value });

//     // Pincode check logic
//     if (name === "pincode" && value.length === 6) {
//       checkDeliveryAvailability(value);
//     }
//   };

//   const checkDeliveryAvailability = async (pincode) => {
//     setCheckingPincode(true);
//     setIsDeliverable(true);
//     setError("");

//     try {
//       // Yahan aap apne 30km radius ke pincodes ki list check karenge
//       const allowedPincodes = ["400607", "400601", "400604", "201301"]; // Apne pincodes daalein

//       setTimeout(() => {
//         if (!allowedPincodes.includes(pincode)) {
//           setIsDeliverable(false);
//           setError(
//             "Sorry, aapka pincode hamare 30km delivery radius se bahar hai.",
//           );
//         }
//         setCheckingPincode(false);
//       }, 1000);
//     } catch (err) {
//       setError("Pincode check nahi ho paya. Kripya try karein.");
//       setCheckingPincode(false);
//     }
//   };

//   // const handlePayment = async (e) => {
//   //   e.preventDefault();

//   //   if (!isDeliverable) {
//   //     return setError("Aap is area mein order nahi kar sakte.");
//   //   }
//   //   if (
//   //     !customer.name ||
//   //     !customer.phone ||
//   //     !customer.address ||
//   //     !customer.pincode
//   //   ) {
//   //     return setError("Kripya delivery details puri bharein.");
//   //   }

//   //   setLoading(true);
//   //   setError("");

//   //   try {
//   //     const res = await fetch(`/api/payments/create-order`, {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify({
//   //         amount: totalAmount,
//   //         cartItems: cart,
//   //         customerDetails: customer,
//   //       }),
//   //     });

//   //     const data = await res.json();
//   //     if (!data.success)
//   //       throw new Error(data.error || "Order create nahi ho paya.");

//   //     const options = {
//   //       key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//   //       amount: data.amount,
//   //       currency: data.currency,
//   //       name: "MysticBox Gifts",
//   //       description: "Surprise Gift Order",
//   //       order_id: data.order_id,
//   //       prefill: {
//   //         name: customer.name,
//   //         email: customer.email,
//   //         contact: customer.phone,
//   //       },
//   //       theme: { color: "#ec4899" },
//   //       handler: async function (response) {
//   //         try {
//   //           const verifyRes = await fetch(`/api/payments/verify-payment`, {
//   //             method: "POST",
//   //             headers: { "Content-Type": "application/json" },
//   //             body: JSON.stringify({
//   //               razorpay_order_id: response.razorpay_order_id,
//   //               razorpay_payment_id: response.razorpay_payment_id,
//   //               razorpay_signature: response.razorpay_signature,
//   //             }),
//   //           });

//   //           const verifyData = await verifyRes.json();

//   //           if (verifyData.success) {
//   //             if (clearCart) clearCart();
//   //             setSuccess(true);
//   //             setTimeout(() => navigate("/"), 5000);
//   //           } else {
//   //             setError(
//   //               "Payment verify nahi ho paya. Support se contact karein.",
//   //             );
//   //           }
//   //         } catch (err) {
//   //           setError("Verification error.");
//   //         }
//   //       },
//   //     };

//   //     const rzp = new window.Razorpay(options);
//   //     rzp.on("payment.failed", function (response) {
//   //       setError(`Payment Failed: ${response.error.description}`);
//   //       setLoading(false);
//   //     });
//   //     rzp.open();
//   //     setLoading(false);
//   //   } catch (err) {
//   //     setError(err.message || "Server se connect nahi ho paya.");
//   //     setLoading(false);
//   //   }
//   // };

//   const handlePayment = async (e) => {
//     e.preventDefault();

//     if (!isDeliverable) {
//       return setError("Aap is area mein order nahi kar sakte.");
//     }
//     if (
//       !customer.name ||
//       !customer.phone ||
//       !customer.address ||
//       !customer.pincode
//     ) {
//       return setError("Kripya delivery details puri bharein.");
//     }

//     setLoading(true);
//     setError("");

//     try {
//       // 1. RAZORPAY SCRIPT LOAD KAREIN (Dynamically)
//       const loadScript = () => {
//         return new Promise((resolve) => {
//           if (window.Razorpay) return resolve(true);
//           const script = document.createElement("script");
//           script.src = "https://checkout.razorpay.com/v1/checkout.js";
//           script.onload = () => resolve(true);
//           script.onerror = () => resolve(false);
//           document.body.appendChild(script);
//         });
//       };

//       const isLoaded = await loadScript();
//       if (!isLoaded) {
//         throw new Error(
//           "Razorpay SDK load nahi ho paya. Internet check karein.",
//         );
//       }

//       // 2. Backend se Order ID create karwayein
//       const res = await fetch(`/api/payments/create-order`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           amount: totalAmount,
//           cartItems: cart,
//           customerDetails: customer,
//         }),
//       });

//       const data = await res.json();
//       if (!data.success)
//         throw new Error(data.error || "Order create nahi ho paya.");

//       // 3. Razorpay Options Set karein
//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Frontend .env se key
//         amount: data.amount,
//         currency: data.currency,
//         name: "MysticBox Gifts",
//         description: "Surprise Gift Order",
//         order_id: data.order_id,
//         prefill: {
//           name: customer.name,
//           email: customer.email,
//           contact: customer.phone,
//         },
//         theme: { color: "#ec4899" },
//         handler: async function (response) {
//           try {
//             // 4. Verify Payment
//             const verifyRes = await fetch(`/api/payments/verify-payment`, {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify({
//                 razorpay_order_id: response.razorpay_order_id,
//                 razorpay_payment_id: response.razorpay_payment_id,
//                 razorpay_signature: response.razorpay_signature,
//               }),
//             });

//             const verifyData = await verifyRes.json();

//             if (verifyData.success) {
//               if (clearCart) clearCart();
//               setSuccess(true);
//               setTimeout(() => navigate("/"), 5000);
//             } else {
//               setError(
//                 "Payment verify nahi ho paya. Support se contact karein.",
//               );
//             }
//           } catch (err) {
//             setError("Verification error.");
//           }
//         },
//       };

//       // 5. Razorpay Modal Open Karein
//       const rzp = new window.Razorpay(options);

//       rzp.on("payment.failed", function (response) {
//         setError(`Payment Failed: ${response.error.description}`);
//         setLoading(false);
//       });

//       rzp.open();
//       setLoading(false);
//     } catch (err) {
//       setError(err.message || "Server se connect nahi ho paya.");
//       setLoading(false);
//     }
//   };

//   // if (success) {
//   //   return (
//   //     <div className="min-h-screen bg-[#0f0f1a] flex items-center justify-center text-white p-4">
//   //       <div className="bg-green-500/10 border border-green-500 p-8 rounded-2xl text-center max-w-md w-full">
//   //         <div className="text-6xl mb-4">🎉</div>
//   //         <h1 className="text-3xl font-bold text-green-400 mb-2">
//   //           Payment Successful!
//   //         </h1>
//   //         <p className="text-gray-300">Aapka gift order confirm ho gaya hai.</p>
//   //       </div>
//   //     </div>
//   //   );
//   // }

//   if (success) {
//     return (
//       <div className="min-h-screen bg-[#0f0f1a] flex items-center justify-center text-white p-4">
//         <div className="bg-green-500/10 border border-green-500 p-8 rounded-2xl text-center max-w-md w-full shadow-[0_0_30px_rgba(34,197,94,0.2)]">
//           <div className="text-6xl mb-4 animate-bounce">🎉</div>
//           <h1 className="text-3xl font-bold text-green-400 mb-2">
//             Payment Successful!
//           </h1>
//           <p className="text-gray-300 mb-6">
//             Aapka gift order confirm ho gaya hai. Hum jald hi aapko update
//             denge.
//           </p>

//           {/* 🔥 YAHAN TRACK ORDER KA BUTTON ADD KIYA HAI */}
//           <div className="flex flex-col gap-3">
//             <button
//               onClick={() => navigate("/track-order")}
//               className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-green-500/30"
//             >
//               Track Your Order Now
//             </button>
//             <button
//               onClick={() => navigate("/")}
//               className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 rounded-xl transition"
//             >
//               Back to Home
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#0f0f1a] text-white p-4 py-10 flex justify-center items-center">
//       <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8">
//         {/* Form Details */}
//         <div className="bg-[#1a1a2e] border border-gray-800 p-6 md:p-8 rounded-2xl shadow-xl">
//           <h2 className="text-2xl font-bold mb-6">Delivery Details</h2>
//           <form onSubmit={handlePayment} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Aapka Naam"
//               required
//               onChange={handleInputChange}
//               className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               required
//               onChange={handleInputChange}
//               className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
//             />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="WhatsApp Number"
//               required
//               onChange={handleInputChange}
//               className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
//             />

//             <div className="grid grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 name="senderName"
//                 placeholder="Sender Name"
//                 onChange={handleInputChange}
//                 className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
//               />
//               <input
//                 type="text"
//                 name="receiverName"
//                 placeholder="Receiver Name"
//                 onChange={handleInputChange}
//                 className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
//               />
//             </div>

//             <textarea
//               name="address"
//               placeholder="Pura Address (Ghar/Gali/Shehar)"
//               required
//               onChange={handleInputChange}
//               className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none h-20"
//             />

//             {/* Pincode with Loading State */}
//             <div className="relative">
//               <input
//                 type="text"
//                 name="pincode"
//                 placeholder="Pincode (6 digit)"
//                 required
//                 maxLength={6}
//                 pattern="[0-9]{6}"
//                 onChange={handleInputChange}
//                 className={`w-full bg-gray-900 border ${isDeliverable ? "border-gray-700 focus:border-pink-500" : "border-red-500"} rounded-lg p-3 text-white outline-none`}
//               />
//               {checkingPincode && (
//                 <span className="absolute right-3 top-3 text-sm text-gray-400">
//                   Checking...
//                 </span>
//               )}
//             </div>

//             {!isDeliverable && (
//               <div className="bg-red-500/10 border border-red-500 text-red-400 p-3 rounded-lg text-sm">
//                 Sorry, hum abhi yahan delivery nahi kar sakte.
//               </div>
//             )}

//             {/* 🔥 Letter Message with Moving Placeholder */}
//             <div className="bg-[#1a1a2e] border border-pink-500/30 p-4 rounded-xl">
//               <label className="block text-sm font-semibold text-pink-400 mb-2">
//                 ✍️ Apne Dil Ki Baat Likhein
//               </label>

//               <div className="relative">
//                 <textarea
//                   name="letterMessage"
//                   maxLength={250}
//                   required
//                   onChange={handleInputChange}
//                   className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none h-32 relative z-10 bg-transparent"
//                 ></textarea>

//                 {/* Moving Placeholder Logic */}
//                 {!customer.letterMessage && (
//                   <div className="absolute inset-0 p-3 pointer-events-none flex items-start z-0">
//                     <span
//                       key={placeholderIndex}
//                       className="text-gray-500 animate-slide-in text-sm"
//                     >
//                       {placeholderMessages[placeholderIndex]}
//                     </span>
//                   </div>
//                 )}
//               </div>
//               <div className="flex justify-between items-center mt-2">
//                 <span className="text-xs text-gray-500">100% Personal</span>
//                 <span className="text-xs text-gray-400">
//                   {customer.letterMessage?.length || 0}/250
//                 </span>
//               </div>
//             </div>

//             {/* Special Note (Optional) */}
//             <div>
//               <label className="block text-sm text-gray-400 mb-1">
//                 Special Note / Suggestion (Optional)
//               </label>
//               <input
//                 type="text"
//                 name="specialNote"
//                 placeholder="e.g. Wrap it in Red paper"
//                 onChange={handleInputChange}
//                 className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
//               />
//             </div>

//             {error && (
//               <div className="bg-red-500/20 text-red-400 p-3 rounded-lg text-sm">
//                 {error}
//               </div>
//             )}

//             <button
//               type="submit"
//               disabled={loading || !isDeliverable || checkingPincode}
//               className="w-full bg-pink-500 hover:bg-pink-600 font-bold text-lg py-4 rounded-lg transition-colors disabled:opacity-50 mt-4 shadow-[0_0_20px_rgba(236,72,153,0.3)]"
//             >
//               {loading ? "Processing..." : `Pay ₹${totalAmount} Securely`}
//             </button>
//           </form>
//         </div>

//         {/* Order Summary */}
//         <div className="bg-[#1a1a2e] border border-gray-800 p-6 md:p-8 rounded-2xl shadow-xl h-fit">
//           <h2 className="text-xl font-bold mb-4">Order Summary</h2>
//           <div className="space-y-3 mb-6">
//             {cart.map((item) => (
//               <div
//                 key={item._id}
//                 className="flex justify-between text-gray-300 text-sm"
//               >
//                 <span>
//                   {item.title || item.name} x {item.quantity}
//                 </span>
//                 <span>₹{item.price * item.quantity}</span>
//               </div>
//             ))}
//           </div>
//           <div className="border-t border-gray-700 pt-4 flex justify-between font-bold text-xl text-pink-400">
//             <span>Total</span>
//             <span>₹{totalAmount}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Delivery Check State
  const [isDeliverable, setIsDeliverable] = useState(true);
  const [checkingPincode, setCheckingPincode] = useState(false);

  // Customer State
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
    senderName: "",
    receiverName: "",
    letterMessage: "",
    specialNote: "",
  });

  // Asli Price
  const totalAmount = cart && cart.length > 0 ? getCartTotal() : 0;

  // ==========================================
  // 🔥 Moving Placeholder Logic (Diwali/Family)
  // ==========================================
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const placeholderMessages = [
    "Dear Bhaiya, aapke bina Diwali adhoori hai...",
    "Mummy, aapke haathon ka khana sabse special hai. Happy Diwali!",
    "To my favourite person, is Diwali aapke saath har pal special hai...",
    "Papa, aapne hamesha mujhe protect kiya hai. Yeh chhota sa gift aapke liye...",
    "Happy Diwali Buddy! Let's make this festival unforgettable.",
    "Didi, aapke bina ghar suna suna lagta hai. Miss you!",
    "To the one who brings light to my life, Happy Diwali.",
    "Aapki smile mere liye sabse bada gift hai. Have a blast!",
    "This Diwali, I just want to say 'Thank You' for being in my life.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex(
        (prevIndex) => (prevIndex + 1) % placeholderMessages.length,
      );
    }, 2500);
    return () => clearInterval(interval);
  }, [placeholderMessages.length]);

  // ==========================================
  // Baaki Logic
  // ==========================================

  useEffect(() => {
    if (cart && cart.length === 0 && !success) navigate("/cart");
  }, [cart, navigate, success]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });

    // Pincode check logic
    if (name === "pincode" && value.length === 6) {
      checkDeliveryAvailability(value);
    }
  };

  const checkDeliveryAvailability = async (pincode) => {
    setCheckingPincode(true);
    setIsDeliverable(true);
    setError("");

    try {
      // Yahan apne aas-paas ke pincodes daalein
      const allowedPincodes = ["600401", "276122", "600407", "600410"];

      setTimeout(() => {
        if (!allowedPincodes.includes(pincode)) {
          setIsDeliverable(false);
          setError(
            "Sorry, aapka pincode hamare 30km delivery radius se bahar hai.",
          );
        }
        setCheckingPincode(false);
      }, 1000);
    } catch (err) {
      setError("Pincode check nahi ho paya. Kripya try karein.");
      setCheckingPincode(false);
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!isDeliverable) {
      return setError("Aap is area mein order nahi kar sakte.");
    }
    if (
      !customer.name ||
      !customer.phone ||
      !customer.address ||
      !customer.pincode
    ) {
      return setError("Kripya delivery details puri bharein.");
    }

    setLoading(true);
    setError("");

    try {
      // 1. Razorpay Script Load Karein
      const loadScript = () => {
        return new Promise((resolve) => {
          if (window.Razorpay) return resolve(true);
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          script.onload = () => resolve(true);
          script.onerror = () => resolve(false);
          document.body.appendChild(script);
        });
      };

      const isLoaded = await loadScript();
      if (!isLoaded)
        throw new Error(
          "Razorpay SDK load nahi ho paya. Internet check karein.",
        );

      // 2. Backend se Order ID create karwayein
      const res = await fetch(`/api/payments/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: totalAmount,
          cartItems: cart,
          customerDetails: customer,
        }),
      });

      const data = await res.json();
      if (!data.success)
        throw new Error(data.error || "Order create nahi ho paya.");

      // 3. Razorpay Checkout
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: "MysticBox Gifts",
        description: "Surprise Gift Order",
        order_id: data.order_id,
        prefill: {
          name: customer.name,
          email: customer.email,
          contact: customer.phone,
        },
        theme: { color: "#ec4899" },
        handler: async function (response) {
          try {
            // 4. Verify Payment
            const verifyRes = await fetch(`/api/payments/verify-payment`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyRes.json();

            if (verifyData.success) {
              if (clearCart) clearCart();

              // 🔥 ORDER ID LOCALSTORAGE MEIN SAVE KAR RAHE HAIN
              localStorage.setItem("lastOrderId", data.order_id);

              setSuccess(true);
              // Auto-redirect 10 sec baad (agar user track na kare)
              setTimeout(() => navigate("/"), 10000);
            } else {
              setError(
                "Payment verify nahi ho paya. Support se contact karein.",
              );
            }
          } catch (err) {
            setError("Verification error.");
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function (response) {
        setError(`Payment Failed: ${response.error.description}`);
        setLoading(false);
      });
      rzp.open();
      setLoading(false);
    } catch (err) {
      setError(err.message || "Server se connect nahi ho paya.");
      setLoading(false);
    }
  };

  // ==========================================
  // 🔥 SUCCESS SCREEN (UPDATED)
  // ==========================================
  if (success) {
    return (
      <div className="min-h-screen bg-[#0f0f1a] flex items-center justify-center text-white p-4">
        <div className="bg-green-500/10 border border-green-500 p-8 rounded-2xl text-center max-w-md w-full shadow-[0_0_30px_rgba(34,197,94,0.2)]">
          <div className="text-6xl mb-4 animate-bounce">🎉</div>
          <h1 className="text-3xl font-bold text-green-400 mb-2">
            Payment Successful!
          </h1>
          <p className="text-gray-300 mb-6">
            Aapka gift order confirm ho gaya hai. Jald hi aapko update milega.
          </p>

          {/* Naye Buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate("/track-order")}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-green-500/30"
            >
              Track Your Order Now
            </button>
            <button
              onClick={() => navigate("/")}
              className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 rounded-xl transition"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white p-4 py-10 flex justify-center items-center">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8">
        {/* Form Details */}
        <div className="bg-[#1a1a2e] border border-gray-800 p-6 md:p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6">Delivery Details</h2>
          <form onSubmit={handlePayment} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Aapka Naam"
              required
              onChange={handleInputChange}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              onChange={handleInputChange}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="WhatsApp Number"
              required
              onChange={handleInputChange}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="senderName"
                placeholder="Sender Name"
                onChange={handleInputChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
              />
              <input
                type="text"
                name="receiverName"
                placeholder="Receiver Name"
                onChange={handleInputChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none"
              />
            </div>

            <textarea
              name="address"
              placeholder="Pura Address (Ghar/Gali/Shehar)"
              required
              onChange={handleInputChange}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none h-20"
            />

            {/* Pincode with Loading State */}
            <div className="relative">
              <input
                type="text"
                name="pincode"
                placeholder="Pincode (6 digit)"
                required
                maxLength={6}
                pattern="[0-9]{6}"
                onChange={handleInputChange}
                className={`w-full bg-gray-900 border ${isDeliverable ? "border-gray-700 focus:border-pink-500" : "border-red-500"} rounded-lg p-3 text-white outline-none`}
              />
              {checkingPincode && (
                <span className="absolute right-3 top-3 text-sm text-gray-400">
                  Checking...
                </span>
              )}
            </div>

            {!isDeliverable && (
              <div className="bg-red-500/10 border border-red-500 text-red-400 p-3 rounded-lg text-sm">
                Sorry, hum abhi yahan delivery nahi kar sakte.
              </div>
            )}

            {/* Letter Message */}
            <div className="bg-[#1a1a2e] border border-pink-500/30 p-4 rounded-xl">
              <label className="block text-sm font-semibold text-pink-400 mb-2">
                ✍️ Apne Dil Ki Baat Likhein
              </label>
              <div className="relative">
                <textarea
                  name="letterMessage"
                  maxLength={250}
                  required
                  onChange={handleInputChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-pink-500 outline-none h-32 relative z-10 bg-transparent"
                ></textarea>
                {!customer.letterMessage && (
                  <div className="absolute inset-0 p-3 pointer-events-none flex items-start z-0">
                    <span
                      key={placeholderIndex}
                      className="text-gray-500 animate-slide-in text-sm"
                    >
                      {placeholderMessages[placeholderIndex]}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-500">100% Personal</span>
                <span className="text-xs text-gray-400">
                  {customer.letterMessage?.length || 0}/250
                </span>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/20 text-red-400 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !isDeliverable || checkingPincode}
              className="w-full bg-pink-500 hover:bg-pink-600 font-bold text-lg py-4 rounded-lg transition-colors disabled:opacity-50 mt-4 shadow-[0_0_20px_rgba(236,72,153,0.3)]"
            >
              {loading ? "Processing..." : `Pay ₹${totalAmount} Securely`}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-[#1a1a2e] border border-gray-800 p-6 md:p-8 rounded-2xl shadow-xl h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-3 mb-6">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex justify-between text-gray-300 text-sm"
              >
                <span>
                  {item.title || item.name} x {item.quantity}
                </span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-700 pt-4 flex justify-between font-bold text-xl text-pink-400">
            <span>Total</span>
            <span>₹{totalAmount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
