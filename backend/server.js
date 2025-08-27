import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import XLSX from "xlsx";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const FILE = "data.xlsx";

// 📌 Setup Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 🚨 Keep track of already submitted contact forms
let submittedContacts = new Set();

// 📌 Existing /save route
app.post("/save", async (req, res) => {
  const { name, email, phone, isAdmin } = req.body;

  try {
    if (isAdmin) {
      return res.json({ success: true, message: "Admin login - no save" });
    }

    let workbook;
    if (fs.existsSync(FILE)) {
      workbook = XLSX.readFile(FILE);
    } else {
      workbook = XLSX.utils.book_new();
    }

    const wsName = "Users";
    let worksheet = workbook.Sheets[wsName];

    if (!worksheet) {
      worksheet = XLSX.utils.json_to_sheet([]);
    }

    const existingData = XLSX.utils.sheet_to_json(worksheet);

    const newData = [
      ...existingData,
      {
        Name: name,
        Email: email,
        Phone: phone,
        Time: new Date().toLocaleString(),
      },
    ];

    const newWorksheet = XLSX.utils.json_to_sheet(newData);
    workbook.Sheets[wsName] = newWorksheet;
    if (!workbook.SheetNames.includes(wsName)) {
      workbook.SheetNames.push(wsName);
    }

    XLSX.writeFile(workbook, FILE);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "✅ New User Login Recorded",
      text: `A new user logged in: ${name}, ${email}, ${phone}`,
      attachments: [
        {
          filename: "data.xlsx",
          path: FILE,
        },
      ],
    });

    res.json({ success: true, message: "Data saved & email sent!" });
  } catch (err) {
    console.error("Error saving data:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// 📌 NEW Contact Us route
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const key = `${name}-${email}-${message}`;

    // 👇 Prevent duplicate popup/email for same message
    if (submittedContacts.has(key)) {
      return res.json({ success: true, silent: true });
    }

    submittedContacts.add(key);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email
      subject: "📩 New Contact Us Message",
      html: `
        <h2>New Message from Contact Form</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    res.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("Error sending message:", err);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`✅ Backend running on https://portfolio94.onrender.com${PORT}`)
);
