// src/validators/contact.validators.js
import { body } from 'express-validator';

const contactValidator = () => {
  return [
    body('name')
      .trim()
      .notEmpty()
      .withMessage('Name is required')
      .isLength({ min: 2, max: 50 })
      .withMessage('Name must be between 2 and 50 characters'),
    body('email')
      .trim()
      .notEmpty()
      .withMessage('Email is required')
      .isEmail()
      .withMessage('Invalid email address')
      .normalizeEmail(),
    body('phone')
      .optional()
      .trim()
      .matches(/^\+?[\d\s-]{10,}$/)
      .withMessage('Invalid phone number'),
    body('message')
      .trim()
      .notEmpty()
      .withMessage('Message is required')
      .isLength({ min: 10, max: 500 })
      .withMessage('Message must be between 10 and 500 characters'),
  ];
};

export { contactValidator };