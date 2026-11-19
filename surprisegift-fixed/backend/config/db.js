// const mongoose = require("mongoose");

// let connectionPromise;

// async function connectDB() {
//   if (!process.env.MONGO_URI && !process.env.MONGODB_URI) {
//     throw new Error("Missing MONGO_URI (or MONGODB_URI) environment variable.");
//   }

//   if (mongoose.connection.readyState === 1) return mongoose.connection;
//   if (connectionPromise) return connectionPromise;

//   const uri = process.env.MONGO_URI || process.env.MONGODB_URI;
//   connectionPromise = mongoose.connect(uri, {
//     serverSelectionTimeoutMS: 10000,
//   }).then((connection) => {
//     console.log(`[MongoDB] Connected: ${connection.connection.host}`);
//     return connection.connection;
//   }).catch((error) => {
//     connectionPromise = null;
//     console.error(`[MongoDB] Connection failed: ${error.message}`);
//     throw error;
//   });

//   return connectionPromise;
// }

// module.exports = connectDB;

const mongoose = require("mongoose");
const dns = require("dns");

// 🔥 FIX: Windows par MongoDB Atlas (mongodb+srv) ka connection fail hone se rokta hai
dns.setServers(["8.8.8.8", "8.8.4.4"]);

let connectionPromise;

async function connectDB() {
  if (!process.env.MONGO_URI && !process.env.MONGODB_URI) {
    throw new Error("Missing MONGO_URI (or MONGODB_URI) environment variable.");
  }

  if (mongoose.connection.readyState === 1) return mongoose.connection;
  if (connectionPromise) return connectionPromise;

  const uri = process.env.MONGO_URI || process.env.MONGODB_URI;

  connectionPromise = mongoose
    .connect(uri, {
      serverSelectionTimeoutMS: 10000,
      useNewUrlParser: true, // Optional, but good practice
      useUnifiedTopology: true, // Optional, but good practice
    })
    .then((connection) => {
      console.log(`[MongoDB] Connected: ${connection.connection.host}`);
      return connection.connection;
    })
    .catch((error) => {
      connectionPromise = null;
      console.error(`[MongoDB] Connection failed: ${error.message}`);
      throw error;
    });

  return connectionPromise;
}

module.exports = connectDB;
