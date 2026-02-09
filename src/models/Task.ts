import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { Option } from "./Option";

export class Task extends Model {
  declare id: number;
  declare instruction: string;
  options?: Option[];
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    instruction: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "tasks",
    timestamps: true,
  },
);
