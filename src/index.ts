// main server file

// importing dependencies
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./database";
import bodyParser from "body-parser";
import { router as userRouter } from "../src/modules/user/routes/index";
import responseMiddleware from "./utils/response/response.helper";

// loading env variables
dotenv.config();

// creating an express server instance
const server = express();

// connecting database
connectDatabase();

// middlewares
server.use(bodyParser.json());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));

// global response middleware 
server.use(responseMiddleware);
// setting up the port for the server
const port = process.env.PORT || 3000;

// testing endpoint
server.get("/", (req: Request, res: Response) => {
  res.sendResponse({ message: "Hello, world!" });
});

// user routes
server.use("/", userRouter);
// listening to the server on the port
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
