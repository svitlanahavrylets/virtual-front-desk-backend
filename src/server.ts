import app from "./app";
import sessionRoutes from "./routes/sessionRoutes";
import taskRoutes from "./routes/taskRoutes";
import answerRoutes from "./routes/answerRoutes";
import { dbInit, initModels, setupAssociations } from "./models";
import { seedTasks } from "./seed/seedTasks";

const PORT = Number(process.env.PORT) || 3000;

app.use("/sessions", sessionRoutes);
app.use("/tasks", taskRoutes);
app.use("/answers", answerRoutes);

(async () => {
  try {
    await dbInit();
    setupAssociations();
    await initModels();
    await seedTasks();

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server failed to start", error);
    process.exit(1);
  }
})();
