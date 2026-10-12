// // // // import React from "react";
// // // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // // import { AuthProvider } from "./context/AuthContext";
// // // // import { CartProvider } from "./context/CartContext";
// // // // import { Navbar } from "./components/Navbar";
// // // // import { Footer } from "./components/Footer";
// // // // import Home from "./pages/Home";
// // // // import { Shop } from "./pages/Shop";
// // // // import { Cart } from "./pages/Cart";
// // // // // import { Checkout } from "./pages/Checkout";
// // // // import { TrackOrder } from "./pages/TrackOrder";
// // // // import { SpecialSurprise } from "./pages/SpecialSurprise";
// // // // import { EmotionReward } from "./pages/EmotionReward";
// // // // import { AdminDashboard } from "./pages/AdminDashboard";
// // // // import { Login } from "./pages/Login";
// // // // import { ProtectedRoute } from "./components/ProtectedRoute";

// // // // export default function App() {
// // // //   return (
// // // //     <AuthProvider>
// // // //       <CartProvider>
// // // //         <Router>
// // // //           <div className="min-h-screen bg-luxury-bg text-neutral-100 flex flex-col">
// // // //             <Navbar />
// // // //             <main className="flex-grow">
// // // //               <Routes>
// // // //                 <Route path="/" element={<Home />} />
// // // //                 <Route path="/shop" element={<Shop />} />
// // // //                 <Route path="/cart" element={<Cart />} />
// // // //                 <Route path="/checkout" element={<Checkout />} />
// // // //                 <Route path="/track-order" element={<TrackOrder />} />
// // // //                 <Route path="/special-surprise" element={<SpecialSurprise />} />
// // // //                 <Route path="/emotion-reward" element={<EmotionReward />} />
// // // //                 <Route path="/login" element={<Login />} />
// // // //                 <Route
// // // //                   path="/admin"
// // // //                   element={
// // // //                     <ProtectedRoute adminOnly={true}>
// // // //                       <AdminDashboard />
// // // //                     </ProtectedRoute>
// // // //                   }
// // // //                 />
// // // //               </Routes>
// // // //             </main>
// // // //             <Footer />
// // // //           </div>
// // // //         </Router>
// // // //       </CartProvider>
// // // //     </AuthProvider>
// // // //   );
// // // // }

// // // // // import React from "react";
// // // // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // // // import SurpriseGiftApp from "./pages/SurpriseGiftApp";

// // // // // function App() {
// // // // //   return (
// // // // //     <Router>
// // // // //       <Routes>
// // // // //         {/* Saare 9 pages wala master viewer ab root par chalega */}
// // // // //         <Route path="/" element={<SurpriseGiftApp />} />
// // // // //       </Routes>
// // // // //     </Router>
// // // // //   );
// // // // // }

// // // // // // 💥 Yahan correction hai: "default export" nahi, "export default" likhna hai
// // // // // export default App;
// // // // // //

// // // // // import React from "react";
// // // // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // // // import Layout from "./components/Layout";
// // // // // import Home from "./pages/Home";
// // // // // import Packages from "./pages/Packages";
// // // // // import ProductView from "./pages/ProductView";
// // // // // import Checkout from "./pages/Checkout";
// // // // // import Payment from "./pages/Payment";
// // // // // import OrderSuccess from "./pages/OrderSuccess";
// // // // // import TrackOrder from "./pages/TrackOrder";
// // // // // import EmotionReward from "./pages/EmotionReward";
// // // // // import Shop from "./pages/Shop";

// // // // // export default function App() {
// // // // //   return (
// // // // //     <Router>
// // // // //       <Layout>
// // // // //         <Routes>
// // // // //           <Route path="/" element={<Home />} />
// // // // //           <Route path="/packages" element={<Packages />} />
// // // // //           <Route path="/product/:id" element={<ProductView />} />
// // // // //           <Route path="/shop" element={<Shop />} />
// // // // //           <Route path="/checkout" element={<Checkout />} />
// // // // //           <Route path="/payment" element={<Payment />} />
// // // // //           <Route path="/order-success" element={<OrderSuccess />} />
// // // // //           <Route path="/track-order" element={<TrackOrder />} />
// // // // //           <Route path="/emotion-reward" element={<EmotionReward />} />
// // // // //         </Routes>
// // // // //       </Layout>
// // // // //     </Router>
// // // // //   );
// // // // // }

// // // import React from "react";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // import { AuthProvider } from "./context/AuthContext";
// // // import { CartProvider } from "./context/CartContext";
// // // import { Navbar } from "./components/Navbar";
// // // import { Footer } from "./components/Footer";
// // // import Home from "./pages/Home";
// // // import { Shop } from "./pages/Shop";
// // // import { Cart } from "./pages/Cart";
// // // import { Checkout } from "./pages/Checkout"; // <-- Yahan import enable kar diya
// // // import { TrackOrder } from "./pages/TrackOrder";
// // // import { SpecialSurprise } from "./pages/SpecialSurprise";
// // // import { EmotionReward } from "./pages/EmotionReward";
// // // import { AdminDashboard } from "./pages/AdminDashboard";
// // // import { Login } from "./pages/Login";
// // // import { ProtectedRoute } from "./components/ProtectedRoute";

// // // export default function App() {
// // //   return (
// // //     <AuthProvider>
// // //       <CartProvider>
// // //         <Router>
// // //           <div className="min-h-screen bg-luxury-bg text-neutral-100 flex flex-col">
// // //             <Navbar />
// // //             <main className="flex-grow">
// // //               <Routes>
// // //                 <Route path="/" element={<Home />} />
// // //                 <Route path="/shop" element={<Shop />} />
// // //                 <Route path="/cart" element={<Cart />} />
// // //                 <Route path="/checkout" element={<Checkout />} />
// // //                 <Route path="/track-order" element={<TrackOrder />} />
// // //                 <Route path="/special-surprise" element={<SpecialSurprise />} />
// // //                 <Route path="/emotion-reward" element={<EmotionReward />} />
// // //                 <Route path="/login" element={<Login />} />
// // //                 <Route
// // //                   path="/admin"
// // //                   element={
// // //                     <ProtectedRoute adminOnly={true}>
// // //                       <AdminDashboard />
// // //                     </ProtectedRoute>
// // //                   }
// // //                 />
// // //               </Routes>
// // //             </main>
// // //             <Footer />
// // //           </div>
// // //         </Router>
// // //       </CartProvider>
// // //     </AuthProvider>
// // //   );
// // // }

// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import { AuthProvider } from "./context/AuthContext";
// // import { CartProvider } from "./context/CartContext";
// // import { Navbar } from "./components/Navbar";
// // import { Footer } from "./components/Footer";
// // import Layout from "./components/Layout";

// // import Home from "./pages/Home";
// // import Packages from "./pages/Packages";
// // import ProductView from "./pages/ProductView";
// // import { Shop } from "./pages/Shop";
// // import { Cart } from "./pages/Cart";
// // import { Checkout } from "./pages/Checkout";
// // import { TrackOrder } from "./pages/TrackOrder";
// // import { EmotionReward } from "./pages/EmotionReward";
// // import { AdminDashboard } from "./pages/AdminDashboard";
// // import { Login } from "./pages/Login";
// // import { ProtectedRoute } from "./components/ProtectedRoute";

// // export default function App() {
// //   return (
// //     <AuthProvider>
// //       <CartProvider>
// //         <Router>
// //           <Layout>
// //             <div className="min-h-screen flex flex-col justify-between">
// //               <Navbar />
// //               <main className="flex-grow">
// //                 <Routes>
// //                   <Route path="/" element={<Home />} />
// //                   <Route path="/packages" element={<Packages />} />
// //                   <Route path="/product/:id" element={<ProductView />} />
// //                   <Route path="/shop" element={<Shop />} />
// //                   <Route path="/cart" element={<Cart />} />
// //                   <Route path="/checkout" element={<Checkout />} />
// //                   <Route path="/track-order" element={<TrackOrder />} />
// //                   <Route path="/emotion-reward" element={<EmotionReward />} />
// //                   <Route path="/login" element={<Login />} />
// //                   <Route
// //                     path="/admin"
// //                     element={
// //                       <ProtectedRoute adminOnly={true}>
// //                         <AdminDashboard />
// //                       </ProtectedRoute>
// //                     }
// //                   />
// //                 </Routes>
// //               </main>
// //               <Footer />
// //             </div>
// //           </Layout>
// //         </Router>
// //       </CartProvider>
// //     </AuthProvider>
// //   );
// // }

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import { CartProvider } from "./context/CartContext";
// import { Navbar } from "./components/Navbar";
// import { Footer } from "./components/Footer";
// import Layout from "./components/Layout";

// import Home from "./pages/Home";
// import Packages from "./pages/Packages";
// import ProductView from "./pages/ProductView";
// import { Shop } from "./pages/Shop";
// import { Cart } from "./pages/Cart";
// import { Checkout } from "./pages/Checkout";
// import { TrackOrder } from "./pages/TrackOrder";
// import { EmotionReward } from "./pages/EmotionReward";
// import { AdminDashboard } from "./pages/AdminDashboard";
// import { Login } from "./pages/Login";
// import { ProtectedRoute } from "./components/ProtectedRoute";

// export default function App() {
//   return (
//     <AuthProvider>
//       <CartProvider>
//         <Router>
//           <Layout>
//             <div className="min-h-screen flex flex-col justify-between">
//               <Navbar />
//               <main className="flex-grow">
//                 <Routes>
//                   <Route path="/" element={<Home />} />
//                   <Route path="/packages" element={<Packages />} />
//                   <Route path="/product/:id" element={<ProductView />} />
//                   <Route path="/shop" element={<Shop />} />
//                   <Route path="/cart" element={<Cart />} />
//                   <Route path="/checkout" element={<Checkout />} />
//                   <Route path="/track-order" element={<TrackOrder />} />
//                   <Route path="/emotion-reward" element={<EmotionReward />} />
//                   <Route path="/login" element={<Login />} />
//                   <Route
//                     path="/admin"
//                     element={
//                       <ProtectedRoute adminOnly={true}>
//                         <AdminDashboard />
//                       </ProtectedRoute>
//                     }
//                   />
//                 </Routes>
//               </main>
//               <Footer />
//             </div>
//           </Layout>
//         </Router>
//       </CartProvider>
//     </AuthProvider>
//   );
// }

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Packages from "./pages/Packages";
import ProductView from "./pages/ProductView";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import TrackOrder from "./pages/TrackOrder";
import { EmotionReward } from "./pages/EmotionReward";
import { AdminDashboard } from "./pages/AdminDashboard";
import { Login } from "./pages/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Layout>
            <div className="min-h-screen flex flex-col justify-between">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/packages" element={<Packages />} />
                  <Route path="/product/:id" element={<ProductView />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/track-order" element={<TrackOrder />} />
                  <Route path="/emotion-reward" element={<EmotionReward />} />
                  <Route path="/login" element={<Login />} />
                  <Route
                    path="/admin"
                    element={
                      <ProtectedRoute adminOnly={true}>
                        <AdminDashboard />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </main>
              <Footer />
            </div>
          </Layout>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}
