// routes for user related operations
import express from "express";
import {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/index";
export const router = express.Router();

router
  .get("/users", getAllUsers)
  .get("/user/:id", getUser)
  .post("/user", createUser)
  .put("/user/:id", updateUser)
  .delete("/user/:id", deleteUser);
