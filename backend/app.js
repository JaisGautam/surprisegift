const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(helmet());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
    credentials: true,
  }),
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  message: "Too many requests from this IP, please try again later.",
});
app.use("/api", limiter);

// Mounting Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/payments", require("./routes/paymentRoutes"));
app.use("/api/special-requests", require("./routes/specialRequestRoutes"));
app.use("/api/emotions", require("./routes/emotionRoutes"));

app.get("/health", (req, res) =>
  res
    .status(200)
    .json({ status: "OK", message: "SurpriseGift Backend Running Perfectly" }),
);

app.use(errorHandler);

module.exports = app;
