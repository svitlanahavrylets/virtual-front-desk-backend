import { Router } from "express";
import crypto from "crypto";
import { Session } from "../models/Session";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const token = crypto.randomUUID();

    const session = await Session.create({ token });

    res.status(201).json({
      sessionToken: session.getDataValue("token"),
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create session" });
  }
});

export default router;
