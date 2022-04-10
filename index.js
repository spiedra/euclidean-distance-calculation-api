const fs = require("fs");
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

var xlsData = require("./src/routes/index.js");

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(bodyParser.json());

app.use("/calculation", xlsData);
app.get("/", (req, res, next) =>
  res.send("Welcome to the Euclidean Distance Calculation API!")
);
app.all("*", (req, res, next) =>
  res.send("You've tried reaching a route that doesn't exist")
);
app.listen(app.get("port"), () => {
  console.log(`Server on port: http://localhost:${app.get("port")}`);
});
