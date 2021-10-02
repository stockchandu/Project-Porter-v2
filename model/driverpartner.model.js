const mongoose = require("mongoose");
const DriverPartnerSchema = new mongoose.Schema({
    Name: {type:String},
    Mobile: {type:Number},
    City:{type:String},
    Vehicle:{type:String},
    Hear:{type:String}
},{
    versionKey:false ,
    timestamps:true,
});

//User is the collection name. user and nameSchema are getting connected
const DriverPartner = mongoose.model("DriverPartnerData", DriverPartnerSchema);
module.exports = DriverPartner;