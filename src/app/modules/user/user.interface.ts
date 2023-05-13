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
