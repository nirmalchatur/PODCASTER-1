const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: { // Renamed from `user` to `username` for better readability
            type: String,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true, // Removed `unique` because hashed passwords don't need to be unique
        },
        podcasts: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Podcasts", // Reference to the Podcast model (PascalCase)
            },
        ],
    },
    { timestamps: true } // Correct syntax for timestamps
);

// Export the User model
module.exports = mongoose.model("User", userSchema);
