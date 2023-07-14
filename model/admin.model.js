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




module.exports = Admin

