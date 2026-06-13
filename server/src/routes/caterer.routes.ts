import { RequestHandler, Router } from "express";
import { createCaterer, getAllCaterers, getCatererById } from "../controllers/caterer.controller";
import { validateCaterer } from "../middleware/validation.middleware";

export const catererRoutes = Router();


catererRoutes.get("/" , getAllCaterers as RequestHandler);

catererRoutes.get("/:id", getCatererById as RequestHandler);

catererRoutes.post("/", validateCaterer ,createCaterer as RequestHandler);