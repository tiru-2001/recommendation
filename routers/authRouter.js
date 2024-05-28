import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";
const autrouter = express.Router();

autrouter.post("/register", registerController);
autrouter.post("/login", loginController);
export default autrouter;
