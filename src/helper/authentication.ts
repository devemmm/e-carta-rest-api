import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import Organization from "../components/organization/schema"

export const findByCredential = async (email: string, password: string) => {
    if (!email || !password) {
      throw new Error("You must provide email and password");
    }
  
    const organization = await Organization.findOne({where: {email}});
  
    if (!organization) {
      throw new Error("Email Not Found !!!");
    }
  
    const isMatch = await bcrypt.compare(password, organization.getDataValue('password'));
  
    if (!isMatch) {
      throw new Error("Wrong Password !!!");
    }
  
    return organization;
  };

  export const generateAuthToken = async function (_id: string) {
    return jwt.sign({ id: _id.toString() }, process.env.JWT_SECRET);
  };