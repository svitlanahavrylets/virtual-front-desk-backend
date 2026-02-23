import { Request, Response } from "express";
import { Task } from "../models/Task";
import { Option } from "../models/Option";
import validateOptions from "../utils/utils";

export const getAdminTasks = async (_req: Request, res: Response) => {
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

export const createAdminTask = async (req: Request, res: Response) => {
  try {
    const validationError = validateOptions(req.body);
    if (validationError) {
      return res.status(400).json({ message: validationError });
    }
    const { instruction, options } = req.body;
    const task = await Task.create({ instruction });
    const taskId = task.id;
    const optionRecords = options.map((opt) => ({
      text: opt.text,
      isCorrect: opt.isCorrect,
      taskId,
    }));
    await Option.bulkCreate(optionRecords);
    const createdTask = await Task.findByPk(taskId, {
      include: [{ model: Option, as: "options" }],
    });
    res.status(201).json(createdTask);
  } catch (error) {
    res.status(500).json({ message: "Failed to create task" });
  }
};

export const updateAdminTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const validationError = validateOptions(req.body);
    if (validationError) {
      return res.status(400).json({ message: validationError });
    }
    const { instruction, options } = req.body;
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    await task.update({ instruction });
    await Option.destroy({ where: { taskId: id } });
    const newOptions = options.map((opt) => ({
      text: opt.text,
      isCorrect: opt.isCorrect,
      taskId: id,
    }));
    await Option.bulkCreate(newOptions);
    const updatedTask = await Task.findByPk(id, {
      include: [{ model: Option, as: "options" }],
    });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: "Failed to update task" });
  }
};
