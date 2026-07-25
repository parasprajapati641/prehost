const express = require("express");
const router = express.Router();
const contact = require("../models/contact");

const contactController = require("../controllers/contactController")

// Create a new contact route
// router.post("/", async (req, res) => {
//      try{
//           const {name, company, email, phone, budget, details} = req.body;
          
//           // Create a new inquiry instance
//           const newContact = new contact({
//                name,
//                company,
//                email,
//                phone,
//                budget,
//                details
//           });
//           await newContact.save();
//           return res.status(200).json({
//                message: "Inquiry created successfully",
//                inquiry: newInquiry
//           });
//      }
//      catch (error) {
//           console.error("Error creating inquiry:", error);
//           return res.status(500).json({
//                message: "Server error"
//           });
//      }
// })

router.post("/", contactController.contact);

module.exports = router;