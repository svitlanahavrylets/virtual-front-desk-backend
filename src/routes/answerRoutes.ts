import { Router } from "express";
import { Answer } from "../models/Answer";
import { Option } from "../models/Option";
import { Session } from "../models/Session";

const router = Router();

router.post("/:taskId", async (req, res) => {
  try {
    const { taskId } = req.params;
    const { optionId } = req.body;

    if (!optionId) {
      return res.status(400).json({ message: "optionId is required" });
    }
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Missing or invalid Authorization header" });
    }

    const token = authHeader.replace("Bearer ", "");

    const session = await Session.findOne({ where: { token } });
    if (!session) return res.status(401).json({ message: "Invalid session" });

    const option = await Option.findByPk(optionId);
    if (!option) {
      return res.status(404).json({ message: "Option not found" });
    }

    if (option.getDataValue("taskId") !== Number(taskId)) {
      return res
        .status(404)
        .json({ message: "Task not found or option does not belong to task" });
    }

    const [answer, created] = await Answer.findOrCreate({
      where: {
        sessionId: session.getDataValue("id"),
        taskId: Number(taskId),
      },
      defaults: {
        optionId,
      },
    });

    if (!created) {
      await answer.update({ optionId });
    }

    res.json({
      correct: option.getDataValue("isCorrect"),
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
