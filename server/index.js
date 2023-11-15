const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./Routes/userRoute");

require("dotenv").config();

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.use(express.json());
app.use(cors());
// user
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Welcome our chat app APIS ...");
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection"))
  .catch((err) => console.log("MongoDB connection failed : ", err.message));

app.listen(port, (req, res) => {
  console.log(`Server runing on port : ${port}`);
});
