// import { MongoClient } from 'mongodb';

const SECRET_KEY = process.env.UPI_SECRET_KEY || "MERA_SECRET_KEY_123";
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

  const { secretKey, smsText } = req.body;

  // 1. Secret Key check (Security)
  if (secretKey !== SECRET_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // 2. SMS se Amount nikalna
    const amountMatch = smsText.match(/(?:Rs\.?|INR)\s?(\d+(?:\.\d{1,2})?)/i);
    if (!amountMatch) {
      return res.status(400).json({ error: "Amount not found in SMS" });
    }
    const receivedAmount = parseFloat(amountMatch[1]);

    const client = await connectToDatabase();
    const db = client.db("surpriseGift");
    const orders = db.collection("orders");

    // 3. Sabse latest PENDING order dhundo jiska amount match kare
    const pendingOrder = await orders.findOne(
      { amount: receivedAmount, status: "PENDING" },
      { sort: { createdAt: -1 } },
    );

    if (pendingOrder) {
      // 4. Order ko SUCCESS mark karo
      await orders.updateOne(
        { _id: pendingOrder._id },
        {
          $set: {
            status: "SUCCESS",
            verifiedAt: new Date(),
            rawSms: smsText,
          },
        },
      );

      console.log(
        `✅ Payment Verified: ₹${receivedAmount} for Order: ${pendingOrder._id}`,
      );
      return res
        .status(200)
        .json({ success: true, message: "Payment verified and saved!" });
    } else {
      console.log(`⚠️ No pending order for ₹${receivedAmount}`);
      return res
        .status(404)
        .json({ error: "No pending order found for this amount" });
    }
  } catch (error) {
    console.error("Verify Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
