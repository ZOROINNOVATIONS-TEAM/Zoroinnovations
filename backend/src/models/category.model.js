import mongoose from "mongoose";

const { Schema, model } = mongoose;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxlength: 50,
    },
    description: {
      type: String,
      maxlength: 200,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      match: /^#[0-9A-Fa-f]{6}$/, // hex color like #FFFFFF
      default: "#6B7280",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    projectCount: {
      type: Number,
      default: 0,
    },
    sortOrder: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  }
);

// Indexes
categorySchema.index({ name: 1 }, { unique: true });
categorySchema.index({ isActive: 1 });
categorySchema.index({ sortOrder: 1 });

const Category = model("Category", categorySchema);

export default Category;
