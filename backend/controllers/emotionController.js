const EmotionSubmission = require("../models/EmotionSubmission");
const Coupon = require("../models/Coupon");

exports.submitEmotionVideo = async (req, res) => {
  try {
    const { orderId, videoUrl } = req.body;
    const submission = await EmotionSubmission.create({
      user: req.user._id,
      orderId,
      videoUrl,
    });
    res.status(201).json({
      success: true,
      message: "Video submitted successfully!",
      submission,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getAllSubmissionsAdmin = async (req, res) => {
  try {
    const submissions = await EmotionSubmission.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });
    res.json({ success: true, submissions });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.reviewSubmissionAdmin = async (req, res) => {
  try {
    const { status, discountPercent } = req.body;
    const submission = await EmotionSubmission.findById(req.params.id);

    if (!submission)
      return res
        .status(404)
        .json({ success: false, message: "Submission not found" });

    submission.status = status;

    if (status === "Approved" && !submission.couponGenerated) {
      const couponCode = `JOY10_${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
      await Coupon.create({
        code: couponCode,
        discountPercentage: discountPercent || 10,
        user: submission.user,
      });
      submission.couponGenerated = couponCode;
    }

    await submission.save();
    res.json({ success: true, submission });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
