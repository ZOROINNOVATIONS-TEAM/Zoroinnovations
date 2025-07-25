// src/routes/contact.routes.js
import { Router } from 'express';
import { submitContactForm } from '../controllers/contact.controller.js';
import { contactValidator } from '../validators/contact.validators.js';

const router = Router();

router.route('/').post(contactValidator(), submitContactForm);

export default router;