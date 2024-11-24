const mongoose = require("mongoose");

const conn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully.");
    } catch (error) {
        console.error("Error connecting to database:", error);
        process.exit(1); // Exit process on failure
    }
};

module.exports = conn;
