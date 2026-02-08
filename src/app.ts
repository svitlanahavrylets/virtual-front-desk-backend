import express from "express";
import morgan from "morgan";
import sessionRoutes from "./routes/sessionRoutes";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/session", sessionRoutes);

export default app;
