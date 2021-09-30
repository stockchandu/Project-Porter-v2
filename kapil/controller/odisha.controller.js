
const express=require("express");
const router= express.Router();

const Odisha = require("../models/odisha.models");

router.post("/",async(req,res)=>{
   try{ const odisha= await Odisha.create(req.body);
    return res.status(200).send({odisha})
   }
   catch(err){
       console.log(err)
   }
})

module.exports=router