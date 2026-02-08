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
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    taskId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    optionId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    sessionId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "answers",
    timestamps: true,
  },
);
