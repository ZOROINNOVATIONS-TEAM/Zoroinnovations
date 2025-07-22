import * as categoryService from "../services/category.service.js";

export const getAllCategories = async (req, res) => {
  const categories = await categoryService.getAllCategories();
  res.json(categories);
};
