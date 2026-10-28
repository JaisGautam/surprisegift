const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: false },
  packageId: { type: String, default: "" },
  type: { type: String, enum: ["product", "package"], default: "product" },
  title: { type: String, default: "Gift item", trim: true },
  image: { type: String, default: "" },
  quantity: { type: Number, required: true, min: 1, max: 50, default: 1 },
  price: { type: Number, required: true, min: 0 },
  customizationDetails: { type: Object, default: {} },
}, { _id: true });

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
  items: { type: [cartItemSchema], default: [] },
  totalAmount: { type: Number, required: true, default: 0 },
}, { timestamps: true });

cartSchema.methods.recalculate = function () {
  this.totalAmount = Number(this.items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2));
};

module.exports = mongoose.model("Cart", cartSchema);
