import express, { Request, Response } from "express";

export const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});