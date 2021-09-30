var express = require("express");  //importing express from module
var app = express();
var port = 3000;

//express.json is used to change mongoose object to json object
app.use(express.json());
// express.urlencoded is used to change dorm data to json object
app.use(express.urlencoded({ extended: false }));

//Static files - static files are css,js,img inside public folder
app.use(express.static('public'));

// simple templating language/engine
app.set('view engine',"ejs");

//importing mongoose from module
var mongoose = require("mongoose");

//mongoose is connecting to mongodb and mongodb://localhost:27017/form is the url
mongoose.connect("mongodb://localhost:27017/form");
var nameSchema = new mongoose.Schema({
    Name: {type:String},
    Mobile: {type:Number},
    City:{type:String},
    Vehicle:{type:String},
    Hear:{type:String}
},{
    versionKey:false 
});

//User is the collection name. User and nameSchema are getting connected
var User = mongoose.model("user", nameSchema);

app.get("/driver_partner",  (req, res) => {
    try{
        res.render('nav');
    }
    catch(error){
        res.send(error);
    }
   
});

app.post("/adddata",  (req, res) => {
    // var myData = new User(req.body);
    // myData.save()
        try{
            const formdata = new User({
                Name : req.body.name,
                Mobile : req.body.mobileno,
                City: req.body.city,
                Vehicle:req.body.vehicle,
                Hear: req.body.hear
            })
            res.render('nav');
            formdata.save();
        }
        catch {
            res.status(400).send("Unable to save to database");
        };
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});






// const express = require("express");

// const app = express();

// const port = 4040

// //Stati file
// // It allow us to add static file like js,css,img
// app.use(express.static('public'));  //app.use(path,callback function)

// app.set('views', './views');

// app.set('view engine', 'ejs');

// // app.get("",(req,res)=>{`
// //     res.render('index',{ 
// //         text:'Learning ejs'
// //     });
// // })
// app.post("/adddata" ,(req,res)=>{
//     res.send("hello world");
// })

// app.get("", (req,res) =>{
//     res.sendFile(__dirname + "/views/nav.html");
// })

// // app.get("/", (req,res)=>{
// //     res.sendFile(__dirname + "/views/index.html");
// // })

// //app.use('/style')
// app.listen(port,(req,res)=>{
//     console.log(`Listening on this ${port}`);
// })