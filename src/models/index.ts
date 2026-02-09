import { sequelize } from "../config/database";

import { Session } from "./Session";
import { Task } from "./Task";
import { Option } from "./Option";
import { Answer } from "./Answer";

export const dbInit = async () => {
  await sequelize.authenticate();
  console.log("Database connected");
};

export const initModels = async () => {
  await sequelize.sync({ alter: true });
  console.log("Models synchronized");
};

export const setupAssociations = () => {
  Task.hasMany(Option, { as: "options", foreignKey: "taskId" });
  Option.belongsTo(Task, { foreignKey: "taskId" });

  Session.hasMany(Answer, { foreignKey: "sessionId" });
  Answer.belongsTo(Session, { foreignKey: "sessionId" });

  Option.hasMany(Answer, { foreignKey: "optionId" });
  Answer.belongsTo(Option, { foreignKey: "optionId" });
};
