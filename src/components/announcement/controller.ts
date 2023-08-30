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

  async list(req: Request, res: Response) {
    const announcements = await new Service().list(req, res);

    return announcements
      ? super.sendResponse({
          req,
          res,
          type: responses.SUCCESS,
          data: announcements,
        })
      : null;
  }
}
export default Controller;
