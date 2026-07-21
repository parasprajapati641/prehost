const express = require('express');
const router = express.Router();
const User = require("../models/user");
const subscriber = require("../models/subscriber");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const nodemailer = require("nodemailer");

// User registration route
router.post("/register", async (req, res) => {
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
});

// User login route
router.post("/login", async (req, res) => {
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
               name: user.name
          }, process.env.JWT_SECRET, { expiresIn: "1h" });
          return res.status(200).json({
               message: "Login successful",
               token
          });
     }
     catch (error) {
          console.error("Login error:", error);
          return res.status(500).json({
               message: "Server error"
          });
     }
})


// forgot password route
router.post("/forgot-password", async (req, res) => {
     try {
          const { email, newPassword } = req.body;

          if (!email || !newPassword) {
               return res.status(400).json({
                    message: "Invalid email or password"
               })
          }

          const user = await User.findOne({ email });
          if (!user) {
               return res.status(400).json({
                    message: "User not found"
               })
          }

          // old and new password should not be same
          const isSamePassword = await bcrypt.compare(newPassword, user.password);
          if (isSamePassword) {
               return res.status(400).json({
                    message: "New password cannot be same as old password"
               })
          }

          //hash the new password
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(newPassword, salt);

          //update the password in the database
          user.password = hashedPassword;
          await user.save();


          return res.status(200).json({
               message: "Password updated successfully"
          })

     }
     catch (error) {
          console.error("Forgot password error:", error);
          return res.status(500).json({
               message: "server error"
          })
     }
})


// Email subscribe route
router.post("/subscribe", async (req, res) => {
     try {
          const { email } = req.body;

          if (!email) {
               return res.status(400).json({
                    message: "Email is required"
               })
          }

          // Check if the email is already subscribed
          const existingSubscriber = await subscriber.findOne({ email });
          if (existingSubscriber) {
               return res.status(400).json({
                    message: "Email is already subscribed"
               })
          }

          // save the email to the database
          const newSubscriber = new subscriber({ email });
          await newSubscriber.save();

          const transporter = nodemailer.createTransport({
               service: "gmail",
               auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
               },
          });

          await transporter.sendMail({
               from: process.env.EMAIL_USER,
               to: email,
               subject: "Welcome to Prehost Technology",
               html: `
                    <h2>Thank You for Subscribing!</h2>
                    <p>You have successfully subscribed to Prehost Technology.</p>
               `,
          });

          res.status(200).json({
               message: "Subscription successful. Thank you for subscribing!"
          })
     }
     catch (error) {
          console.log("Email subscribing error:", error);
          return res.status(500).json({
               message: "Server error"
          })
     }
})

module.exports = router;
