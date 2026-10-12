const mongoose = require("mongoose");

const emotionSubmissionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    orderId: { type: String, required: true },
    videoUrl: { type: String, required: true },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
    couponGenerated: { type: String, default: null },
  },
  { timestamps: true },
);

module.exports = mongoose.model("EmotionSubmission", emotionSubmissionSchema);
