const  mongoose  = require("mongoose");
let enterpriseSchema = new mongoose.Schema({
    name:{type:String},
    phone:{type:String},
    email:{type:String}

},{
    versionKey:false ,
    timestamps:true, 
})
module.exports =  mongoose.model("enterprise", enterpriseSchema)







