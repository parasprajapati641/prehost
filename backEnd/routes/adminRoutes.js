const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

// creact admin route
router.post("/", adminController.createAdmin);

// admin login route
router.post("/login", adminController.login);

module.exports = router;