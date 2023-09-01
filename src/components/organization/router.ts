import express from "express";
import Controller from "./controller";
import Validator from "../base/validator";
import requestValidator from "../../helper/Validation";

const router = express();
const controller = new Controller();
const validator = new Validator();

router.post("/register", controller.create);

router
  .route("/signin")
  .post(
    validator.validateRequest.bind(
      new Validator().init(requestValidator.signin)
    ),
    controller.signin.bind(controller)
  );

router
  .route("/")
  .get(
    validator.validateRequest.bind(
      new Validator().init(requestValidator.listUsers)
    ),
    controller.list.bind(controller)
  );

module.exports = router;
