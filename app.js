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

const DriverPartner = require("./model/driverpartner.model");
const packerMover = require("./model/packermover.model");
const Enterprise = require("./model/enterprise.model")

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

const adminController = require("./controller/admin.controller");
app.use("/",adminController);

const adminSignupController = require("./controller/admin_signup.controller");
app.use("/adminsignup",adminSignupController);

const adminLoginController = require("./controller/admin_login.controller");
app.use("/adminlogin",adminLoginController)

const userDataController = require("./controller/user_data.controller");
app.use("/",userDataController)

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

app.get("/get_estimate", (req, res)=>{
    res.render("getEstimateUserData")
})

//DriverPartneruserdata 
app.get("/driverpartner", async (req,res)=>{
    const data = await DriverPartner.find();
    return res.render("driverPartnerUserData",{
        dataList : data
    })
})

//PackerAndMoveruserdata
app.get("/packermover",async(req,res)=>{
    const data = await packerMover.find();
    return res.render("packerMoverUserData",{
        packerList : data
    })
})

//Enterpriseauserdata
app.get("/enterprise",async(req,res)=>{
    const data = await Enterprise.find();
    return res.render("enterpriseUserData",{
        packerList : data
    })
})
//listen on port 
app.listen(port,async()=>{
    await connect()
    console.log(`the app is listening on ${port}`)
})