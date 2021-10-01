//imports
const express= require("express");
const app=express();
const port=2520;

app.use(express.json());
const connect=require("./configs/database");

//static files
app.use(express.static(__dirname + '/public'));

//body parser
app.use(express.urlencoded({extended:false}));

//imports CRUD
// const reviewController=require("./controller/review.controller");
// const cityController=require("./controller/city.controller")
// app.use("/review",reviewController)
// app.use("/city",cityController)

const estimateController=require("./controller/estimate.controller");
app.use("/index",estimateController)
//set views
app.set('view engine', 'ejs');

//Navigation
app.get('/index',(req,res)=>{
    res.render('index')
})

app.get('/fare_estimate',(req,res)=>{
    res.render('fare_estimate')
})

//listen on port 
app.listen(port,async()=>{
    await connect()
    console.log(`the app is listening on ${port}`)
})