const express=require("express");
const router= express.Router()
const City=require("../models/city.model");

router.get("/",async(req,res)=>{

    try{

        let reso= req.query;
        let {search}=reso;
        
        const city= await City.findOne({},{name:search}).lean().exec()
        console.log(city)
        return res.status(200).send({city})
    }

    catch(err){
        console.log(err)
    }
})

module.exports=router