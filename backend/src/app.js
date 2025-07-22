import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";

import categoryRoutes from "./routes/category.route.js"
import projectRoutes from "./routes/project.route.js"

const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);

//router declaration
app.use("/api/projects", projectRoutes);
app.use("/api/categories", categoryRoutes);

export default app;
