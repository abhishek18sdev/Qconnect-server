// function for connecting the database with server 
import mongoose from "mongoose";
export const connectDatabase = async () => {
    const databseUrl : string = (process.env.ENVIOREMENT == "production" ? process.env.MONGODB_URL : process.env.MONGODB_URL )|| "mongodb://localhost:27017/QCONNECT";
    console.log(databseUrl);
    try {
        await mongoose.connect(databseUrl);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }  
};