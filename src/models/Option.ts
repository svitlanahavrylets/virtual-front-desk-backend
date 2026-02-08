import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { Task } from "./Task";

export class Option extends Model {
  declare id: number;
  declare text: string;
  declare isCorrect: boolean;
  declare taskId: number;
}

Option.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    taskId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "options",
    timestamps: true,
  },
);
