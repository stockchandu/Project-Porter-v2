
const mongoose=require("mongoose");
const estimateUserSchema= new mongoose.Schema({
     city:{type:String},
     pickup:{type:String},
     dropof:{type:String},
     mobile:{type:Number},
     requirement:{type:String},


},{
     versionKey:false,
     timestamps:true
})

module.exports= mongoose.model("EstimateUserData",estimateUserSchema)