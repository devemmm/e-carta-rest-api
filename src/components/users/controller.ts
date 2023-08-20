import { Request, Response } from "express"
import BaseController from '../base/controller';
import Service from './service';
import { responses } from '../../libs/Constants';

class Controller extends BaseController {
  constructor() {
    super();
  }

  async signup(req: Request, res: Response) {
    const data = await new Service().signup(req, res);
    return data
      ? super.sendResponse({ req, res, type: responses.SUCCESS, data })
      : null;
  }

  async signin(req: Request, res: Response) {
    const data = await new Service().signin(req, res);

    return data
      ? super.sendResponse({ req, res, type: responses.SUCCESS, data })
      : null;
  }

  async list(req: Request, res: Response) {
    const users = await new Service().list(req, res);

    return users
      ? super.sendResponse({
        req,
        res,
        type: responses.SUCCESS,
        data: users,
      })
      : null;
  }
}
export default Controller;