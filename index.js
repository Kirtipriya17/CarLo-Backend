const express = require("express")
const { default: mongoose } = require("mongoose")
const cors = require("cors")
const { register, login, findUser } = require("./src/Controllers/authentication")
const { verifyToken } = require("./src/Middlewares")
const { Cart } = require("./src/Controllers/Cart")



const server = express()
server.use(express.json())
server.use(cors())


server.post("/register",register)
server.post("/login",login)
server.get("/get-user",verifyToken,findUser)
server.post("/cart",Cart)

server.listen("5000")

mongoose.connect("mongodb://localhost:27017/CarLo").then(()=>{
        console.log("Database Connected")
    }).catch((error)=>{
        console.log(error)
    })