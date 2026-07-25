const contact = require("../models/contact");


// Create a new contact Controller
exports.contact = async (req, res) => {
     try {
          const { name, company, email, phone, budget, details } = req.body;

          // Create a new inquiry instance
          const newContact = new contact({
               name,
               company,
               email,
               phone,
               budget,
               details
          });
          await newContact.save();
          return res.status(200).json({
               message: "Inquiry created successfully",
               inquiry: newContact
          });
     }
     catch (error) {
          console.error("Error creating inquiry:", error);
          return res.status(500).json({
               message: "Server error"
          });
     }
}