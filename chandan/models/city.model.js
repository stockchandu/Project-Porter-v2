

const mongoose= require("mongoose");
mongoose.pluralize(null)
const citySchema=new mongoose.Schema({

    id:{type:String},
    name:{type:String},
    state:{type:String},

},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("city",citySchema);

