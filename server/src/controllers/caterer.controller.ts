import { Request, Response } from "express";
import catererService from "../services/caterer.service";

export const getAllCaterers = async (
  req: Request,
  res: Response
) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const result =
      await catererService.getAllCaterers(
        page,
        limit
      );

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};


export const getCatererById = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const catererId = Array.isArray(id) ? id[0] : id;

    if (!catererId) {
      return res.status(400).json({
        message: "Invalid caterer id",
      });
    }

    const caterer = await catererService.getCatererById(catererId);

    if (!caterer) {
      return res.status(404).json({
        message: "Caterer not found",
      });
    }

    res.status(200).json(caterer);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};


export const createCaterer = async (
  req: Request,
  res: Response
) => {
  try {
    const caterer =
      await catererService.createCaterer(
        req.body
      );

    res.status(201).json(caterer);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
}; 



