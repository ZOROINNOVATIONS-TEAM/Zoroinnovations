// src/controllers/service.controller.js
import { Service } from "../models/service.model.js";
import { validationResult } from "express-validator";

const createService = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const existingService = await Service.findOne({ slug: req.body.slug });
    if (existingService) {
      return res.status(400).json({
        success: false,
        message: "Service with this slug already exists",
      });
    }

    const service = await Service.create({
      ...req.body,
      createdBy: req.userId,
    });

    res.status(201).json({
      success: true,
      data: service,
      message: "Service created successfully",
    });
  } catch (error) {
    console.error("Error creating service:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getServices = async (req, res) => {
  try {
    const services = await Service.find({ isActive: true })
      .sort({ displayOrder: 1 })
      .populate("createdBy", "username fullname");
    res.status(200).json({
      success: true,
      data: services,
      message: "Services retrieved successfully",
    });
  } catch (error) {
    console.error("Error retrieving services:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getServiceById = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const service = await Service.findById(req.params.id).populate(
      "createdBy",
      "username fullname"
    );
    if (!service || !service.isActive) {
      return res.status(404).json({
        success: false,
        message: "Service not found or inactive",
      });
    }

    res.status(200).json({
      success: true,
      data: service,
      message: "Service retrieved successfully",
    });
  } catch (error) {
    console.error("Error retrieving service:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const updateService = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    if (req.body.slug) {
      const existingService = await Service.findOne({
        slug: req.body.slug,
        _id: { $ne: req.params.id },
      });
      if (existingService) {
        return res.status(400).json({
          success: false,
          message: "Service with this slug already exists",
        });
      }
    }

    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      data: updatedService,
      message: "Service updated successfully",
    });
  } catch (error) {
    console.error("Error updating service:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const deleteService = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    await service.deleteOne();

    res.status(200).json({
      success: true,
      message: "Service deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting service:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export {
  createService,
  getServices,
  getServiceById,
  updateService,
  deleteService,
};