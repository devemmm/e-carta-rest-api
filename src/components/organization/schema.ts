"use strict";

import { Model, DataTypes, Optional } from "sequelize";
import db, { sequelize } from "../../config/db";

import Conf from "../config/schema";
import Announcement from "../announcement/schema";

interface OrganizationAttributes {
  id?: number;
  name: string;
  code: string;
  longitude: number;
  latitude: number;
  contact: string;
  email: string;
  key: string;
  dhis2url: string;
  dhis2pswd: string;
  username: string;
  password: string;
}
type OrganizationCreationAttributes = Optional<OrganizationAttributes, "id">;

class Organization extends Model<
  OrganizationAttributes,
  OrganizationCreationAttributes
> {}

Organization.init(
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
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dhis2url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dhis2pswd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Organization", tableName: "organization" }
);

Organization.hasMany(Conf, {
  foreignKey: "orgId",
  as: "configurations",
});

Organization.hasMany(Announcement, {
  foreignKey: "orgId",
  as: "announcements",
});

Conf.belongsTo(Organization, {
  foreignKey: "orgId",
  as: "organizationConf",
});
Announcement.belongsTo(Organization, {
  foreignKey: "orgId",
  as: "organizationAnn",
});
Organization.sync();

export default Organization;
