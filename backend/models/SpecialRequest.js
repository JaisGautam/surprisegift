const mongoose = require("mongoose");

const specialRequestSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    recipientName: { type: String, required: true },
    relationship: { type: String, required: true },
    occasion: { type: String, required: true },
    preferredDate: { type: Date, required: true },
    location: { type: String, required: true },
    budget: { type: String, required: true },
    serviceType: {
      type: String,
      enum: [
        "Room Decoration",
        "Birthday Decoration",
        "Anniversary Setup",
        "Proposal Setup",
        "Romantic Setup",
        "Surprise Entry",
        "Gift + Decoration",
        "Custom Celebration",
      ],
      required: true,
    },
    instructions: { type: String },
    status: {
      type: String,
      enum: ["Pending", "Contacted", "Confirmed", "Completed", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("SpecialRequest", specialRequestSchema);
