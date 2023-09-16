import mongoose from "mongoose";
import { MONGODB_URI } from "./lib/config";



const connectMongo = async () => await mongoose.connect(MONGODB_URI)


export default  connectMongo
