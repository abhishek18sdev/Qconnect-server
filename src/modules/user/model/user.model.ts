// user schema and model defination
import mongoose from "mongoose";

// user schema defination (user model defination)
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // validate: {
    //   validator: function (value: string) {
    //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    //   },
    //   message: "Invalid email format",
    // },
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

// creating user model
const User = mongoose.model("User", userSchema);

export default User;
