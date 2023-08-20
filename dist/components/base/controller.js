"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = __importDefault(require("../../helper/Utils"));
const Constants_1 = require("../../libs/Constants");
class Controller {
    static formartResponse() {
        return {
            now: new Utils_1.default().rightNow(),
            status: "",
            message: "",
            data: "",
        };
    }
    static errorResponse(error, data) {
        let response = Controller.formartResponse();
        response["status"] = error.CODE;
        response["message"] = error.MSG;
        if (data) {
            response["data"] = data;
        }
        else {
            delete response["data"];
        }
        return response;
    }
    static succcessResponse(error, data) {
        let response = Controller.formartResponse();
        response["status"] = error.CODE;
        response["message"] = error.MSG;
        data ? (response["data"] = data) : delete response["data"];
        return response;
    }
    sendResponse({ req, res, type, data }) {
        let response;
        switch (type.CODE) {
            case Constants_1.responses.SUCCESS.CODE:
                response = Controller.succcessResponse(Constants_1.responses.SUCCESS, data);
                return res.status(Constants_1.responses.SUCCESS.CODE).send(response);
            case Constants_1.responses.BAD_REQUEST.CODE:
                response = Controller.succcessResponse(Constants_1.responses.BAD_REQUEST, data);
                return res.status(Constants_1.responses.BAD_REQUEST.CODE).send(response);
            case Constants_1.responses.RESOURCE_NOT_FOUND.CODE:
                response = Controller.succcessResponse(Constants_1.responses.RESOURCE_NOT_FOUND, data);
                return res.status(Constants_1.responses.RESOURCE_NOT_FOUND.CODE).send(response);
            case Constants_1.responses.MOVED_PERMANENTLY.CODE:
                response = Controller.succcessResponse(Constants_1.responses.MOVED_PERMANENTLY, "");
                return res.status(Constants_1.responses.MOVED_PERMANENTLY.CODE).send(response);
            case Constants_1.responses.UNAUTHORIZED_REQUEST.CODE:
                response = Controller.succcessResponse(Constants_1.responses.UNAUTHORIZED_REQUEST, "");
                return res.status(Constants_1.responses.UNAUTHORIZED_REQUEST.CODE).send(response);
            case Constants_1.responses.FORBIDDEN_REQUEST.CODE:
                response = Controller.succcessResponse(Constants_1.responses.FORBIDDEN_REQUEST, "");
                return res.status(Constants_1.responses.FORBIDDEN_REQUEST.CODE).send(response);
            case Constants_1.responses.RESOURCE_ALREADY_EXISTS.CODE:
                response = Controller.succcessResponse(Constants_1.responses.RESOURCE_ALREADY_EXISTS, "");
                return res
                    .status(Constants_1.responses.RESOURCE_ALREADY_EXISTS.CODE)
                    .send(response);
            case Constants_1.responses.INVALID_PAYLOAD.CODE:
                response = Controller.errorResponse(Constants_1.responses.INVALID_PAYLOAD, data);
                return res.status(Constants_1.responses.INVALID_PAYLOAD.CODE).send(response);
            case Constants_1.responses.INTERNAL_SERVER_ERROR.CODE:
                response = Controller.succcessResponse(Constants_1.responses.INTERNAL_SERVER_ERROR, "");
                return res.status(Constants_1.responses.INTERNAL_SERVER_ERROR.CODE).send(response);
            default:
                return;
        }
    }
}
exports.default = Controller;
//# sourceMappingURL=controller.js.map