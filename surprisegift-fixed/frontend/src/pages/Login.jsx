// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await login(email, password);
//       navigate("/");
//     } catch (err) {
//       alert("Login Failed");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto px-4 py-20">
//       <form
//         onSubmit={handleLogin}
//         className="glass-panel p-8 rounded-3xl space-y-4"
//       >
//         <h2 className="text-2xl font-bold text-white text-center mb-6">
//           Login
//         </h2>
//         <input
//           type="email"
//           placeholder="Email"
//           required
//           className="w-full p-3 bg-luxury-card border text-white rounded-xl"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           required
//           className="w-full p-3 bg-luxury-card border text-white rounded-xl"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="w-full py-4 bg-luxury-pink text-white font-bold rounded-xl"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Gift, Sparkles } from "lucide-react";

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle state: true for Login, false for Signup
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await login(email, password);
        alert("🎉 Successfully Logged In!");
      } else {
        await register({ name, email, password, phone });
        alert("🎉 Account Created Successfully!");
      }
      navigate("/");
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Authentication Failed. Please check your details.",
      );
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md glass-panel p-8 rounded-3xl shadow-2xl relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-luxury-pink/25 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-luxury-pink to-purple-600 rounded-2xl mb-4 shadow-lg shadow-luxury-pink/30">
            <Gift className="w-7 h-7 text-white animate-bounce" />
          </div>
          <h2 className="text-2xl font-black text-white">
            {isLogin ? "Welcome Back to SurpriseGift" : "Create Your Account"}
          </h2>
          <p className="text-neutral-400 text-xs mt-1">
            {isLogin
              ? "Apne account mein login karein"
              : "Naye surprise plan karne ke liye register karein"}
          </p>
        </div>

        {/* Tab Switcher Buttons */}
        <div className="flex bg-luxury-card p-1 rounded-xl mb-6 border border-luxury-border">
          <button
            type="button"
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition ${
              isLogin
                ? "bg-luxury-pink text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition ${
              !isLogin
                ? "bg-luxury-pink text-white shadow-md"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="text-xs font-bold text-neutral-300 block mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Praveen Kumar"
                required={!isLogin}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 bg-luxury-card border border-luxury-border text-white rounded-xl text-sm focus:border-luxury-pink outline-none transition"
              />
            </div>
          )}

          <div>
            <label className="text-xs font-bold text-neutral-300 block mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="user@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-luxury-card border border-luxury-border text-white rounded-xl text-sm focus:border-luxury-pink outline-none transition"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="text-xs font-bold text-neutral-300 block mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="9876543210"
                required={!isLogin}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 bg-luxury-card border border-luxury-border text-white rounded-xl text-sm focus:border-luxury-pink outline-none transition"
              />
            </div>
          )}

          <div>
            <label className="text-xs font-bold text-neutral-300 block mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-luxury-card border border-luxury-border text-white rounded-xl text-sm focus:border-luxury-pink outline-none transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-luxury-pink to-purple-600 hover:opacity-95 text-white font-bold rounded-xl shadow-lg shadow-luxury-pink/30 transition transform active:scale-95"
          >
            {isLogin ? "Login To Continue" : "Create Account"}
          </button>
        </form>

        <div className="text-center mt-6">
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-xs text-neutral-400 hover:text-luxury-pink transition underline"
          >
            {isLogin
              ? "Don't have an account? Sign up here"
              : "Already have an account? Login here"}
          </button>
        </div>
      </div>
    </div>
  );
};
