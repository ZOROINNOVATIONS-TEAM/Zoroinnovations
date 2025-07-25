// src/db/db.js
import mongoose from 'mongoose';
import retry from 'async-retry';

export const connectDB = async () => {
  try {
    await retry(
      async () => {
        await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          serverSelectionTimeoutMS: 5000,
        });
        console.log('MongoDB connected successfully');
      },
      { retries: 3, minTimeout: 1000 }
    );
  } catch (error) {
    throw new Error(`MongoDB connection failed: ${error.message}`);
  }
};