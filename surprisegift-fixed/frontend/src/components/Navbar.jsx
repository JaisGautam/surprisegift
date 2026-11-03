// // // import React from "react";
// // // import { Link } from "react-router-dom";
// // // import { ShoppingBag, Gift } from "lucide-react";
// // // import { useCart } from "../context/CartContext";
// // // import { useAuth } from "../context/AuthContext";

// // // export const Navbar = () => {
// // //   const { cart } = useCart();
// // //   const { user, logout } = useAuth();
// // //   const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

// // //   return (
// // //     <nav className="sticky top-0 z-50 glass-panel border-b border-luxury-border">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
// // //         <Link
// // //           to="/"
// // //           className="flex items-center gap-2 text-2xl font-extrabold"
// // //         >
// // //           <Gift className="text-luxury-pink w-8 h-8 animate-pulse" />
// // //           <span className="bg-gradient-to-r from-luxury-pink via-pink-400 to-purple-400 bg-clip-text text-transparent">
// // //             SurpriseGift
// // //           </span>
// // //         </Link>

// // //         <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
// // //           <Link to="/" className="hover:text-luxury-pink transition">
// // //             Home
// // //           </Link>
// // //           <Link to="/packages" className="hover:text-luxury-pink transition">
// // //             Packages
// // //           </Link>
// // //           <Link to="/shop" className="hover:text-luxury-pink transition">
// // //             Shop
// // //           </Link>
// // //           <Link to="/special-surprise" className="hover:text-luxury-pink transition">
// // //             Special Setup
// // //           </Link>
// // //           <Link to="/track-order" className="hover:text-luxury-pink transition">
// // //             Track Order
// // //           </Link>
// // //           <Link
// // //             to="/emotion-reward"
// // //             className="hover:text-luxury-pink transition"
// // //           >
// // //             Emotion Rewards
// // //           </Link>
// // //         </div>

// // //         <div className="flex items-center gap-4">
// // //           <Link
// // //             to="/cart"
// // //             className="relative p-2 text-neutral-200 hover:text-luxury-pink transition"
// // //           >
// // //             <ShoppingBag className="w-6 h-6" />
// // //             {totalItems > 0 && (
// // //               <span className="absolute -top-1 -right-1 bg-luxury-pink text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
// // //                 {totalItems}
// // //               </span>
// // //             )}
// // //           </Link>
// // //           {user ? (
// // //             <div className="flex items-center gap-3">
// // //               {user.role === "admin" && (
// // //                 <Link
// // //                   to="/admin"
// // //                   className="px-3 py-1.5 text-xs font-semibold rounded-full bg-luxury-border text-pink-300 border border-luxury-pink/40 hover:bg-luxury-pink hover:text-white transition"
// // //                 >
// // //                   Admin
// // //                 </Link>
// // //               )}
// // //               <button
// // //                 onClick={logout}
// // //                 className="text-xs text-neutral-400 hover:text-white"
// // //               >
// // //                 Logout
// // //               </button>
// // //             </div>
// // //           ) : (
// // //             <Link
// // //               to="/login"
// // //               className="px-4 py-2 text-xs font-bold rounded-xl bg-luxury-pink text-white"
// // //             >
// // //               Login
// // //             </Link>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { ShoppingCart } from "lucide-react";

// // const Navbar = () => {
// //   return (
// //     <nav className="bg-[#0f0f1a] border-b border-gray-800 text-white sticky top-0 z-50">
// //       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
// //         {/* 🔥 LOGO SECTION */}
// //         <Link to="/" className="flex items-center gap-2">
// //           <img
// //             src="/logo.png"
// //             alt="MysticBox Logo"
// //             className="h-10 w-10 object-contain"
// //           />
// //           <span className="text-2xl font-black bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
// //             MysticBox
// //           </span>
// //         </Link>

// //         <div className="flex items-center gap-6">
// //           <Link
// //             to="/packages"
// //             className="text-sm font-semibold hover:text-pink-400"
// //           >
// //             Packages
// //           </Link>
// //           <Link
// //             to="/shop"
// //             className="text-sm font-semibold hover:text-pink-400"
// //           >
// //             Shop
// //           </Link>
// //           <Link to="/cart" className="relative">
// //             <ShoppingCart size={24} />
// //           </Link>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import { ShoppingCart, Gift, Sparkles } from "lucide-react";

// const Navbar = () => {
//   return (
//     <nav className="bg-[#0f0f1a]/90 backdrop-blur-lg border-b border-white/10 text-white sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//         {/* 🔥 WOW LOGO SECTION */}
//         <Link to="/" className="flex items-center gap-3 group">
//           {/* Glowing Icon Box */}
//           <div className="relative">
//             <div className="absolute inset-0 bg-pink-500 blur-md opacity-40 group-hover:opacity-70 transition duration-500 rounded-2xl"></div>
//             <div className="relative bg-gradient-to-tr from-pink-600 via-purple-500 to-indigo-500 p-2.5 rounded-2xl border border-white/20 shadow-lg group-hover:scale-105 transition duration-300">
//               <Gift size={26} className="text-white drop-shadow-md" />
//             </div>
//           </div>

//           {/* Premium Text Logo */}
//           <div className="flex flex-col">
//             <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-pink-400 via-purple-300 to-pink-400 bg-clip-text text-transparent tracking-tighter drop-shadow-sm flex items-center gap-1">
//               MysticBox <Sparkles size={16} className="text-yellow-400" />
//             </span>
//             <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold ml-1">
//               Premium Surprises
//             </span>
//           </div>
//         </Link>

//         {/* Navigation Links */}
//         <div className="flex items-center gap-6">
//           <Link
//             to="/packages"
//             className="text-sm font-semibold hover:text-pink-400 transition"
//           >
//             Packages
//           </Link>
//           <Link
//             to="/shop"
//             className="text-sm font-semibold hover:text-pink-400 transition"
//           >
//             Shop
//           </Link>
//           <Link
//             to="/cart"
//             className="relative hover:text-pink-400 transition p-2 bg-white/5 rounded-full hover:bg-white/10"
//           >
//             <ShoppingCart size={22} />
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Gift, Sparkles } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-[#0f0f1a]/90 backdrop-blur-lg border-b border-white/10 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* 🔥 WOW LOGO SECTION */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-pink-500 blur-md opacity-40 group-hover:opacity-70 transition duration-500 rounded-2xl"></div>
            <div className="relative bg-gradient-to-tr from-pink-600 via-purple-500 to-indigo-500 p-2.5 rounded-2xl border border-white/20 shadow-lg group-hover:scale-105 transition duration-300">
              <Gift size={26} className="text-white drop-shadow-md" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-pink-400 via-purple-300 to-pink-400 bg-clip-text text-transparent tracking-tighter drop-shadow-sm flex items-center gap-1">
              MysticBox <Sparkles size={16} className="text-yellow-400" />
            </span>
            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold ml-1">
              Premium Surprises
            </span>
          </div>
        </Link>

        {/* 🔥 SAARE MENU WAPAS ADD KIYE HAIN */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-semibold hover:text-pink-400 transition"
          >
            Home
          </Link>
          <Link
            to="/packages"
            className="text-sm font-semibold hover:text-pink-400 transition"
          >
            Packages
          </Link>
          {/* <Link
            to="/shop"
            className="text-sm font-semibold hover:text-pink-400 transition"
          >
            Shop
          </Link> */}
          <Link
            to="/special-surprise"
            className="text-sm font-semibold hover:text-pink-400 transition"
          >
            Special Setup
          </Link>
          <Link
            to="/track-order"
            className="text-sm font-semibold hover:text-pink-400 transition"
          >
            Track Order
          </Link>
          <Link
            to="/emotion-reward"
            className="text-sm font-semibold hover:text-pink-400 transition"
          >
            Emotion Rewards
          </Link>
        </div>

        {/* Cart and Login Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            className="relative hover:text-pink-400 transition p-2 bg-white/5 rounded-full hover:bg-white/10"
          >
            <ShoppingCart size={22} />
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 text-xs font-bold rounded-xl bg-pink-500 text-white hover:bg-pink-600 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
