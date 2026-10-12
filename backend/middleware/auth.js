const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      return next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized, Token Invalid or Expired",
      });
    }
  }
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized, No Token Provided" });
  }
};

const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({
      success: false,
      message: "Access Denied: Admin Privilege Required",
    });
  }
};

module.exports = { protect, adminOnly };
