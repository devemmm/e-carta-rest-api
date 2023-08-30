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
const schema_1 = __importDefault(require("./schema"));
const controller_1 = __importDefault(require("../base/controller"));
const Constants_1 = require("../../libs/Constants");
class Service extends controller_1.default {
    constructor() {
        super();
        return this;
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield schema_1.default.create(Object.assign({}, req.body));
            }
            catch (error) {
                console.log(error.message);
                let responseType = Constants_1.responses.BAD_REQUEST;
                responseType.MSG = error.message;
                this.sendResponse({ req, res, type: responseType, data: {} });
            }
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield schema_1.default.findAll({});
            }
            catch (error) {
                let responseType = Constants_1.responses.RESOURCE_NOT_FOUND;
                responseType.MSG = error.message;
                this.sendResponse({ req, res, type: responseType, data: {} });
            }
        });
    }
}
exports.default = Service;
//# sourceMappingURL=service.js.map