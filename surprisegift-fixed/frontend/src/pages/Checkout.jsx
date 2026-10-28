// // // import React, { useEffect, useState } from "react";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import { CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";
// // // import { useCart } from "../context/CartContext";
// // // import API from "../services/api";

// // // export const Checkout = () => {
// // //   const { cart, getCartTotal, clearCart } = useCart();
// // //   const navigate = useNavigate();
// // //   const [shipping, setShipping] = useState({ recipientName:"", phone:"", street:"", city:"", state:"", pincode:"", deliveryDate:"", deliveryTimeSlot:"18:00 - 21:00" });
// // //   const [upiData, setUpiData] = useState(null);
// // //   const [utrNumber, setUtrNumber] = useState("");
// // //   const [busy, setBusy] = useState(false);
// // //   const [error, setError] = useState("");
// // //   const total = getCartTotal();

// // //   useEffect(() => { if (!cart.length && !upiData) navigate("/cart", { replace: true }); }, [cart.length, upiData, navigate]);

// // //   const change = (e) => setShipping((prev) => ({ ...prev, [e.target.name]: e.target.value }));

// // //   const handleInitialCheckout = async (e) => {
// // //     e.preventDefault();
// // //     setError("");
// // //     if (!localStorage.getItem("token")) { setError("Please log in before placing an order. Your cart will remain saved."); return; }
// // //     if (!cart.length || total <= 0) { setError("Your cart is empty. Add a gift before checkout."); return; }
// // //     setBusy(true);
// // //     try {
// // //       const payloadItems = cart.map((item) => ({
// // //         _id: item._id,
// // //         product: item.type === "product" ? item._id : undefined,
// // //         packageId: item.type === "package" ? item._id : undefined,
// // //         type: item.type,
// // //         title: item.title || item.name,
// // //         price: Number(item.price),
// // //         quantity: Number(item.quantity),
// // //         customizationDetails: item.customizationDetails || {},
// // //       }));
// // //       const { data } = await API.post("/payments/create-upi-order", { items: payloadItems, shippingAddress: shipping });
// // //       setUpiData(data);
// // //     } catch (err) {
// // //       setError(err.response?.data?.message || "Could not create the order. Check login and backend connection.");
// // //     } finally { setBusy(false); }
// // //   };

// // //   const handleSubmitReference = async (e) => {
// // //     e.preventDefault();
// // //     if (!upiData?.dbOrderId) return;
// // //     setError("");
// // //     setBusy(true);
// // //     try {
// // //       const { data } = await API.post("/payments/verify-upi", { dbOrderId: upiData.dbOrderId, upiRefNumber: utrNumber.trim() });
// // //       clearCart();
// // //       navigate(`/track-order?orderId=${encodeURIComponent(data.orderId || upiData.dbOrderId)}`, { replace: true });
// // //     } catch (err) {
// // //       setError(err.response?.data?.message || "Could not submit the transaction reference.");
// // //     } finally { setBusy(false); }
// // //   };

// // //   if (!cart.length && !upiData) return null;

// // //   if (upiData) return <section className="max-w-2xl mx-auto px-4 py-12 text-white"><div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8 text-center"><CheckCircle2 size={48} className="mx-auto text-emerald-400"/><h1 className="text-3xl font-black mt-4">Order created</h1><p className="text-neutral-300 mt-2">Pay the exact amount using your UPI app. The order will remain pending until the payment is verified.</p><p className="text-4xl font-black text-pink-300 mt-6">₹{Number(upiData.amount).toLocaleString("en-IN")}</p><p className="text-sm text-neutral-300 mt-2">UPI ID: <strong className="text-white">{upiData.upiId}</strong></p><a href={upiData.upiDeepLink} className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-bold">Open UPI app <ExternalLink size={17}/></a><form onSubmit={handleSubmitReference} className="mt-8 text-left space-y-4"><label className="block text-sm text-neutral-300">UPI transaction reference / UTR<input required minLength={8} maxLength={40} pattern="[A-Za-z0-9-]{8,40}" value={utrNumber} onChange={(e) => setUtrNumber(e.target.value)} placeholder="Enter transaction reference after paying" className="mt-2 block w-full rounded-xl border border-white/15 bg-white/5 p-3 text-white"/></label>{error && <p role="alert" className="text-sm text-red-300">{error}</p>}<button disabled={busy} className="w-full rounded-xl bg-pink-500 px-5 py-3 font-bold disabled:opacity-50">{busy ? "Submitting…" : "I have paid — submit reference"}</button><p className="text-xs text-neutral-400 flex gap-2"><ShieldCheck size={16} className="shrink-0"/>Submitting a reference does not automatically mark payment as paid. The payment must be verified.</p></form></div></section>;

// // //   return <section className="max-w-5xl mx-auto px-4 py-10 text-white"><h1 className="text-3xl md:text-4xl font-black mb-2">Checkout</h1><p className="text-neutral-300 mb-7">Confirm delivery details and review your order before generating the UPI payment.</p><div className="grid lg:grid-cols-[1fr_320px] gap-6 items-start"><form onSubmit={handleInitialCheckout} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-7 space-y-4">
// // //     <h2 className="text-xl font-bold mb-2">Delivery details</h2>
// // //     <div className="grid sm:grid-cols-2 gap-4"><input name="recipientName" value={shipping.recipientName} onChange={change} placeholder="Recipient name" required minLength={2} className="rounded-xl border border-white/15 bg-white/5 p-3 text-white"/><input name="phone" value={shipping.phone} onChange={change} placeholder="Phone number" required pattern="[0-9+() -]{10,16}" className="rounded-xl border border-white/15 bg-white/5 p-3 text-white"/></div>
// // //     <input name="street" value={shipping.street} onChange={change} placeholder="Full street address" required className="w-full rounded-xl border border-white/15 bg-white/5 p-3 text-white"/>
// // //     <div className="grid sm:grid-cols-3 gap-4"><input name="city" value={shipping.city} onChange={change} placeholder="City" required className="rounded-xl border border-white/15 bg-white/5 p-3 text-white"/><input name="state" value={shipping.state} onChange={change} placeholder="State" required className="rounded-xl border border-white/15 bg-white/5 p-3 text-white"/><input name="pincode" value={shipping.pincode} onChange={change} placeholder="Pincode" required pattern="[0-9]{6}" className="rounded-xl border border-white/15 bg-white/5 p-3 text-white"/></div>
// // //     <div className="grid sm:grid-cols-2 gap-4"><label className="text-sm text-neutral-300">Delivery date<input type="date" name="deliveryDate" min={new Date().toISOString().slice(0,10)} value={shipping.deliveryDate} onChange={change} required className="mt-2 block w-full rounded-xl border border-white/15 bg-white/5 p-3 text-white"/></label><label className="text-sm text-neutral-300">Preferred time<select name="deliveryTimeSlot" value={shipping.deliveryTimeSlot} onChange={change} className="mt-2 block w-full rounded-xl border border-white/15 bg-[#1a1022] p-3 text-white"><option>09:00 - 12:00</option><option>12:00 - 15:00</option><option>15:00 - 18:00</option><option>18:00 - 21:00</option></select></label></div>
// // //     {error && <div role="alert" className="rounded-xl bg-red-500/10 p-3 text-sm text-red-300">{error}{!localStorage.getItem("token") && <Link to="/login" className="ml-2 underline font-bold">Log in</Link>}</div>}<button disabled={busy || !cart.length || total <= 0} className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-4 font-bold disabled:opacity-50">{busy ? "Creating order…" : `Continue to UPI payment · ₹${total.toLocaleString("en-IN")}`}</button><p className="text-xs text-neutral-400">Payment status remains pending until the transaction is verified.</p>
// // //     </form><aside className="rounded-2xl border border-pink-400/25 bg-white/[0.04] p-6"><h2 className="text-xl font-bold">Order summary</h2><div className="mt-4 space-y-3">{cart.map((item) => <div key={item._id} className="flex justify-between gap-3 text-sm"><span className="text-neutral-300">{item.title} × {item.quantity}</span><span className="whitespace-nowrap">₹{(item.price * item.quantity).toLocaleString("en-IN")}</span></div>)}</div><div className="border-t border-white/10 mt-5 pt-5 flex justify-between text-lg font-black"><span>Total</span><span className="text-pink-300">₹{total.toLocaleString("en-IN")}</span></div><Link to="/cart" className="block text-center mt-5 text-sm text-neutral-300 underline">Back to cart</Link></aside></div></section>;
// // // };

// // import React, { useState, useContext } from "react";
// // import { QRCodeSVG } from "qrcode.react";
// // import { useCart } from "../context/CartContext";

// // const Checkout = () => {
// //   const { cart } = useContext(CartContext);
// //   const [utr, setUtr] = useState("");

// //   // 1. PRICE FIX: Cart se total nikal rahe hain. Agar cart khali hai to 1 rs lega testing ke liye.
// //   const totalAmount =
// //     cart && cart.length > 0
// //       ? cart.reduce((total, item) => total + item.price, 0)
// //       : 1;

// //   // 2. AAPKI UPI ID
// //   const myUpiId = "8858176643@ibl";
// //   const myName = "Surprise Gift";

// //   // 3. UPI QR CODE URL: Jab koi is QR ko scan karega, uske UPI app me aapki ID aur amount apne aap bhar jayega.
// //   const upiUrl = `upi://pay?pa=${myUpiId}&pn=${myName}&am=${totalAmount}&cu=INR`;

// //   // Form submit karne ka function
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (utr.length < 12) {
// //       alert(
// //         "Kripya UPI app se 12 digit ka Reference Number/UTR copy karke yahan daalein.",
// //       );
// //       return;
// //     }
// //     // Yahan aap backend me order save karne ka API call laga sakte hain
// //     alert(
// //       "Reference submit ho gaya! Aapka payment verify hone ke baad order confirm ho jayega.",
// //     );
// //   };

// //   return (
// //     <div className="flex justify-center items-center min-h-screen bg-[#0f0f1a] text-white p-4">
// //       <div className="bg-[#1a1a2e] border border-gray-700 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
// //         {/* Header Icon */}
// //         <div className="flex justify-center mb-4">
// //           <div className="bg-green-500/20 p-3 rounded-full">
// //             <svg
// //               className="w-10 h-10 text-green-400"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth="2"
// //                 d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
// //               ></path>
// //             </svg>
// //           </div>
// //         </div>

// //         <h2 className="text-2xl font-bold mb-2">Order Created</h2>
// //         <p className="text-gray-400 text-sm mb-6">
// //           Neeche diye gaye QR code ko kisi bhi UPI App (GPay, PhonePe, Paytm) se
// //           scan karein.
// //         </p>

// //         {/* Total Amount */}
// //         <div className="text-4xl font-extrabold text-pink-500 mb-6">
// //           ₹{totalAmount}
// //         </div>

// //         {/* --- QR CODE SECTION (Aapki UPI ID ka) --- */}
// //         <div className="bg-white p-4 rounded-xl inline-block mb-4 shadow-lg">
// //           <QRCodeSVG
// //             value={upiUrl}
// //             size={220}
// //             bgColor={"#ffffff"}
// //             fgColor={"#000000"}
// //             level={"H"}
// //           />
// //         </div>

// //         {/* UPI ID Text */}
// //         <p className="text-sm text-gray-300 mb-6 font-mono bg-gray-800 py-2 px-4 rounded-lg inline-block">
// //           UPI ID: {myUpiId}
// //         </p>

// //         {/* --- INSTRUCTIONS FOR NORMAL PERSON --- */}
// //         <div className="text-left bg-gray-800/50 p-4 rounded-lg mb-6 border border-gray-700">
// //           <p className="text-sm font-semibold mb-2 text-pink-400">
// //             Payment kaise karein?
// //           </p>
// //           <ol className="text-sm text-gray-300 list-decimal list-inside space-y-1">
// //             <li>QR Code ko scan karein.</li>
// //             <li>₹{totalAmount} pay karein.</li>
// //             <li>
// //               Payment ke baad aapko ek <strong>12-digit UTR/Ref No.</strong>{" "}
// //               milega.
// //             </li>
// //             <li>Woh number neeche box me daalein.</li>
// //           </ol>
// //         </div>

// //         {/* --- FORM SECTION --- */}
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <div className="text-left">
// //             <label className="block text-base font-medium text-gray-200 mb-2">
// //               Payment ke baad 12-digit UTR yahan daalein:
// //             </label>
// //             <input
// //               type="text"
// //               placeholder="e.g. 123456789012"
// //               value={utr}
// //               onChange={(e) => setUtr(e.target.value)}
// //               className="w-full bg-gray-900 border border-gray-600 rounded-lg p-4 text-white text-lg tracking-widest text-center focus:ring-2 focus:ring-pink-500 outline-none transition"
// //               required
// //             />
// //           </div>

// //           <button
// //             type="submit"
// //             className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-lg text-lg transition duration-200 shadow-[0_0_15px_rgba(236,72,153,0.5)]"
// //           >
// //             I Have Paid - Submit Reference
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Checkout;

// import React, { useState } from "react";
// import { QRCodeSVG } from "qrcode.react";
// import { useCart } from "../context/CartContext"; // Sahi import

// const Checkout = () => {
//   const { cart, getCartTotal } = useCart(); // Hook ka use kiya
//   const [utr, setUtr] = useState("");

//   // Aapke context se total nikal rahe hain. Agar cart khali hai to testing ke liye 1 dikhayega.
//   const totalAmount = cart && cart.length > 0 ? getCartTotal() : 1;

//   // Aapki UPI ID
//   const myUpiId = "8858176643@ibl";
//   const myName = "Surprise Gift";

//   // UPI QR CODE URL
//   const upiUrl = `upi://pay?pa=${myUpiId}&pn=${myName}&am=${totalAmount}&cu=INR`;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (utr.length < 12) {
//       alert("Kripya 12 digit ka sahi UPI Reference/UTR daalein.");
//       return;
//     }
//     alert(
//       "Reference submit ho gaya! Payment verify hone ke baad order confirm hoga.",
//     );
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-[#0f0f1a] text-white p-4">
//       <div className="bg-[#1a1a2e] border border-gray-700 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
//         {/* Success Icon */}
//         <div className="flex justify-center mb-4">
//           <div className="bg-green-500/20 p-3 rounded-full">
//             <svg
//               className="w-10 h-10 text-green-400"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//               ></path>
//             </svg>
//           </div>
//         </div>

//         <h2 className="text-2xl font-bold mb-2">Order Created</h2>
//         <p className="text-gray-400 text-sm mb-6">
//           Neeche diye gaye QR code ko kisi bhi UPI App se scan karein.
//         </p>

//         {/* Amount */}
//         <div className="text-4xl font-extrabold text-pink-500 mb-6">
//           ₹{totalAmount}
//         </div>

//         {/* QR CODE */}
//         <div className="bg-white p-4 rounded-xl inline-block mb-4 shadow-lg">
//           <QRCodeSVG
//             value={upiUrl}
//             size={220}
//             bgColor={"#ffffff"}
//             fgColor={"#000000"}
//             level={"H"}
//           />
//         </div>

//         {/* UPI ID */}
//         <p className="text-sm text-gray-300 mb-6 font-mono bg-gray-800 py-2 px-4 rounded-lg inline-block">
//           UPI ID: {myUpiId}
//         </p>

//         {/* Instructions */}
//         <div className="text-left bg-gray-800/50 p-4 rounded-lg mb-6 border border-gray-700">
//           <p className="text-sm font-semibold mb-2 text-pink-400">
//             Payment kaise karein?
//           </p>
//           <ol className="text-sm text-gray-300 list-decimal list-inside space-y-1">
//             <li>QR Code ko scan karein.</li>
//             <li>₹{totalAmount} pay karein.</li>
//             <li>Payment ke baad 12-digit UTR/Ref No. copy karein.</li>
//             <li>Woh neeche box me daalein.</li>
//           </ol>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="text-left">
//             <label className="block text-base font-medium text-gray-200 mb-2">
//               12-digit UTR / Reference Number:
//             </label>
//             <input
//               type="text"
//               placeholder="e.g. 123456789012"
//               value={utr}
//               onChange={(e) => setUtr(e.target.value)}
//               className="w-full bg-gray-900 border border-gray-600 rounded-lg p-4 text-white text-lg tracking-widest text-center focus:ring-2 focus:ring-pink-500 outline-none transition"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-lg text-lg transition duration-200 shadow-[0_0_15px_rgba(236,72,153,0.5)]"
//           >
//             I Have Paid - Submit Reference
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

import React, { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const [paymentStatus, setPaymentStatus] = useState("idle"); // idle, verifying, success
  const [orderId, setOrderId] = useState(null);

  // 1. Price Lock (Cart ka total fix hoga)
  const lockedAmount = cart && cart.length > 0 ? getCartTotal() : 1;

  const myUpiId = "8858176643@ibl";
  const myName = "Surprise Gift";
  const upiUrl = `upi://pay?pa=${myUpiId}&pn=${encodeURIComponent(myName)}&am=${lockedAmount}&cu=INR`;

  // 2. Page load hote hi Database me PENDING order banao
  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await fetch(
          "https://your-backend.vercel.app/api/orders/create",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: lockedAmount, cartItems: cart }),
          },
        );
        const data = await res.json();
        if (data.orderId) setOrderId(data.orderId);
      } catch (error) {
        console.error("Order creation failed:", error);
      }
    };

    // Agar cart me items hain tabhi order create karo
    if (cart && cart.length > 0) createOrder();
  }, []); // Sirf ek baar chalega

  // 3. Auto-Verification (Har 2 sec me check karega)
  useEffect(() => {
    let interval;
    if (paymentStatus === "verifying" && orderId) {
      interval = setInterval(async () => {
        try {
          const res = await fetch(
            `https://your-backend.vercel.app/api/orders/status/${orderId}`,
          );
          const data = await res.json();

          if (data.status === "SUCCESS") {
            clearInterval(interval);
            setPaymentStatus("success");
            if (clearCart) clearCart(); // Order hote hi cart khali
          }
        } catch (error) {
          console.log("Checking payment status...");
        }
      }, 2000); // 2 second
    }
    return () => clearInterval(interval);
  }, [paymentStatus, orderId, clearCart]);

  // --- SUCCESS SCREEN ---
  if (paymentStatus === "success") {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#0f0f1a] text-white p-4">
        <div className="bg-[#1a1a2e] border border-green-500/50 p-8 rounded-2xl shadow-[0_0_30px_rgba(34,197,94,0.2)] w-full max-w-md text-center">
          <div className="bg-green-500/20 p-4 rounded-full inline-block mb-4 animate-bounce">
            <svg
              className="w-16 h-16 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-green-400 mb-2">
            Payment Received!
          </h2>
          <p className="text-gray-300">
            Aapka order successfully place ho gaya hai.
          </p>
        </div>
      </div>
    );
  }

  // --- CHECKOUT SCREEN ---
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0f0f1a] text-white p-4">
      <div className="bg-[#1a1a2e] border border-gray-700 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-2">Scan & Pay ₹{lockedAmount}</h2>

        {paymentStatus === "idle" || paymentStatus === "verifying" ? (
          <>
            <p className="text-gray-400 text-sm mb-6">
              Kisi bhi UPI App se QR scan karein aur pay karein.
            </p>

            <div className="bg-white p-4 rounded-xl inline-block mb-4 shadow-lg">
              <QRCodeSVG
                value={upiUrl}
                size={220}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"H"}
              />
            </div>

            <p className="text-sm text-gray-300 mb-6 font-mono bg-gray-800 py-2 px-4 rounded-lg inline-block">
              UPI ID: {myUpiId}
            </p>

            {/* Verifying spinner ya button */}
            {paymentStatus === "verifying" ? (
              <div className="flex flex-col items-center justify-center mt-4">
                <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-pink-500 mb-3"></div>
                <p className="text-pink-400 font-semibold animate-pulse">
                  Verifying Payment...
                </p>
                <p className="text-xs text-gray-400 mt-1">Please wait...</p>
              </div>
            ) : (
              <button
                onClick={() => setPaymentStatus("verifying")}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-lg text-lg transition duration-200"
              >
                I Have Paid (Check Status)
              </button>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Checkout;
