import { Task } from "../models/Task";
import { Option } from "../models/Option";

export const seedTasks = async () => {
  await Option.destroy({ where: {} });
  await Task.destroy({ where: {} });

  await Task.create(
    {
      instruction: "What is HTTP?",
      options: [
        { text: "Protocol", isCorrect: true },
        { text: "Database", isCorrect: false },
        { text: "Browser", isCorrect: false },
        { text: "Framework", isCorrect: false },
      ],
    },
    { include: [{ model: Option, as: "options" }] },
  );

  await Task.create(
    {
      instruction: "Which HTTP method is used to create a resource?",
      options: [
        { text: "GET", isCorrect: false },
        { text: "POST", isCorrect: true },
        { text: "PUT", isCorrect: false },
        { text: "DELETE", isCorrect: false },
      ],
    },
    { include: [{ model: Option, as: "options" }] },
  );

  await Task.create(
    {
      instruction: "What does REST stand for?",
      options: [
        { text: "Representational State Transfer", isCorrect: true },
        { text: "Remote Execution Standard Tool", isCorrect: false },
        { text: "Relational State Transition", isCorrect: false },
        { text: "Request Endpoint Service Type", isCorrect: false },
      ],
    },
    { include: [{ model: Option, as: "options" }] },
  );
};
