import contactmodel from "../model/contactusschema.js";
import nodemailer from "nodemailer";
import xlsx from "xlsx";
import fs from "fs";
import path, { resolve } from "path";

import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "../data/contacts.xlsx");
let transporter;

const waitFor = async () => {
  try {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 100);
    });
    transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_AUTH,
      },
    });
  } catch (e) {}
};
waitFor();

console.log(process.env.EMAIL);

const add_contact = async (req, res) => {
  try {
    const { name, email, desc } = req.body;
    console.log(name, email, desc);

    const newContact = { name, email, desc, date: new Date().toISOString() };

    // Check if file exists
    let workbook;
    if (fs.existsSync(filePath)) {
      workbook = xlsx.readFile(filePath);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = xlsx.utils.sheet_to_json(worksheet);
      jsonData.push(newContact);
      const newWorksheet = xlsx.utils.json_to_sheet(jsonData);
      workbook.Sheets[workbook.SheetNames[0]] = newWorksheet;
    } else {
      const newWorksheet = xlsx.utils.json_to_sheet([newContact]);
      workbook = xlsx.utils.book_new();
      xlsx.utils.book_append_sheet(workbook, newWorksheet, "Contacts");
    }

    // Save the Excel file
    xlsx.writeFile(workbook, filePath);

    const mailOptions = {
      from: "etiru9.2001@gmail.com",
      to: email,
      subject: "Thank you for contacting us!",
      text: `Hi ${name},\n\nThank you for reaching out to us. We have received your message:\n\n"${desc}"\n\nWe will get back to you shortly.\n\nBest regards,\nYour Company`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).send({ message: "Error sending email", error });
      }
      res.status(200).send({
        message: "Form data saved and email sent successfully!",
        success: true,
      });
    });
    return;
  } catch (e) {
    console.log(e);
    return res.status(400).send({
      message: "Something went wrong",
      success: false,
    });
  }
};
export { add_contact };
