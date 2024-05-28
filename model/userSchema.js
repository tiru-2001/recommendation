import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    password: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
    },
    phone: {
      type: "number",
      required: true,
    },
  },
  { timestamps: true }
);

const model = mongoose.model("users", userSchema);
export default model;
