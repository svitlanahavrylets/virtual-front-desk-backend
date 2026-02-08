import { Router } from "express";
import { submitAnswer } from "../controllers/answerController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.post("/:taskId", authMiddleware, submitAnswer);

export default router;
