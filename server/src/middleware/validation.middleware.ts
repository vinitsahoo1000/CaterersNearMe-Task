import { Request, Response, NextFunction } from "express";
import { z } from "zod";

const catererSchema = z.object({
  name: z.string().min(1),
  location: z.string().min(1),
  pricePerPlate: z.number().positive(),
  cuisines: z.array(z.string()).min(1),
  rating: z.number().min(1).max(5)
});

export const validateCaterer = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = catererSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      errors: result.error.issues
    });
  }

  next();
};