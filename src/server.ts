import app from "./app";
import sessionRoutes from "./routes/sessionRoutes";
import taskRoutes from "./routes/taskRoutes";
import { dbInit, initModels, setupAssociations } from "./models";
import { seedTasks } from "./seed/seedTasks";
import answerRoutes from "./routes/answerRoutes";

const PORT = process.env.PORT || 3000;

app.use("/sessions", sessionRoutes);
app.use("/tasks", taskRoutes);
app.use("/answers", answerRoutes);

(async () => {
  try {
    await dbInit();
    setupAssociations();
    await initModels();
    await seedTasks();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server failed to start", error);
    process.exit(1);
  }
})();
