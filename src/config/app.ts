require("dotenv-flow").config();
import express from "express";
import cors from "cors";
import Utils from "../helper/Utils";

const app = express();
import appApi from "../components/index";

// middleware
app.use(cors());
app.use(express.json());
app.use(appApi);

app.use((req, res) => {
  res.status(500).json({
    now: new Utils().rightNow(),
    status: 500,
    message: "route not found",
  });
});

export default app;
