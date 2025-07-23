// src/models/service.model.js
import mongoose, { Schema } from "mongoose";

const serviceSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters long"],
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [10, "Description must be at least 10 characters long"],
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
    iconUrl: {
      type: String,
      default: "https://via.placeholder.com/200x200.png",
      trim: true,
      validate: {
        validator: (v) => /^https?:\/\/.+/.test(v),
        message: "Icon URL must be a valid URL",
      },
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
      enum: {
        values: ["Development", "AI/ML", "Infrastructure", "Consulting"],
        message: "{VALUE} is not a valid category",
      },
    },
    features: {
      type: [String],
      required: [true, "At least one feature is required"],
      validate: {
        validator: (arr) => arr.length > 0,
        message: "Features array cannot be empty",
      },
    },
    technologies: {
      type: [String],
      default: [],
    },
    pricing: {
      type: {
        type: String,
        required: [true, "Pricing type is required"],
        enum: ["fixed", "hourly", "project", "subscription"],
      },
      startingPrice: {
        type: Number,
        required: [true, "Starting price is required"],
        min: [0, "Starting price cannot be negative"],
      },
      currency: {
        type: String,
        required: [true, "Currency is required"],
        default: "USD",
        enum: ["USD", "EUR", "GBP", "INR"],
      },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    displayOrder: {
      type: Number,
      default: 0,
      min: [0, "Display order cannot be negative"],
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
      validate: {
        validator: (v) => /^[a-z0-9-]+$/i.test(v),
        message: "Slug must be URL-friendly (alphanumeric and hyphens only)",
      },
    },
    detailedDescription: {
      type: String,
      trim: true,
      maxlength: [2000, "Detailed description cannot exceed 2000 characters"],
    },
    benefits: {
      type: [String],
      default: [],
    },
    targetAudience: {
      type: [String],
      default: [],
    },
    deliveryTime: {
      type: String,
      required: [true, "Delivery time is required"],
      trim: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Service provider is required"],
    },
  },
  { timestamps: true }
);

serviceSchema.index({ category: 1, isActive: 1 });

export const Service = mongoose.model("Service", serviceSchema);