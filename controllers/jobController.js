const Job = require('../models/Job'); // Bring in the Job "toy part drawing"
// const ErrorResponse = require('../utils/errorResponse'); // Will create this later for custom errors
// const asyncHandler = require('../middleware/async'); // Will create this later to simplify async/await

// @desc    Get all jobs
// @route   GET /api/jobs
// @access  Public
exports.getJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find(); // Find all jobs from the database
    res.status(200).json({ success: true, count: jobs.length, data: jobs });
  } catch (error) {
    // For now, we'll just send a basic error. Later, we'll use custom error handling.
    console.error(error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// @desc    Get single job
// @route   GET /api/jobs/:id
// @access  Public
exports.getJob = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id); // Find one job by its ID

    if (!job) {
      // If no job is found with that ID
      return res.status(404).json({ success: false, error: 'Job not found' });
    }

    res.status(200).json({ success: true, data: job });
  } catch (error) {
    // If the ID format is bad or other server error
    console.error(error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// @desc    Create new job
// @route   POST /api/jobs
// @access  Private (e.g., for Admin) - will add authentication later
exports.createJob = async (req, res, next) => {
  try {
    const job = await Job.create(req.body); // Create a new job with data from the request body
    res.status(201).json({ success: true, data: job });
  } catch (error) {
    // Handle validation errors or other creation issues
    console.error(error);
    res.status(400).json({ success: false, error: error.message }); // Send back validation messages
  }
};

// @desc    Update job
// @route   PUT /api/jobs/:id
// @access  Private (e.g., for Admin)
exports.updateJob = async (req, res, next) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Run Mongoose validators on update
    });

    if (!job) {
      return res.status(404).json({ success: false, error: 'Job not found' });
    }

    res.status(200).json({ success: true, data: job });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Delete job
// @route   DELETE /api/jobs/:id
// @access  Private (e.g., for Admin)
exports.deleteJob = async (req, res, next) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id); // Find and delete a job

    if (!job) {
      return res.status(404).json({ success: false, error: 'Job not found' });
    }

    res.status(200).json({ success: true, data: {} }); // Send empty data for successful deletion
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};