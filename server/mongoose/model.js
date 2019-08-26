import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: { type: String, required: true },
  password: { type: String, required: true },
  nickName: { type: String, required: true },
  isLoggedIn: { type: Boolean, required: true}
});

export default mongoose.model("user", UserSchema);
