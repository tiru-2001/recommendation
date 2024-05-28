import mongoose from "mongoose";
const contactschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const contactmodel = mongoose.model("contactschema", contactschema);
export default contactmodel;
