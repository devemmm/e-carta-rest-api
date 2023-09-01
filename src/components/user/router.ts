import express from "express";
import Controller from "./controller";
import Validator from "../base/validator";
import requestValidator from "../../helper/Validation";

const router = express();
const controller = new Controller();
const validator = new Validator();

router
  .route("/signin")
  .post(
    validator.validateRequest.bind(
      new Validator().init(requestValidator.signin_user)
    ),
    controller.signin.bind(controller)
  );

module.exports = router;
