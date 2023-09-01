import { Request, Response } from "express";
import bcrypt from "bcrypt"
import Schema from "./schema";
import Controller from "../base/controller";
import { responses } from "../../libs/Constants";
import { findByCredential, generateAuthToken } from "../../helper/authentication";

class Service extends Controller {
  constructor() {
    super();
    return this;
  }

  async create(req: Request, res: Response) {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 8)
      return await Schema.create({ ...req.body,  'password': hashedPassword});
    } catch (error) {

      let responseType = responses.BAD_REQUEST;
      responseType.MSG = error.message;

      this.sendResponse({ req, res, type: responseType, data: {} });
    }
  }

  async signin(req: Request, res: Response) {
    try {
      
      const {email, password} = req.body

      const organization = await findByCredential(email, password);
      const token = await generateAuthToken(organization.getDataValue('id'));
      organization.setDataValue('token', token);

      return await organization.save();
    } catch (error) {
      let responseType = responses.BAD_REQUEST;
      responseType.MSG = error.message;

      this.sendResponse({ req, res, type: responseType, data: {} });
    }
  }

  async list(req: Request, res: Response) {
    try {
      return await Schema.findAll({
        include: ["configurations", "announcements"],
      });
    } catch (error) {
      let responseType = responses.RESOURCE_NOT_FOUND;
      responseType.MSG = error.message;

      this.sendResponse({ req, res, type: responseType, data: {} });
    }
  }
}

export default Service;
