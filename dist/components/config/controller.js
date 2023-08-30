"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("../base/controller"));
const service_1 = __importDefault(require("./service"));
const Constants_1 = require("../../libs/Constants");
class Controller extends controller_1.default {
    constructor() {
        super();
    }
    create(req, res) {
        const _super = Object.create(null, {
            sendResponse: { get: () => super.sendResponse }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield new service_1.default().create(req, res);
            return data
                ? _super.sendResponse.call(this, { req, res, type: Constants_1.responses.SUCCESS, data })
                : null;
        });
    }
    list(req, res) {
        const _super = Object.create(null, {
            sendResponse: { get: () => super.sendResponse }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const config = yield new service_1.default().list(req, res);
            return config
                ? _super.sendResponse.call(this, {
                    req,
                    res,
                    type: Constants_1.responses.SUCCESS,
                    data: config,
                })
                : null;
        });
    }
}
exports.default = Controller;
//# sourceMappingURL=controller.js.map