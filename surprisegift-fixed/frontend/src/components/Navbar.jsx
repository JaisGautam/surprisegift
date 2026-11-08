// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { ShoppingCart, Gift, Sparkles, Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Packages", path: "/packages" },
//     { name: "Shop", path: "/shop" },
//     { name: "Corporate Gifting", path: "/corporate-gifting" },
//     { name: "Track Order", path: "/track-order" },
//     { name: "Contact Us", path: "/contact-us" },
//   ];

//   const menuVariants = {
//     closed: { x: "100%", opacity: 0 },
//     open: {
//       x: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 300, damping: 30 },
//     },
//   };

//   return (
//     <nav className="bg-[#0f0f1a]/90 backdrop-blur-lg border-b border-white/10 text-white sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//         {/* LOGO */}
//         <Link to="/" className="flex items-center gap-3 group z-50">
//           <div className="relative">
//             <div className="absolute inset-0 bg-pink-500 blur-md opacity-40 group-hover:opacity-70 transition duration-500 rounded-2xl"></div>
//             <div className="relative bg-gradient-to-tr from-pink-600 via-purple-500 to-indigo-500 p-2 rounded-xl border border-white/20 shadow-lg group-hover:scale-105 transition duration-300">
//               <Gift size={22} className="text-white drop-shadow-md" />
//             </div>
//           </div>
//           <div className="flex flex-col">
//             <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-pink-400 via-purple-300 to-pink-400 bg-clip-text text-transparent tracking-tighter drop-shadow-sm flex items-center gap-1">
//               MysticBox <Sparkles size={14} className="text-yellow-400" />
//             </span>
//             <span className="text-[9px] text-gray-400 uppercase tracking-widest font-semibold ml-1">
//               Premium Surprises
//             </span>
//           </div>
//         </Link>

//         {/* DESKTOP MENU */}
//         <div className="hidden lg:flex items-center gap-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               className={`text-sm font-semibold transition-colors relative group ${
//                 location.pathname === link.path
//                   ? "text-pink-400"
//                   : "text-gray-300 hover:text-pink-400"
//               }`}
//             >
//               {link.name}
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           ))}
//         </div>

//         {/* RIGHT SIDE ICONS */}
//         <div className="flex items-center gap-4 z-50">
//           <Link
//             to="/cart"
//             className="relative p-2 bg-white/5 rounded-full hover:bg-white/10 transition group"
//           >
//             <ShoppingCart
//               size={20}
//               className="group-hover:text-pink-400 transition"
//             />
//           </Link>

//           <Link
//             to="/login"
//             className="hidden sm:block px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-105 transition shadow-lg"
//           >
//             Login
//           </Link>

//           {/* MOBILE MENU TOGGLE BUTTON */}
//           <button
//             className="lg:hidden p-2 bg-white/5 rounded-lg text-white"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU DRAWER */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial="closed"
//             animate="open"
//             exit="closed"
//             variants={menuVariants}
//             className="absolute top-full left-0 w-full h-[calc(100vh-70px)] bg-[#0f0f1a] border-t border-white/10 lg:hidden flex flex-col px-6 py-6 space-y-2 overflow-y-auto"
//           >
//             {navLinks.map((link, index) => (
//               <motion.div
//                 key={link.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Link
//                   to={link.path}
//                   onClick={() => setIsOpen(false)}
//                   className={`block py-3 text-lg font-bold border-b border-white/5 ${
//                     location.pathname === link.path
//                       ? "text-pink-400"
//                       : "text-white hover:text-pink-400"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { ShoppingCart, Gift, Sparkles, Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Packages", path: "/packages" },
//     // { name: "Shop", path: "/shop" },
//     { name: "Corporate Gifting", path: "/corporate-gifting" },
//     { name: "Track Order", path: "/track-order" },
//     { name: "Contact Us", path: "/contact-us" },
//   ];

//   const menuVariants = {
//     closed: { x: "100%", opacity: 0 },
//     open: {
//       x: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 300, damping: 30 },
//     },
//   };

//   return (
//     <nav className="bg-white/90 backdrop-blur-lg border-b border-gray-200 text-gray-800 sticky top-0 z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//         {/* LOGO */}
//         <Link to="/" className="flex items-center gap-3 group z-50">
//           <div className="relative">
//             <div className="absolute inset-0 bg-pink-500 blur-md opacity-30 group-hover:opacity-50 transition duration-500 rounded-2xl"></div>
//             <div className="relative bg-gradient-to-tr from-pink-600 via-purple-500 to-indigo-500 p-2 rounded-xl border border-white/50 shadow-md group-hover:scale-105 transition duration-300">
//               <Gift size={22} className="text-white drop-shadow-md" />
//             </div>
//           </div>
//           <div className="flex flex-col">
//             <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent tracking-tighter flex items-center gap-1">
//               MysticBox <Sparkles size={14} className="text-yellow-500" />
//             </span>
//             <span className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold ml-1">
//               Premium Surprises
//             </span>
//           </div>
//         </Link>

//         {/* DESKTOP MENU */}
//         <div className="hidden lg:flex items-center gap-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               className={`text-sm font-semibold transition-colors relative group ${
//                 location.pathname === link.path
//                   ? "text-pink-600"
//                   : "text-gray-600 hover:text-pink-600"
//               }`}
//             >
//               {link.name}
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           ))}
//         </div>

//         {/* RIGHT SIDE ICONS */}
//         {/* <div className="flex items-center gap-4 z-50">
//           <Link
//             to="/cart"
//             className="relative p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition group"
//           >
//             <ShoppingCart
//               size={20}
//               className="text-gray-700 group-hover:text-pink-600 transition"
//             />
//           </Link>

//           <Link
//             to="/login"
//             className="hidden sm:block px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-105 transition shadow-md"
//           >
//             Login
//           </Link>

//           {/* MOBILE MENU TOGGLE BUTTON */}
//           <button
//             className="lg:hidden p-2 bg-gray-100 rounded-lg text-gray-800"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         {/* </div> */} */}

//         {/* RIGHT SIDE ICONS */}
//         <div className="flex items-center gap-2 sm:gap-4 z-50">
//           {/* Cart Icon */}
//           <Link to="/cart" className="relative p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition group">
//             <ShoppingCart size={20} className="text-gray-700 group-hover:text-pink-600 transition" />
//           </Link>

//           {/* Login Button (Mobile par bhi dikhega) */}
//           <Link to="/login" className="px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-bold rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-105 transition shadow-md whitespace-nowrap">
//             Login
//           </Link>

//           {/* MOBILE MENU TOGGLE BUTTON */}
//           <button
//             className="lg:hidden p-2 bg-gray-100 rounded-lg text-gray-800"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
// </div>
//       {/* MOBILE MENU DRAWER */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial="closed"
//             animate="open"
//             exit="closed"
//             variants={menuVariants}
//             className="absolute top-full left-0 w-full h-[calc(100vh-70px)] bg-white border-t border-gray-100 lg:hidden flex flex-col px-6 py-6 space-y-2 overflow-y-auto shadow-xl"
//           >
//             {navLinks.map((link, index) => (
//               <motion.div
//                 key={link.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Link
//                   to={link.path}
//                   onClick={() => setIsOpen(false)}
//                   className={`block py-3 text-lg font-bold border-b border-gray-100 ${
//                     location.pathname === link.path
//                       ? "text-pink-600"
//                       : "text-gray-800 hover:text-pink-600"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, Gift, Sparkles, Menu, X, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext"; // 🔥 AuthContext import kiya

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // 🔥 AuthContext se user ki details nikali
  const { user, logout } = useAuth();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Packages", path: "/packages" },
    { name: "Corporate Gifting", path: "/corporate-gifting" },
    { name: "Track Order", path: "/track-order" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const menuVariants = {
    closed: { x: "100%", opacity: 0 },
    open: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return (
    <nav className="bg-white/90 backdrop-blur-lg border-b border-gray-200 text-gray-800 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group z-50">
          <div className="relative">
            <div className="absolute inset-0 bg-pink-500 blur-md opacity-30 group-hover:opacity-50 transition duration-500 rounded-2xl"></div>
            <div className="relative bg-gradient-to-tr from-pink-600 via-purple-500 to-indigo-500 p-2 rounded-xl border border-white/50 shadow-md group-hover:scale-105 transition duration-300">
              <Gift size={22} className="text-white drop-shadow-md" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent tracking-tighter flex items-center gap-1">
              MysticBox <Sparkles size={14} className="text-yellow-500" />
            </span>
            <span className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold ml-1">
              Premium Surprises
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-semibold transition-colors relative group ${
                location.pathname === link.path
                  ? "text-pink-600"
                  : "text-gray-600 hover:text-pink-600"
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE ICONS */}
        <div className="flex items-center gap-2 sm:gap-4 z-50">
          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition group"
          >
            <ShoppingCart
              size={20}
              className="text-gray-700 group-hover:text-pink-600 transition"
            />
          </Link>

          {/* 🔥 USER LOGIC: Agar login hai toh Profile, warna Login button */}
          {user ? (
            <div className="flex items-center gap-2">
              {/* User Profile Avatar (Pehla akshar) */}
              <Link
                to="/profile"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 text-white flex items-center justify-center font-bold text-sm shadow-md border-2 border-white"
              >
                {user.name ? (
                  user.name.charAt(0).toUpperCase()
                ) : (
                  <User size={16} />
                )}
              </Link>
              {/* Logout Button (Optional) */}
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="text-xs font-semibold text-gray-500 hover:text-red-500 hidden sm:block"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-bold rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-105 transition shadow-md whitespace-nowrap"
            >
              Login
            </Link>
          )}

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button
            className="lg:hidden p-2 bg-gray-100 rounded-lg text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-full left-0 w-full h-[calc(100vh-70px)] bg-white border-t border-gray-100 lg:hidden flex flex-col px-6 py-6 space-y-2 overflow-y-auto shadow-xl"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 text-lg font-bold border-b border-gray-100 ${
                    location.pathname === link.path
                      ? "text-pink-600"
                      : "text-gray-800 hover:text-pink-600"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
