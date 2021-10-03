const express = require("express");
const router = express.Router();
const DriverPartner= require("../model/driverpartner.model");

router.get("/driver_partner",  (req, res) => {
    try{
        res.render('driverpartner');
    }
    catch(error){
        res.send(error);
    }

});

router.post("/adddata", async(req, res) => {
        try{
            const driverpartnerformdata = new DriverPartner({
                Name : req.body.name,
                Mobile : req.body.mobileno,
                City: req.body.city,
                Vehicle:req.body.vehicle,
                Hear: req.body.hear
            })

            await  driverpartnerformdata.save();
    
            setTimeout(()=>{
             res.render("driverpartner")
            },10000) 
        }
        catch {
            res.status(400).send("Unable to save to database");
        };
});

module.exports =  router ;