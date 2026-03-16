const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Swagger Documentation
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/notes", require("./routes/noteRoutes"));
app.use("/api/analytics", require("./routes/analyticsRoutes"));

// Root route
app.get("/", (req, res) => {
  res.send("Advanced Notes API is running");
});

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
