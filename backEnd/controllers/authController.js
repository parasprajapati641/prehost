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

          // Generate JWT token
          const token = jwt.sign(
               {
                    email: newUser.email,
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
               },
               process.env.JWT_SECRET,
               { expiresIn: "2d" }
          );


          return res.status(201).json({
               message: "User registered successfully",
               token,
               user: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email
               }
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
          const { email, password } = req.body;

          const user = await User.findOne({ email });

          if (!user) {
               return res.status(404).json({
                    success: false,
                    message: "User not found",
               });
          }

          // Check if new password is same as old password
          const isSamePassword = await bcrypt.compare(password, user.password);

          if (isSamePassword) {
               return res.status(400).json({
                    success: false,
                    message: "New password cannot be the same as your current password.",
               });
          }

          // Hash new password
          const hashedPassword = await bcrypt.hash(password, 10);

          user.password = hashedPassword;

          await user.save();

          return res.status(200).json({
               success: true,
               message: "Password reset successfully.",
          });

     } catch (error) {
          console.log(error);

          return res.status(500).json({
               success: false,
               message: "Server Error",
          });
     }
};