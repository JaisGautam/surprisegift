// // // // import React from "react";
// // // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // // import { AuthProvider } from "./context/AuthContext";
// // // // import { CartProvider } from "./context/CartContext";
// // // // import Navbar from "./components/Navbar";
// // // // import Profile from "./pages/Profile";
// // // // import { Footer } from "./components/Footer";
// // // // import Layout from "./components/Layout";

// // // // // Pages

// // // // import Home from "./pages/Home";
// // // // import Packages from "./pages/Packages";
// // // // import Shop from "./pages/Shop";
// // // // import ProductView from "./pages/ProductView";
// // // // import { Cart } from "./pages/Cart";
// // // // import Checkout from "./pages/Checkout";
// // // // import TrackOrder from "./pages/TrackOrder";
// // // // import { EmotionReward } from "./pages/EmotionReward";
// // // // import { SpecialSurprise } from "./pages/SpecialSurprise";
// // // // import AdminDashboard from "./pages/AdminDashboard";
// // // // import { Login } from "./pages/Login";
// // // // import { ProtectedRoute } from "./components/ProtectedRoute";

// // // // // Naye Pages
// // // // import CorporateGifting from "./pages/CorporateGifting";
// // // // import PrivacyPolicy from "./pages/PrivacyPolicy";
// // // // import TermsConditions from "./pages/TermsConditions";
// // // // import ShippingRefund from "./pages/ShippingRefund";
// // // // import ContactUs from "./pages/ContactUs";

// // // // export default function App() {
// // // //   return (
// // // //     <AuthProvider>
// // // //       <CartProvider>
// // // //         <Router>
// // // //           <Layout>
// // // //             {/* <div className="min-h-screen flex flex-col justify-between"> */}

// // // //             <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-900">
// // // //               <Navbar />
// // // //               <main className="flex-grow">
// // // //                 <Routes>
// // // //                   <Route path="/" element={<Home />} />
// // // //                   <Route path="/packages" element={<Packages />} />
// // // //                   <Route path="/shop" element={<Shop />} />
// // // //                   <Route
// // // //                     path="/special-surprise"
// // // //                     element={<SpecialSurprise />}
// // // //                   />
// // // //                   <Route path="/product/:id" element={<ProductView />} />
// // // //                   <Route path="/cart" element={<Cart />} />
// // // //                   <Route path="/checkout" element={<Checkout />} />
// // // //                   <Route path="/track-order" element={<TrackOrder />} />
// // // //                   <Route path="/emotion-reward" element={<EmotionReward />} />
// // // //                   <Route path="/login" element={<Login />} />
// // // //                   <Route path="/profile" element={<Profile />} />
// // // //                   {/* Legal & Corporate Pages */}
// // // //                   <Route
// // // //                     path="/corporate-gifting"
// // // //                     element={<CorporateGifting />}
// // // //                   />
// // // //                   <Route path="/privacy-policy" element={<PrivacyPolicy />} />
// // // //                   <Route
// // // //                     path="/terms-conditions"
// // // //                     element={<TermsConditions />}
// // // //                   />
// // // //                   <Route path="/shipping-refund" element={<ShippingRefund />} />
// // // //                   <Route path="/contact-us" element={<ContactUs />} />

// // // //                   <Route
// // // //                     path="/admin"
// // // //                     element={
// // // //                       <ProtectedRoute adminOnly>
// // // //                         <AdminDashboard />
// // // //                       </ProtectedRoute>
// // // //                     }
// // // //                   />
// // // //                   <Route path="*" element={<Home />} />
// // // //                 </Routes>
// // // //               </main>
// // // //               <Footer />
// // // //             </div>
// // // //             import ScrollToTop from "./components/ScrollToTop";

// // // // export default function App() {
// // // //   return (
// // // //     <AuthProvider>
// // // //       <CartProvider>
// // // //         <Router>
// // // //           {/* 🔥 2. Yahan add karein (Layout ke theek pehle) */}
// // // //           <ScrollToTop />

// // // //           <Layout>
// // // //             <div className="min-h-screen flex flex-col justify-between">
// // // //               <Navbar />
// // // //               <main className="flex-grow">
// // // //                 <Routes>
// // // //                   {/* ... aapke saare routes ... */}
// // // //                 </Routes>
// // // //               </main>
// // // //               <Footer />
// // // //             </div>
// // // //           </Layout>
// // // //         </Router>
// // // //       </CartProvider>
// // // //     </AuthProvider>
// // // //   );
// // // // }
// // // //           </Layout>
// // // //         </Router>
// // // //       </CartProvider>
// // // //     </AuthProvider>
// // // //   );
// // // // }

// // // import React from "react";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // import { AuthProvider } from "./context/AuthContext";
// // // import { CartProvider } from "./context/CartContext";
// // // import Navbar from "./components/Navbar";
// // // import Profile from "./pages/Profile";
// // // import { Footer } from "./components/Footer";
// // // import Layout from "./components/Layout";
// // // import ScrollToTop from "./components/ScrollToTop"; // 🔥 Import add kiya

// // // // Pages
// // // import Home from "./pages/Home";
// // // import Packages from "./pages/Packages";
// // // import Shop from "./pages/Shop";
// // // import ProductView from "./pages/ProductView";
// // // import { Cart } from "./pages/Cart";
// // // import Checkout from "./pages/Checkout";
// // // import TrackOrder from "./pages/TrackOrder";
// // // import { EmotionReward } from "./pages/EmotionReward";
// // // import { SpecialSurprise } from "./pages/SpecialSurprise";
// // // import AdminDashboard from "./pages/AdminDashboard";
// // // import { Login } from "./pages/Login";
// // // import { ProtectedRoute } from "./components/ProtectedRoute";

// // // // Naye Pages
// // // import CorporateGifting from "./pages/CorporateGifting";
// // // import PrivacyPolicy from "./pages/PrivacyPolicy";
// // // import TermsConditions from "./pages/TermsConditions";
// // // import ShippingRefund from "./pages/ShippingRefund";
// // // import ContactUs from "./pages/ContactUs";

// // // export default function App() {
// // //   return (
// // //     <AuthProvider>
// // //       <CartProvider>
// // //         <Router>
// // //           {/* 🔥 ScrollToTop yahan add kiya hai */}
// // //           <ScrollToTop />

// // //           <Layout>
// // //             <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-900">
// // //               <Navbar />
// // //               <main className="flex-grow">
// // //                 <Routes>
// // //                   <Route path="/" element={<Home />} />
// // //                   <Route path="/packages" element={<Packages />} />
// // //                   <Route path="/shop" element={<Shop />} />
// // //                   <Route
// // //                     path="/special-surprise"
// // //                     element={<SpecialSurprise />}
// // //                   />
// // //                   <Route path="/product/:id" element={<ProductView />} />
// // //                   <Route path="/cart" element={<Cart />} />
// // //                   <Route path="/checkout" element={<Checkout />} />
// // //                   <Route path="/track-order" element={<TrackOrder />} />
// // //                   <Route path="/emotion-reward" element={<EmotionReward />} />
// // //                   <Route path="/login" element={<Login />} />
// // //                   <Route path="/profile" element={<Profile />} />

// // //                   {/* Legal & Corporate Pages */}
// // //                   <Route
// // //                     path="/corporate-gifting"
// // //                     element={<CorporateGifting />}
// // //                   />
// // //                   <Route path="/privacy-policy" element={<PrivacyPolicy />} />
// // //                   <Route
// // //                     path="/terms-conditions"
// // //                     element={<TermsConditions />}
// // //                   />
// // //                   <Route path="/shipping-refund" element={<ShippingRefund />} />
// // //                   <Route path="/contact-us" element={<ContactUs />} />

// // //                   <Route
// // //                     path="/admin"
// // //                     element={
// // //                       <ProtectedRoute adminOnly>
// // //                         <AdminDashboard />
// // //                       </ProtectedRoute>
// // //                     }
// // //                   />
// // //                   <Route path="*" element={<Home />} />
// // //                 </Routes>
// // //               </main>
// // //               <Footer />
// // //             </div>
// // //           </Layout>
// // //         </Router>
// // //       </CartProvider>
// // //     </AuthProvider>
// // //   );
// // // }

// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import { AuthProvider } from "./context/AuthContext";
// // import { CartProvider } from "./context/CartContext";
// // import Navbar from "./components/Navbar";
// // import Profile from "./pages/Profile";
// // import { Footer } from "./components/Footer";
// // import Layout from "./components/Layout";
// // import ScrollToTop from "./components/ScrollToTop";

// // // Pages
// // import Home from "./pages/Home";
// // import Packages from "./pages/Packages";
// // import Shop from "./pages/Shop";
// // import ProductView from "./pages/ProductView";
// // import { Cart } from "./pages/Cart";
// // import Checkout from "./pages/Checkout";
// // import TrackOrder from "./pages/TrackOrder";
// // import { EmotionReward } from "./pages/EmotionReward";
// // import { SpecialSurprise } from "./pages/SpecialSurprise";
// // import AdminDashboard from "./pages/AdminDashboard";
// // import AdminLogin from "./pages/AdminLogin"; // 🔥 Naya Import
// // import { Login } from "./pages/Login";
// // import { ProtectedRoute } from "./components/ProtectedRoute";

// // // Naye Pages
// // import CorporateGifting from "./pages/CorporateGifting";
// // import PrivacyPolicy from "./pages/PrivacyPolicy";
// // import TermsConditions from "./pages/TermsConditions";
// // import ShippingRefund from "./pages/ShippingRefund";
// // import ContactUs from "./pages/ContactUs";

// // export default function App() {
// //   return (
// //     <AuthProvider>
// //       <CartProvider>
// //         <Router>
// //           <ScrollToTop />

// //           <Layout>
// //             <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-900">
// //               <Navbar />
// //               <main className="flex-grow">
// //                 <Routes>
// //                   <Route path="/" element={<Home />} />
// //                   <Route path="/packages" element={<Packages />} />
// //                   <Route path="/shop" element={<Shop />} />
// //                   <Route
// //                     path="/special-surprise"
// //                     element={<SpecialSurprise />}
// //                   />
// //                   <Route path="/product/:id" element={<ProductView />} />
// //                   <Route path="/cart" element={<Cart />} />
// //                   <Route path="/checkout" element={<Checkout />} />
// //                   <Route path="/track-order" element={<TrackOrder />} />
// //                   <Route path="/emotion-reward" element={<EmotionReward />} />
// //                   <Route path="/login" element={<Login />} />
// //                   <Route path="/profile" element={<Profile />} />

// //                   {/* Legal & Corporate Pages */}
// //                   <Route
// //                     path="/corporate-gifting"
// //                     element={<CorporateGifting />}
// //                   />
// //                   <Route path="/privacy-policy" element={<PrivacyPolicy />} />
// //                   <Route
// //                     path="/terms-conditions"
// //                     element={<TermsConditions />}
// //                   />
// //                   <Route path="/shipping-refund" element={<ShippingRefund />} />
// //                   <Route path="/contact-us" element={<ContactUs />} />

// //                   {/* 🔥 Admin Routes */}
// //                   <Route path="/admin-login" element={<AdminLogin />} />
// //                   <Route
// //                     path="/admin"
// //                     element={
// //                       <ProtectedRoute adminOnly>
// //                         <AdminDashboard />
// //                       </ProtectedRoute>
// //                     }
// //                   />

// //                   <Route path="*" element={<Home />} />
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
// import Navbar from "./components/Navbar";
// import Profile from "./pages/Profile";
// import { Footer } from "./components/Footer";
// import Layout from "./components/Layout";
// import ScrollToTop from "./components/ScrollToTop";

// // Pages
// import Home from "./pages/Home";
// import Packages from "./pages/Packages";
// import Shop from "./pages/Shop";
// import ProductView from "./pages/ProductView";
// import { Cart } from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import TrackOrder from "./pages/TrackOrder";
// import { EmotionReward } from "./pages/EmotionReward";
// import { SpecialSurprise } from "./pages/SpecialSurprise";
// import AdminDashboard from "./pages/AdminDashboard";
// import AdminLogin from "./pages/AdminLogin";
// import { Login } from "./pages/Login";
// import { ProtectedRoute } from "./components/ProtectedRoute";

// // Naye Pages
// import CorporateGifting from "./pages/CorporateGifting";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import TermsConditions from "./pages/TermsConditions";
// import ShippingRefund from "./pages/ShippingRefund";
// import ContactUs from "./pages/ContactUs";
// import AdminRoute from "./components/AdminRoute"; // 🔥 naya import

// export default function App() {
//   return (
//     <AuthProvider>
//       <CartProvider>
//         <Router>
//           <ScrollToTop />

//           <Layout>
//             <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-900">
//               <Navbar />
//               <main className="flex-grow">
//                 <Routes>
//                   <Route path="/" element={<Home />} />
//                   <Route path="/packages" element={<Packages />} />
//                   <Route path="/shop" element={<Shop />} />
//                   <Route
//                     path="/special-surprise"
//                     element={<SpecialSurprise />}
//                   />
//                   <Route path="/product/:id" element={<ProductView />} />
//                   <Route path="/cart" element={<Cart />} />
//                   <Route path="/checkout" element={<Checkout />} />
//                   <Route path="/track-order" element={<TrackOrder />} />
//                   <Route path="/emotion-reward" element={<EmotionReward />} />
//                   <Route path="/login" element={<Login />} />
//                   <Route path="/profile" element={<Profile />} />

//                   {/* Legal & Corporate Pages */}
//                   <Route
//                     path="/corporate-gifting"
//                     element={<CorporateGifting />}
//                   />
//                   <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//                   <Route
//                     path="/terms-conditions"
//                     element={<TermsConditions />}
//                   />
//                   <Route path="/shipping-refund" element={<ShippingRefund />} />
//                   <Route path="/contact-us" element={<ContactUs />} />

//                   {/* 🔥 ADMIN ROUTES — FIX */}
//                   {/* /admin pe pehle LOGIN dikhega */}
//                   <Route path="/admin" element={<AdminLogin />} />

//                   {/* Login ke baad Dashboard — protected */}
//                   <Route
//                     path="/admin/dashboard"
//                     element={
//                       <ProtectedRoute adminOnly>
//                         <AdminDashboard />
//                       </ProtectedRoute>
//                     }
//                   />

//                   {/* Catch-all — unknown URL pe home */}
//                   <Route path="*" element={<Home />} />
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
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import { Footer } from "./components/Footer";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import Shop from "./pages/Shop";
import ProductView from "./pages/ProductView";
import { Cart } from "./pages/Cart";
import Checkout from "./pages/Checkout";
import TrackOrder from "./pages/TrackOrder";
import { EmotionReward } from "./pages/EmotionReward";
import { SpecialSurprise } from "./pages/SpecialSurprise";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import { Login } from "./pages/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute"; // 🔥 Naya import

// Naye Pages
import CorporateGifting from "./pages/CorporateGifting";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ShippingRefund from "./pages/ShippingRefund";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />

          <Layout>
            <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-900">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/packages" element={<Packages />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route
                    path="/special-surprise"
                    element={<SpecialSurprise />}
                  />
                  <Route path="/product/:id" element={<ProductView />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/track-order" element={<TrackOrder />} />
                  <Route path="/emotion-reward" element={<EmotionReward />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/profile" element={<Profile />} />

                  {/* Legal & Corporate Pages */}
                  <Route
                    path="/corporate-gifting"
                    element={<CorporateGifting />}
                  />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route
                    path="/terms-conditions"
                    element={<TermsConditions />}
                  />
                  <Route path="/shipping-refund" element={<ShippingRefund />} />
                  <Route path="/contact-us" element={<ContactUs />} />

                  {/* 🔥 ADMIN ROUTES */}
                  {/* /admin pe sirf LOGIN form */}
                  <Route path="/admin" element={<AdminLogin />} />

                  {/* Login ke baad Dashboard — AdminRoute se protected */}
                  <Route
                    path="/admin/dashboard"
                    element={
                      <AdminRoute>
                        <AdminDashboard />
                      </AdminRoute>
                    }
                  />

                  {/* Catch-all — unknown URL pe home */}
                  <Route path="*" element={<Home />} />
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
