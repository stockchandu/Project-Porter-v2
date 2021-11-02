const router = require("express").Router();
const PackerMoverUser=require("../model/packermover.model")
const Enterprise = require("../model/enterprise.model");
const DriverPartner= require("../model/driverpartner.model");
const Estimate=require("../model/estimate.model");

//DriverPartneruserdata
router.get("/driver_partner_user_data", async (req,res)=>{
    const data = await DriverPartner.find();
    return res.render("driverPartnerUserData",{
        dataList : data
    })
})

//PackerAndMoveruserdata
router.get("/packer_mover_user_data",async(req,res)=>{
    const data = await PackerMoverUser.find();
    return res.render("packerMoverUserData",{
        packerList : data
    })
})

//Enterpriseuserdata
router.get("/enterprise_user_data",async(req,res)=>{
    const data = await Enterprise.find();
    return res.render("enterpriseUserData",{
        packerList : data
    })
})

// get estimate user data
router.get("/getestimateuserdata", async (req,res)=>{
    try{
        let data = await Estimate.find().lean().exec();
        return res.status(200).send({data})
    }
    catch(err){
        console.log(err)
    }
})

module.exports = router