//imports
const express= require("express");
const app=express();
const port=2520;

app.use(express.json());
const connect=require("./configs/database");

//static files
app.use(express.static(__dirname + '/public'));


//imports CRUD
// const odishaController=require("./controller/odisha.controller")

const reviewController=require("./controller/review.controller");
const cityController=require("./controller/city.controller")
app.use("/review",reviewController)
app.use("/city",cityController)
// app.use("/odisha",odishaController)
//set views
// app.set('views','./views');
app.set('view engine', 'ejs');

//Navigation
app.get('/index',(req,res)=>{
    res.render('index')
})

//listen on port 2000
app.listen(port,async()=>{
    await connect()
    console.log(`the app is listening on ${port}`)
})