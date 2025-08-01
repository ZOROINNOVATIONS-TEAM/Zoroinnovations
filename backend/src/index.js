import express from 'express';
import { connectDB } from './db/db.js';
import authRoutes from './routes/auth.routes.js';
import contactRoutes from './routes/contact.routes.js';
import serviceRoutes from './routes/service.routes.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'; // ✅ Import added

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser()); // ✅ Middleware added to parse cookies

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/service', serviceRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
