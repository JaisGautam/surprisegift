import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) return cachedClient;
  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  cachedClient = client;
  return client;
}

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { amount, cartItems } = req.body;

  if (!amount) return res.status(400).json({ error: "Amount required" });

  try {
    const client = await connectToDatabase();
    const db = client.db("surpriseGift");
    const orders = db.collection("orders");

    const newOrder = {
      amount: Number(amount),
      cartItems: cartItems || [],
      status: "PENDING",
      createdAt: new Date(),
      verifiedAt: null,
    };

    const result = await orders.insertOne(newOrder);

    return res.status(200).json({
      success: true,
      orderId: result.insertedId.toString(),
    });
  } catch (error) {
    console.error("Create Order Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
