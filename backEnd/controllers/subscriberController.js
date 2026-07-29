const Subscriber = require("../models/subscriber");
const sendEmail = require("../utils/sendEmail");

exports.Subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    // Validate email
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // Check existing subscriber
    const existingSubscriber = await Subscriber.findOne({ email });

    if (existingSubscriber) {
      return res.status(409).json({
        success: false,
        message: "Email is already subscribed",
      });
    }

    // // Save subscriber
    // await Subscriber.create({ email });

    // Email Template
    const subject = "Welcome to Prehost Technology";

    const html = `
       <div
          style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #333; line-height: 1.6;">

          <h2 style="color: #2563eb; margin-bottom: 16px;">
               🎉 Welcome to Prehost Technology!
          </h2>

          <p>Hello,</p>

          <p>
               Thank you for subscribing to <strong>Prehost Technology</strong>.
               We're excited to have you as part of our community.
          </p>

          <p>
               You'll be among the first to receive updates about our latest
               technologies, products, services, industry insights, and exclusive offers.
          </p>

          <p>
               We look forward to helping you stay informed and connected with everything happening at Prehost
               Technology.
          </p>

          <p>
               Thank you for your support!
          </p>

          <p style="margin-top: 24px;">
               Best regards,<br>
               <strong>Prehost Technology Team</strong>
          </p>

     </div>
    `;

    // Send Email
    await sendEmail(email, subject, html);
    await Subscriber.create({ email });

    return res.status(201).json({
      success: true,
      message: "You're successfully subscribed! Welcome to the Prehost community."
    });
  } catch (error) {
    console.error("Subscribe Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};