// user controller for handling user related operations

import { Request, Response } from "express";

// get all users
export const getAllUsers = (req: Request, res: Response) => {
  try {
    res.send("get all users");
  } catch (error) {
    res.status(500).send(error);
  }
};

// get specific user by id
export const getUser = (req: Request, res: Response) => {
  try {
    res.send("get specific user");
  } catch (error) {
    res.status(500).send(error);
  }
};

// create a new user
export const createUser = (req: Request, res: Response) => {
  try {
    res.send("create a new user");
  } catch (error) {
    res.status(500).send(error);
  }
};

//delete a user by id
export const deleteUser = async (req: Request, res: Response) => {
  try {
    res.send("delete a user");
  } catch (error) {
    res.status(500).send(error);
  }
};

// update a user by id
export const updateUser = (req: Request, res: Response) => {
  try {
    res.send("update a user");
  } catch (error) {
    res.status(500).send(error);
  }
};
