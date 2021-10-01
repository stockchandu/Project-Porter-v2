var express = require("express");  //importing express from module
var app = express();
var port = 4500;

//express.json is used to change mongoose object to json object
app.use(express.json());

// express.urlencoded is used to change dorm data to json object
app.use(express.urlencoded({ extended: false }));

//Static files - static files are css,js,img inside public folder
app.use(express.static('public'));

// simple templating language/engine

app.set('view engine',"ejs");

var mongoose = require("mongoose");

const connect = require("./config/dbs")

const namecontroller = require("./src/controller/nameschema.controller");
app.use("",namecontroller)

app.listen(port, () => {
    console.log(`Server listening on port ${port}` );
});
