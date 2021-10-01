
const express= require("express");
const router= express.Router();

const Estimate=require("../models/estimate.models");
router.post("/",async(req,res)=>{
   try{ const getestimatedata= new Estimate({
          city:req.body.box_1,
          pickup:req.body.pickUp,
          dropof:req.body.dropOf,
          name:req.body.name_value,
          mobile:req.body.mobile_number,
          requirement:req.body.req_value,
          
    })

    await  getestimatedata.save()
    // res.render("fare_estimate")
}
catch(err){
    console.log(err)
}
})


module.exports=router;