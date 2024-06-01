const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const multer=require("multer");
const path=require("path");

const Students=require("./Models/Student");
const Wardens=require("./Models/Warden");
const Complaints=require("./Models/Complaint");

const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/miniproject",); 

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, "public/images")
    },
    filename:(req,file,cb)=>{
        cb(null, file.filename + "_"+Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({
    storage:storage
})

app.post('/upload',upload.single('file'),(req,res)=>{
    console.log(req.file);
})

app.post("/login/student/register",async (req,res)=>{

    const {Username,Email,Password,phone,parentphn,fullname}=req.body;
    console.log(req.body);
 
    await Students.create({username:Username,email:Email,password:Password})
    .then(()=>{res.json(req.body)})
    .catch((err)=>console.log(err));
       

});


app.post("/login/student",async (req,res)=>{

    const {username,password}=req.body;
   // console.log(req.body);
   await Students.findOne({username:username})
    .then((student)=>{
        if(student){
            //console.log(student.password);
            if(student.password==password)
            res.json("password");
            else
            res.json("nopassword");
        }
        else
           res.json("nouser")
    })
})


app.post("/student/raisecomplaint",async (req,res)=>{

    const {Cat,Hostel,Wing,Room,Info,email}=req.body;
    let a=new Date().toString().split(" ")[4];
    let b=new Date().toString().split(" ").slice(1,4).join("/ ");
    let Email=email.slice(0,7);
   // console.log(Email);
    await Complaints.create({
        userId:Email,
        category:Cat,
        hostel:Hostel,
        room:Room,
        info:Info,
        wing:Wing,
        atime:a+", "+b,
        status:"Pending",
    })
    .then((data)=>{
        res.json(data);
        // console.log(data);
    })
    .catch((err)=>console.log(err));
       

});

app.post("/student/view",async (req,res)=>{

    //const {Username,Email,Password}=req.body;
    
    await Complaints.find({})
    .then((data)=>{res.json(data)})
    .catch((err)=>console.log(err));
       

});

app.post("/student/complaintView",async (req,res)=>{

    //const {Username,Email,Password}=req.body;
    const {email}=req.body;
    const Email=email.slice(0,7);

    await Complaints.find({userId:Email})
    .then((data)=>{res.json(data)})
    .catch((err)=>console.log(err));
       

});


app.post("/login/warden/register",async (req,res)=>{

    const {Username,Email,Password}=req.body;
 
    await Wardens.create({username:Username,email:Email,password:Password})
    .then(()=>{res.json(req.body)})
    .catch((err)=>console.log(err));
       

});


app.post("/login/warden",async(req,res)=>{

    const {username,password}=req.body;
    //console.log(req.body);
    await  Wardens.findOne({username:username})
    .then((warden)=>{
        if(warden){
            console.log(warden);
            if(warden.password==password)
            res.json("password");
            else
            res.json("nopassword");
        }
        else
           res.json("nouser")
    })
})


app.post("/warden/view",async (req,res)=>{
 
   await Complaints.find({}).then(data=>res.json(data)).catch(err=>res.json(err));
  
});


app.get("/warden/view/carpenter", async (req,res)=>{
  await  Complaints.find({category:"Carpenter"})
    .then(data=>res.json(data))
    .catch(err=>console.log(err));
})

app.post("/warden/view/carpenter", async(req, res) => {
    const {id} = req.body; 
    let a=new Date().toString().split(" ")[4];
    let b=new Date().toString().split(" ").slice(1,4).join("/ ");
   await Complaints.updateOne({_id:id},{$set:{status:"Resolved",btime:a+", "+b}})
   .then(data=>res.json(data))
   .catch(err=>res.json(err));
    
});

app.post("/warden/view/carpenter/status", async(req, res) => {
   
    const {Status}=req.body;
    if(Status=="All"){
        await Complaints.find({category:"Carpenter"})
        .then(data=>res.json(data))
        .catch(err=>console.log(err));
    }
    else{
    await Complaints.find({category:"Carpenter",status:Status})
     .then(data=>res.json(data))
     .catch(err=>console.log(err));
    }
});

app.get("/warden/view/cleaning",async (req,res)=>{
   await Complaints.find({category:"Cleaning"})
    .then(data=>res.json(data))
    .catch(err=>console.log(err));
})


app.post("/warden/view/cleaning", async(req, res) => {
    const {id} = req.body; 
    let a=new Date().toString().split(" ")[4];
    let b=new Date().toString().split(" ").slice(1,4).join("/ ");
   await Complaints.updateOne({_id:id},{$set:{status:"Resolved",btime:a+", "+b}})
   .then(data=>res.json(data))
   .catch(err=>res.json(err));
});

app.post("/warden/view/cleaning/status",async (req,res)=>{
    const {Status}=req.body;
    if(Status=="All"){
        await Complaints.find({category:"Cleaning"})
        .then(data=>res.json(data))
        .catch(err=>console.log(err));
    }
    else{
    await Complaints.find({category:"Cleaning",status:Status})
     .then(data=>res.json(data))
     .catch(err=>console.log(err));
    }
 })

app.get("/warden/view/electrical",async (req,res)=>{
    await  Complaints.find({category:"Electrical"})
    .then(data=>res.json(data))
    .catch(err=>console.log(err));
})

app.post("/warden/view/electrical", async(req, res) => {
   
    const {id} = req.body; 
    let a=new Date().toString().split(" ")[4];
    let b=new Date().toString().split(" ").slice(1,4).join("/ ");
   await Complaints.updateOne({_id:id},{$set:{status:"Resolved",btime:a+", "+b}})
   .then(data=>res.json(data))
   .catch(err=>res.json(err));
    
});

app.post("/warden/view/electrical/status",async (req,res)=>{
    const {Status}=req.body;
    if(Status=="All"){
        await Complaints.find({category:"Electrical"})
        .then(data=>res.json(data))
        .catch(err=>console.log(err));
    }
    else{
    await Complaints.find({category:"Electrical",status:Status})
     .then(data=>res.json(data))
     .catch(err=>console.log(err));
    }
 })

app.get("/warden/view/others",async (req,res)=>{
    await  Complaints.find({category:"Others"})
    .then(data=>res.json(data))
    .catch(err=>console.log(err));
})


app.post("/warden/view/others", async(req, res) => {
   
    const {id} = req.body; 
    let a=new Date().toString().split(" ")[4];
    let b=new Date().toString().split(" ").slice(1,4).join("/ ");
   await Complaints.updateOne({_id:id},{$set:{status:"Resolved",btime:a+", "+b}})
   .then(data=>res.json(data))
   .catch(err=>res.json(err));
    
});

app.post("/warden/view/others/status", async(req, res) => {
   
    const {Status}=req.body;
    if(Status=="All"){
        await Complaints.find({category:"Others"})
        .then(data=>res.json(data))
        .catch(err=>console.log(err));
    }
    else{
    await Complaints.find({category:"Others",status:Status})
     .then(data=>res.json(data))
     .catch(err=>console.log(err));
    }
});


app.post("/view/profile",async (req,res)=>{
    const {name}=req.body;
    await  Students.find({username:name})
    .then(data=>{
        if(data){
        res.json(data);
        return;
    }
    })
    .catch(err=>console.log(err));
    // await Wardens.find({username:name})
    // .then(data=>res.json(data))
    // .catch(err=>console.log(err));
})






app.listen(3001,()=>{
    console.log("server running successfully!");
})