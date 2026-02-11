import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { Session } from "../models/Session";

export const createSession = async (_req: Request, res: Response) => {
  try {
    const token = uuidv4();
    const session = await Session.create({ token });
    res.status(201).json({
      token: session.getDataValue("token"),
    });
  } catch (error) {
    console.error("Create session error:", error);
    res.status(500).json({ message: "Failed to create session" });
  }
};
