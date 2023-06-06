require("dotenv").config();
const express = require("express");
require("./config/database").connect(); // connecting to db

const app = express();
const { PORT } = process.env;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// first is path and second is call back
app.get("/", (req, res) => {
  res.status(200).send("<h1> Happy Ineuron Assignment</h1>");
});

app.get("/insta", (req, res) => {
  const insta = {
    userName: "akshunn45",
    followers: "714",
    follow: "834",
  };
  // res.send(insta);
  res.status(200).json({ insta });
});

app.listen(PORT, () => {
  console.log("Server is running at 3000 port" + `${PORT}`);
});
