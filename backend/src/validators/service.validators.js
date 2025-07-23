// src/validators/service.validators.js
import { body, param } from "express-validator";

const createServiceValidator = () => {
  return [
    body("title")
      .trim()
      .notEmpty()
      .withMessage("Title is required")
      .isLength({ min: 3, max: 100 })
      .withMessage("Title must be between 3 and 100 characters"),
    body("description")
      .trim()
      .notEmpty()
      .withMessage("Description is required")
      .isLength({ min: 10, max: 500 })
      .withMessage("Description must be between 10 and 500 characters"),
    body("category")
      .trim()
      .notEmpty()
      .withMessage("Category is required")
      .isIn(["Development", "AI/ML", "Infrastructure", "Consulting"])
      .withMessage("Invalid category"),
    body("iconUrl")
      .optional()
      .isURL()
      .withMessage("Icon URL must be a valid URL"),
    body("features")
      .isArray({ min: 1 })
      .withMessage("At least one feature is required"),
    body("pricing.type")
      .notEmpty()
      .withMessage("Pricing type is required")
      .isIn(["fixed", "hourly", "project", "subscription"])
      .withMessage("Invalid pricing type"),
    body("pricing.startingPrice")
      .isFloat({ min: 0 })
      .withMessage("Starting price must be a positive number"),
    body("pricing.currency")
      .notEmpty()
      .withMessage("Currency is required")
      .isIn(["USD", "EUR", "GBP", "INR"])
      .withMessage("Invalid currency"),
    body("slug")
      .trim()
      .notEmpty()
      .withMessage("Slug is required")
      .matches(/^[a-z0-9-]+$/i)
      .withMessage("Slug must be URL-friendly (alphanumeric and hyphens only)"),
    body("deliveryTime")
      .trim()
      .notEmpty()
      .withMessage("Delivery time is required"),
  ];
};

const updateServiceValidator = () => {
  return [
    body("title")
      .optional()
      .trim()
      .isLength({ min: 3, max: 100 })
      .withMessage("Title must be between 3 and 100 characters"),
    body("description")
      .optional()
      .trim()
      .isLength({ min: 10, max: 500 })
      .withMessage("Description must be between 10 and 500 characters"),
    body("category")
      .optional()
      .trim()
      .isIn(["Development", "AI/ML", "Infrastructure", "Consulting"])
      .withMessage("Invalid category"),
    body("iconUrl")
      .optional()
      .isURL()
      .withMessage("Icon URL must be a valid URL"),
    body("features")
      .optional()
      .isArray({ min: 1 })
      .withMessage("At least one feature is required"),
    body("pricing.type")
      .optional()
      .isIn(["fixed", "hourly", "project", "subscription"])
      .withMessage("Invalid pricing type"),
    body("pricing.startingPrice")
      .optional()
      .isFloat({ min: 0 })
      .withMessage("Starting price must be a positive number"),
    body("pricing.currency")
      .optional()
      .isIn(["USD", "EUR", "GBP", "INR"])
      .withMessage("Invalid currency"),
    body("slug")
      .optional()
      .trim()
      .matches(/^[a-z0-9-]+$/i)
      .withMessage("Slug must be URL-friendly (alphanumeric and hyphens only)"),
    body("deliveryTime")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Delivery time is required"),
  ];
};

const serviceIdValidator = () => {
  return [
    param("id")
      .isMongoId()
      .withMessage("Invalid service ID"),
  ];
};

export { createServiceValidator, updateServiceValidator, serviceIdValidator };