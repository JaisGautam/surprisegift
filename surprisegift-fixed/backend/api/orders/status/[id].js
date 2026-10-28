import { MongoClient, ObjectId } from "mongodb";

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
  if (req.method !== "GET")
    return res.status(405).json({ error: "Method not allowed" });

  const { id } = req.query;

  try {
    const client = await connectToDatabase();
    const db = client.db("surpriseGift");
    const orders = db.collection("orders");

    const order = await orders.findOne({ _id: new ObjectId(id) });

    if (!order) return res.status(404).json({ error: "Order not found" });

    return res.status(200).json({ status: order.status });
  } catch (error) {
    console.error("Status Check Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
