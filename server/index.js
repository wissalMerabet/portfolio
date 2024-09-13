require('dotenv').config(); // Load environment variables from .env file

const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'https://wissal-merabet-portfolio.netlify.app',
}));


const port = process.env.Port || 3003; // Use environment variable for port

const username = process.env.name;
const password = process.env.password;
const db = process.env.db;

const mongoURI = `mongodb+srv://${username}:${password}@cluster0.qv0nk7t.mongodb.net/${db}?retryWrites=true&w=majority&appName=Cluster0`;



mongoose.connect(mongoURI)
  .then(() => {
    console.log("Connected successfully to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


const NewMessage = require('./models/message');

app.get("/Message", async (req, res) => {
  try {
    const msg = await NewMessage.find();
    console.log("The users are", msg);
    res.json(msg);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

app.get("/Allmessages", async (req, res) => {
  try {
    
    const messages = await NewMessage.find({}, 'message -_id');
    
    const formattedMessages = messages.map(msg => ({ message: msg.message }));
    res.json({ messages: formattedMessages });
    console.log({ messages: formattedMessages });
  } catch (error) {
    
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});


app.post('/sendMsg', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newMsg = new NewMessage({ name, email, message });

  try {
    await newMsg.save();
    res.status(201).json({ reply: "Message created successfully" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ error: "Failed to save message" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
