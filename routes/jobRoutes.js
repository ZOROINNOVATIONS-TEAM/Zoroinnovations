const express = require('express');
const {
  getJobs,
  getJob,
  createJob, // Only for testing, typically admin
  updateJob, // Only for testing, typically admin
  deleteJob  // Only for testing, typically admin
} = require('../controllers/jobController'); // Bring in the job controller functions

const {
  applyForJob
} = require('../controllers/applicationController'); // Bring in the application controller function

const router = express.Router();

// Public Routes for Jobs
router.route('/').get(getJobs); // GET /api/jobs (get all jobs)
router.route('/:id').get(getJob); // GET /api/jobs/:id (get a single job)

// Public Route for Applying to a Job
// Note: This route will later include Multer for file uploads (resumes)
router.route('/:jobId/apply').post(applyForJob); // POST /api/jobs/:jobId/apply

// --- TEMPORARY / ADMIN ROUTES FOR INITIAL TESTING ---
// These will typically be moved to a separate adminRoutes file later
// or protected with authentication middleware.
router.route('/').post(createJob); // POST /api/jobs (create new job)
router.route('/:id').put(updateJob).delete(deleteJob); // PUT /api/jobs/:id (update), DELETE /api/jobs/:id (delete)
// --- END TEMPORARY ROUTES ---

module.exports = router; 