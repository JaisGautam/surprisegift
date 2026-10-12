const express = require("express");
const router = express.Router();
const {
  createSpecialRequest,
  getAllSpecialRequests,
  updateRequestStatus,
} = require("../controllers/specialRequestController");
const { protect, adminOnly } = require("../middleware/auth");

router.post("/", createSpecialRequest);
router.get("/admin", protect, adminOnly, getAllSpecialRequests);
router.put("/:id/status", protect, adminOnly, updateRequestStatus);

module.exports = router;
