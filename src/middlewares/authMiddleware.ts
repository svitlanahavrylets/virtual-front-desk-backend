import { Request, Response, NextFunction } from "express";
import { Session } from "../models/Session";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Missing or invalid Authorization header" });
    }

    const token = authHeader.replace("Bearer ", "");
    const session = await Session.findOne({ where: { token } });

    if (!session) return res.status(401).json({ message: "Invalid session" });

    (req as any).session = session;
    next();
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
