import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/db/connectDB.js";
import router from "./src/routes/index.js";
dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods
}));
app.use(express.json({
    limit: '20mb' // Increase the limit for large JSON payloads
}));
app.use(express.urlencoded({ extended: true }));

// Handle Errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


// Connect to MongoDB
connectDB();


// Routes
app.use("/api/v1", router);

// Health Check Route
app.get("/healthz", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Aman Estate API",
  });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});