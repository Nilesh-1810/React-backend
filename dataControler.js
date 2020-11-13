const express = require("express");

var ObjectID = require("mongoose").Types.ObjectId;
var router = express.Router();

var { Data } = require("./dataModel");

router.post("/",async (req,res)=>{
    let findUser=await Data.findOne({_id:req.body._id});
    if(findUser){
        let UpdatedUser= await Data.findOneAndUpdate({_id:req.body._id},{$set:req.body},{ new: true });
        if(UpdatedUser)
        {
            res.send({Data: UpdatedUser});
        }
        else
        {
            res.status(404);
        }
    }
    else{
         let responce=await Data.create({
        
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        MobileNo: req.body.MobileNo,
        Email: req.body.Email,
        Dob: req.body.date,
        bio: req.body.bio});

        if(responce)
        {
            res.send({Data: responce});
        }
        else
        {
            res.status(404);
        }}
   
});
router.get("/",async(req,res)=>{
    let allData= await Data.find();
    if(allData){
        res.status(200).send({Data: allData});
    }
    else{
        res.status(404).send({error:"operation Failed"});

    }


});
router.post("/delete",async(req,res)=>{
    console.log("delete Api >>in");
    console.log(req.body);
    let deleteuser=await Data.findOneAndDelete({_id:req.body._id});
    if(deleteuser){
        res.status(200).send({Data: deleteuser});
    }
    else{
        res.status(404).send({error:"operation Failed"});

    }



});
module.exports = router;