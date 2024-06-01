const mongoose=require("mongoose");

const schema=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
});

const Students=mongoose.model("students",schema);

module.exports=Students;