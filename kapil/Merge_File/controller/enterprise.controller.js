
const express= require("express");
const router= express.Router();
const Enterprise = require("../model/enterprise.model");
router.post("/", async (req, res)=>{
    try{

        const registerEnterprise = new Enterprise({
            name:req.body.name_person,
            phone:req.body.phone_num,
            email:req.body.email_id
        })

       await registerEnterprise.save()
       console.log(registerEnterprise)
        // res.status(200).render("for_enterprise")
       
    } catch(error){
        res.status(400).send(error);
    }
    
})

module.exports=router;