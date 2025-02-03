// main server file

// importing dependencies
import express from "express";
import dotenv from "dotenv";

// loading env variables
dotenv.config();

// creating an express server instance 
const server = express();

// listening to the server on the port 
// setting up the port for the server
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);    
});