require("./db");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var dataRoute = require("./dataControler");

var app = express();
app.use(bodyParser.json());
app.use(cors());
app.listen(8080, () => console.log("server started at :8080"));
app.use("/user", dataRoute);