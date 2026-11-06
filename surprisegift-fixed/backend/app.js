// // const express = require("express");
// // const cors = require("cors");
// // const helmet = require("helmet");
// // const rateLimit = require("express-rate-limit");
// // const errorHandler = require("./middleware/errorHandler");

// // const app = express();

// // app.use(helmet());
// // app.use(express.json({ limit: "10mb" }));
// // app.use(express.urlencoded({ extended: true }));

// // app.use(
// //   cors({
// //     origin: process.env.FRONTEND_URL || "*",
// //     credentials: true,
// //   }),
// // );

// // const limiter = rateLimit({
// //   windowMs: 15 * 60 * 1000,
// //   max: 200,
// //   message: "Too many requests from this IP, please try again later.",
// // });
// // app.use("/api", limiter);

// // // Mounting Routes
// // app.use("/api/auth", require("./routes/authRoutes"));
// // app.use("/api/products", require("./routes/productRoutes"));
// // app.use("/api/orders", require("./routes/orderRoutes"));
// // app.use("/api/payments", require("./routes/paymentRoutes"));
// // app.use("/api/special-requests", require("./routes/specialRequestRoutes"));
// // app.use("/api/emotions", require("./routes/emotionRoutes"));

// // app.get("/health", (req, res) =>
// //   res
// //     .status(200)
// //     .json({ status: "OK", message: "SurpriseGift Backend Running Perfectly" }),
// // );

// // app.use(errorHandler);

// // module.exports = app;

// const Razorpay = require("razorpay");
// const crypto = require("crypto");

// const express = require("express");
// const cors = require("cors");
// const helmet = require("helmet");
// const rateLimit = require("express-rate-limit");
// const errorHandler = require("./middleware/errorHandler");

// const app = express();

// app.use(helmet());
// app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ extended: true }));

// const allowedOrigins = (process.env.FRONTEND_URL || "http://localhost:5173")
//   .split(",")
//   .map((origin) => origin.trim())
//   .filter(Boolean);

// app.use(
//   cors({
//     origin(origin, callback) {
//       // Allow server-to-server requests and same-origin calls with no Origin header.
//       if (!origin || allowedOrigins.includes(origin))
//         return callback(null, true);
//       return callback(new Error("Origin not allowed by CORS"));
//     },
//     credentials: true,
//   }),
// );

// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   max: 200,
//   message: "Too many requests from this IP, please try again later.",
// });
// app.use("/api", limiter);

// // Database must be available before API handlers run.
// const connectDB = require("./config/db");
// app.use(async (req, res, next) => {
//   try {
//     await connectDB();
//     next();
//   } catch (error) {
//     console.error("Database unavailable:", error.message);
//     res.status(503).json({
//       success: false,
//       message: "Database temporarily unavailable. Please try again.",
//     });
//   }
// });

// // Mounting Routes (Cart route successfully added here!)
// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/products", require("./routes/productRoutes"));
// app.use("/api/cart", require("./routes/cartRoutes"));
// app.use("/api/orders", require("./routes/orderRoutes"));
// app.use("/api/payments", require("./routes/paymentRoutes"));
// app.use("/api/special-requests", require("./routes/specialRequestRoutes"));
// app.use("/api/emotions", require("./routes/emotionRoutes"));

// app.get("/health", (req, res) =>
//   res.status(200).json({ status: "ok", service: "SurpriseGift API" }),
// );

// app.use(errorHandler);
// // CORS ko pehle hi handle kar liya hai, par extra safety ke liye
// app.options("*", cors());

// module.exports = app;

const Razorpay = require("razorpay");
const crypto = require("crypto");

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(helmet());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// 🔥 CORS SETUP (Live aur Local dono ke liye)
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://mysticboxgifts.in",
  "https://www.mysticboxgifts.in",
  "https://surprisegift-1.onrender.com",
  // Agar aur koi URL ho toh yahan add karein
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Postman/Server-to-server requests (jahan origin nahi hota) allow karein
      if (!origin) return callback(null, true);

      // Agar origin list mein hai, toh allow karein
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // Warna block kar dein
      console.error("Blocked by CORS:", origin);
      return callback(new Error("Origin not allowed by CORS"));
    },
    credentials: true,
  }),
);

// 🔥 Preflight requests ko handle karna zaroori hai (CORS ke liye)
app.options("*", cors());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  message: "Too many requests from this IP, please try again later.",
});
app.use("/api", limiter);

// Database must be available before API handlers run.
const connectDB = require("./config/db");
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("Database unavailable:", error.message);
    res.status(503).json({
      success: false,
      message: "Database temporarily unavailable. Please try again.",
    });
  }
});

// Mounting Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/payments", require("./routes/paymentRoutes"));
app.use("/api/special-requests", require("./routes/specialRequestRoutes"));
app.use("/api/emotions", require("./routes/emotionRoutes"));

app.get("/health", (req, res) =>
  res.status(200).json({ status: "ok", service: "SurpriseGift API" }),
);

// Error Handler sabse aakhir mein aayega
app.use(errorHandler);

module.exports = app;
