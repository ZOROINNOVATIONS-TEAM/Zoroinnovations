import mongoose from "mongoose";

const { Schema, model, Types } = mongoose;

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      maxlength: 2000,
      default: null,
    },
    technologies: [
      {
        type: String,
        trim: true,
      },
    ],
    clientName: {
      type: String,
      maxlength: 100,
      default: null,
    },
    projectUrl: {
      type: String,
      default: null,
    },
    githubUrl: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "published",
    },
    featured: {
      type: Boolean,
      default: false,
    },
    completedDate: {
      type: Date,
      default: null,
    },
    createdBy: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    viewCount: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

// Indexes
projectSchema.index({ category: 1 });
projectSchema.index({ status: 1 });
projectSchema.index({ featured: -1 });
projectSchema.index({ createdAt: -1 });
projectSchema.index({ createdBy: 1 });
projectSchema.index({ status: 1, featured: -1, createdAt: -1 }); // compound index
projectSchema.index({ title: "text", description: "text" }); // text index for search

const Project = model("Project", projectSchema);

export default Project;
