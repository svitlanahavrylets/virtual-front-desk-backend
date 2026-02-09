import express from "express";
import morgan from "morgan";

const app = express();

import cors from "cors";

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(morgan("dev"));

export default app;
