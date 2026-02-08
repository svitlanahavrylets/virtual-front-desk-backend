import { Request, Response } from "express";
import { Answer } from "../models/Answer";
import { Option } from "../models/Option";

export const submitAnswer = async (req: Request, res: Response) => {
  try {
    const { taskId } = req.params;
    const { optionId } = req.body;
    const session = (req as any).session;

    if (!optionId)
      return res.status(400).json({ message: "optionId is required" });

    const option = await Option.findByPk(optionId);
    if (!option) return res.status(404).json({ message: "Option not found" });

    if (option.getDataValue("taskId") !== Number(taskId))
      return res
        .status(404)
        .json({ message: "Task not found or option does not belong to task" });

    const [answer, created] = await Answer.findOrCreate({
      where: { sessionId: session.getDataValue("id"), taskId: Number(taskId) },
      defaults: { optionId },
    });

    if (!created) await answer.update({ optionId });

    res.json({ correct: option.getDataValue("isCorrect") });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
