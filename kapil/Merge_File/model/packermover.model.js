const mongoose=require("mongoose")
const packerMoverSchema = new mongoose.Schema({
    Name: {type:String},
    Mobile: {type:Number},
    City:{type:String},
    Moving_From:{type:String},
    Destination:{type:String}
},{
    versionKey:false ,
    timestamps:true, 
});

//User is the collection name. User and nameSchema are getting connected
const packerMoverUser = mongoose.model("packerMoverUserData", packerMoverSchema);
module.exports=packerMoverUser;