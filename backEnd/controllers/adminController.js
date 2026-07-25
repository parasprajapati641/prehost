const Admin = require("../models/admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Create Admin
exports.createAdmin = async (req, res) => {

    try {

        const { email, password } = req.body;

        const exist = await Admin.findOne({ email });

        if (exist) {
            return res.status(400).json({
                message: "Admin already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await Admin.create({
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "Admin Created"
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Server Error"
        });

    }

};

// Admin Login
exports.login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(400).json({
                message: "Invalid Credentials"
            });
        }

        const match = await bcrypt.compare(
            password,
            admin.password
        );

        if (!match) {
            return res.status(400).json({
                message: "Invalid Credentials"
            });
        }

        const token = jwt.sign(
            {
                email: admin.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        res.status(200).json({
            token
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Server Error"
        });

    }

};