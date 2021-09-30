

const mongoose= require("mongoose");
const reviewSchema=new mongoose.Schema({
    author:{type:String,required:true},
    city:{type:String,required:true},
    imageUrl:{type:String,required:true},
    content:{type:String,required:true},
})

const Review= mongoose.model("review",reviewSchema);

module.exports=Review