const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true },
    discountPercentage: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    isUsed: { type: Boolean, default: false },
    validTill: {
      type: Date,
      default: () => new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Coupon", couponSchema);
