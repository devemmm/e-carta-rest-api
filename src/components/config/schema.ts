"use strict";

import { Model, DataTypes, Optional } from "sequelize";
import db, { sequelize } from "../../config/db";

interface ConfAttributes {
  id?: number;
  name: string;
  displayName: string;
  dataType: string;
  status: string;
  orgId: number;
}
type ConfCreationAttributes = Optional<ConfAttributes, "id">;

class Conf extends Model<ConfAttributes, ConfCreationAttributes> {}

Conf.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dataType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orgId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Conf", tableName: "conf" }
);

Conf.sync();

export default Conf;
