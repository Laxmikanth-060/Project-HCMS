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

    const {email,password}=req.body;
   // console.log(req.body);
   await Students.findOne({email})
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

    const {acholder}=req.body;
    const email=acholder+"@rgukt.ac.in";
    console.log();
    await Complaints.find({userId:acholder})
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

    const {email,password}=req.body;
    //console.log(req.body);
    await  Wardens.findOne({email:email})
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


app.post("/warden/dashboard",async (req,res)=>{
  const {hostel}=req.body;
   await Complaints.find({hostel:hostel}).then(data=>res.json(data)).catch(err=>res.json(err));
  
});

app.post("/warden/complaints",async (req,res)=>{

     const {hostel,category}=req.body;
     const complaints = await Complaints.find({
        hostel: hostel,
        category: category
      });
      res.json(complaints);

});

app.post("/warden/status", async (req,res)=>{
    const {id,hostel,category}=req.body;
    let a=new Date().toString().split(" ")[4];
    let b=new Date().toString().split(" ").slice(1,4).join("/ ");
   await Complaints.updateOne({_id:id,hostel:hostel,category:category},{$set:{status:"Resolved",btime:a+", "+b}})
    
})

app.post("/warden/accept", async (req,res)=>{
    const {id,hostel,category}=req.body;
    let a=new Date().toString().split(" ")[4];
    let b=new Date().toString().split(" ").slice(1,4).join("/ ");
   await Complaints.updateOne({_id:id,hostel:hostel,category:category},{$set:{status:"Accepted",btime:a+", "+b}})
    
})

app.post("/warden/filter",async (req,res)=>{
    const {Status,hostel,category}=req.body;
    if(Status=="All"){
        await Complaints.find({category:category,hostel:hostel})
        .then(data=>res.json(data))
        .catch(err=>console.log(err));
    }else{
    const data=await Complaints.find({hostel:hostel,category:category,status:Status});
    res.json(data);
    }
})

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



app.post("/view/profile",async (req,res)=>{
    const {acholder}=req.body;
    const ward=await Wardens.find({email:acholder});
    const stud=await  Students.find({email:acholder});
    if(ward.length!=0)
    res.json(ward);
    else
    res.json(stud);
    
})






app.listen(3001,()=>{
    console.log("server running successfully!");
})