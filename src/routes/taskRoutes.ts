import { Router } from "express";
import { Task } from "../models/Task";
import { Option } from "../models/Option";

const router = Router();

router.get("/", async (_, res) => {
  const tasks = await Task.findAll({
    include: [
      {
        model: Option,
        attributes: ["id", "text"],
      },
    ],
  });

  res.json(tasks);
});

export default router;
