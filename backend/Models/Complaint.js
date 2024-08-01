const mongoose=require("mongoose");

const schema=new mongoose.Schema({
    userId:String,
    category:String,
    hostel:String,
    wing:String,
    room:String,
    info:String,
    atime:String,
    btime:String,
    status:String,
    image: String,
});

const Complaints=mongoose.model("complaints",schema);

module.exports=Complaints;