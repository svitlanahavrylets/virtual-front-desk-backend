import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { Answer } from "./Answer";

export class Session extends Model {
  declare id: number;
  declare token: string;
  declare startedAt: Date;
  answers?: Answer[];
}

Session.init(
  {
    id: {
      type: DataTypes.INTEGER,
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
  },
  {
    sequelize,
    tableName: "sessions",
    timestamps: true,
  },
);
