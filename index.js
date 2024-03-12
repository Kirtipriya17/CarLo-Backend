const express = require("express")
const { default: mongoose } = require("mongoose")
const cors = require("cors")
const { register, login, findUser } = require("./src/Controllers/authentication")
const { verifyToken, validateForm, isValidated } = require("./src/Middlewares")
const { bookNow } = require("./src/Controllers/Booking")
const { sendEmail } = require("./src/Helper/Email")




const server = express()
server.use(express.json())
server.use(cors())


server.post("/register",register)
server.post("/login",login)
server.get("/get-user",verifyToken,findUser)
server.post("/bookNow",validateForm,isValidated,bookNow,sendEmail)


server.listen("5000")

mongoose.connect("mongodb://localhost:27017/CarLo").then(()=>{
        console.log("Database Connected")
    }).catch((error)=>{
        console.log(error)
    })