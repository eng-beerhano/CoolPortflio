import express from 'express';
import { connectDB } from './lib/db.js';
import dotenv from 'dotenv';
import adminRoutes from './routes/adminRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
// import bodyParser from 'body-parser';
// import nodemailer from 'nodemailer';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
// app.use(bodyParser.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

const port = 4001;

app.use('/api/admin', adminRoutes);
app.use('/api', contactRoutes);

// Nodemailer transporter
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'engineerbeerhano@gmail.com', // Replace with your email
//       pass: '0613732602number', // Replace with your email password
//     },
//   });

// // Contact route
// app.post('/api/contact', (req, res) => {
//     const { name, email, message } = req.body;
  
//     const mailOptions = {
//       from: email,
//       to: 'your-email@gmail.com', // Replace with your email
//       subject: `Contact form submission from ${name}`,
//       text: message,
//     };
  
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         return res.status(500).json({ message: 'Something went wrong. Please try again.' });
//       }
//       res.status(200).json({ message: 'Your message has been sent successfully!' });
//     });
//   });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    connectDB();
});