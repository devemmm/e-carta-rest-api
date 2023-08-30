"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../../config/db");
const schema_1 = __importDefault(require("../config/schema"));
const schema_2 = __importDefault(require("../announcement/schema"));
class Organization extends sequelize_1.Model {
}
Organization.init({
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
    code: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    longitude: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    latitude: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    contact: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    key: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    dhis2url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, { sequelize: db_1.sequelize, modelName: "Organization", tableName: "organization" });
Organization.hasMany(schema_1.default, {
    foreignKey: {
        name: "orgId",
    },
});
Organization.hasMany(schema_2.default, {
    foreignKey: {
        name: "orgId",
    },
});
schema_1.default.belongsTo(Organization);
schema_2.default.belongsTo(Organization);
Organization.sync();
exports.default = Organization;
//# sourceMappingURL=schema.js.map