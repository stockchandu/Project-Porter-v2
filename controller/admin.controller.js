const router = require("express").Router();

router.get("/admin",(req,res)=>{

   try{ 
       res.render("admin")
    
    }
   catch(e){
       res.send(e)
   }
})


module.exports = router