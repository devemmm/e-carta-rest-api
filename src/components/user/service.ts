import { Request, Response } from "express";
import axios from "axios";
import jwt from "jsonwebtoken";
import Organization from "../organization/schema";
import Controller from "../base/controller";
import { responses } from "../../libs/Constants";

class Service extends Controller {
  constructor() {
    super();
    return this;
  }

  async signin(req: Request, res: Response) {
    try {
      // FIND HIS/HER ORGANIZATION
      const organization = await Organization.findOne({
        where: { name: req.body.organization },
      });

      if (organization) {
        // console.log(organization.dataValues);

        // CHECK DHIS2 URL

        // console.log(organization.dataValues.dhis2url);
        // let dhis2url = organization.dataValues.dhis2url
        let dhis2url = "http://62.171.128.111:8080";

        const user = await axios({
          method: "get",
          url: `${dhis2url}/api/trackedEntityInstances/query.json?ouMode=ACCESSIBLE&program=ZpIRnN2Bqq0&attribute=Rs7cCYHlJkK:LIKE:${req.body.code}&pageSize=50&page=1&totalPages=false`,
          headers: {
            Authorization: "Basic YWJpemFpdGg6QWJpbmlvemExIUA=",
            Cookie: "JSESSIONID=8ED90ECAB3A775F1BAD734BD5C586497",
          },
          maxBodyLength: Infinity,
        });
        if (user.data.rows.length > 0) {
          let fname = user.data.headers.find(
            (item: any) => item.column === "First Name"
          ).name;

          let middleName = user.data.headers.find(
            (item: any) => item.column === "Middle name"
          ).name;

          let lname = user.data.headers.find(
            (item: any) => item.column === "Last Name"
          ).name;

          let dob = user.data.headers.find(
            (item: any) => item.column === "Date of Birth"
          ).name;

          let registrationId = user.data.headers.find(
            (item: any) => item.column === "Registration ID"
          ).name;

          const token = jwt.sign(
            { fname, lname, middleName, dob, registrationId },
            process.env.JWT_SECRET
          );

          return { fname, lname, middleName, dob, registrationId, token };
        } else {
          throw new Error("user not found");
        }
      } else {
        throw new Error("invalida organization name");
      }
    } catch (error) {
      let responseType = responses.BAD_REQUEST;
      responseType.MSG = error.message;

      this.sendResponse({ req, res, type: responseType, data: {} });
    }
  }
}

export default Service;
