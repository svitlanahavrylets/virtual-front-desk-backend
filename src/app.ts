import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

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
