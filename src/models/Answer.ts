import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Answer extends Model {
  declare id: number;
  declare taskId: number;
  declare optionId: number;
  declare sessionId: number;
}

Answer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    taskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    optionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sessionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "answers",
    timestamps: true,
  },
);
