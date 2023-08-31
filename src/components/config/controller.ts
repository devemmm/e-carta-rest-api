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

  async update(req: Request, res: Response) {
    const data = await new Service().update(req, res);
    return data
      ? super.sendResponse({ req, res, type: responses.SUCCESS, data })
      : null;
  }

  async list(req: Request, res: Response) {
    const config = await new Service().list(req, res);

    return config
      ? super.sendResponse({
          req,
          res,
          type: responses.SUCCESS,
          data: config,
        })
      : null;
  }
}
export default Controller;
