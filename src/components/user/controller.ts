import { Request, Response } from "express";
import BaseController from "../base/controller";
import Service from "./service";
import { responses } from "../../libs/Constants";

class Controller extends BaseController {
  constructor() {
    super();
  }

  async signin(req: Request, res: Response) {
    const ordanization = await new Service().signin(req, res);
    return ordanization
      ? super.sendResponse({
          req,
          res,
          type: responses.SUCCESS,
          data: ordanization,
        })
      : null;
  }
}
export default Controller;
