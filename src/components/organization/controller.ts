import { Request, Response } from "express";
import BaseController from "../base/controller";
import Service from "./service";
import { responses } from "../../libs/Constants";

class Controller extends BaseController {
  constructor() {
    super();
  }

  async create(req: Request, res: Response) {
    const data = await new Service().create(req, res);
    return data
      ? super.sendResponse({ req, res, type: responses.SUCCESS, data })
      : null;
  }

  async signin(req: Request, res: Response) {
    const ordanization = await new Service().signin(req, res);
    return ordanization
      ? super.sendResponse({ req, res, type: responses.SUCCESS, data: ordanization })
      : null;
  }

  async list(req: Request, res: Response) {
    const organisation = await new Service().list(req, res);

    return organisation
      ? super.sendResponse({
          req,
          res,
          type: responses.SUCCESS,
          data: organisation,
        })
      : null;
  }
}
export default Controller;
