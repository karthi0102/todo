const mongoose=require("mongoose")
const {Schema}=mongoose

const todoSchema = new Schema({
    name:String,
    date:Date,
    number:Number,
    completed:Boolean
})


module.exports = mongoose.model("Todo",todoSchema)