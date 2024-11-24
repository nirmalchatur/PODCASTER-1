const mongoose = require("mongoose");

const Podcasts = new mongoose.Schema(
    {
        frontImage : { // Renamed from `user` to `username` for better readability
            type: String,
            unique: true,
            required: true,
        },
        audiofile: {
            type: String,
            unique: true,
            required: true,
        },
        title: {
            type: String,
            unique: true,
            required: true, // Removed `unique` because hashed passwords don't need to be unique
        },
        description: {
            type: String,
            unique: true,
            required: true,
            },

            User: 
            {
                type: mongoose.Types.ObjectId,
                ref: "User", // Reference to the Podcast model (PascalCase)
            },
            category: 
            {
                type: mongoose.Types.ObjectId,
                ref: "category", // Reference to the Podcast model (PascalCase)
            },
        
    },
    { timestamps: true } // Correct syntax for timestamps
);

// Export the User model
module.exports = mongoose.model("Podcasts", Podcasts);
