import Category from "../models/category.model.js";

export const getAllCategories = async () => {
    return Category.find({ isActive: true }).sort({ sortOrder: 1 });
};
