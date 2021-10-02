const express= require("express");
const app=express();
const port=2520;

app.use(express.json());

//connection from database
const connect=require("./configs/database");

//static files
app.use(express.static(__dirname + '/public'));

//body parser
app.use(express.urlencoded({extended:false}));

//imports CRUD
//Get estimate controller  
const estimateController=require("./controller/estimate.controller");
app.use("/index",estimateController);

//packer mover controller
const packerController=require("./controller/packermover.controller");
app.use("/packer_mover",packerController);

//Driver partner cityController
const driverController=require("./controller/driverpartner.controller");
app.use("/",driverController);

//For enterprise controller
const enterpriseController=require("./controller/enterprise.controller");
app.use("/added",enterpriseController)



//set views
app.set('view engine', 'ejs');

//Navigation
app.get('/index',(req,res)=>{
    res.render('index')
});

app.get('/fare_estimate',(req,res)=>{
    res.render('fare_estimate')
});

app.get('/packer_mover',(req,res)=>{
    res.render('packer_mover')
})

app.get("/for_enterprise", (req, res)=>{
    res.render("for_enterprise")
})
//listen on port 
app.listen(port,async()=>{
    await connect()
    console.log(`the app is listening on ${port}`)
})