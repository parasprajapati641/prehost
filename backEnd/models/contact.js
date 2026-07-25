const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
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
               type: String,
               required: true
          },
          details: {
               type: String,
               required: true
          },

     },
     {
          timestamps: true
     }
);

module.exports = mongoose.model('contact', contactSchema);
