import { error } from "console";
import mongoose from "mongoose";

const MONGO_URL = process.env.MONGODB_URI

if(!MONGO_URL){
    throw new Error ("Mongo db url is missing ");
}

