import express, { Application } from "express";
import cors from "cors";
import userRouters from "./app/modules/user/user.router";

const app: Application = express();
// using cors
app.use(cors());

// parse data
app.use(express());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouters);

export default app;
