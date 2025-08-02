import { Location } from "../models/location.model.js";

// Add new location
const addLocation = async (req, res) => {
  try {
    const { name, address, city, state, country } = req.body;

    const location = await Location.create({
      name,
      address,
      city,
      state,
      country,
    });

    if (!location) {
      return res.status(500).json({
        success: false,
        message: "Location not created",
      });
    }

    res.status(201).json({
      success: true,
      data: location,
      message: "Location added successfully",
    });
  } catch (error) {
    console.error("Error adding location:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Get all locations
const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: locations,
      count: locations.length,
      message: "Locations retrieved successfully",
    });
  } catch (error) {
    console.error("Error getting locations:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Get single location by ID
const getLocationById = async (req, res) => {
  try {
    const { id } = req.params;

    const location = await Location.findById(id);

    if (!location) {
      return res.status(404).json({
        success: false,
        message: "Location not found",
      });
    }

    res.status(200).json({
      success: true,
      data: location,
      message: "Location retrieved successfully",
    });
  } catch (error) {
    console.error("Error getting location:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Update location
const updateLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address, city, state, country } = req.body;

    const location = await Location.findByIdAndUpdate(
      id,
      {
        name,
        address,
        city,
        state,
        country,
      },
      { new: true, runValidators: true }
    );

    if (!location) {
      return res.status(404).json({
        success: false,
        message: "Location not found",
      });
    }

    res.status(200).json({
      success: true,
      data: location,
      message: "Location updated successfully",
    });
  } catch (error) {
    console.error("Error updating location:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Delete location (hard delete)
const deleteLocation = async (req, res) => {
  try {
    const { id } = req.params;

    const location = await Location.findByIdAndDelete(id);

    if (!location) {
      return res.status(404).json({
        success: false,
        message: "Location not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Location deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting location:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Search locations
const searchLocations = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({
        success: false,
        message: "Search query is required",
      });
    }

    const locations = await Location.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { address: { $regex: query, $options: "i" } },
        { city: { $regex: query, $options: "i" } },
        { state: { $regex: query, $options: "i" } },
        { country: { $regex: query, $options: "i" } },
      ],
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: locations,
      count: locations.length,
      message: "Search completed successfully",
    });
  } catch (error) {
    console.error("Error searching locations:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export {
  addLocation,
  getAllLocations,
  getLocationById,
  updateLocation,
  deleteLocation,
  searchLocations,
};