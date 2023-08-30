"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../../config/db");
const roleSchema_1 = __importDefault(require("./roleSchema"));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    fname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    dob: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, { sequelize: db_1.sequelize, modelName: "User", tableName: "User" });
User.hasMany(roleSchema_1.default, {
    foreignKey: {
        name: "userId",
    },
});
roleSchema_1.default.belongsTo(User);
User.sync();
exports.default = User;
//# sourceMappingURL=schema.js.map