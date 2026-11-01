// // import { MongoClient } from "mongodb";

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
// //   if (req.method !== "POST")
// //     return res.status(405).json({ error: "Method not allowed" });

// //   const { amount, cartItems } = req.body;

// //   if (!amount) return res.status(400).json({ error: "Amount required" });

// //   try {
// //     const client = await connectToDatabase();
// //     const db = client.db("surpriseGift");
// //     const orders = db.collection("orders");

// //     const newOrder = {
// //       amount: Number(amount),
// //       cartItems: cartItems || [],
// //       status: "PENDING",
// //       createdAt: new Date(),
// //       verifiedAt: null,
// //     };

// //     const result = await orders.insertOne(newOrder);

// //     return res.status(200).json({
// //       success: true,
// //       orderId: result.insertedId.toString(),
// //     });
// //   } catch (error) {
// //     console.error("Create Order Error:", error);
// //     return res.status(500).json({ error: "Internal server error" });
// //   }
// // }

// // api/orders/create.js
// import { Cashfree } from "cashfree-pg";

// // Cashfree Config (Environment Variables se aayega)
// Cashfree.XClientId = process.env.CASHFREE_APP_ID;
// Cashfree.XClientSecret = process.env.CASHFREE_SECRET_KEY;
// Cashfree.XEnvironment = Cashfree.Environment.SANDBOX; // Live jaane par PRODUCTION karein

// export default async function handler(req, res) {
//   if (req.method !== "POST")
//     return res.status(405).json({ error: "Method not allowed" });

//   const { amount, cartItems, customerDetails } = req.body;

//   try {
//     const orderId = "ORDER_" + Date.now(); // Unique ID

//     const request = {
//       order_amount: amount,
//       order_currency: "INR",
//       order_id: orderId,
//       customer_details: {
//         customer_id: "guest_user",
//         customer_phone: customerDetails?.phone || "9999999999",
//         customer_email: customerDetails?.email || "test@example.com",
//       },
//       order_meta: {
//         return_url: `https://mysticboxgifts.in/checkout?order_id={order_id}`, // Yahan apna domain daalein
//       },
//     };

//     // 🔥 Yahan aap apne Database me PENDING order save karenge
//     // await db.collection('orders').insertOne({ orderId, amount, status: 'PENDING', cartItems });

//     const response = await Cashfree.PGCreateOrder("2023-08-01", request);

//     return res.status(200).json({
//       success: true,
//       payment_session_id: response.data.payment_session_id,
//       order_id: orderId,
//     });
//   } catch (error) {
//     console.error("Cashfree Error:", error.response?.data || error.message);
//     return res
//       .status(500)
//       .json({ error: "Payment order create nahi ho paya." });
//   }
// }

import { Cashfree } from "cashfree-pg";
import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;

Cashfree.XClientId = process.env.CASHFREE_APP_ID;
Cashfree.XClientSecret = process.env.CASHFREE_SECRET_KEY;
Cashfree.XEnvironment =
  process.env.CASHFREE_ENV === "production"
    ? Cashfree.Environment.PRODUCTION
    : Cashfree.Environment.SANDBOX;

export default async function handler(req, res) {
  // CORS Setup (Agar frontend alag domain par hai)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { amount, cartItems, customerDetails } = req.body;

  if (!amount || amount <= 0)
    return res.status(400).json({ error: "Invalid amount" });

  try {
    const orderId = "MBG_" + Date.now(); // Unique Order ID

    // 1. Database me PENDING order save karein
    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db("mysticboxgifts");

    await db.collection("orders").insertOne({
      orderId,
      amount,
      cartItems,
      customerDetails,
      status: "PENDING",
      createdAt: new Date(),
    });

    // 2. Cashfree Request Payload
    const request = {
      order_amount: amount,
      order_currency: "INR",
      order_id: orderId,
      customer_details: {
        customer_id: customerDetails.phone || "guest",
        customer_phone: customerDetails.phone || "9999999999",
        customer_email: customerDetails.email || "test@mysticbox.com",
      },
      order_meta: {
        // 🔥 Yahan aapka domain hoga
        return_url: `https://mysticboxgifts.in/checkout?order_id={order_id}`,
      },
    };

    const response = await Cashfree.PGCreateOrder("2023-08-01", request);

    return res.status(200).json({
      success: true,
      payment_session_id: response.data.payment_session_id,
      order_id: orderId,
    });
  } catch (error) {
    console.error("Cashfree Error:", error.response?.data || error.message);
    return res
      .status(500)
      .json({ error: "Payment order create nahi ho paya." });
  }
}
