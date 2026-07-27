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
      <div style="font-family: Arial, sans-serif; padding:20px;">
        <h2>🎉 Thank You for Subscribing!</h2>

        <p>Hello,</p>

        <p>
          Thank you for subscribing to <strong>Prehost Technology</strong>.
        </p>

        <p>
          You'll now receive updates about our latest products,
          services, and offers.
        </p>

        <p>
          Regards,<br>
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