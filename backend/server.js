// require("dotenv").config();
// const app = require("./app");
// const connectDB = require("./config/db");

// connectDB();

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`⚡ SurpriseGift Backend Server Online on Port ${PORT}`);
// });

require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

// Database connection
connectDB();

// Local development ke liye port listener
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`⚡ SurpriseGift Backend Server Online on Port ${PORT}`);
  });
}

// Vercel Serverless Function ke liye express app ko export karna zaroori hai
module.exports = app;
