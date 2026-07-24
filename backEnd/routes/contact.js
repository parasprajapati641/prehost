const express = require("express");
const router = express.Router();
const Inquiry = require("../models/inquiry");

// Create a new contact inquiry
router.post("/", async (req, res) => {
     try{
          const {name, company, email, phone, budget, details} = req.body;
          
          // Create a new inquiry instance
          const newInquiry = new Inquiry({
               name,
               company,
               email,
               phone,
               budget,
               details
          });
          await newInquiry.save();
          return res.status(200).json({
               message: "Inquiry created successfully",
               inquiry: newInquiry
          });
     }
     catch (error) {
          console.error("Error creating inquiry:", error);
          return res.status(500).json({
               message: "Server error"
          });
     }
})


module.exports = router;