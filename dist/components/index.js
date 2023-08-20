"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const controller_1 = __importDefault(require("./base/controller"));
const Constants_1 = require("../libs/Constants");
const router = express_1.default.Router();
router.get("/", (req, res) => new controller_1.default().sendResponse({
    req,
    res,
    type: Constants_1.responses.SUCCESS,
    data: "SAMS API is running....",
}));
fs_1.default.readdir(__dirname, function (err, components) {
    if (err) {
        return console.log("Unable to scan directory: " + err);
    }
    components.forEach(function (component) {
        try {
            if (fs_1.default.existsSync(`${__dirname}/${component}/router.ts`)) {
                router.use(`/${component}`.toLowerCase(), require(`./${component}/router`));
            }
        }
        catch (e) {
            console.log("error", e);
        }
    });
});
exports.default = router;
//# sourceMappingURL=index.js.map