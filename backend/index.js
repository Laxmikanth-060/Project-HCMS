const dotenv=require("dotenv");
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const multer=require("multer");
const path=require("path");

dotenv.config();

const Students=require("./Models/Student");
const Wardens=require("./Models/Warden");
const Complaints=require("./Models/Complaint");

const app=express();
app.use(express.json());
app.use(cors());
const __dirname=path.resolve();


try{

    mongoose.connect(process.env.MONGO_URL);
    console.log("mongodb connected successfully");

}catch(err){
    console.log("error in connecting mongodb",err);
} 

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
    // console.log(req.file);
})

app.post("/login/student/register",async (req,res)=>{

    const {Username,Email,Password,phone,parentphn,fullname}=req.body;
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

    const {Cat,Hostel,Wing,Room,Info,email,base64}=req.body;
    let a=new Date().toString().split(" ")[4];
    let b=new Date().toString().split(" ").slice(1,4).join("/ ");
    let Email=email.slice(0,7);
   console.log(base64);
    await Complaints.create({
        userId:Email,
        category:Cat,
        hostel:Hostel,
        room:Room,
        info:Info,
        wing:Wing,
        atime:a+", "+b,
        status:"Pending",
        image:base64,
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


app.post("/warden/complaints/image",async(req,res)=>{
    const {image}=req.body;
    await Complaints.find({_id:image})
         .then(data=>res.json(data))
         .catch(err=>res.json(err));
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

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")));

    app.get("/",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
    })
}

const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log("server running successfully!");
})