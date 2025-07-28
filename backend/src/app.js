import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import serviceRoutes from "./routes/service.routes.js"; // Added service routes
import rateLimit from "express-rate-limit";

const app = express();

// Apply rate limiting to all requests
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
});
app.use(limiter);

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/services", serviceRoutes); // Added service routes

export default app;