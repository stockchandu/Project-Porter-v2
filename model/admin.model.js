const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const adminSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
},{
    versionKey:false,
    timestamps:true,
})


const Admin = mongoose.model("adminData",adminSchema)



module.exports = Admin

