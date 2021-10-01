//importing mongoose from module
var mongoose = require("mongoose");

//mongoose is connecting to mongodb and mongodb://localhost:27017/form is the url
module.exports = mongoose.connect("mongodb://localhost:27017/data");