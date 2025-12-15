import mongoose from "mongoose";

const passwordSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    website: String,
    username: String,
    password: String,
  },
  { timestamps: true }
);

const Password = mongoose.model("Password", passwordSchema);
export default Password;
