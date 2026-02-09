import { Request, Response } from "express";
import { Task } from "../models/Task";
import { Option } from "../models/Option";

export const getTasks = async (_req: Request, res: Response) => {
  try {
    const tasks = await Task.findAll({
      include: [
        {
          model: Option,
          attributes: ["id", "text", "isCorrect"],
          as: "options",
        },
      ],
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
};
