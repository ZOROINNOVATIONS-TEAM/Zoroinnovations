const express = require('express');
const {
  getCategories,
  getCategory,
  createCategory, // Only for testing, typically admin
  updateCategory, // Only for testing, typically admin
  deleteCategory  // Only for testing, typically admin
} = require('../controllers/categoryController'); // Bring in the category controller functions

const router = express.Router();

// Public Routes for Categories
router.route('/').get(getCategories); // GET /api/job-categories (get all categories)
router.route('/:id').get(getCategory); // GET /api/job-categories/:id (get a single category)

// --- TEMPORARY / ADMIN ROUTES FOR INITIAL TESTING ---
// These will typically be moved to a separate adminRoutes file later
// or protected with authentication middleware.
router.route('/').post(createCategory); // POST /api/job-categories (create new category)
router.route('/:id').put(updateCategory).delete(deleteCategory); // PUT /api/job-categories/:id (update), DELETE /api/job-categories/:id (delete)
// --- END TEMPORARY ROUTES ---

module.exports = router; 