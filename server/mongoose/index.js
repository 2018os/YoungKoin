import mongoose from "mongoose";
import User from "./model";
const uri =
  "mongodb+srv://first_user:first_user@cluster0-6fejp.mongodb.net/WebProgramming?retryWrites=true"; // create new project
module.exports = () => {
  mongoose.connect(uri, { useNewUrlParser: true }, err => {
    if (err) console.error(err);
    console.log("DB connected");
  });
  User;
};
