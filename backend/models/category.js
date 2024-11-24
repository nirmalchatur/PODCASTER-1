const mongoose = require("mongoose");

const category = new mongoose.Schema(
    {
        categoryName : { // Renamed from `user` to `username` for better readability
            type: String,
            unique: true,
            required: true,
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
module.exports = mongoose.model("category", category);
