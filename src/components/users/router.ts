import express from 'express';
const router = express();
import Controller from './controller';
import Validator from '../base/validator';
import requestValidator from '../../helper/Validation';
import Authorization from '../middleware/requireAuth'

const controller = new Controller();
const validator = new Validator();
const authorization = new Authorization();

router.post("/signup", controller.signup)

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