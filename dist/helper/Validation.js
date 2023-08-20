"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
class Validator {
    constructor() {
        return this;
    }
}
Validator.signup = joi_1.default.object().keys({
    fname: joi_1.default.string().required(),
    lname: joi_1.default.string().required(),
    email: joi_1.default.string().required(),
    phone: joi_1.default.string().required(),
    dob: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
});
Validator.signin = joi_1.default.object().keys({
    email: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
});
Validator.listUsers = joi_1.default.object().keys();
Validator.createSurvey = joi_1.default.object().keys({
    name: joi_1.default.string().required(),
    questions: joi_1.default.array().required(),
});
// ------------------SURVEY -----------------
Validator.listSurveys = joi_1.default.object().keys();
Validator.respondSurvey = joi_1.default.object().keys({
    uid: joi_1.default.string().required(),
    surveyId: joi_1.default.string().required(),
    surveyName: joi_1.default.string(),
    answers: joi_1.default.array().required(),
    // questionId: joi.string().required(),
    // questionName: joi.string().required(),
    // answer: joi.string().required(),
});
Validator.listSurveyResponses = joi_1.default.object().keys({
    generateReport: joi_1.default.boolean(),
    email: joi_1.default.string()
});
Validator.getSuveyStatisticsById = joi_1.default.object().keys({
    id: joi_1.default.string().required(),
});
// ------------------ENDS -----------------
//--------------------Messages ------------------
Validator.userMessage = joi_1.default.object().keys({
    names: joi_1.default.string().required(),
    avatar: joi_1.default.string(),
    subject: joi_1.default.string().required(),
    email: joi_1.default.string().required(),
    message: joi_1.default.string().required(),
});
Validator.getUserMessage = joi_1.default.object().keys();
Validator.changePassword = joi_1.default.object().keys({
    password: joi_1.default.string().required(),
    newPassword: joi_1.default.string().required()
});
Validator.updateAccount = joi_1.default.object().keys({
    country: joi_1.default.string().required(),
    address: joi_1.default.string().required(),
    phone: joi_1.default.string().required(),
    about: joi_1.default.string().required()
});
exports.default = Validator;
//# sourceMappingURL=Validation.js.map