const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path'); // For serving static files later
const connectDB = require('./config/db'); // Correctly importing your database connection function

// Load environment variables from .env file
dotenv.config({ path: './.env' });

// Connect to the MongoDB database
connectDB();

const app = express();

// Middleware:
// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Body parser for JSON data
app.use(express.json());

// Body parser for URL-encoded form data
app.use(express.urlencoded({ extended: false }));

// Serve static files (like uploaded resumes, once you set that up)
// This line should be present *before* your routes if static files need to be served.
app.use(express.static(path.join(__dirname, 'public')));


// --- Define your API Routes here ---

// Example route you already have:
app.get('/', (req, res) => {
  res.send('Job Portal Backend is running ✅');
});

// Main API routes for Jobs and Categories (public facing)
app.use('/api/jobs', require('./routes/jobRoutes')); // <-- UNCOMMENTED
app.use('/api/job-categories', require('./routes/categoryRoutes')); // <-- UNCOMMENTED

// Placeholder for future Admin API routes (remain commented for now):
// app.use('/api/admin/jobs', require('./routes/admin/jobRoutes'));
// app.use('/api/admin/applications', require('./routes/admin/applicationAdminRoutes'));
// app.use('/api/admin/job-categories', require('./routes/admin/categoryAdminRoutes'));


// --- Error Handling Middleware ---
// This should always be the last middleware in your chain.
// We will create this file in a later step (middleware/errorHandler.js).
// For now, you can keep it commented out or leave it if you've already created it.
// app.use(errorHandler);


// Define the port for your server to listen on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 