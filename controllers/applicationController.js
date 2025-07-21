const Application = require('../models/Application'); // Bring in the Application "toy part drawing"
const Job = require('../models/Job'); // Also need Job model for updates
// const ErrorResponse = require('../utils/errorResponse'); // Will create this later
// const asyncHandler = require('../middleware/async'); // Will create this later

// @desc    Apply for a job
// @route   POST /api/jobs/:jobId/apply
// @access  Public
exports.applyForJob = async (req, res, next) => {
  try {
    // Get the job ID from the URL parameters
    req.body.jobId = req.params.jobId;

    // Note: File upload (resume) handling will be added here later using Multer.
    // For now, assume resume data (filename, originalName, etc.) comes in req.body or will be handled separately.

    const application = await Application.create(req.body); // Create a new application

    // The post-save hook in the Application model will automatically increment job applicationsCount

    res.status(201).json({ success: true, data: application });
  } catch (error) {
    console.error(error);
    if (error.name === 'ValidationError') {
      // Format validation errors nicely
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ success: false, error: messages });
    }
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// @desc    Get all applications for a specific job (Admin view)
// @route   GET /api/admin/jobs/:jobId/applications
// @access  Private (Admin)
exports.getApplicationsForJob = async (req, res, next) => {
  try {
    const applications = await Application.find({ jobId: req.params.jobId }).populate('jobId'); // Find applications for a specific job
    res.status(200).json({ success: true, count: applications.length, data: applications });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// @desc    Get a single application (Admin view)
// @route   GET /api/admin/applications/:id
// @access  Private (Admin)
exports.getSingleApplication = async (req, res, next) => {
  try {
    const application = await Application.findById(req.params.id).populate('jobId');

    if (!application) {
      return res.status(404).json({ success: false, error: 'Application not found' });
    }

    res.status(200).json({ success: true, data: application });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

// @desc    Update application status/details (Admin view)
// @route   PUT /api/admin/applications/:id
// @access  Private (Admin)
exports.updateApplication = async (req, res, next) => {
  try {
    const application = await Application.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!application) {
      return res.status(404).json({ success: false, error: 'Application not found' });
    }

    res.status(200).json({ success: true, data: application });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Delete application (Admin view)
// @route   DELETE /api/admin/applications/:id
// @access  Private (Admin)
exports.deleteApplication = async (req, res, next) => {
  try {
    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({ success: false, error: 'Application not found' });
    }

    // Use pre-remove hook in model to decrement job applicationsCount
    await application.remove();

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};