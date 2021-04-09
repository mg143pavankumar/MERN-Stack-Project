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

app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
});
