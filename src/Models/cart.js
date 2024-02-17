const mongoose = require("mongoose")

const cart = new mongoose.Schema({
    car:{
        type:String,
       
    },
    
    price:{
        type:Number,
         
    }
})

module.exports = mongoose.model("Carts",cart)
