
const express = require("express")
const mongoose = require("mongoose")

const connect = ()=>{
   return  mongoose.connect(" mongodb://127.0.0.1:27017/porter")
} 

const Enterprise = require("./models/enterprise")

const app = express()
const port = process.env.PORT || 3010;

//static files
app.use(express.static("public"))
//app.use("/css", express.static(__dirname + "public/css"))
//app.use("/img", express.static(__dirname + "public/images"))
//app.use("/js", express.static(__dirname + "public/javascript"))


app.use(express.json())
app.use(express.urlencoded({extended:false}))

//set views
//app.set("views", "./views")
app.set("view engine", "ejs")

app.get("/", (req, res)=>{

    res.render("for_enterprise")
})

app.get("/for_enterprise", (req, res)=>{

    res.render("for_enterprise")
})


app.post("/added", async (req, res)=>{
    try{

        const resisterEnterprise = new Enterprise({
            name:req.body.name,
            phone:req.body.phone,
            email:req.body.email,
            city:req.body.city,
            trip:req.body.trip
        })

        resisterEnterprise.save()
        res.status(200)
       
    } catch(error){
        res.status(400).send(error);
    }
    
})




app.listen(port, async function(){
   await connect()
    console.log(`listening ${port}`)
})
