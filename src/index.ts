// main server file

// importing dependencies
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./database";
import bodyParser from "body-parser";

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

// setting up the port for the server
const port = process.env.PORT || 3000;

// testing endpoint
server.get("/", (req: Request, res: Response) => {
   res.send("Hello World");
});

// listening to the server on the port
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
