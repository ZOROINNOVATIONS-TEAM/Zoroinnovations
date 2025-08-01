import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';

export const authMiddleware = async (req, res, next) => {
  try {
    const { accessToken } = req.cookies;
    if (!accessToken) {
      return res.status(401).json({
        success: false,
        message: 'Access token not found',
      });
    }

    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET); // ✅ Fixed
    req.userId = decoded._id;
    next(); // ✅ Proceed to next middleware
  } catch (error) {
    console.error('Error in authMiddleware:', error.message, error.stack);
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired access token',
      error: error.message,
    });
  }
};

export const refreshAccessTokenMiddleware = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: 'Refresh token not found',
      });
    }

    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET); // ✅ Fixed
    req.id = decoded._id;
    next(); // ✅ Proceed
  } catch (error) {
    console.error('Error in refreshAccessTokenMiddleware:', error.message, error.stack);
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired refresh token',
      error: error.message,
    });
  }
};

export const checkAdminRole = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId).select('role');
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    if (user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Access denied. Admins only.',
      });
    }

    next(); // ✅ Proceed if user is admin
  } catch (error) {
    console.error('Error in checkAdminRole middleware:', error.message, error.stack);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
};
