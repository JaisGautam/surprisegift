// // const express = require("express");
// // const router = express.Router();
// // const Order = require("../models/Order");
// // const OpenAI = require("openai");
// // const fs = require("fs");
// // const PDFDocument = require("pdfkit");
// // const path = require("path");
// // const { protect, admin } = require("../middleware/authMiddleware"); // Apne auth middleware ka path check kar lena

// // // OpenAI API Key .env se aayegi
// // const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// // // ==========================================
// // // 1. CREATE ORDER + GENERATE LETTER (User Route)
// // // ==========================================
// // router.post("/", async (req, res) => {
// //   try {
// //     const {
// //       cartItems,
// //       amount,
// //       customerDetails,
// //       paymentMethod,
// //       paymentId,
// //       letterCategory, // Frontend se aayega
// //       letterSubject, // Frontend se aayega
// //     } = req.body;

// //     // 1. Order ID Generate karo
// //     const generatedOrderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

// //     // 2. Naya Order Database mein save karo
// //     const order = new Order({
// //       orderId: generatedOrderId,
// //       amount,
// //       cartItems,
// //       customerDetails,
// //       paymentMethod,
// //       paymentId,
// //       letterCategory: letterCategory || "Loved One",
// //       customOrderId: generatedOrderId,
// //     });

// //     const createdOrder = await order.save();

// //     // 3. AI LETTER GENERATION LOGIC (Background mein chalega)
// //     try {
// //       const vibeStyles = [
// //         "Write like a romantic poet (Sufi style).",
// //         "Write like a nostalgic lover remembering best moments.",
// //         "Write like a warm, peaceful letter giving a feeling of 'home'.",
// //       ];
// //       const chosenVibe =
// //         vibeStyles[Math.floor(Math.random() * vibeStyles.length)];

// //       let prompt = "";
// //       if (!letterSubject || letterSubject.trim() === "") {
// //         prompt = `Write a deeply personal letter. Recipient: ${letterCategory}. Style: ${chosenVibe}. Rules: Do NOT use robotic words. Keep under 70 words. Make them forget all stress.`;
// //       } else {
// //         prompt = `Write a deeply personal letter. Recipient: ${letterCategory}. Sender's context: "${letterSubject}". Style: ${chosenVibe}. Rules: Convert context into a magical letter. Keep under 90 words.`;
// //       }

// //       const response = await openai.chat.completions.create({
// //         model: "gpt-4o-mini",
// //         messages: [{ role: "user", content: prompt }],
// //         temperature: 0.95,
// //       });

// //       const generatedLetter = response.choices[0].message.content;

// //       // 4. PDF GENERATION (45-Degree Tilt & Premium Design)
// //       const fileName = `${generatedOrderId}_Letter.pdf`;
// //       const filePath = path.join(__dirname, "../private_letters", fileName);

// //       // Ensure 'private_letters' folder exists
// //       if (!fs.existsSync(path.join(__dirname, "../private_letters"))) {
// //         fs.mkdirSync(path.join(__dirname, "../private_letters"));
// //       }

// //       const doc = new PDFDocument({
// //         size: "A5",
// //         margins: { top: 40, bottom: 40, left: 40, right: 40 },
// //       });
// //       doc.pipe(fs.createWriteStream(filePath));

// //       // Background & Border
// //       doc.rect(0, 0, doc.page.width, doc.page.height).fill("#FFF9F0");
// //       doc
// //         .rect(15, 15, doc.page.width - 30, doc.page.height - 30)
// //         .lineWidth(1)
// //         .stroke("#D4AF37");
// //       doc
// //         .rect(18, 18, doc.page.width - 36, doc.page.height - 36)
// //         .lineWidth(0.5)
// //         .stroke("#D4AF37");

// //       // 45-Degree Tilt
// //       const centerX = doc.page.width / 2;
// //       const centerY = doc.page.height / 2;
// //       doc.save();
// //       doc.translate(centerX, centerY);
// //       doc.rotate(-45);
// //       doc.translate(-centerX, -centerY);

// //       // Tilted Text
// //       doc
// //         .fillColor("#4A3B32")
// //         .font("Times-Italic")
// //         .fontSize(15)
// //         .text(generatedLetter, 60, 80, {
// //           width: doc.page.width - 120,
// //           align: "center",
// //           lineGap: 8,
// //         });
// //       doc.restore();

// //       // Signature Area
// //       doc
// //         .fillColor("#888888")
// //         .font("Helvetica-Bold")
// //         .fontSize(10)
// //         .text(
// //           "With Love & Magic,",
// //           doc.page.width - 150,
// //           doc.page.height - 100,
// //           { align: "right" },
// //         )
// //         .text("MysticBox Gifts", doc.page.width - 150, doc.page.height - 85, {
// //           align: "right",
// //         });

// //       doc.end();

// //       // 5. Order update karo PDF path ke sath
// //       createdOrder.letterPdfPath = fileName;
// //       await createdOrder.save();
// //     } catch (aiError) {
// //       console.error("AI/PDF Generation failed, but order is placed:", aiError);
// //     }

// //     // 6. Frontend ko success response bhejo
// //     res.status(201).json({ success: true, order: createdOrder });
// //   } catch (error) {
// //     console.error("Order Error:", error);
// //     res
// //       .status(500)
// //       .json({ success: false, message: "Server Error while creating order" });
// //   }
// // });

// // // ==========================================
// // // 2. ADMIN: GET ALL ORDERS (Dashboard ke liye)
// // // ==========================================
// // router.get("/admin/all", protect, admin, async (req, res) => {
// //   try {
// //     const orders = await Order.find({}).sort({ createdAt: -1 });
// //     res.json({ success: true, orders });
// //   } catch (error) {
// //     res.status(500).json({ success: false, message: "Failed to fetch orders" });
// //   }
// // });

// // // ==========================================
// // // 3. ADMIN: UPDATE ORDER STATUS
// // // ==========================================
// // router.put("/admin/:orderId/status", protect, admin, async (req, res) => {
// //   try {
// //     const order = await Order.findOne({ orderId: req.params.orderId });

// //     if (order) {
// //       order.status = req.body.status;
// //       const updatedOrder = await order.save();
// //       res.json({ success: true, order: updatedOrder });
// //     } else {
// //       res.status(404).json({ success: false, message: "Order not found" });
// //     }
// //   } catch (error) {
// //     res
// //       .status(500)
// //       .json({ success: false, message: "Failed to update status" });
// //   }
// // });

// // // ==========================================
// // // 4. USER: GET MY ORDERS (User Profile ke liye)
// // // ==========================================
// // router.get("/myorders", protect, async (req, res) => {
// //   try {
// //     // Agar user ka email customerDetails mein save hota hai:
// //     const orders = await Order.find({
// //       "customerDetails.email": req.user.email,
// //     }).sort({ createdAt: -1 });
// //     res.json({ success: true, orders });
// //   } catch (error) {
// //     res
// //       .status(500)
// //       .json({ success: false, message: "Failed to fetch your orders" });
// //   }
// // });

// // // ==========================================
// // // 5. GET SINGLE ORDER BY ID
// // // ==========================================
// // router.get("/:id", protect, async (req, res) => {
// //   try {
// //     const order = await Order.findById(req.params.id);
// //     if (order) {
// //       res.json({ success: true, order });
// //     } else {
// //       res.status(404).json({ success: false, message: "Order not found" });
// //     }
// //   } catch (error) {
// //     res.status(500).json({ success: false, message: "Error fetching order" });
// //   }
// // });

// // module.exports = router;

// const express = require("express");
// const router = express.Router();
// const Order = require("../models/Order");
// const Product = require("../models/Product"); // 🔥 Price check ke liye zaroori
// const OpenAI = require("openai");
// const fs = require("fs");
// const PDFDocument = require("pdfkit");
// const path = require("path");
// const axios = require("axios"); // 🔥 Telegram ke liye
// const { protect, admin } = require("../middleware/authMiddleware");

// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// // 🔥 Telegram Alert Function
// const sendTelegramAlert = async (order) => {
//   try {
//     const token = process.env.TELEGRAM_BOT_TOKEN;
//     const chatId = process.env.TELEGRAM_CHAT_ID;
//     const message = `
// 🚨 <b>NEW ORDER RECEIVED!</b> 🚨

// 🆔 <b>Order ID:</b> ${order.orderId}
// 💰 <b>Amount:</b> ₹${order.amount}
// 💳 <b>Payment:</b> ${order.paymentMethod}

// 👤 <b>Customer:</b> ${order.customerDetails?.name}
// 📞 <b>Phone:</b> ${order.customerDetails?.phone}
// 📍 <b>Address:</b> ${order.customerDetails?.address}, ${order.customerDetails?.pincode}

// 📝 <b>Letter Type:</b> ${order.letterCategory}
//     `;

//     await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
//       chat_id: chatId,
//       text: message,
//       parse_mode: "HTML",
//     });
//   } catch (error) {
//     console.error("Telegram Alert Failed:", error.message);
//   }
// };

// // ==========================================
// // 1. CREATE ORDER (Security + AI + Telegram)
// // ==========================================
// router.post("/", async (req, res) => {
//   try {
//     const {
//       cartItems,
//       amount,
//       customerDetails,
//       paymentMethod,
//       paymentId,
//       letterCategory,
//       letterSubject,
//     } = req.body;

//     // 🔥 SECURITY: Price Tampering Check
//     let calculatedAmount = 0;
//     if (paymentMethod === "ONLINE") {
//       // Online orders ke liye DB se price check karo
//       for (const item of cartItems) {
//         const product = await Product.findById(item._id || item.product);
//         if (product) calculatedAmount += product.price * item.quantity;
//       }

//       // Agar hacker ne price change kiya hai toh reject karo
//       if (
//         calculatedAmount !== amount &&
//         Math.abs(calculatedAmount - amount) > 1
//       ) {
//         return res.status(400).json({
//           success: false,
//           message: "Price tampering detected! Order rejected.",
//         });
//       }
//     } else {
//       // COD orders ke liye frontend amount hi le lo (par future mein ise bhi secure karna)
//       calculatedAmount = amount;
//     }

//     const generatedOrderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

//     const order = new Order({
//       orderId: generatedOrderId,
//       amount: calculatedAmount, // Secure amount save hoga
//       cartItems,
//       customerDetails,
//       paymentMethod,
//       paymentId,
//       letterCategory: letterCategory || "Loved One",
//       customOrderId: generatedOrderId,
//     });

//     const createdOrder = await order.save();

//     // 🔥 Telegram Alert bhejo
//     sendTelegramAlert(createdOrder);

//     // 🔥 AI LETTER GENERATION
//     try {
//       const vibeStyles = [
//         "Write like a romantic poet (Sufi style).",
//         "Write like a nostalgic lover remembering best moments.",
//         "Write like a warm, peaceful letter giving a feeling of 'home'.",
//       ];
//       const chosenVibe =
//         vibeStyles[Math.floor(Math.random() * vibeStyles.length)];

//       let prompt = "";
//       if (!letterSubject || letterSubject.trim() === "") {
//         prompt = `Write a deeply personal letter. Recipient: ${letterCategory}. Style: ${chosenVibe}. Rules: Do NOT use robotic words. Keep under 70 words. Make them forget all stress.`;
//       } else {
//         prompt = `Write a deeply personal letter. Recipient: ${letterCategory}. Sender's context: "${letterSubject}". Style: ${chosenVibe}. Rules: Convert context into a magical letter. Keep under 90 words.`;
//       }

//       const response = await openai.chat.completions.create({
//         model: "gpt-4o-mini",
//         messages: [{ role: "user", content: prompt }],
//         temperature: 0.95,
//       });

//       const generatedLetter = response.choices[0].message.content;

//       // PDF Generation
//       const fileName = `${generatedOrderId}_Letter.pdf`;
//       const filePath = path.join(__dirname, "../private_letters", fileName);

//       if (!fs.existsSync(path.join(__dirname, "../private_letters"))) {
//         fs.mkdirSync(path.join(__dirname, "../private_letters"));
//       }

//       const doc = new PDFDocument({
//         size: "A5",
//         margins: { top: 40, bottom: 40, left: 40, right: 40 },
//       });
//       doc.pipe(fs.createWriteStream(filePath));

//       doc.rect(0, 0, doc.page.width, doc.page.height).fill("#FFF9F0");
//       doc
//         .rect(15, 15, doc.page.width - 30, doc.page.height - 30)
//         .lineWidth(1)
//         .stroke("#D4AF37");
//       doc
//         .rect(18, 18, doc.page.width - 36, doc.page.height - 36)
//         .lineWidth(0.5)
//         .stroke("#D4AF37");

//       const centerX = doc.page.width / 2;
//       const centerY = doc.page.height / 2;
//       doc.save();
//       doc.translate(centerX, centerY);
//       doc.rotate(-45);
//       doc.translate(-centerX, -centerY);

//       doc
//         .fillColor("#4A3B32")
//         .font("Times-Italic")
//         .fontSize(15)
//         .text(generatedLetter, 60, 80, {
//           width: doc.page.width - 120,
//           align: "center",
//           lineGap: 8,
//         });
//       doc.restore();

//       doc
//         .fillColor("#888888")
//         .font("Helvetica-Bold")
//         .fontSize(10)
//         .text(
//           "With Love & Magic,",
//           doc.page.width - 150,
//           doc.page.height - 100,
//           { align: "right" },
//         )
//         .text("MysticBox Gifts", doc.page.width - 150, doc.page.height - 85, {
//           align: "right",
//         });

//       doc.end();

//       createdOrder.letterPdfPath = fileName;
//       await createdOrder.save();
//     } catch (aiError) {
//       console.error("AI/PDF Generation failed:", aiError);
//     }

//     res.status(201).json({ success: true, order: createdOrder });
//   } catch (error) {
//     console.error("Order Error:", error);
//     res
//       .status(500)
//       .json({ success: false, message: "Server Error while creating order" });
//   }
// });

// // ==========================================
// // 2. ADMIN: GET ALL ORDERS
// // ==========================================
// router.get("/admin/all", protect, admin, async (req, res) => {
//   try {
//     const orders = await Order.find({}).sort({ createdAt: -1 });
//     res.json({ success: true, orders });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Failed to fetch orders" });
//   }
// });

// // ==========================================
// // 3. ADMIN: UPDATE ORDER STATUS
// // ==========================================
// router.put("/admin/:orderId/status", protect, admin, async (req, res) => {
//   try {
//     const order = await Order.findOne({ orderId: req.params.orderId });
//     if (order) {
//       order.status = req.body.status;
//       const updatedOrder = await order.save();
//       res.json({ success: true, order: updatedOrder });
//     } else {
//       res.status(404).json({ success: false, message: "Order not found" });
//     }
//   } catch (error) {
//     res
//       .status(500)
//       .json({ success: false, message: "Failed to update status" });
//   }
// });

// // ==========================================
// // 4. USER: GET MY ORDERS
// // ==========================================
// router.get("/myorders", protect, async (req, res) => {
//   try {
//     const orders = await Order.find({
//       "customerDetails.email": req.user.email,
//     }).sort({ createdAt: -1 });
//     res.json({ success: true, orders });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ success: false, message: "Failed to fetch your orders" });
//   }
// });

// // ==========================================
// // 5. GET SINGLE ORDER BY ID
// // ==========================================
// router.get("/:id", protect, async (req, res) => {
//   try {
//     const order = await Order.findById(req.params.id);
//     if (order) {
//       res.json({ success: true, order });
//     } else {
//       res.status(404).json({ success: false, message: "Order not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Error fetching order" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const Product = require("../models/Product");
const OpenAI = require("openai");
const fs = require("fs");
const PDFDocument = require("pdfkit");
const path = require("path");
const axios = require("axios");
const { protect, admin } = require("../middleware/authMiddleware");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Telegram Alert Function
const sendTelegramAlert = async (order) => {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const message = `
🚨 <b>NEW ORDER RECEIVED!</b> 🚨
🆔 <b>Order ID:</b> ${order.orderId}
💰 <b>Amount:</b> ₹${order.amount}
👤 <b>Customer:</b> ${order.customerDetails?.name}
    `;
    await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
      chat_id: chatId,
      text: message,
      parse_mode: "HTML",
    });
  } catch (error) {
    console.error("Telegram Alert Failed:", error.message);
  }
};

// ==========================================
// 1. CREATE ORDER + ADVANCED AI LETTER
// ==========================================
router.post("/", async (req, res) => {
  try {
    const {
      cartItems,
      amount,
      customerDetails,
      paymentMethod,
      paymentId,
      letterCategory,
      letterSubject,
    } = req.body;

    // SECURITY: Price Tampering Check (Backend se verify)
    let calculatedAmount = 0;
    if (paymentMethod === "ONLINE") {
      for (const item of cartItems) {
        const product = await Product.findById(item._id || item.product);
        if (product) calculatedAmount += product.price * item.quantity;
      }
      if (
        calculatedAmount !== amount &&
        Math.abs(calculatedAmount - amount) > 1
      ) {
        return res
          .status(400)
          .json({ success: false, message: "Price tampering detected!" });
      }
    } else {
      calculatedAmount = amount;
    }

    const generatedOrderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

    const order = new Order({
      orderId: generatedOrderId,
      amount: calculatedAmount,
      cartItems,
      customerDetails,
      paymentMethod,
      paymentId,
      letterCategory: letterCategory || "Loved One",
      customOrderId: generatedOrderId,
    });

    const createdOrder = await order.save();
    sendTelegramAlert(createdOrder);

    // 🔥 AI LETTER GENERATION (Emotion + Anti-Repetition + Double Check)
    try {
      const vibeStyles = [
        "Write like a romantic poet (Sufi style).",
        "Write like a nostalgic lover remembering best moments.",
        "Write like a warm, peaceful letter giving a feeling of 'home'.",
        "Write like a magical fairy tale, but deeply personal.",
        "Write like a heart-touching Shayari in simple Hinglish.",
      ];
      const chosenVibe =
        vibeStyles[Math.floor(Math.random() * vibeStyles.length)];

      // AI ko dene ke liye prompt
      let basePrompt = "";
      if (!letterSubject || letterSubject.trim() === "") {
        basePrompt = `Write a deeply personal, premium letter for a ${letterCategory}. Style: ${chosenVibe}. Do NOT use robotic words. Make it so emotional that the reader forgets all their stress. Under 70 words.`;
      } else {
        basePrompt = `Write a deeply personal, premium letter for a ${letterCategory}. Sender's context: "${letterSubject}". Style: ${chosenVibe}. Convert this context into a magical letter. Under 90 words.`;
      }

      // 🔥 DOUBLE CHECK VERIFICATION LOOP
      let generatedLetter = "";
      let isUnique = false;
      let attempts = 0;

      while (!isUnique && attempts < 3) {
        attempts++;

        // Step A: AI se letter mangwao (High Temperature for creativity)
        const response = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:
                "You are a premium gift letter writer. Never repeat the exact same phrasing twice. Be highly creative and human-like.",
            },
            { role: "user", content: basePrompt },
          ],
          temperature: 0.98, // Bahut high creativity
          presence_penalty: 0.8, // Naye words use karne ke liye
          frequency_penalty: 0.8, // Repeat words rokne ke liye
        });

        const draftLetter = response.choices[0].message.content;

        // Step B: Database mein check karo ki kya ye letter pehle kisi ko bheja gaya hai?
        // Hum database mein exact letter search karenge (case-insensitive)
        const existingOrder = await Order.findOne({
          generatedLetterText: draftLetter.trim(),
        });

        if (!existingOrder) {
          // Agar database mein nahi mila, matlab ye naya letter hai!
          generatedLetter = draftLetter;
          isUnique = true;
        } else {
          console.log(
            `Attempt ${attempts}: Letter was duplicate. Generating a new one...`,
          );
          // Agar duplicate mila, toh loop wapas chalega aur naya letter banayega
        }
      }

      // Agar 3 try ke baad bhi unique nahi mila, toh last wale ko use kar lo
      if (!generatedLetter) {
        const fallbackResponse = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: basePrompt }],
          temperature: 1.0,
        });
        generatedLetter = fallbackResponse.choices[0].message.content;
      }

      // Letter ko DB mein save kar do taaki agli baar check ho sake
      createdOrder.generatedLetterText = generatedLetter;
      await createdOrder.save();

      // 🔥 4. PDF GENERATION (45-Degree Tilt + Premium Design)
      const fileName = `${generatedOrderId}_Letter.pdf`;
      const filePath = path.join(__dirname, "../private_letters", fileName);

      if (!fs.existsSync(path.join(__dirname, "../private_letters"))) {
        fs.mkdirSync(path.join(__dirname, "../private_letters"));
      }

      const doc = new PDFDocument({
        size: "A5",
        margins: { top: 40, bottom: 40, left: 40, right: 40 },
      });
      doc.pipe(fs.createWriteStream(filePath));

      // Background & Gold Border
      doc.rect(0, 0, doc.page.width, doc.page.height).fill("#FFF9F0");
      doc
        .rect(15, 15, doc.page.width - 30, doc.page.height - 30)
        .lineWidth(1)
        .stroke("#D4AF37");
      doc
        .rect(18, 18, doc.page.width - 36, doc.page.height - 36)
        .lineWidth(0.5)
        .stroke("#D4AF37");

      // 45-Degree Tilt
      const centerX = doc.page.width / 2;
      const centerY = doc.page.height / 2;
      doc.save();
      doc.translate(centerX, centerY);
      doc.rotate(-45);
      doc.translate(-centerX, -centerY);

      // Tilted Text Print
      doc
        .fillColor("#4A3B32")
        .font("Times-Italic")
        .fontSize(15)
        .text(generatedLetter, 60, 80, {
          width: doc.page.width - 120,
          align: "center",
          lineGap: 8,
        });
      doc.restore();

      // Signature
      doc
        .fillColor("#888888")
        .font("Helvetica-Bold")
        .fontSize(10)
        .text(
          "With Love & Magic,",
          doc.page.width - 150,
          doc.page.height - 100,
          { align: "right" },
        )
        .text("MysticBox Gifts", doc.page.width - 150, doc.page.height - 85, {
          align: "right",
        });

      doc.end();

      createdOrder.letterPdfPath = fileName;
      await createdOrder.save();
    } catch (aiError) {
      console.error("AI/PDF Generation failed:", aiError);
    }

    res.status(201).json({ success: true, order: createdOrder });
  } catch (error) {
    console.error("Order Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});
