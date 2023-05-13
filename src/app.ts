import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();
// using cors
app.use(cors());

// parse data
app.use(express());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // res.send("Hello World whats going on!");
  // next();

  /*
  1.interface
  2.schema
  3.model
  4.Database Query
  */

  interface IUser {
    id: string;
    roll: "student";
    password: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    dateOfBirth: string;
    gender: "male" | "female";
    contactNo: string;
    email?: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
  }

  // create schema
  const userSchema = new Schema<IUser>({
    id: { type: String, required: true, unique: true },
    roll: { type: String, required: true },
    password: { type: String, required: true },
    name: {
      firstName: { type: String, required: true },
      middleName: { type: String },
      lastName: { type: String, required: true },
    },
    dateOfBirth: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"] },
    contactNo: { type: String, required: true },
    email: { type: String },
    emergencyContactNo: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
  });
});

export default app;
