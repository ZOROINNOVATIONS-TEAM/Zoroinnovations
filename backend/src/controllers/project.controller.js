import * as projectService from "../services/project.service.js";

export const getAllProjects = async (req, res) => {
  const { category } = req.query;
  const projects = await projectService.getAllProjects(category);
  res.json(projects);
};

export const getProjectById = async (req, res) => {
  const project = await projectService.getProjectById(req.params.id);
  if (!project) return res.status(404).json({ message: "Project not found" });
  res.json(project);
};

export const createProject = async (req, res) => {
  const result = await projectService.createProject(req.body);
  if (result.error) return res.status(400).json({ message: result.error });
  res.status(201).json(result.project);
};

export const updateProject = async (req, res) => {
  const result = await projectService.updateProject(req.params.id, req.body);
  if (result.error) return res.status(400).json({ message: result.error });
  res.json(result.project);
};

export const deleteProject = async (req, res) => {
  await projectService.archiveProject(req.params.id);
  res.json({ message: "Project archived successfully" });
};
