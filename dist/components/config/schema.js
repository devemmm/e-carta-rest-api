"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../../config/db");
class Conf extends sequelize_1.Model {
}
Conf.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    displayName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    dataType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    status: {
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
}, { sequelize: db_1.sequelize, modelName: "Conf", tableName: "conf" });
Conf.sync();
exports.default = Conf;
//# sourceMappingURL=schema.js.map