"use strict";

import { Model, DataTypes, Optional } from "sequelize";
import { sequelize } from "../../config/db";

interface ConfigurationAttributes {
  id?: number;
  key: string;
  value: string;
  description: string;
  dataType: string;
  orgId: number;
}
type ConfigurationCreationAttributes = Optional<ConfigurationAttributes, "id">;

class Configuration extends Model<ConfigurationAttributes, ConfigurationCreationAttributes> {}

Configuration.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dataType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orgId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Configuration", tableName: "configuration" }
);

Configuration.sync();

export default Configuration;
