const mongoose=require("mongoose")


const BugSchema=mongoose.Schema({
   Bug:String,
   Type:String,
})

const BugModel=mongoose.model("Bug",BugSchema)

module.exports={BugModel}