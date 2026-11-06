// // import React from "react";
// // import { Gift } from "lucide-react";
// // import { Link } from "react-router-dom";

// // export const Footer = () => {
// //   return (
// //     <footer className="bg-[#0f0f1a] border-t border-gray-800 mt-20 text-gray-400 py-12 px-4">
// //       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
// //         {/* Brand */}
// //         <div>
// //           <Link
// //             to="/"
// //             className="flex items-center gap-2 text-2xl font-black text-white mb-4"
// //           >
// //             <Gift className="text-pink-500" /> MysticBox
// //           </Link>
// //           <p className="text-sm">“Because Every Gift Tells a Story.”</p>
// //         </div>

// //         {/* Quick Links */}
// //         <div>
// //           <h4 className="text-white font-bold mb-4">Quick Links</h4>
// //           <ul className="space-y-2 text-sm">
// //             <li>
// //               <Link to="/packages" className="hover:text-pink-400 transition">
// //                 Explore Packages
// //               </Link>
// //             </li>
// //             <li>
// //               <Link to="/shop" className="hover:text-pink-400 transition">
// //                 Shop Gifts
// //               </Link>
// //             </li>
// //             <li>
// //               <Link
// //                 to="/track-order"
// //                 className="hover:text-pink-400 transition"
// //               >
// //                 Track My Order
// //               </Link>
// //             </li>
// //             <li>
// //               <Link
// //                 to="/corporate-gifting"
// //                 className="hover:text-pink-400 transition"
// //               >
// //                 Corporate Gifting
// //               </Link>
// //             </li>
// //           </ul>
// //         </div>

// //         {/* Legal & Support */}
// //         <div>
// //           <h4 className="text-white font-bold mb-4">Support & Legal</h4>
// //           <ul className="space-y-2 text-sm">
// //             <li>
// //               <Link
// //                 to="/privacy-policy"
// //                 className="hover:text-pink-400 transition"
// //               >
// //                 Privacy Policy
// //               </Link>
// //             </li>
// //             <li>
// //               <Link
// //                 to="/terms-conditions"
// //                 className="hover:text-pink-400 transition"
// //               >
// //                 Terms & Conditions
// //               </Link>
// //             </li>
// //             <li>
// //               <Link
// //                 to="/shipping-refund"
// //                 className="hover:text-pink-400 transition"
// //               >
// //                 Shipping & Refund
// //               </Link>
// //             </li>
// //             <li>
// //               <Link to="/contact-us" className="hover:text-pink-400 transition">
// //                 Contact Us
// //               </Link>
// //             </li>
// //           </ul>
// //         </div>

// //         {/* Contact */}
// //         <div>
// //           <h4 className="text-white font-bold mb-4">Contact Us</h4>
// //           <p className="text-sm mb-2">WhatsApp: +91 8858176643</p>
// //           <p className="text-sm">Email: support@mysticboxgifts.in</p>
// //         </div>
// //       </div>
// //       <div className="text-center text-xs mt-12 pt-6 border-t border-gray-800">
// //         © 2026 MysticBox Gifts. All Rights Reserved.
// //       </div>
// //     </footer>
// //   );
// // };

// import React from "react";
// import { Gift, MapPin, ShieldCheck, Lock } from "lucide-react";
// import { Link } from "react-router-dom";

// export const Footer = () => {
//   return (
//     <footer className="bg-[#0f0f1a] border-t border-gray-800 mt-20 text-gray-400 py-12 px-4">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Brand & Address */}
//         <div>
//           <Link
//             to="/"
//             className="flex items-center gap-2 text-2xl font-black text-white mb-4"
//           >
//             <Gift className="text-pink-500" /> MysticBox
//           </Link>
//           <p className="text-sm mb-4">“Because Every Gift Tells a Story.”</p>

//           {/* Business Address for Trust */}
//           <div className="flex items-start gap-2 text-sm text-gray-400">
//             <MapPin size={18} className="text-pink-500 shrink-0 mt-1" />
//             <p>
//               MysticBox Gifts,
//               <br />
//               Wagle Estate, Thane West,
//               <br />
//               Maharashtra - 400604, India
//             </p>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-white font-bold mb-4">Quick Links</h4>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <Link to="/packages" className="hover:text-pink-400 transition">
//                 Explore Packages
//               </Link>
//             </li>
//             <li>
//               <Link to="/shop" className="hover:text-pink-400 transition">
//                 Shop Gifts
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/track-order"
//                 className="hover:text-pink-400 transition"
//               >
//                 Track My Order
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/corporate-gifting"
//                 className="hover:text-pink-400 transition"
//               >
//                 Corporate Gifting
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Legal & Support */}
//         <div>
//           <h4 className="text-white font-bold mb-4">Support & Legal</h4>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <Link
//                 to="/privacy-policy"
//                 className="hover:text-pink-400 transition"
//               >
//                 Privacy Policy
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/terms-conditions"
//                 className="hover:text-pink-400 transition"
//               >
//                 Terms & Conditions
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/shipping-refund"
//                 className="hover:text-pink-400 transition"
//               >
//                 Shipping & Refund
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact-us" className="hover:text-pink-400 transition">
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Contact & Payment Trust */}
//         <div>
//           <h4 className="text-white font-bold mb-4">Get in Touch</h4>
//           <p className="text-sm mb-2">WhatsApp: +91 8858176643</p>
//           <p className="text-sm mb-6">Email: support@mysticboxgifts.in</p>

//           {/* 🔥 Razorpay Trust Badges */}
//           <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
//             <div className="flex items-center gap-2 mb-2 text-green-400">
//               <ShieldCheck size={18} />
//               <span className="text-xs font-bold text-white uppercase tracking-wider">
//                 100% Secure Payments
//               </span>
//             </div>
//             <p className="text-[10px] text-gray-500 mb-3">
//               We use Razorpay for secure transactions.
//             </p>

//             {/* Payment Icons (Simple Text/Badges for now) */}
//             <div className="flex gap-2 items-center flex-wrap">
//               <span className="bg-white text-blue-900 text-[10px] font-bold px-2 py-1 rounded">
//                 VISA
//               </span>
//               <span className="bg-white text-red-600 text-[10px] font-bold px-2 py-1 rounded">
//                 MasterCard
//               </span>
//               <span className="bg-white text-gray-800 text-[10px] font-bold px-2 py-1 rounded">
//                 UPI
//               </span>
//               <span className="bg-[#0b5cd5] text-white text-[10px] font-bold px-2 py-1 rounded">
//                 Razorpay
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="max-w-7xl mx-auto text-center text-xs mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
//         <p>© 2026 MysticBox Gifts. All Rights Reserved.</p>
//         <div className="flex items-center gap-1 text-gray-500">
//           <Lock size={12} /> Secure SSL Encrypted Website
//         </div>
//       </div>
//     </footer>
//   );
// };

import React from "react";
import { Gift, MapPin, ShieldCheck, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#0f0f1a] border-t border-gray-800 mt-20 text-gray-400 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & Address */}
        <div>
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-black text-white mb-4"
          >
            <Gift className="text-pink-500" /> MysticBox
          </Link>
          <p className="text-sm mb-4">“Because Every Gift Tells a Story.”</p>

          {/* Business Address for Trust */}
          <div className="flex items-start gap-2 text-sm text-gray-400">
            <MapPin size={18} className="text-pink-500 shrink-0 mt-1" />
            <p>
              MysticBox Gifts,
              <br />
              Wagle Estate, Thane West,
              <br />
              Maharashtra - 400604, India
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/packages" className="hover:text-pink-400 transition">
                Explore Packages
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-pink-400 transition">
                Shop Gifts
              </Link>
            </li>
            <li>
              <Link
                to="/track-order"
                className="hover:text-pink-400 transition"
              >
                Track My Order
              </Link>
            </li>
            <li>
              <Link
                to="/corporate-gifting"
                className="hover:text-pink-400 transition"
              >
                Corporate Gifting
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal & Support */}
        <div>
          <h4 className="text-white font-bold mb-4">Support & Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-pink-400 transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-conditions"
                className="hover:text-pink-400 transition"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/shipping-refund"
                className="hover:text-pink-400 transition"
              >
                Shipping & Refund
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-pink-400 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Payment Trust */}
        <div>
          <h4 className="text-white font-bold mb-4">Get in Touch</h4>
          <p className="text-sm mb-2">WhatsApp: +91 8858176643</p>
          <p className="text-sm mb-6">Email: support@mysticboxgifts.in</p>

          {/* 🔥 Razorpay Trust Badges */}
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
            <div className="flex items-center gap-2 mb-2 text-green-400">
              <ShieldCheck size={18} />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                100% Secure Payments
              </span>
            </div>
            <p className="text-[10px] text-gray-500 mb-3">
              We use Razorpay for secure transactions.
            </p>

            {/* Payment Icons (Simple Text/Badges for now) */}
            <div className="flex gap-2 items-center flex-wrap">
              <span className="bg-white text-blue-900 text-[10px] font-bold px-2 py-1 rounded">
                VISA
              </span>
              <span className="bg-white text-red-600 text-[10px] font-bold px-2 py-1 rounded">
                MasterCard
              </span>
              <span className="bg-white text-gray-800 text-[10px] font-bold px-2 py-1 rounded">
                UPI
              </span>
              <span className="bg-[#0b5cd5] text-white text-[10px] font-bold px-2 py-1 rounded">
                Razorpay
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto text-center text-xs mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 MysticBox Gifts. All Rights Reserved.</p>
        <div className="flex items-center gap-1 text-gray-500">
          <Lock size={12} /> Secure SSL Encrypted Website
        </div>
      </div>
    </footer>
  );
};
