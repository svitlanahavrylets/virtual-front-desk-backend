import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { Session } from "../models/Session";

export const createSession = async (_req: Request, res: Response) => {
  try {
    console.log("➡️ createSession called");

    const token = uuidv4();

    console.log("Generated token:", token);

    const session = await Session.create({ token });

    console.log("Session created:", session.toJSON());

    res.status(201).json({
      sessionToken: session.getDataValue("token"),
    });
  } catch (error) {
    console.error("Create session error:", error);
    res.status(500).json({ message: "Failed to create session" });
  }
};
