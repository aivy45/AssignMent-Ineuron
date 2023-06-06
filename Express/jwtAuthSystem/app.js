require("dotenv").config();
require("./config/database").connect(); // connecting to db

const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
// import model - user
const User = require("./model/user");

// custom middleware
const auth = require("./middleware/auth");

// middleware comes from packages (uses app.use)
const app = express();
app.use(express.json()); // whenever have to extract any info from request.body
app.use(express.urlencoded({ extended: true })); // when extracting info from form urlencoded
app.use(cookieParser()); // middleware

app.get("/", (req, res) => {
  res.send("Hello auth system");
});

// *********Sign up route************
// using post - add to db
app.post("/signup", async (req, res) => {
  // here getting data so we have to wait so have to use async and wait and always use try catch
  // high chances data might get failed
  try {
    //collection of information
    const { firstname, lastname, email, password } = req.body;

    // validate the data
    if (!(email && password && lastname && firstname)) {
      res.status(401).send("All fields are required");
    }

    // check if user already exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(401).send("User already found in database");
    }

    // Encrypt the password
    const myEncrptPassword = await bcrypt.hash(password, 10);

    //save data in database
    const user = await User.create({
      // creating new user
      firstname,
      lastname,
      email,
      password: myEncrptPassword,
    });

    //create a token and send it to user
    const token = jwt.sign(
      {
        id: user._id, // here payload the data
        email, // user._id already present in ODM
      },
      "shhhhh",
      { expiresIn: "2h" }
    ); // shhhhh is secret if someone wants to decrypt the token then need same secret

    user.token = token; // filling token value in user
    // dont't want to send the password
    user.password = undefined;

    // sending it to frontend guy
    res.status(201).json(user);
  } catch (e) {
    console.log(e);
    console.log("Error is response route");
  }
});

// **********login route ******************
// using post - add to db
app.post("/login", async (req, res) => {
  try {
    // collect information from frontend
    const { email, password } = req.body;

    // validate
    if (!(email && password)) {
      res.status(401).send("Email and password is required");
    }

    // check user in database
    const user = await User.findOne({ email: email });
    // if user doesnot exist
    if (!user) {
      res.status(401).send("User not exit");
    }
    // match the password if user exist then create a token
    // also create a cookie and send it
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        {
          id: user._id,
          email, // payload
        },
        "shhhhh",
        { expiresIn: "2h" }
      );

      // console.log(token);

      user.password = undefined;
      user.token = token;

      //creating cookies
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true, // so no one can change my cookie time
      };
      // send  to frontend token into cookies
      res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        user,
      });
    }

    res.status(400).send("email or password is incorrect");
  } catch (error) {
    console.log(error);
  }
});

// ***********dashboard************
// using get - req info to show
// here auth is a middleware (req, auth, isAdmin, onem, res) all are next
app.get("/dashboard", auth, (req, res) => {
  res.send("Welcome to dashboard");
  console.log(req.cookies);
});

module.exports = app;
