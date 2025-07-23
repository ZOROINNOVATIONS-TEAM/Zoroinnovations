// src/routes/service.routes.js
import { Router } from "express";
import {
  createService,
  getServiceById,
  getServices,
  updateService,
  deleteService,
} from "../controllers/service.controller.js";
import {
  createServiceValidator,
  updateServiceValidator,
  serviceIdValidator,
} from "../validators/service.validators.js";
import { authMiddleware, checkAdminRole } from "../middlewares/auth.middleware.js";

const router = Router();

// Public Endpoints
router.route("/").get(getServices);
router.route("/:id").get(serviceIdValidator(), getServiceById);

// Protected Endpoints (Admin Only)
router.route("/").post(
  authMiddleware,
  checkAdminRole,
  createServiceValidator(),
  createService
);
router.route("/:id").patch(
  authMiddleware,
  checkAdminRole,
  serviceIdValidator(),
  updateServiceValidator(),
  updateService
);
router.route("/:id").delete(
  authMiddleware,
  checkAdminRole,
  serviceIdValidator(),
  deleteService
);

export default router;