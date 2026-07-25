const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");
const nodemailer = require("nodemailer");

// User registration Controller 
exports.register = async (req, res) => {
     try {
          const { firstName, lastName, email, password, gender, phone, address } = req.body;

          // Email already exist check
          const existingUser = await User.findOne({ email });

          if (existingUser) {
               return res.status(400).json({ // Fixed return statement line break
                    message: "Email already registered"
               });
          }

          // Hash the password before saving
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);

          // Create new user
          const newUser = new User({
               firstName,
               lastName,
               email,
               password: hashedPassword, // Saving hashed password
               gender,
               phone,
               address
          });

          await newUser.save();

          return res.status(201).json({
               message: "User registered successfully"
          });
     }
     catch (error) {
          console.error("Register error:", error);
          return res.status(500).json({
               message: "Server error"
          });
     }
}


// User login Controller
exports.login = async (req, res) => {
     try {
          const { email, password } = req.body;

          // Check if user exists
          const user = await User.findOne({ email });
          if (!user) {
               return res.status(400).json({
                    message: "Invalid email or password"
               });
          }

          // Compare password
          const ismatch = await bcrypt.compare(password, user.password);
          if (!ismatch) {
               return res.status(400).json({
                    message: "Invalid email or password"
               });
          }

          // Generate JWT token
          const token = jwt.sign({
               // userId: user._id,
               email: user.email,
               firstName: user.firstName,
               lastName: user.lastName
          }, process.env.JWT_SECRET, { expiresIn: "1h" });
          return res.status(200).json({
               message: "Login successful",
               token,
               user: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email
               }
          });
     }
     catch (error) {
          console.error("Login error:", error);
          return res.status(500).json({
               message: "Server error"
          });
     }
}

// forgot password Controller
exports.forgotPassword = async (req, res) => {
     try {
          const { email } = req.body;

          const user = await User.findOne({ email });

          if (!user) {
               return res.status(404).json({
                    message: "User not found",
               });
          }

          // Generate Token
          const resetToken = crypto.randomBytes(32).toString("hex");

          user.resetPasswordToken = resetToken;

          user.resetPasswordExpires = Date.now() + 15 * 60 * 1000; // 15 minutes

          await user.save();

          const resetURL = `http://localhost:8080/reset-password/${resetToken}`;

          const message = `
      <h2>Password Reset</h2>

      <p>Click the link below to reset your password.</p>

      <a href="${resetURL}">
        Reset Password
      </a>
    `;

          await sendEmail(
               user.email,
               "Password Reset",
               message
          );

          res.status(200).json({
               message: "Reset link sent successfully",
          });

     } catch (error) {

          console.log(error);

          res.status(500).json({
               message: "Server Error",
          });

     }
}

// reset password
exports.resetPassword = async (req, res) => {
     try {
          const { token } = req.params;
          const { password } = req.body;

          // Find user by token
          const user = await User.findOne({
               resetPasswordToken: token,
               resetPasswordExpires: { $gt: Date.now() },
          });

          if (!user) {
               return res.status(400).json({
                    success: false,
                    message: "Invalid or expired reset link",
               });
          }

          // Hash new password
          const hashedPassword = await bcrypt.hash(password, 10);

          // Update password
          user.password = hashedPassword;

          // Remove token
          user.resetPasswordToken = undefined;
          user.resetPasswordExpires = undefined;

          await user.save();

          return res.status(200).json({
               success: true,
               message: "Password reset successfully",
          });

     } catch (error) {
          console.log(error);

          return res.status(500).json({
               success: false,
               message: "Server Error",
          });
     }
}