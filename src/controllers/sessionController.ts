import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { Session } from "../models/Session";

export const createSession = async (req: Request, res: Response) => {
  try {
    const token = uuidv4();

    await Session.create({ token });

    return res.status(201).json({ token });
  } catch (error) {
    console.error("Create session error:", error);
    return res.status(500).json({ message: "Failed to create session" });
  }
};
