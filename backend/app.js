const express = require("express");
const app = express();
const userApi = require("./routers/user");
require("dotenv").config(); // Load environment variables
const conn = require("./conn/conn"); // Import DB connection function

// Connect to the database
conn();

// Middleware to parse JSON
app.use(express.json());

// Register routes
app.use("/api/v1", userApi);

// Define the PORT
const PORT = process.env.PORT || 3002;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
