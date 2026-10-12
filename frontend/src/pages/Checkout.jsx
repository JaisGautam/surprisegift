// // import React, { useState } from "react";
// // import { useCart } from "../context/CartContext";
// // import API from "../services/api";

// // export const Checkout = () => {
// //   const { cart, getCartTotal, clearCart } = useCart();
// //   const [shipping, setShipping] = useState({
// //     recipientName: "",
// //     phone: "",
// //     street: "",
// //     city: "",
// //     state: "",
// //     pincode: "",
// //     deliveryDate: "",
// //     deliveryTimeSlot: "18:00 - 21:00",
// //   });

// //   const loadRazorpay = () => {
// //     return new Promise((resolve) => {
// //       const script = document.createElement("script");
// //       script.src = "https://checkout.razorpay.com/v1/checkout.js";
// //       script.onload = () => resolve(true);
// //       script.onerror = () => resolve(false);
// //       document.body.appendChild(script);
// //     });
// //   };

// //   const handlePayment = async (e) => {
// //     e.preventDefault();
// //     const res = await loadRazorpay();
// //     if (!res) return alert("Razorpay SDK failed to load.");

// //     try {
// //       const { data } = await API.post("/payments/create-order", {
// //         items: cart,
// //         totalAmount: getCartTotal(),
// //         shippingAddress: shipping,
// //       });

// //       const options = {
// //         key: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_key",
// //         amount: data.razorpayOrder.amount,
// //         currency: data.razorpayOrder.currency,
// //         name: "SurpriseGift",
// //         description: "Surprise Order Payment",
// //         order_id: data.razorpayOrder.id,
// //         handler: async function (response) {
// //           const verifyRes = await API.post("/payments/verify", {
// //             razorpay_order_id: response.razorpay_order_id,
// //             razorpay_payment_id: response.razorpay_payment_id,
// //             razorpay_signature: response.razorpay_signature,
// //             dbOrderId: data.dbOrderId,
// //           });

// //           if (verifyRes.data.success) {
// //             clearCart();
// //             alert("🎉 Payment Verified & Order Confirmed!");
// //             window.location.href = `/track-order?orderId=${data.dbOrderId}`;
// //           }
// //         },
// //         theme: { color: "#FF2A85" },
// //       };

// //       const paymentObject = new window.Razorpay(options);
// //       paymentObject.open();
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Payment Initialization Failed");
// //     }
// //   };

// //   return (
// //     <div className="max-w-3xl mx-auto px-4 py-12">
// //       <h2 className="text-3xl font-extrabold text-white mb-6">
// //         Delivery & Payment Details
// //       </h2>
// //       <form
// //         onSubmit={handlePayment}
// //         className="glass-panel p-8 rounded-3xl space-y-4"
// //       >
// //         <div className="grid grid-cols-2 gap-4">
// //           <input
// //             type="text"
// //             placeholder="Recipient Name"
// //             required
// //             className="p-3 bg-luxury-card rounded-xl border text-white"
// //             onChange={(e) =>
// //               setShipping({ ...shipping, recipientName: e.target.value })
// //             }
// //           />
// //           <input
// //             type="text"
// //             placeholder="Phone Number"
// //             required
// //             className="p-3 bg-luxury-card rounded-xl border text-white"
// //             onChange={(e) =>
// //               setShipping({ ...shipping, phone: e.target.value })
// //             }
// //           />
// //         </div>
// //         <input
// //           type="text"
// //           placeholder="Street Address"
// //           required
// //           className="w-full p-3 bg-luxury-card rounded-xl border text-white"
// //           onChange={(e) => setShipping({ ...shipping, street: e.target.value })}
// //         />
// //         <div className="grid grid-cols-3 gap-4">
// //           <input
// //             type="text"
// //             placeholder="City"
// //             required
// //             className="p-3 bg-luxury-card rounded-xl border text-white"
// //             onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
// //           />
// //           <input
// //             type="text"
// //             placeholder="State"
// //             required
// //             className="p-3 bg-luxury-card rounded-xl border text-white"
// //             onChange={(e) =>
// //               setShipping({ ...shipping, state: e.target.value })
// //             }
// //           />
// //           <input
// //             type="text"
// //             placeholder="Pincode"
// //             required
// //             className="p-3 bg-luxury-card rounded-xl border text-white"
// //             onChange={(e) =>
// //               setShipping({ ...shipping, pincode: e.target.value })
// //             }
// //           />
// //         </div>
// //         <input
// //           type="date"
// //           required
// //           className="w-full p-3 bg-luxury-card rounded-xl border text-white"
// //           onChange={(e) =>
// //             setShipping({ ...shipping, deliveryDate: e.target.value })
// //           }
// //         />
// //         <button
// //           type="submit"
// //           className="w-full py-4 bg-luxury-pink text-white font-bold rounded-xl"
// //         >
// //           Pay Via Razorpay (₹{getCartTotal()})
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// import React, { useState } from "react";
// import { useCart } from "../context/CartContext";
// import API from "../services/api";

// export const Checkout = () => {
//   const { cart, getCartTotal, clearCart } = useCart();
//   const [shipping, setShipping] = useState({
//     recipientName: "",
//     phone: "",
//     street: "",
//     city: "",
//     state: "",
//     pincode: "",
//     deliveryDate: "",
//     deliveryTimeSlot: "18:00 - 21:00",
//   });
//   const [upiData, стема, setUpiData] = useState(null);
//   const [utrNumber, setUtrNumber] = useState("");

//   const handleInitialCheckout = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await API.post("/payments/create-upi-order", {
//         items: cart,
//         totalAmount: getCartTotal(),
//         shippingAddress: shipping,
//       });
//       setUpiData(data); // UPI ID aur Deep Link mil jayega
//     } catch (err) {
//       alert(err.response?.data?.message || "Checkout Error");
//     }
//   };

//   const handleConfirmPayment = async () => {
//     try {
//       await API.post("/payments/verify-upi", {
//         dbOrderId: upiData.dbOrderId,
//         upiRefNumber: utrNumber,
//       });
//       clearCart();
//       alert("🎉 Payment Reference Submitted! Order is now being verified.");
//       window.location.href = `/track-order?orderId=${upiData.dbOrderId}`;
//     } catch (err) {
//       alert("Error submitting UTR reference");
//     }
//   };

//   if (upiData) {
//     // QR Code generation using free public API (api.qrserver.com)
//     const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(upiData.upiDeepLink)}`;

//     return (
//       <div className="max-w-md mx-auto px-4 py-12 text-center">
//         <div className="glass-panel p-8 rounded-3xl space-y-6">
//           <h2 className="text-2xl font-black text-white">Scan & Pay via UPI</h2>
//           <p className="text-neutral-400 text-sm">
//             Scan this QR code using GPay, PhonePe, or Paytm
//           </p>

//           <div className="bg-white p-4 inline-block rounded-2xl">
//             <img
//               src={qrCodeUrl}
//               alt="UPI QR Code"
//               className="w-48 h-48 mx-auto"
//             />
//           </div>

//           <div className="text-left bg-luxury-card p-4 rounded-xl border border-luxury-border space-y-1">
//             <p className="text-xs text-neutral-400">
//               UPI ID:{" "}
//               <span className="text-white font-bold">{upiData.upiId}</span>
//             </p>
//             <p className="text-xs text-neutral-400">
//               Amount to Pay:{" "}
//               <span className="text-luxury-pink font-bold text-lg">
//                 ₹{upiData.amount}
//               </span>
//             </p>
//           </div>

//           <div className="space-y-3 text-left">
//             <label className="text-xs font-bold text-neutral-300">
//               Enter UPI Transaction Reference (UTR / UPI Ref No):
//             </label>
//             <input
//               type="text"
//               placeholder="e.g. 435678912345"
//               value={utrNumber}
//               onChange={(e) => setUtrNumber(e.target.value)}
//               className="w-full p-3 rounded-xl bg-luxury-card border border-luxury-border text-white text-sm"
//               required
//             />
//           </div>

//           <button
//             onClick={handleConfirmPayment}
//             className="w-full py-4 bg-luxury-pink text-white font-bold rounded-xl shadow-lg"
//           >
//             I Have Paid — Confirm My Order
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-3xl mx-auto px-4 py-12">
//       <h2 className="text-3xl font-extrabold text-white mb-6">
//         Delivery & Direct UPI Payment
//       </h2>
//       <form
//         onSubmit={handleInitialCheckout}
//         className="glass-panel p-8 rounded-3xl space-y-4"
//       >
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             type="text"
//             placeholder="Recipient Name"
//             required
//             className="p-3 bg-luxury-card rounded-xl border text-white"
//             onChange={(e) =>
//               setShipping({ ...shipping, recipientName: e.target.value })
//             }
//           />
//           <input
//             type="text"
//             placeholder="Phone Number"
//             required
//             className="p-3 bg-luxury-card rounded-xl border text-white"
//             onChange={(e) =>
//               setShipping({ ...shipping, phone: e.target.value })
//             }
//           />
//         </div>
//         <input
//           type="text"
//           placeholder="Street Address"
//           required
//           className="w-full p-3 bg-luxury-card rounded-xl border text-white"
//           onChange={(e) => setShipping({ ...shipping, street: e.target.value })}
//         />
//         <div className="grid grid-cols-3 gap-4">
//           <input
//             type="text"
//             placeholder="City"
//             required
//             className="p-3 bg-luxury-card rounded-xl border text-white"
//             onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
//           />
//           <input
//             type="text"
//             placeholder="State"
//             required
//             className="p-3 bg-luxury-card rounded-xl border text-white"
//             onChange={(e) =>
//               setShipping({ ...shipping, state: e.target.value })
//             }
//           />
//           <input
//             type="text"
//             placeholder="Pincode"
//             required
//             className="p-3 bg-luxury-card rounded-xl border text-white"
//             onChange={(e) =>
//               setShipping({ ...shipping, pincode: e.target.value })
//             }
//           />
//         </div>
//         <input
//           type="date"
//           required
//           className="w-full p-3 bg-luxury-card rounded-xl border text-white"
//           onChange={(e) =>
//             setShipping({ ...shipping, deliveryDate: e.target.value })
//           }
//         />
//         <button
//           type="submit"
//           className="w-full py-4 bg-luxury-pink text-white font-bold rounded-xl"
//         >
//           Generate UPI QR Code (₹{getCartTotal()})
//         </button>
//       </form>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [shipping, setShipping] = useState({
    recipientName: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    deliveryDate: "",
    deliveryTimeSlot: "18:00 - 21:00",
  });
  const [upiData, setUpiData] = useState(null);
  const [utrNumber, setUtrNumber] = useState("");

  // Check if user has token before allowing checkout
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Pehle login karein taaki aapka order track ho sake!");
      navigate("/login");
    }
  }, [navigate]);

  const handleInitialCheckout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/payments/create-upi-order", {
        items: cart,
        totalAmount: getCartTotal(),
        shippingAddress: shipping,
      });
      setUpiData(data);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        alert("Session expired. Please login again.");
        navigate("/login");
      } else {
        alert(err.response?.data?.message || "Checkout Error");
      }
    }
  };

  const handleConfirmPayment = async () => {
    try {
      await API.post("/payments/verify-upi", {
        dbOrderId: upiData.dbOrderId,
        upiRefNumber: utrNumber,
      });
      clearCart();
      alert("🎉 Payment Reference Submitted! Order is now being verified.");
      navigate(`/track-order?orderId=${upiData.dbOrderId}`);
    } catch (err) {
      alert("Error submitting UTR reference");
    }
  };

  if (upiData) {
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(upiData.upiDeepLink)}`;

    return (
      <div className="max-w-md mx-auto px-4 py-12 text-center">
        <div className="glass-panel p-8 rounded-3xl space-y-6">
          <h2 className="text-2xl font-black text-white">Scan & Pay via UPI</h2>
          <p className="text-neutral-400 text-sm">
            Scan this QR using GPay, PhonePe, or Paytm
          </p>

          <div className="bg-white p-4 inline-block rounded-2xl">
            <img
              src={qrCodeUrl}
              alt="UPI QR Code"
              className="w-48 h-48 mx-auto"
            />
          </div>

          <div className="text-left bg-luxury-card p-4 rounded-xl border border-luxury-border space-y-1">
            <p className="text-xs text-neutral-400">
              UPI ID:{" "}
              <span className="text-white font-bold">{upiData.upiId}</span>
            </p>
            <p className="text-xs text-neutral-400">
              Amount:{" "}
              <span className="text-luxury-pink font-bold text-lg">
                ₹{upiData.amount}
              </span>
            </p>
          </div>

          <div className="space-y-3 text-left">
            <label className="text-xs font-bold text-neutral-300">
              Enter UPI Transaction Reference (UTR / UPI Ref No):
            </label>
            <input
              type="text"
              placeholder="e.g. 435678912345"
              value={utrNumber}
              onChange={(e) => setUtrNumber(e.target.value)}
              className="w-full p-3 rounded-xl bg-luxury-card border border-luxury-border text-white text-sm"
              required
            />
          </div>

          {/* <button
            onClick={handleConfirmPayment}
            className="w-full py-4 bg-luxury-pink text-white font-bold rounded-xl shadow-lg"
          >
            I Have Paid — Confirm My Order
          </button> */}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-extrabold text-white mb-6">
        Delivery & Direct UPI Payment
      </h2>
      <form
        onSubmit={handleInitialCheckout}
        className="glass-panel p-8 rounded-3xl space-y-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Recipient Name"
            required
            className="p-3 bg-luxury-card rounded-xl border text-white"
            onChange={(e) =>
              setShipping({ ...shipping, recipientName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Phone Number"
            required
            className="p-3 bg-luxury-card rounded-xl border text-white"
            onChange={(e) =>
              setShipping({ ...shipping, phone: e.target.value })
            }
          />
        </div>
        <input
          type="text"
          placeholder="Street Address"
          required
          className="w-full p-3 bg-luxury-card rounded-xl border text-white"
          onChange={(e) => setShipping({ ...shipping, street: e.target.value })}
        />
        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="City"
            required
            className="p-3 bg-luxury-card rounded-xl border text-white"
            onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
          />
          <input
            type="text"
            placeholder="State"
            required
            className="p-3 bg-luxury-card rounded-xl border text-white"
            onChange={(e) =>
              setShipping({ ...shipping, state: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Pincode"
            required
            className="p-3 bg-luxury-card rounded-xl border text-white"
            onChange={(e) =>
              setShipping({ ...shipping, pincode: e.target.value })
            }
          />
        </div>
        <input
          type="date"
          required
          className="w-full p-3 bg-luxury-card rounded-xl border text-white"
          onChange={(e) =>
            setShipping({ ...shipping, deliveryDate: e.target.value })
          }
        />
        <button
          type="submit"
          className="w-full py-4 bg-luxury-pink text-white font-bold rounded-xl"
        >
          Generate UPI QR Code (₹{getCartTotal()})
        </button>
      </form>
    </div>
  );
};
