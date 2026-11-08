// // const axios = require("axios");

// // const sendEmail = async (
// //   toEmail,
// //   customerName,
// //   orderId,
// //   amount,
// //   paymentMethod,
// // ) => {
// //   try {
// //     await axios.post(
// //       "https://api.brevo.com/v3/smtp/email",
// //       {
// //         sender: { name: "MysticBox Gifts", email: "onemychoicee@gmail.com" },
// //         to: [{ email: toEmail, name: customerName }],
// //         subject: `Order Confirmed! Your Order ID: ${orderId}`,
// //         htmlContent: `
// //           <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
// //             <h1 style="color: #ec4899; text-align: center;">MysticBox Gifts</h1>
// //             <h2>Thank you for your order, ${customerName}!</h2>
// //             <p>We have received your order and are processing it.</p>
// //             <div style="background: #fdf2f8; padding: 15px; border-radius: 8px; margin: 20px 0;">
// //               <p><strong>Order ID:</strong> ${orderId}</p>
// //               <p><strong>Total Amount:</strong> ₹${amount}</p>
// //               <p><strong>Payment Method:</strong> ${paymentMethod}</p>
// //             </div>
// //             <p>You can track your order anytime on our website.</p>
// //             <br/>
// //             <p>Best Regards,<br/>Team MysticBox</p>
// //           </div>
// //         `,
// //       },
// //       {
// //         headers: {
// //           "api-key": process.env.BREVO_API_KEY,
// //           "Content-Type": "application/json",
// //         },
// //       },
// //     );
// //     console.log(`✅ Email sent successfully to ${toEmail}`);
// //   } catch (error) {
// //     console.error(
// //       "❌ Email sending failed:",
// //       error.response?.data || error.message,
// //     );
// //   }
// // };

// // module.exports = sendEmail;

// const axios = require("axios");

// const sendEmail = async (
//   toEmail,
//   customerName,
//   orderId,
//   amount,
//   paymentMethod,
// ) => {
//   try {
//     await axios.post(
//       "https://api.brevo.com/v3/smtp/email",
//       {
//         // 🔥 YAHAN SENDER EMAIL BADAL DIYA HAI (Testing ke liye)
//         sender: { name: "MysticBox Gifts", email: "support@mysticboxgifts.in" },
//         to: [{ email: toEmail, name: customerName }],
//         subject: `Order Confirmed! Your Order ID: ${orderId}`,
//         htmlContent: `
//           <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
//             <h1 style="color: #ec4899; text-align: center;">MysticBox Gifts</h1>
//             <h2>Thank you for your order, ${customerName}!</h2>
//             <p>We have received your order and are processing it.</p>
//             <div style="background: #fdf2f8; padding: 15px; border-radius: 8px; margin: 20px 0;">
//               <p><strong>Order ID:</strong> ${orderId}</p>
//               <p><strong>Total Amount:</strong> ₹${amount}</p>
//               <p><strong>Payment Method:</strong> ${paymentMethod}</p>
//             </div>
//             <p>You can track your order anytime on our website.</p>
//             <br/>
//             <p>Best Regards,<br/>Team MysticBox</p>
//           </div>
//         `,
//       },
//       {
//         headers: {
//           "api-key": process.env.BREVO_API_KEY,
//           "Content-Type": "application/json",
//         },
//       },
//     );
//     console.log(`✅ Email sent successfully to ${toEmail}`);
//   } catch (error) {
//     console.error(
//       "❌ Email sending failed:",
//       error.response?.data || error.message,
//     );
//   }
// };

// module.exports = sendEmail;

const axios = require("axios");

const sendEmail = async (
  toEmail,
  customerName,
  orderId,
  amount,
  paymentMethod,
) => {
  try {
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        // 🔥 Testing ke liye sender email yahi rakhein
        sender: { name: "MysticBox Gifts", email: "onemychoicee@gmail.com" },
        to: [{ email: toEmail, name: customerName }],
        subject: `Order Confirmed! Your Order ID: ${orderId}`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h1 style="color: #ec4899; text-align: center;">MysticBox Gifts</h1>
            <h2>Thank you for your order, ${customerName}!</h2>
            <p>We have received your order and are processing it.</p>
            <div style="background: #fdf2f8; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Order ID:</strong> ${orderId}</p>
              <p><strong>Total Amount:</strong> ₹${amount}</p>
              <p><strong>Payment Method:</strong> ${paymentMethod}</p>
            </div>
            <p>You can track your order anytime on our website.</p>
            <br/>
            <p>Best Regards,<br/>Team MysticBox</p>
          </div>
        `,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      },
    );
    console.log(`✅ Email sent successfully to ${toEmail}`);
  } catch (error) {
    console.error(
      "❌ Email sending failed:",
      error.response?.data || error.message,
    );
  }
};

module.exports = sendEmail;
