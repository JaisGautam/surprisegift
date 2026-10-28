const mongoose = require("mongoose");

let connectionPromise;

async function connectDB() {
  if (!process.env.MONGO_URI && !process.env.MONGODB_URI) {
    throw new Error("Missing MONGO_URI (or MONGODB_URI) environment variable.");
  }

  if (mongoose.connection.readyState === 1) return mongoose.connection;
  if (connectionPromise) return connectionPromise;

  const uri = process.env.MONGO_URI || process.env.MONGODB_URI;
  connectionPromise = mongoose.connect(uri, {
    serverSelectionTimeoutMS: 10000,
  }).then((connection) => {
    console.log(`[MongoDB] Connected: ${connection.connection.host}`);
    return connection.connection;
  }).catch((error) => {
    connectionPromise = null;
    console.error(`[MongoDB] Connection failed: ${error.message}`);
    throw error;
  });

  return connectionPromise;
}

module.exports = connectDB;
