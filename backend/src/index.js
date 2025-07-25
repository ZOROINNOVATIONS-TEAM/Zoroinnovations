// src/index.js
import dotenv from 'dotenv';
import app from './app.js';
import { connectDB } from './db/db.js';

// Load environment variables
dotenv.config({ path: './.env' });

// Validate critical environment variables
const requiredEnvVars = ['MONGO_URI', 'PORT', 'CLIENT_URL'];
const missingEnvVars = requiredEnvVars.filter((varName) => !process.env[varName]);
if (missingEnvVars.length > 0) {
  console.error(`Error: Missing environment variables: ${missingEnvVars.join(', ')}`);
  process.exit(1);
}

const PORT = process.env.PORT || 8000;

// Connect to MongoDB and start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message, err.stack);
    process.exit(1);
  });

// Handle uncaught exceptions and unhandled rejections
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err.message, err.stack);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err.message, err.stack);
  process.exit(1);
});