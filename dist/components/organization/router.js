"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const validator_1 = __importDefault(require("../base/validator"));
const Validation_1 = __importDefault(require("../../helper/Validation"));
const router = (0, express_1.default)();
const controller = new controller_1.default();
const validator = new validator_1.default();
router.post("/register", controller.create);
router
    .route("/")
    .get(validator.validateRequest.bind(new validator_1.default().init(Validation_1.default.listUsers)), controller.list.bind(controller));
module.exports = router;
//# sourceMappingURL=router.js.map