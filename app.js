let express = require("express");
let hbs = require("hbs");
let app = express();


let index = require("./routes/index");
app.use("/", index);

module.exports = app;