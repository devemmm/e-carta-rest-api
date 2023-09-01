import { Request, Response } from "express";
import Schema from "./schema";
import Controller from "../base/controller";
import { responses } from "../../libs/Constants";

class Service extends Controller {
  constructor() {
    super();
    return this;
  }

  async create(req: Request, res: Response) {
    try {
      return await Schema.create({ ...req.body });
    } catch (error) {
      console.log(error.message);
      let responseType = responses.BAD_REQUEST;
      responseType.MSG = error.message;

      this.sendResponse({ req, res, type: responseType, data: {} });
    }
  }

  async update(req: Request, res: Response) {
    try {
      let { value, name, displayName, dataType, orgId } = req.query;
      let config = await Schema.findByPk(req.params.id);

      if (value) {
        config.setDataValue("value", value.toString());
        return await config.save();
      }

      return config;
    } catch (error) {
      console.log(error.message);
      let responseType = responses.BAD_REQUEST;
      responseType.MSG = error.message;

      this.sendResponse({ req, res, type: responseType, data: {} });
    }
  }

  async list(req: Request, res: Response) {
    try {
      return await Schema.findAll({});
    } catch (error) {
      let responseType = responses.RESOURCE_NOT_FOUND;
      responseType.MSG = error.message;

      this.sendResponse({ req, res, type: responseType, data: {} });
    }
  }
}

export default Service;
