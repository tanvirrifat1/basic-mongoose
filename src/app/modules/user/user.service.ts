import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  // creating a new user
  const user = new User(payload); //User -> class  user -> instance
  await user.save();
  return user;
};
export const getUsersFromDB = async () => {
  const users = await User.find();
  return users;
};

// {
//     id: "8526968",
//     roll: "students",
//     password: "8784654",
//     name: {
//       firstName: "MR homes",
//       middleName: "khan",
//       lastName: "akkas ali",
//     },
//     gender: "male",
//     contactNo: "014545534654",
//     email: "akkas@gmail.com",
//     emergencyContactNo: "545465456",
//     presentAddress: "garpara",
//     permanentAddress: "dont know",
//   }
