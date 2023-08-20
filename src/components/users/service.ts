import { Request, Response } from "express"
import Schema from './schema';
import {User} from "../../config/database/models";
import MessageSchema from './messagesSchema';
import Controller from '../base/controller';
import { responses } from '../../libs/Constants';
import bcrypt from 'bcrypt';

class Service extends Controller {
  constructor() {
    super();
    return this;
  }


  async signup(req: Request, res: Response) {
    try {
      // const user = await Schema.create({
      //     id: 1,
      //     fname: "Emmanuel",
      //     lname: "NTIVUGURUZWA",
      //     email: "jhghdf@gmail.com",
      //     country: "RWANDA",
      //     phone: "0726252552",
      //     dob: "2022-02-06",
      //     password: "kwuwefiug2f"
      // })
        // const newUser = await User.create({  
        //   fname: "Emmanuel",
        //   lname: "NTIVUGURUZWA",
        //   email: "jhghdf@gmail.com",
        //   country: "RWANDA",
        //   phone: "0726252552",
        //   dob: "2022-02-06",
        //   password: "kwuwefiug2f",
        // })
      return {};
    } catch (error) {
      console.log(error)
      let responseType = responses.BAD_REQUEST;
      responseType.MSG = error.message;

      this.sendResponse({req, res, type: responseType, data: {}})
      // this.sendResponse({ req, res, type: responseType });
    }
  }

  async signin(req: Request, res: Response) {
    const { email, password } = req.body;

    try {

      return { user: {}, token: {} };
    } catch (error) {
      let responseType = responses.RESOURCE_NOT_FOUND;
      responseType.MSG = error.message;

      this.sendResponse({ req, res, type: responseType, data: {} });
    }
  }

  async list(req: Request, res: Response) {
    const { email, password } = req.body;

    try {

      return { user: {}, token: {} };
    } catch (error) {
      let responseType = responses.RESOURCE_NOT_FOUND;
      responseType.MSG = error.message;

      this.sendResponse({ req, res, type: responseType, data: {} });
    }
  }
}

export default Service;