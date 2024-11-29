const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoute");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://shashwatseth:Captain123@netflix-clone.tebb4.mongodb.net/?retryWrites=true&w=majority&appName=Netflix-Clone"
    ).then(() => {console.log("DB Connected")});

app.use("/api/user", userRoutes);

app.listen(4000, console.log("Server Started"))