import User from "./user.model";

export const createUserToDB = async () => {
  const user = await new User({
    id: "8526968",
    roll: "students",
    password: "8784654",
    name: {
      firstName: "MR Jerry",
      middleName: "khan",
      lastName: "akkas",
    },
    // dateOfBirth: "08/03/2000",
    gender: "male",
    contactNo: "014545534654",
    email: "akkas@gmail.com",
    emergencyContactNo: "545465456",
    presentAddress: "garpara",
    permanentAddress: "dont know",
  });
  await user.save();
  return user;
};
