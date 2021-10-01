const express = require("express");

const User = require("../module/nameschema.module");

const router = express.Router();

router.get("/driver_partner",  (req, res) => {
    try{
        res.render('nav');
    }
    catch(error){
        res.send(error);
    }

});

router.post("/adddata",  (req, res) => {
        try{
            const formdata = new User({
                Name : req.body.name,
                Mobile : req.body.mobileno,
                City: req.body.city,
                Vehicle:req.body.vehicle,
                Hear: req.body.hear
            })

              formdata.save();
             res.status(201)
        }
        catch {
            res.status(400).send("Unable to save to database");
        };
});

module.exports =  router ;