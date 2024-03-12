const mongoose = require("mongoose")


const booking = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    pin:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    pNo:{
        type:Number,
        required:true
    },
})
module.exports = mongoose.model("Booking",booking)