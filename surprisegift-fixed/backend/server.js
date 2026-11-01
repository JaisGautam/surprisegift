// require("dotenv").config();
// const app = require("./app");

// if (require.main === module) {
//   const PORT = Number(process.env.PORT) || 5000;
//   app.listen(PORT, () => {
//     console.log(`SurpriseGift API listening on port ${PORT}`);
//   });
// }

// module.exports = app;

require("dotenv").config();
const app = require("./app");

// Vercel ke liye code
module.exports = app;

// Local testing ke liye code
if (require.main === module) {
  const PORT = Number(process.env.PORT) || 5000;
  app.listen(PORT, () => {
    console.log(`SurpriseGift API listening on port ${PORT}`);
  });
}
