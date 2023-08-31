"use strict";

import { Model, DataTypes, Optional } from "sequelize";
import db, { sequelize } from "../../config/db";

interface AnnouncementAttributes {
  id?: number;
  title: string;
  description: string;
  orgId: number;
}

type AnnouncementCreationAttributes = Optional<AnnouncementAttributes, "id">;

class Announcement extends Model<
  AnnouncementAttributes,
  AnnouncementCreationAttributes
> {}

Announcement.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    orgId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Announcement", tableName: "announcement" }
);

Announcement.sync();

export default Announcement;
