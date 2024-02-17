const mongoose = require("mongoose")

const cart = new mongoose.Schema({
    car:{
        type:String,
        required:true
    },
    
    price:{
        type:Number,
        required:true   
    }
})

module.exports = mongoose.model("Carts",cart)
