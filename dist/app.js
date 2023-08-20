"use strict";
// require('dotenv-flow').config();
// import express from 'express';
// import { router as __router } from "./route/app"
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// const port = process.env.PORT || 3000;
// app.use(__router);
// app.listen(port, () => {
//   return console.log(`Server is running on port ${port}`);
// });
const app_1 = __importDefault(require("./config/app"));
exports.default = app_1.default;
//# sourceMappingURL=app.js.map