
import express from "express";
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/project.controller.js";

import { authMiddleware, checkAdminRole } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", getAllProjects);
router.get("/:id", getProjectById);

//Admin routes
router.post("/", authMiddleware, checkAdminRole, createProject);
router.put("/:id", authMiddleware, checkAdminRole, updateProject);
router.delete("/:id", authMiddleware, checkAdminRole, deleteProject);

export default router;