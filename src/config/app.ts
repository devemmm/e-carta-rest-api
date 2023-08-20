require('dotenv-flow').config();
require('./db')
import express from 'express'
import { serve, setup } from 'swagger-ui-express';
// const docs = require('../documentation/index')
import cors from 'cors';
import Utils from '../helper/Utils';

import db from "./db"
const app = express();
import appApi from '../components/index';

// middleware
app.use(cors());
app.use(express.json());
app.use(appApi);
// app.use("/api-docs", serve, setup(docs))

app.use((req, res) => {
  res
    .status(500)
    .json({
      now: new Utils().rightNow(),
      status: 500,
      message: "route not found",
    });
});


// db.sync()
//     .then((result)=> console.log("connected to database"))
//     .catch((error)=> console.log("error ocpaied", error.message))

export default app;