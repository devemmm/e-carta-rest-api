"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../../config/db");
class Announcement extends sequelize_1.Model {
}
Announcement.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    orgId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "Announcement",
            key: "orgId",
        },
    },
}, { sequelize: db_1.sequelize, modelName: "Announcement", tableName: "announcement" });
Announcement.sync();
exports.default = Announcement;
//# sourceMappingURL=schema.js.map