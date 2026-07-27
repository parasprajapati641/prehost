const express = require('express');
const router = express.Router();

const userController = require("../controllers/authController");

// User registration route
router.post("/register", userController.register);

// User login route
router.post("/login", userController.login);

// forgot password route
router.post("/forgot-password", userController.forgotPassword)



module.exports = router;
