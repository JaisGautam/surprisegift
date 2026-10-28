const SpecialRequest = require("../models/SpecialRequest");

exports.createSpecialRequest = async (req, res) => {
  try {
    const requestData = { ...req.body, user: req.user ? req.user._id : null };
    const request = await SpecialRequest.create(requestData);
    res.status(201).json({
      success: true,
      message:
        "Your special setup request has been logged! Our surprise planner will contact you shortly.",
      request,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getAllSpecialRequests = async (req, res) => {
  try {
    const requests = await SpecialRequest.find().sort({ createdAt: -1 });
    res.json({ success: true, requests });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateRequestStatus = async (req, res) => {
  try {
    const request = await SpecialRequest.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true },
    );
    res.json({ success: true, request });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
