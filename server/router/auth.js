const express = require("express");
const User = require("../model/userSchema");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// const middleware = (req, res, next) => {
//   console.log("Hello my middleware");
//   next();
// };

// Routing the page
router.get("/", (req, res) => {
  res.send("Hello world from the home..router js!!");
});

//register validation
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill the field properly" });
  }

  try {
    const userExit = await User.findOne({ email: email });

    if (userExit) {
      return res.status(422).json({ error: "Email already exits" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password are not matching" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      await user.save();

      return res.status(201).json({ error: "user registerd successfully" });
    }
  } catch (err) {
    console.log(err);
  }

  res.json({ message: req.body });
});

// Login router

router.post("/signin", async (req, res) => {
  let token;
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please fill the data" });
    }

    const userLogin = await User.findOne({ email: email });

    // console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 2589200000),
        httpOnly: true,
      });

      if (!isMatch) {
        return res.status(400).json({ error: "Invalid Credientials" });
      } else {
        return res.json({ message: "user signin successfully" });
      }
    } else {
      return res.status(400).json({ error: "Invalid Credientials" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
