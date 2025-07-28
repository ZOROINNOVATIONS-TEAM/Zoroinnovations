import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import app from './app.js';
import { connectDB } from './db/db.js';

// Resolve the path to .env file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = join(__dirname, '../.env');

// Load environment variables
const result = dotenv.config({ path: envPath });
if (result.error) {
  console.error('Error loading .env file:', result.error.message);
  process.exit(1);
}

// Debug: Log loaded environment variables
console.log('Loaded environment variables:', {
  PORT: process.env.PORT,
  CLIENT_URL: process.env.CLIENT_URL,
  MONGO_URI: process.env.MONGO_URI ? '[REDACTED]' : undefined,
  NODE_ENV: process.env.NODE_ENV,
});

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