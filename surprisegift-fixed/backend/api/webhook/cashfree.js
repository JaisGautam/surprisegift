// // api/webhook/cashfree.js
// import crypto from "crypto";
// import { MongoClient } from "mongodb";

// const MONGODB_URI = process.env.MONGODB_URI;
// const CASHFREE_SECRET = process.env.CASHFREE_SECRET_KEY;

// export default async function handler(req, res) {
//   if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

//   // Cashfree Webhook Signature Verify karna
//   const signature = req.headers["x-webhook-signature"];
//   const timestamp = req.headers["x-webhook-timestamp"];

//   // Note: Vercel me rawBody nikalne ke liye thoda alag setup hota hai,
//   // par testing ke liye hum seedha data check kar sakte hain.

//   try {
//     const { data } = req.body;
//     const orderId = data.order.order_id;
//     const paymentStatus = data.payment.payment_status;

//     if (paymentStatus === "SUCCESS") {
//       const client = await MongoClient.connect(MONGODB_URI);
//       const db = client.db("surpriseGift");

//       // 🔥 Database me order ko SUCCESS mark karo
//       await db
//         .collection("orders")
//         .updateOne(
//           { orderId: orderId },
//           { $set: { status: "SUCCESS", verifiedAt: new Date() } },
//         );

//       console.log(`✅ Payment Success for Order: ${orderId}`);
//     }

//     return res.status(200).send("Webhook Received");
//   } catch (error) {
//     console.error("Webhook Error:", error);
//     return res.status(500).send("Webhook Error");
//   }
// }

import crypto from "crypto";
import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const CASHFREE_SECRET = process.env.CASHFREE_SECRET_KEY;

// Vercel me body parse karne ke liye custom config
export const config = {
  api: {
    bodyParser: false,
  },
};

async function getRawBody(readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  try {
    const rawBody = await getRawBody(req);
    const signature = req.headers["x-webhook-signature"];
    const timestamp = req.headers["x-webhook-timestamp"];

    // 1. Verify Signature (Security check)
    const payload = timestamp + rawBody;
    const expectedSignature = crypto
      .createHmac("sha256", CASHFREE_SECRET)
      .update(payload)
      .digest("base64");

    if (signature !== expectedSignature) {
      console.log("❌ Invalid Webhook Signature");
      return res.status(401).send("Invalid Signature");
    }

    const body = JSON.parse(rawBody);
    const { data } = body;

    const orderId = data.order.order_id;
    const paymentStatus = data.payment.payment_status;

    // 2. Agar Payment Success hai
    if (paymentStatus === "SUCCESS") {
      const client = await MongoClient.connect(MONGODB_URI);
      const db = client.db("mysticboxgifts");

      await db.collection("orders").updateOne(
        { orderId: orderId },
        {
          $set: {
            status: "SUCCESS",
            paymentDetails: data.payment,
            verifiedAt: new Date(),
          },
        },
      );

      console.log(`✅ Payment Success DB me save ho gaya: ${orderId}`);
    }

    return res.status(200).send("Webhook Received Successfully");
  } catch (error) {
    console.error("Webhook Error:", error);
    return res.status(500).send("Webhook Error");
  }
}
