import express from "express";
import morgan from "morgan";

const app = express();

import cors from "cors";

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://virtual-front-desk-frontend-seven.vercel.app",
    ],
    credentials: true,
  }),
);
app.use(express.json());
app.use(morgan("dev"));

export default app;
