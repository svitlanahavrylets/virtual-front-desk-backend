import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const Session = sequelize.define("Session", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  startedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});
