import { Router } from 'express';
import {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
} from '../controllers/service.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

router.route('/')
  .post(authMiddleware, createService)
  .get(getAllServices);
router.route('/:id')
  .get(getServiceById)
  .patch(authMiddleware, updateService)
  .delete(authMiddleware, deleteService);

export default router;