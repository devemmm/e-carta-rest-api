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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Authorization {
    requireAuth(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { authorization } = req.headers;
            try {
                if (!authorization) {
                    throw new Error('authorization token is null');
                }
                const token = authorization.replace('Bearer ', "");
                jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, (error, payload) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        next();
                        // if (error) {
                        //     throw new Error("authorization token is invalid")
                        // }
                        // const tokenData = await User.findOne({ 'tokens.token': token })
                        // if (!tokenData) {
                        //     throw new Error("authorization token expired please signin again")
                        // }
                        // const user = await User.findOne({ _id: tokenData._id })
                        // if (!user) {
                        //     throw new Error('session was been  expired please signin again')
                        // }
                        // req.user = user
                        // req.user.token = token
                        // next()
                    }
                    catch (error) {
                        res.status(401).json({ error: { statusCode: 401, status: "failed", message: error.message } });
                    }
                }));
            }
            catch (error) {
                res.status(401).json({ error: { statusCode: 401, status: "failed", message: error.message } });
            }
        });
    }
}
exports.default = Authorization;
//# sourceMappingURL=requireAuth.js.map