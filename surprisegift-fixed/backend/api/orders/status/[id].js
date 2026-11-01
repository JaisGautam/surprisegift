// // import { MongoClient, ObjectId } from "mongodb";

// // const MONGODB_URI = process.env.MONGODB_URI;
// // let cachedClient = null;

// // async function connectToDatabase() {
// //   if (cachedClient) return cachedClient;
// //   const client = new MongoClient(MONGODB_URI);
// //   await client.connect();
// //   cachedClient = client;
// //   return client;
// // }

// // export default async function handler(req, res) {
// //   if (req.method !== "GET")
// //     return res.status(405).json({ error: "Method not allowed" });

// //   const { id } = req.query;

// //   try {
// //     const client = await connectToDatabase();
// //     const db = client.db("surpriseGift");
// //     const orders = db.collection("orders");

// //     const order = await orders.findOne({ _id: new ObjectId(id) });

// //     if (!order) return res.status(404).json({ error: "Order not found" });

// //     return res.status(200).json({ status: order.status });
// //   } catch (error) {
// //     console.error("Status Check Error:", error);
// //     return res.status(500).json({ error: "Internal server error" });
// //   }
// // }

// // api/orders/status/[id].js
// import { MongoClient } from "mongodb";

// const MONGODB_URI = process.env.MONGODB_URI;

// export default async function handler(req, res) {
//   const { id } = req.query; // Ye aapka order_id hoga

//   try {
//     const client = await MongoClient.connect(MONGODB_URI);
//     const db = client.db("surpriseGift");

//     // DB me check karo
//     const order = await db.collection("orders").findOne({ orderId: id });

//     if (!order) return res.status(404).json({ error: "Order not found" });

//     return res.status(200).json({ status: order.status });
//   } catch (error) {
//     return res.status(500).json({ error: "Internal server error" });
//   }
// }

import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method !== "GET")
    return res.status(405).json({ error: "Method not allowed" });

  const { id } = req.query; // id = orderId

  try {
    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db("mysticboxgifts");

    const order = await db.collection("orders").findOne({ orderId: id });

    if (!order) return res.status(404).json({ error: "Order not found" });

    return res.status(200).json({ status: order.status });
  } catch (error) {
    console.error("Status Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
