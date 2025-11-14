const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const router = express.Router();

// SIGNUP
router.post("/signup", async (req, res) => {
    const { email, password, role, teacherId } = req.body;

    if (role === "student" && !teacherId) {
        return res.json({ success: false, message: "Student must have teacherId" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser)
        return res.json({ success: false, message: "Email already exists" });

    const hashed = await bcrypt.hash(password, 10);

    const user = new User({
        email,
        passwordHash: hashed,
        role,
        teacherId: role === "student" ? teacherId : null
    });

    await user.save();
    res.json({ success: true, message: "User created" });
});

// LOGIN
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.json({ success: false, message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch)
        return res.json({ success: false, message: "Invalid credentials" });

    const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET
    );

    res.json({ success: true, token, role: user.role, userId: user._id });
});

module.exports = router;
