import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import Shop from "./pages/Shop";
import ProductView from "./pages/ProductView";
import { Cart } from "./pages/Cart";
import Checkout from "./pages/Checkout";
import TrackOrder from "./pages/TrackOrder";
import { EmotionReward } from "./pages/EmotionReward";
import { SpecialSurprise } from "./pages/SpecialSurprise";
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
                  <Route
                    path="/admin"
                    element={
                      <ProtectedRoute adminOnly>
                        <AdminDashboard />
                      </ProtectedRoute>
                    }
                  />
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
