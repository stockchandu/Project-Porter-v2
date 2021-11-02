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

// adminSchema.pre("save",function(next){
//     if(!this.isModified("password")) next();
//     let hash = bcrypt.hashSync(this.password,8);
//     this.password = hash
//     next()
// })

// adminSchema.methods.checkPassword = function (password){

//     const match = bcrypt.compareSync(password,this.password)

//     return match
// }


const Admin = mongoose.model("adminData",adminSchema)


module.exports = Admin

