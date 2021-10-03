

const express = require("express");
const router = express.Router();

const PackerMoverUser=require("../model/packermover.model")

router.post("/", async(req, res) => {
    
        const formdata = new PackerMoverUser({
            Name : req.body.name,
            Mobile : req.body.number,
            City: req.body.city,
            Moving_From:req.body.from,
            Destination: req.body.to
        })
         await formdata.save();
       
       setTimeout(()=>{
        res.render("packer_mover")
       },10000) 
   
});

module.exports=router