const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    basePrice: { type: Number, required: true },
    colorThemes: [{ type: String }],
    includedItems: [{ type: String }],
    occasion: [{ type: String }],
    image: { type: String, required: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Package", packageSchema);
