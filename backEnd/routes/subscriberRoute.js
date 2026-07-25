const express = require("express");
const router = express.Router();

const subscriberController = require("../controllers/subscriberController");

router.post("/", subscriberController.Subscribe);

module.exports = router;