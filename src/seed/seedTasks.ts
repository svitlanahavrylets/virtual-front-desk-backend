import { Task } from "../models/Task";
import { Option } from "../models/Option";

export const seedTasks = async () => {
  const count = await Task.count();
  if (count > 0) return;

  await Task.create(
    {
      instruction: "What is HTTP?",
      Options: [
        { text: "Protocol", isCorrect: true },
        { text: "Database", isCorrect: false },
        { text: "Browser", isCorrect: false },
        { text: "Framework", isCorrect: false },
      ],
    },
    { include: [Option] },
  );

  await Task.create(
    {
      instruction: "Which HTTP method is used to create a resource?",
      Options: [
        { text: "GET", isCorrect: false },
        { text: "POST", isCorrect: true },
        { text: "PUT", isCorrect: false },
        { text: "DELETE", isCorrect: false },
      ],
    },
    { include: [Option] },
  );

  await Task.create(
    {
      instruction: "What does REST stand for?",
      Options: [
        { text: "Representational State Transfer", isCorrect: true },
        { text: "Remote Execution Standard Tool", isCorrect: false },
        { text: "Relational State Transition", isCorrect: false },
        { text: "Request Endpoint Service Type", isCorrect: false },
      ],
    },
    { include: [Option] },
  );
};
