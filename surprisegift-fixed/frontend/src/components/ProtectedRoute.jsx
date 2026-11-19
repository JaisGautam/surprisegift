// // // import React from "react";
// // // import { Navigate } from "react-router-dom";
// // // import { useAuth } from "../context/AuthContext";

// // // export const ProtectedRoute = ({ children, adminOnly = false }) => {
// // //   const { user, loading } = useAuth();

// // //   if (loading)
// // //     return <div className="text-center py-20 text-white">Loading...</div>;
// // //   if (!user) return <Navigate to="/login" replace />;
// // //   if (adminOnly && user.role !== "admin") return <Navigate to="/" replace />;

// // //   return children;
// // // };

// // import React from "react";
// // import { Navigate } from "react-router-dom";
// // import { useAuth } from "../context/AuthContext";

// // export const ProtectedRoute = ({ children, adminOnly = false }) => {
// //   const { user, loading } = useAuth();

// //   // 🔥 1. Agar AuthContext check kar raha hai (loading me hai), toh redirect mat karo
// //   if (loading) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// //         <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-pink-500"></div>
// //       </div>
// //     );
// //   }

// //   // 🔥 2. Agar user hai hi nahi, toh hi login page par bhejo
// //   if (!user) {
// //     return <Navigate to="/admin-login" replace />;
// //   }

// //   // 🔥 3. Agar Admin page hai, lekin user ka role admin nahi hai, toh Home par bhejo
// //   if (adminOnly && user.role !== "admin") {
// //     return <Navigate to="/" replace />;
// //   }

// //   // 🔥 4. Sab sahi hai toh page load hone do
// //   return children;
// // };

// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// // export const ProtectedRoute = ({ children, adminOnly = false }) => {

// //   const { user, loading } = useAuth();

// //   // Auth load ho raha hai toh wait karo
// //   if (loading) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center">
// //         <p className="text-gray-500">Loading...</p>
// //       </div>
// //     );
// //   }

// //   // Login nahi hai
// //   if (!user) {
// //     return <Navigate to="/admin" replace />;
// //   }

// //   // Admin-only route hai par user admin nahi hai
// //   if (adminOnly && user.role !== "admin") {
// //     return <Navigate to="/admin" replace />;
// //   }

// //   return children;
// // };

// import { Navigate } from "react-router-dom";

// const AdminRoute = ({ children }) => {
//   const isAdmin = localStorage.getItem("adminAuth") === "true";
//   if (!isAdmin) return <Navigate to="/" replace />;
//   return children;
// };

// export default AdminRoute;

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin" replace />;
  }

  if (adminOnly && user.role !== "admin") {
    return <Navigate to="/admin" replace />;
  }

  return children;
};
