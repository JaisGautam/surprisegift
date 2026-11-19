// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useAuth } from "../context/AuthContext";
// // import { ShieldCheck, Lock } from "lucide-react";

// // const AdminLogin = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const { login } = useAuth();
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError("");
// //     try {
// //       // Login karne ke liye
// //       const userData = await login(email, password);

// //       // 🔥 Check karo ki user admin hai ya nahi
// //       if (userData.user.role !== "admin") {
// //         setError("Access Denied: You are not an Admin.");
// //         return;
// //       }

// //       // Agar admin hai toh dashboard par bhejo
// //       navigate("/admin");
// //     } catch (err) {
// //       setError(err.response?.data?.message || "Invalid email or password");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
// //       <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl w-full max-w-md border border-gray-700">
// //         <div className="text-center mb-8">
// //           <div className="bg-pink-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
// //             <ShieldCheck className="text-pink-500" size={32} />
// //           </div>
// //           <h1 className="text-2xl font-black text-white">Admin Portal</h1>
// //           <p className="text-gray-400 text-sm mt-2">
// //             Restricted Access. Authorized personnel only.
// //           </p>
// //         </div>

// //         {error && (
// //           <div className="bg-red-500/20 border border-red-500 text-red-400 p-3 rounded-lg mb-6 text-sm text-center">
// //             {error}
// //           </div>
// //         )}

// //         <form onSubmit={handleSubmit} className="space-y-5">
// //           <div>
// //             <label className="block text-sm font-bold text-gray-300 mb-1">
// //               Admin Email
// //             </label>
// //             <input
// //               type="email"
// //               required
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-white focus:border-pink-500 outline-none"
// //               placeholder="admin@mysticboxgifts.in"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-bold text-gray-300 mb-1">
// //               Password
// //             </label>
// //             <div className="relative">
// //               <input
// //                 type="password"
// //                 required
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-white focus:border-pink-500 outline-none"
// //                 placeholder="••••••••"
// //               />
// //               <Lock
// //                 className="absolute right-3 top-3.5 text-gray-500"
// //                 size={18}
// //               />
// //             </div>
// //           </div>

// //           <button
// //             type="submit"
// //             className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-pink-500/30"
// //           >
// //             Login to Dashboard
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminLogin;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { ShieldCheck, Lock } from "lucide-react";

// const AdminLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       const userData = await login(email, password);

//       // Admin check
//       if (userData.user.role !== "admin") {
//         setError("Access Denied: You are not an Admin.");
//         return;
//       }

//       // ✅ Admin hai toh dashboard pe bhejo
//       navigate("/admin/dashboard");
//     } catch (err) {
//       setError(err.response?.data?.message || "Invalid email or password");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
//       <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl w-full max-w-md border border-gray-700">
//         <div className="text-center mb-8">
//           <div className="bg-pink-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//             <ShieldCheck className="text-pink-500" size={32} />
//           </div>
//           <h1 className="text-2xl font-black text-white">Admin Portal</h1>
//           <p className="text-gray-400 text-sm mt-2">
//             Restricted Access. Authorized personnel only.
//           </p>
//         </div>

//         {error && (
//           <div className="bg-red-500/20 border border-red-500 text-red-400 p-3 rounded-lg mb-6 text-sm text-center">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-bold text-gray-300 mb-1">
//               Admin Email
//             </label>
//             <input
//               type="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-white focus:border-pink-500 outline-none"
//               placeholder="admin@mysticboxgifts.in"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-bold text-gray-300 mb-1">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 type="password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-white focus:border-pink-500 outline-none"
//                 placeholder="••••••••"
//               />
//               <Lock
//                 className="absolute right-3 top-3.5 text-gray-500"
//                 size={18}
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-pink-500/30"
//           >
//             Login to Dashboard
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Lock } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
    const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

    // 🔥 Match check
    if (email.trim() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Success — flag set karo
      localStorage.setItem("adminAuth", "true");
      navigate("/admin/dashboard");
    } else {
      // Fail — flag clear karo aur home pe bhejo
      localStorage.removeItem("adminAuth");
      setError("Invalid admin credentials. Redirecting...");
      setTimeout(() => navigate("/"), 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl w-full max-w-md border border-gray-700">
        <div className="text-center mb-8">
          <div className="bg-pink-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="text-pink-500" size={32} />
          </div>
          <h1 className="text-2xl font-black text-white">Admin Portal</h1>
          <p className="text-gray-400 text-sm mt-2">
            Restricted Access. Authorized personnel only.
          </p>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-400 p-3 rounded-lg mb-6 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-1">
              Admin Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-white focus:border-pink-500 outline-none"
              placeholder="admin@mysticboxgifts.in"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-300 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-white focus:border-pink-500 outline-none"
                placeholder="••••••••"
              />
              <Lock
                className="absolute right-3 top-3.5 text-gray-500"
                size={18}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-pink-500/30"
          >
            Login to Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
