const  mongoose  = require("mongoose")



let enterpriseSchema = new mongoose.Schema({

    name:{type:String},
    phone:{type:String},
    email:{type:String},
    city:{type:String},
    trip:{type:String}

})

module.exports =  mongoose.model("enterprise", enterpriseSchema)







