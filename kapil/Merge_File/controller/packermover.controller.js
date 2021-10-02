

const express = require("express");
const router = express.Router();

const PackerMoverUser=require("../model/packermover.model")

router.post("/", async(req, res) => {
    try{
        const formdata = new PackerMoverUser({
            Name : req.body.name,
            Mobile : req.body.number,
            City: req.body.city,
            Moving_From:req.body.from,
            Destination: req.body.to
        })
        const registered = await formdata.save();
        res.send(201);
    }
    catch {
        res.status(400).send("Unable to save to database");
    };
});

module.exports=router