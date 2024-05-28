import model from "../model/userSchema.js";
const registerController = async (req, res) => {
  try {
    console.log(req.body);
    const { name, password, email, phone } = req.body;
    if (!name || !password || !email || !phone) {
      res.status(403).send({
        success: false,
        message: "Please fill the from completely",
      });
      return;
    }
    const data = await model.findOne({ email });
    if (data) {
      res.status(401).send({
        message: "user already exists",
        success: false,
      });
      return;
    }

    const finalData = await model({ name, password, email, phone }).save();
    res.status(201).send({
      message: "user registered successfully",
      success: true,
      finalData,
    });
  } catch (e) {
    console.log(e);
  }
};
const loginController = async (req, res) => {
  try {
    const { password, email } = req.body;
    if (!password || !email) {
      res.status(401).send({
        success: false,
        message: "Please fill the from completely",
      });
      return;
    }

    const userExist = await model.findOne({ email });
    if (!userExist) {
      res.status(401).send({
        success: false,
        message: "user not registered",
      });
      return;
    }

    if (password != userExist.password) {
      res.status(401).send({
        success: false,
        message: "password mismatched",
      });
      return;
    }
    res.status(201).send({
      success: true,
      message: "user logged in successfullly",
    });
  } catch (e) {
    console.log(e);
  }
};

export { registerController, loginController };
