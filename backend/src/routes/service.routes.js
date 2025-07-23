// routes/service.routes.js
import { Router } from "express";
import { createService, getServices } from "../controllers/service.controller.js";
import { authMiddleware, checkAdminRole } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").post(authMiddleware, checkAdminRole, createService);
router.route("/").get(getServices);

export default router;

// controllers/service.controller.js
import { Service } from "../models/service.model.js";

const createService = async (req, res) => {
  try {
    const service = await Service.create({ ...req.body, createdBy: req.userId });
    res.status(201).json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const getServices = async (req, res) => {
  try {
    const services = await Service.find({ isActive: true }).sort({ displayOrder: 1 });
    res.status(200).json({ success: true, data: services });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export { createService, getServices };