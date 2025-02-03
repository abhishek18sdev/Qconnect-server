// user controller for handling user related operations

import { Request, Response } from "express";
import { User } from "../model";
import mongoose from "mongoose";

// get all users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.sendResponse(users, "All users fetched successfully");
  } catch (error: any) {
    res.sendError(error);
  }
};

// get specific user by id
export const getUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  if (!userId) {
    res.sendError("user id is required");
  }

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res.sendError("user id is invalid");
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      res.sendError("user not found");
    }
    res.sendResponse(user, "User fetched successfully");
  } catch (error) {
    res.sendError("user not found");
  }
};

// create a new user
export const createUser = async (req: Request, res: Response) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.password ||
    !req.body.role
  ) {
    res.sendError("name, email, password and role are required");
  }

  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });
    // create accesstoken for user
    await user.generateAcccessToken();
    // create refresh for user
    await user.generateRefreshToken();
    // bcrypt user password
    console.log(user,"reached");
    await user.save();
    res.sendResponse(user, "created a new user");
  } catch (error: any) {
    console.log(error);
    res.sendError(error);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  if (!req.body.email || !req.body.password) {
    res.sendError("email and password are required");
  }

  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.sendError("user not found");
    }

    const isPasswordMatch = await user.checkPassword(req.body.password);
    if (!isPasswordMatch) {
      return res.sendError("password is incorrect");
    }
    // create accesstoken for user
    await user.generateAcccessToken();
    // create refreshtoken for user
    await user.generateRefreshToken();

    res.sendResponse(user, "User logged in successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};
//delete a user by id
export const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  if (!userId) {
    res.sendError("user id is required");
  }
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.sendError("user not found");
    }
    res.sendResponse(user, "User deleted successfully");
  } catch (error: any) {
    res.sendError(error);
  }
};

// update a user by id
export const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  if (!userId) {
    res.sendError("user id is required");
  }
  try {
    const user = await User.findByIdAndUpdate(userId, req.body, { new: true });
    if (!user) {
      return res.sendError("user not found");
    }
    res.sendResponse(user, "User updated successfully");
  } catch (error: any) {
    res.sendError(error);
  }
};
