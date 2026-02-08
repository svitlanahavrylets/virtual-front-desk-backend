import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Task extends Model {
  declare id: number;
  declare instruction: string;
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
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
