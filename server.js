const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); // Import the cors package
const app = require("./app");

dotenv.config({ path: "./config/config.env" });

// Use CORS middleware in the app
app.use(cors()); // This will allow requests from any origin

// Alternatively, specify CORS options if needed
// app.use(cors({
//   origin: 'http://localhost:3000', // Replace with your frontend URL
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
//   credentials: true // Allow credentials (cookies, headers, etc.)
// }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
