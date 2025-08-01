import { body } from 'express-validator';

const userRegisterValidator = () => [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .bail()
    .isEmail()
    .withMessage('Email is invalid'),

  body('username')
    .trim()
    .notEmpty()
    .withMessage('Username is required')
    .bail()
    .isLowercase()
    .withMessage('Username must be lowercase')
    .bail()
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters long'),

  body('password')
    .trim()
    .notEmpty()
    .withMessage('Password is required')
    .bail()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),

  body('fullName')
    .trim()
    .optional({ checkFalsy: true })
    .isLength({ min: 1 })
    .withMessage('Full name must be at least 1 character if provided'),
];

const resendEmailValidator = () => [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .bail()
    .isEmail()
    .withMessage('Email is invalid'),
];

const userLoginValidator = () => [
  body('email')
    .optional()
    .bail()
    .isEmail()
    .withMessage('Email is invalid'),

  body('username')
    .optional(),

  body('password')
    .notEmpty()
    .withMessage('Password is required'),
];

const userChangeCurrentPasswordValidator = () => [
  body('oldPassword')
    .notEmpty()
    .withMessage('Old password is required'),

  body('newPassword')
    .notEmpty()
    .withMessage('New password is required')
    .bail()
    .isLength({ min: 6 })
    .withMessage('New password must be at least 6 characters long'),
];

const userForgotPasswordValidator = () => [
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .bail()
    .isEmail()
    .withMessage('Email is invalid'),
];

const userResetForgottenPasswordValidator = () => [
  body('newPassword')
    .notEmpty()
    .withMessage('Password is required')
    .bail()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),

  body('confirmPassword')
    .notEmpty()
    .withMessage('Confirm password is required')
    .bail()
    .custom((value, { req }) => value === req.body.newPassword)
    .withMessage('Passwords do not match'),
];

export {
  userChangeCurrentPasswordValidator,
  userForgotPasswordValidator,
  userLoginValidator,
  userRegisterValidator,
  userResetForgottenPasswordValidator,
  resendEmailValidator,
};
