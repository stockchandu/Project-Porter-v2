//Imports

const express = require("express")
const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Static files
app.use(express.static('public'))
//app.use('/css',express.static(__dirname + 'public/css'))
//app.use('/js',express.static(__dirname + 'public/js'))
//app.use('/img',express.static(__dirname + 'public/img'))

//set views

app.set('views','./views')
app.set('view engine','ejs')

//importing mongoose from module
var mongoose = require("mongoose");

//mongoose is connecting to mongodb and mongodb://localhost:27017/form is the url
mongoose.connect("mongodb://localhost:27017/packerform");
var nameSchema = new mongoose.Schema({
    Name: {type:String},
    Mobile: {type:Number},
    City:{type:String},
    Moving_From:{type:String},
    Destination:{type:String}
},{
    versionKey:false 
});

//User is the collection name. User and nameSchema are getting connected
var User = mongoose.model("userpandm", nameSchema);

/*app.get("/packer_mover",  (req, res) => {
    try{
        res.render('nav');
    }
    catch(error){
        res.send(error);
    }
   
});*/

app.post("/packer_mover", async(req, res) => {
    try{
        const formdata = new User({
            Name : req.body.name,
            Mobile : req.body.number,
            City: req.body.city,
            Moving_From:req.body.from,
            Destination: req.body.to
        })
        const registered = await formdata.save();
        res.send(201)//.render("pack2");
        //res.send(formdata);
        //formdata.save();
    }
    catch {
        res.status(400).send("Unable to save to database");
    };
});

/*app.post("/pack2", async(req, res) => {
    try{
        const formdata = new User({
            Date : req.body.date,
        })
        const registered = await formdata.save();
        res.status(201).render("pack3");
        //res.send(formdata);
        //formdata.save();
    }
    catch {
        res.status(400).send("Unable to save to database");
    };
});

app.post("/pack3", async(req, res) => {
    try{
        const formdata = new User({
            
        })
        const registered = await formdata.save();
        res.status(201).render("packer_mover");
        //res.send(formdata);
        //formdata.save();
    }
    catch {
        res.status(400).send("Unable to save to database");
    };
});*/

app.get('',(req,res) => {
  res.render('packer_mover');
})


app.get('',(req,res) => {
    res.send('Hello world')
})

//Listen on port
app.listen(port, () => console.info(`Listening on port ${port}`))