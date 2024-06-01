const mongoose=require("mongoose");

const schema=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
});

const Wardens=mongoose.model("wardens",schema);

module.exports=Wardens;