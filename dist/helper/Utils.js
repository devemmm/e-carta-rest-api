"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
class Utils {
    constructor() {
        return this;
    }
    rightNow() {
        return (0, moment_1.default)().format("YYYY-MM-DD :: hh:mm:ss");
    }
}
exports.default = Utils;
//# sourceMappingURL=Utils.js.map