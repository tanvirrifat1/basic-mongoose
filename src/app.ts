import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

const app: Application = express();
// using cors
app.use(cors());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World whats going on!");
  next();
});

export default app;
