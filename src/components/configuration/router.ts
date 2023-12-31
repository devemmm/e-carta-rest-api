import express from "express";
import Controller from "./controller";
import Validator from "../base/validator";
import requestValidator from "../../helper/Validation";

const router = express();
const controller = new Controller();
const validator = new Validator();

router.post("/create", controller.create);

router.patch("/:id", controller.update);

router
  .route("/")
  .get(
    validator.validateRequest.bind(
      new Validator().init(requestValidator.listUsers)
    ),
    controller.list.bind(controller)
  );

module.exports = router;
