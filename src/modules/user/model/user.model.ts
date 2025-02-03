// user schema and model defination
import mongoose from "mongoose";
import {
  comparePassword,
  hashPassword,
} from "../../../utils/validations/bcrypt.helper";
import { IUser } from "../../../types/user/user.types";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../../utils/validations/jwt.helper";

// user schema defination (user model defination)
export const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    required: false,
  },
  refreshToken: {
    type: String,
    required: false,
  },
});

//  save user password hash
userSchema.pre("save", async function (next) {
  if (this.isModified("password") && this.password) {
    this.password = (await hashPassword(this.password)) || "";
  }
  next();
});

// schema method for checking password
userSchema.methods.checkPassword = async function (password: string) {
  const result = await comparePassword(password, this.password);
  if (result) {
    return true;
  }
  return false;
};

// schema method for generating user access token
userSchema.methods.generateAcccessToken = async function () {
  const token = await generateAccessToken(this);
  console.log(token, "access token");
  this.accessToken = token;
};

userSchema.methods.generateRefreshToken = async function () {
  const token = await generateRefreshToken(this);
  console.log(token, "refresh token");
  this.refreshToken = token;
};
// creating user model
export const User = mongoose.model<IUser>("User", userSchema);
