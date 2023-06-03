const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

//
const socketServer = require("./socketServer");
const authRoutes = require("./routes/authROutes");

app.use(express.json());
app.use(cors());

// register the routes
app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || process.env.API_PORT;
const server = http.createServer(app);
const URL = process.env.MONGO_URI;
socketServer.registerSocketServer(server);

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(URL);
    console.log("Server is Connected to Database");
  } catch (err) {
    console.log("Server is Not connected to Database", err.message);
  }
};

connectDB();
// server.listen(port, () => console.log(`Listening on port ${PORT}`));
app.listen(PORT, console.log(`Server is Running on ${PORT} `));
