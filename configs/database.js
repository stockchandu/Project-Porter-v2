const mongoose = require("mongoose")

const connect=()=>{
    return mongoose.connect("mongodb+srv://chandan:c123456789@cluster0.sl7vx.mongodb.net/porterdatabase?retryWrites=true&w=majority")
}

module.exports=connect
