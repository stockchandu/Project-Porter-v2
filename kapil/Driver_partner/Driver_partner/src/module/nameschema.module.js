const mongoose = require("mongoose")

var nameSchema = new mongoose.Schema({
    Name: {type:String},
    Mobile: {type:Number},
    City:{type:String},
    Vehicle:{type:String},
    Hear:{type:String}
},{
    versionKey:false 
});

//User is the collection name. user and nameSchema are getting connected
var User = mongoose.model("user", nameSchema);

module.exports = User;