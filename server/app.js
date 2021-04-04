const dotenv = require("dotenv");
const express = require("express");
const app = express();

//For security of database
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 3000;

// mongooseDB database connection
require("./database/db_connection");

// requring userSchema
const User = require("./model/userSchema");

app.use(express.json()); // used for converting any type of data into json format

// to link the all router files
app.use(require("./router/auth"));

// Meddleware -- which hidde the page when user is not login
const middleware = (req, res, next) => {
  console.log("Hello my middleware");
  next();
};

// Routing the page
// app.get("/", (req, res) => {
//   res.send("Hello world from the home..!!");
// });
// app.get("/about", middleware, (req, res) => {
//   res.send("Hello world from the about..!!");
// });
// app.get("/contact", (req, res) => {
//   res.send("Hello world from the contact..!!");
// });
// app.get("/signin", (req, res) => {
//   res.send("Hello world from the signin..!!");
// });
// app.get("/signup", (req, res) => {
//   res.send("Hello world from the signup..!!");
// });

app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
});
