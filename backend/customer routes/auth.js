const router = require("express").Router();
const User = require("../customer models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");

const express = require("express");
const app = express();
const cors = require("cors");

// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
// const session = require("express-session");

//REGISTER

router.post("/register", async (req, res) => {
  //   Signup.find()
  //     .then((signup) => res.json(signup))
  //     .catch((err) => res.status(400).json("Error: " + err));

  //Validating data
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Checking if the user is already registered
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  //Hashing the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Creating new user
  const user = new User({
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

//LOGIN

// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(
//   session({
//     key: "userID",
//     secret: "jashdjahdj",
//     resave: true,
//     saveUninitialized: false,
//     cookie: {
//       expires: 60 * 60 * 24,
//     },
//   })
// );

router.post("/login", async (req, res) => {
  //Validating data
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Checking if the email exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.json({ auth: false, message: "No email found" });
  // if (!user) return res.status(400).send("Email not found");

  //Checking if password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    return res.json({ auth: false, message: "Password is wrong" });
  }
  // if (!validPass) return res.status(400).send("Password is wrong");

  // if (!user || !validPass) {
  //   return res.send({ user, message: "Email or Password is wrong" });
  // }

  // result = user;
  // req.sessioncookie.user = result;
  // console.log(req.sessioncookie.user);

  //Create and assign a token
  const id = user._id,
    email = user.email;
  const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
    expiresIn: 300,
  });
  // res.header("auth-token", token).send(token);

  const result = user;
  req.session.user = result;
  console.log(req.session.user, id);
  res.json({ auth: true, token: token, result: result });
  // res.send(user);
});

router.get("/login", async (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

// router.route("/add").post((req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;

//   const newUser = new Signup({ email, password });

//   newUser
//     .save()
//     .then(() => res.json("User added!"))
//     .catch((err) => res.status(400).json("Error: " + err));
// });
module.exports = router;
