import { HydratedDocument, Model } from "mongoose";

export interface IUser {
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

export interface IUserMethods {
  fullName(): string;
}

export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
