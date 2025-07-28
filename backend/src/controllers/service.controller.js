import { Service } from '../models/service.model.js';

const createService = async (req, res) => {
  try {
    const { title, description, category, features, pricing, deliveryTime, ...rest } = req.body;
    const userId = req.userId; // From authMiddleware

    const service = await Service.create({
      title,
      description,
      category,
      features,
      pricing,
      deliveryTime,
      createdBy: userId,
      ...rest,
    });

    return res.status(201).json({
      success: true,
      data: service,
      message: 'Service created successfully',
    });
  } catch (error) {
    console.error('Error creating service:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

const getAllServices = async (req, res) => {
  try {
    const services = await Service.find({ isActive: true }).populate('createdBy', 'username email');
    return res.status(200).json({
      success: true,
      data: services,
      message: 'Services fetched successfully',
    });
  } catch (error) {
    console.error('Error fetching services:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

const getServiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findById(id).populate('createdBy', 'username email');
    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found',
      });
    }
    return res.status(200).json({
      success: true,
      data: service,
      message: 'Service fetched successfully',
    });
  } catch (error) {
    console.error('Error fetching service:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;
    const service = await Service.findOne({ _id: id, createdBy: userId });
    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found or you are not authorized to update it',
      });
    }
    const updatedService = await Service.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    return res.status(200).json({
      success: true,
      data: updatedService,
      message: 'Service updated successfully',
    });
  } catch (error) {
    console.error('Error updating service:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;
    const service = await Service.findOne({ _id: id, createdBy: userId });
    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found or you are not authorized to delete it',
      });
    }
    await Service.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: 'Service deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting service:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

export {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
};