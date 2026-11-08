const User = require("../models/User");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// exports.registerUser = async (req, res) => {
//   try {
//     const nameValue = String(req.body.name || "").trim();
//     const emailValue = String(req.body.email || "").trim().toLowerCase();
//     const password = String(req.body.password || "");
//     const phone = String(req.body.phone || "").trim();

//     if (nameValue.length < 2 || nameValue.length > 80 ||
//         !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(emailValue) ||
//         password.length < 8 || password.length > 128) {
//       return res.status(400).json({
//         success: false,
//         message: "Enter a valid name and email; password must be 8–128 characters.",
//       });
//     }

//     if (!process.env.JWT_SECRET) {
//       return res.status(503).json({ success: false, message: "Authentication is not configured." });
//     }

//     const userExists = await User.findOne({ email: emailValue });

//     if (userExists) {
//       return res
//         .status(400)
//         .json({
//           success: false,
//           message: "Account already exists with this email address",
//         });
//     }

//     const user = await User.create({ name: nameValue, email: emailValue, password, phone });

//     res.status(201).json({
//       success: true,
//       token: generateToken(user._id),
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//         phone: user.phone,
//       },
//     });
//   } catch (error) {
//     if (error.code === 11000) {
//       return res.status(409).json({ success: false, message: "An account already exists with this email." });
//     }
//     res.status(500).json({ success: false, message: "Unable to complete the request right now." });
//   }
// };

exports.registerUser = async (req, res) => {
  try {
    const nameValue = String(req.body.name || "").trim();
    const emailValue = String(req.body.email || "")
      .trim()
      .toLowerCase();
    const password = String(req.body.password || "");
    const phone = String(req.body.phone || "").trim();

    // 🔥 SIMPLE VALIDATION (Koi regex nahi, koi jhanjhat nahi)
    if (
      !nameValue ||
      !emailValue ||
      !emailValue.includes("@") ||
      password.length < 6
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Kripya apna naam, sahi email aur kam se kam 6 character ka password daalein.",
      });
    }

    if (!process.env.JWT_SECRET) {
      return res
        .status(503)
        .json({ success: false, message: "Authentication is not configured." });
    }

    const userExists = await User.findOne({ email: emailValue });

    if (userExists) {
      return res.status(400).json({
        success: false,
        message:
          "Is email se account pehle se bana hua hai. Kripya Login karein.",
      });
    }

    // 🔥 Yahan 'User.create' ki jagah 'new User' use kiya hai taaki password hash ho jaye
    const user = new User({
      name: nameValue,
      email: emailValue,
      password,
      phone,
    });
    await user.save();

    res.status(201).json({
      success: true,
      token: generateToken(user._id),
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone,
      },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "An account already exists with this email.",
      });
    }
    res.status(500).json({
      success: false,
      message: "Unable to complete the request right now.",
    });
  }
};

// exports.loginUser = async (req, res) => {

exports.loginUser = async (req, res) => {
  try {
    const emailValue = String(req.body.email || "")
      .trim()
      .toLowerCase();
    const password = String(req.body.password || "");

    // 🔥 SIMPLE CHECK: Sirf email aur password hona chahiye
    if (!emailValue || !password) {
      return res.status(400).json({
        success: false,
        message: "Kripya apna email aur password daalein.",
      });
    }

    // Database mein user dhundo
    const user = await User.findOne({ email: emailValue });

    // Agar user mila aur password match hua
    if (user && (await user.matchPassword(password))) {
      res.json({
        success: true,
        token: generateToken(user._id),
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          phone: user.phone,
        },
      });
    } else {
      // Agar email ya password galat hai
      res.status(401).json({
        success: false,
        message: "Email ya password galat hai. Kripya dobara try karein.",
      });
    }
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({
      success: false,
      message: "Server mein kuch dikkat aa gayi. Thodi der baad try karein.",
    });
  }
};

//   try {
//     const emailValue = String(req.body.email || "")
//       .trim()
//       .toLowerCase();
//     const password = String(req.body.password || "");
//     if (!process.env.JWT_SECRET) {
//       return res
//         .status(503)
//         .json({ success: false, message: "Authentication is not configured." });
//     }
//     if (!emailValue || !password) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Email and password are required." });
//     }
//     const user = await User.findOne({ email: emailValue });

//     if (user && (await user.matchPassword(password))) {
//       res.json({
//         success: true,
//         token: generateToken(user._id),
//         user: {
//           _id: user._id,
//           name: user.name,
//           email: user.email,
//           role: user.role,
//           phone: user.phone,
//         },
//       });
//     } else {
//       res
//         .status(401)
//         .json({ success: false, message: "Invalid credentials provided" });
//     }
//   } catch (error) {
//     res
//       .status(500)
//       .json({
//         success: false,
//         message: "Unable to complete the request right now.",
//       });
//   }
// };

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to complete the request right now.",
    });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.phone = req.body.phone || user.phone;
      if (req.body.password) {
        user.password = req.body.password;
      }
      const updatedUser = await user.save();
      res.json({
        success: true,
        user: {
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          role: updatedUser.role,
          phone: updatedUser.phone,
        },
      });
    } else {
      res
        .status(404)
        .json({ success: false, message: "User record not found" });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to complete the request right now.",
    });
  }
};
