const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema(
     {
          name: {
               type: String,
               required: true,
               maxlength: 100,
               trim: true
          },
          company: {
               type: String,
               maxlength: 100,
               trim: true
          },
          email: {
               type: String,
               required: true,
               maxlength: 100,
               trim: true,
               lowercase: true
          },
          phone: {
               type: String,
               maxlength: 15,
               trim: true
          },
          budget: {
               type: Number,
               required: true
          },
          projectDetails: {
               type: String,
               required: true
          },

     },
     {
          timestamps: true
     }
);

module.exports = mongoose.model('Inquiry', inquirySchema);
