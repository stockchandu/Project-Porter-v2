
const mongoose=require("mongoose");
const estimateUserSchema= new mongoose.Schema({
     city:{type:String},
     pickup:{type:String},
     dropof:{type:String},
     mobile:{type:Number},
     requirement:{type:String},


})

module.exports= mongoose.model("getestimateusers",estimateUserSchema)