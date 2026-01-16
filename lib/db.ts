import { error } from "console";
import mongoose from "mongoose";

const MONGO_URL = process.env.MONGODB_URI

if(!MONGO_URL){
    throw new Error ("Mongo db url is missing ");
}

let cached = (global as any).mongoose;

if(!cached) {
    cached = (global as any).mongoose = {conn:null,promise:null}
}


export async function dbconnect() {
    if(cached.conn) return cached.conn

    if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URL!, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}



