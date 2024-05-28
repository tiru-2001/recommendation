import express from "express";
import { add_contact } from "../controllers/contactus.controller.js";

const router = express.Router();

router.post("/add-contact", add_contact);
export default router;
