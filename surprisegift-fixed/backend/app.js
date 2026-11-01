// const express = require("express");
// const cors = require("cors");
// const helmet = require("helmet");
// const rateLimit = require("express-rate-limit");
// const errorHandler = require("./middleware/errorHandler");

// const app = express();

// app.use(helmet());
// app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ extended: true }));

// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL || "*",
//     credentials: true,
//   }),
// );

// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   max: 200,
//   message: "Too many requests from this IP, please try again later.",
// });
// app.use("/api", limiter);

// // Mounting Routes
// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/products", require("./routes/productRoutes"));
// app.use("/api/orders", require("./routes/orderRoutes"));
// app.use("/api/payments", require("./routes/paymentRoutes"));
// app.use("/api/special-requests", require("./routes/specialRequestRoutes"));
// app.use("/api/emotions", require("./routes/emotionRoutes"));

// app.get("/health", (req, res) =>
//   res
//     .status(200)
//     .json({ status: "OK", message: "SurpriseGift Backend Running Perfectly" }),
// );

// app.use(errorHandler);

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

const allowedOrigins = (process.env.FRONTEND_URL || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      // Allow server-to-server requests and same-origin calls with no Origin header.
      if (!origin || allowedOrigins.includes(origin))
        return callback(null, true);
      return callback(new Error("Origin not allowed by CORS"));
    },
    credentials: true,
  }),
);

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

// Mounting Routes (Cart route successfully added here!)
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

app.use(errorHandler);
// CORS ko pehle hi handle kar liya hai, par extra safety ke liye
app.options("*", cors());

module.exports = app;
