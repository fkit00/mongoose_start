import mongoose from "mongoose";
import firstSchema from "./primate.model.js";
import dotenv from "dotenv";
dotenv.config();

const db = {};
db.mongoose = mongoose;
db.url = process.env.URL;
db.primate = firstSchema(mongoose);

export default db;
