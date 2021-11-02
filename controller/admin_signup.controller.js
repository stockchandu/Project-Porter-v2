const SECRET = process.env.SECRET
const router = require("express").Router();
const Admin = require("../model/admin.model");
const jwt = require("jsonwebtoken");

const newToken = (user)=>{
    return jwt.sign({user},SECRET)
}

router.post("/",async(req,res)=>{
    let user;

    try{

        user = await Admin.findOne({email:req.body.email})

        if(user) return res.status(400).send("email is already exits") 

        user = await Admin.create(req.body)

        const token = newToken(user);

        return res.status(200).send({user,token})

    }
  catch(err){
      return res.status(400).send(err)
  }
})

module.exports = router