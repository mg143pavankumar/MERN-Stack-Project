const express = require("express");
const User = require("../model/userSchema");
const router = express.Router();

// const middleware = (req, res, next) => {
//   console.log("Hello my middleware");
//   next();
// };

// Routing the page
router.get("/", (req, res) => {
  res.send("Hello world from the home..router js!!");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill the field properly" });
  }

  try {
    const userExit = await User.findOne({ email: email });

    if (userExit) {
      return res.status(422).json({ error: "Email already exits" });
    }

    const user = new User({ name, email, phone, work, password, cpassword });

    await user.save();

    return res.status(422).json({ error: "user registerd successfully" });
  } catch (err) {
    console.log(err);
  }

  res.json({ message: req.body });
});

router.get("/about", (req, res) => {
  res.send("Hello world from the router js!");
});
router.get("/contact", (req, res) => {
  res.send("Hello world from the contact..!!");
});
router.get("/signin", (req, res) => {
  res.send("Hello world from the signin..!!");
});
router.get("/signup", (req, res) => {
  res.send("Hello world from the signup..!!");
});

module.exports = router;
