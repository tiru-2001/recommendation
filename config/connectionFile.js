import mongoose from "mongoose";
const connectToDatabase = async () => {
  try {
    const result = await mongoose.connect(process.env.MONGOOSE_CONNECTION);
    console.log("connected".bgMagenta);
  } catch (e) {
    console.log(e);
  }
};

export default connectToDatabase;
