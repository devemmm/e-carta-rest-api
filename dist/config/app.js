"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// require("./mongodb");
require('./db');
require('dotenv-flow').config();
const express_1 = __importDefault(require("express"));
// const docs = require('../documentation/index')
const cors_1 = __importDefault(require("cors"));
const Utils_1 = __importDefault(require("../helper/Utils"));
const app = (0, express_1.default)();
const index_1 = __importDefault(require("../components/index"));
// middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(index_1.default);
// app.use("/api-docs", serve, setup(docs))
app.use((req, res) => {
    res
        .status(500)
        .json({
        now: new Utils_1.default().rightNow(),
        status: 500,
        message: "route not found",
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map