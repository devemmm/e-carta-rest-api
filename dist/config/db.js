"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
db.authenticate()
    .then(() => console.log(`connected to databse`))
    .catch((error) => console.log(`failed to connect to databse becouse ${error.message}`));
exports.default = db;
//# sourceMappingURL=db.js.map