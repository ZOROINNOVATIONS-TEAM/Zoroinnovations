import Project from "../models/project.model.js";
import Category from "../models/category.model.js";

export const getAllProjects = async (categoryName) => {
  const filter = categoryName
    ? { category: categoryName, status: { $ne: "archived" } }
    : { status: { $ne: "archived" } };
  return Project.find(filter).sort({ createdAt: -1 });
};

export const getProjectById = async (id) => {
  return Project.findById(id);
};

export const createProject = async (data) => {
  if (!/^https?:\/\/[\w.-]+\.[\w./]+$/.test(data.image)) {
    return { error: "Invalid project image URL" };
  }

  const featuredCount = await Project.countDocuments({
    featured: true,
    status: "published",
  });
  if (data.featured && featuredCount >= 6) {
    return { error: "Maximum 6 featured projects allowed" };
  }

  const category = await Category.findOne({ name: data.category });
  if (!category) return { error: "Category not found" };

  const project = await Project.create(data);
  category.projectCount += 1;
  await category.save();

  return { project };
};

export const updateProject = async (id, data) => {
  if (data.image && !/^https?:\/\/[\w.-]+\.[\w./]+$/.test(data.image)) {
    return { error: "Invalid image URL" };
  }

  if (data.featured) {
    const featuredCount = await Project.countDocuments({
      featured: true,
      status: "published",
      _id: { $ne: id },
    });
    if (featuredCount >= 6) {
      return { error: "Maximum 6 featured projects allowed" };
    }
  }

  const project = await Project.findByIdAndUpdate(id, data, { new: true });
  return { project };
};

export const archiveProject = async (id) => {
  await Project.findByIdAndUpdate(id, { status: "archived" });
};
