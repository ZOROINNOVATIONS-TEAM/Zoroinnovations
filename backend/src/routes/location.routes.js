import { Router } from "express";
import {
  addLocation,
  getAllLocations,
  getLocationById,
  updateLocation,
  deleteLocation,
  searchLocations,
} from "../controllers/location.controller.js";
import {
  addLocationValidator,
  updateLocationValidator,
  locationIdValidator,
  searchLocationValidator,
} from "../validators/location.validators.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

// All location routes require authentication
// router.use(authMiddleware);

// Add new location
router.route("/add").post(addLocationValidator(), addLocation);

// Get all locations
router.route("/").get(getAllLocations);

// Search locations
router.route("/search").get(searchLocationValidator(), searchLocations);

// Get, update, delete location by ID
router
  .route("/:id")
  .get(locationIdValidator(), getLocationById)
  .put(updateLocationValidator(), updateLocation)
  .delete(locationIdValidator(), deleteLocation);

export default router;