const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, required: true },
    occasion: [{ type: String }],
    relationship: [{ type: String }],
    color: [{ type: String }],
    images: [{ type: String, required: true }],
    availabilityStatus: {
      type: String,
      enum: [
        "Available",
        "Limited Availability",
        "Market Sourcing Required",
        "Temporarily Unavailable",
      ],
      default: "Market Sourcing Required",
    },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Product", productSchema);
