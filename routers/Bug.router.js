const express =require("express")

const {BugModel}=require("../models/Bug.module")

const BugRouter =express.Router()

BugRouter.get("/Critical",async(req,res)=>{
    // const userID=req.body
    try{
        const bug=await BugModel.find({Type:"Critical Severity"})
        res.send(bug)
    }
    catch(err){
        console.log(err)
        res.send("something wrong")
    }
    
})

BugRouter.get("/Major",async(req,res)=>{
    // const userID=req.body
    try{
        const bug=await BugModel.find({Type:"Major Severity"})
        res.send(bug)
    }
    catch(err){
        console.log(err)
        res.send("something wrong")
    }
    
})

BugRouter.get("/Medium",async(req,res)=>{
    // const userID=req.body
    try{
        const bug=await BugModel.find({Type:"Medium Severity"})
        res.send(bug)
    }
    catch(err){
        console.log(err)
        res.send("something wrong")
    }
    
})

BugRouter.get("/Low",async(req,res)=>{
    // const userID=req.body
    try{
        const bug=await BugModel.find({Type:"Low Severity"})
        res.send(bug)
    }
    catch(err){
        console.log(err)
        res.send("something wrong")
    }
    
})


BugRouter.post("/create",async (req,res)=>{
    const payload=req.body
    console.log(payload)
    try{
        // await NoteModel.insertMany(payload)
        const new_bug=new BugModel(payload)
        await new_bug.save()
        res.send({"mesg":"Bug create successfully"})
    }

    catch(err)
    {
        console.log(err)
        res.send({"err":"something wrong"})
    }
})

module.exports={BugRouter}