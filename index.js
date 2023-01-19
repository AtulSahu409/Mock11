const express = require("express")
const cors=require("cors")
require("dotenv").config()

const {connection} = require("./config/data")


const {UserRouter} = require("./routers/User.router")

const{BugRouter}=require("./routers/Bug.router")

// const{authentication}=require("./middleware/authentication")
const app=express();



app.use(express.json())

app.use(cors({
    origin:"*"
}))

app.get("/",(req,res)=>{
    res.send("welcome")
}) 

app.use("/user",UserRouter)

// app.use(authentication)
app.use("/bug",BugRouter)


app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("connection to db cloud")


    }
    catch(err){
        console.log(err)

    }
    console.log("working on 8010")
})