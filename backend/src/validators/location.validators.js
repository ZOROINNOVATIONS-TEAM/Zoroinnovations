import { body, param, query } from "express-validator";
import { validate } from "../middlewares/validation.middleware.js";

const addLocationValidator = () => {
  return [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Location name is required")
      .isLength({ min: 2, max: 100 })
      .withMessage("Location name must be between 2 and 100 characters"),
    
    body("address")
      .trim()
      .notEmpty()
      .withMessage("Address is required")
      .isLength({ min: 5, max: 200 })
      .withMessage("Address must be between 5 and 200 characters"),
    
    body("city")
      .trim()
      .notEmpty()
      .withMessage("City is required")
      .isLength({ min: 2, max: 50 })
      .withMessage("City must be between 2 and 50 characters"),
    
    body("state")
      .trim()
      .notEmpty()
      .withMessage("State is required")
      .isLength({ min: 2, max: 50 })
      .withMessage("State must be between 2 and 50 characters"),
    
    body("country")
      .trim()
      .notEmpty()
      .withMessage("Country is required")
      .isLength({ min: 2, max: 50 })
      .withMessage("Country must be between 2 and 50 characters"),
    
    validate,
  ];
};

const updateLocationValidator = () => {
  return [
    param("id")
      .isMongoId()
      .withMessage("Invalid location ID"),
    
    body("name")
      .optional()
      .trim()
      .isLength({ min: 2, max: 100 })
      .withMessage("Location name must be between 2 and 100 characters"),
    
    body("address")
      .optional()
      .trim()
      .isLength({ min: 5, max: 200 })
      .withMessage("Address must be between 5 and 200 characters"),
    
    body("city")
      .optional()
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage("City must be between 2 and 50 characters"),
    
    body("state")
      .optional()
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage("State must be between 2 and 50 characters"),
    
    body("country")
      .optional()
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage("Country must be between 2 and 50 characters"),
    
    validate,
  ];
};

const locationIdValidator = () => {
  return [
    param("id")
      .isMongoId()
      .withMessage("Invalid location ID"),
    validate,
  ];
};

const searchLocationValidator = () => {
  return [
    query("query")
      .trim()
      .notEmpty()
      .withMessage("Search query is required")
      .isLength({ min: 1, max: 100 })
      .withMessage("Search query must be between 1 and 100 characters"),
    validate,
  ];
};

export {
  addLocationValidator,
  updateLocationValidator,
  locationIdValidator,
  searchLocationValidator,
};