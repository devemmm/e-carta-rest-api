import express from 'express';
import fs from 'fs';
import Controler from './base/controller';
import { responses } from '../libs/Constants';

const router = express.Router();

router.get("/", (req, res) =>
  new Controler().sendResponse({
    req,
    res,
    type: responses.SUCCESS,
    data: "SAMS API is running....",
  })
);

fs.readdir(__dirname, function (err, components) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  components.forEach(function (component) {
    try {
      if (fs.existsSync(`${__dirname}/${component}/router.ts`)) {
        router.use(
          `/${component}`.toLowerCase(),
          require(`./${component}/router`)
        );
      }
    } catch (e) {
      console.log("error", e);
    }
  });
});

export default router;