const router = require("express").Router();
const User = require("../models/User"); // Adjust path if needed
const bcrypt = require("bcryptjs");

// Signup route
router.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validate input fields
        if (!username || !email || !password) {
            return res.status(400).json({ msg: "Please enter all fields." });
        }

        if (username.length < 5) {
            return res.status(400).json({ msg: "Username must be at least 5 characters." });
        }

        if (password.length < 6) {
            return res.status(400).json({ msg: "Password must be at least 6 characters." });
        }

        // Check if user already exists
        const existingEmail = await User.findOne({ email });
        const existingUsername = await User.findOne({ username });

        if (existingEmail) {
            return res.status(400).json({ msg: "Email already exists." });
        }

        if (existingUsername) {
            return res.status(400).json({ msg: "Username already exists." });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        return res.status(201).json({ msg: "Account created successfully!" });
    } catch (error) {
        console.error("Error in signup route:", error);
        res.status(500).json({ msg: "Server error", error });
    }
});

module.exports = router;
