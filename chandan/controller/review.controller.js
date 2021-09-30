

const express=require("express");
const router=express.Router();
const Review = require("../models/review.models");


router.post("/",async(req,res)=>{
    const review= await Review.create(req.body)
    return res.status(200).send({review})
})

router.get("/",async(req,res)=>{
    const review= await Review.find().lean().exec();
    return res.status(200).send({review})
})

module.exports=router;