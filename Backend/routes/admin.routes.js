const express = require('express');
const router = express.Router();
const adminmodel = require('../db/Models/admin.model');
const createAdmin = require('../Createdb/admindb');
const bcrypt = require('bcrypt');
const blacklistToken = require('../Createdb/blaclistdb');
const cookieParser = require('cookie-parser');
router.use(cookieParser());
const authMiddleware = require('../middlewares/auth.middleware')
const upload = require("../config/multer.config")
const cloudinary = require('cloudinary').v2;
const createadmindasboard = require("../Createdb/admindasboard.db")
const admindashboardModel = require("../db/Models/admin.profile.model")


router.post('/register', async (req, res) => {
    const{ fullname: { firstname, lastname }, email, password, RollNo, Branch,AdminKey } = req.body;
    const existingAdmin = await adminmodel.findOne({ email });
    if (existingAdmin) {
        return res.status(400).json({ message: 'Admin with this email already exists' });
    }
    if (!email || !password || !firstname || !RollNo || !Branch) {
        return res.status(400).json({ message: 'All fields are required' });
    }
     if (AdminKey !== process.env.ADMIN_SECRET_CODE) {
    return res.status(403).json({ message: 'Invalid admin registration code' });
  }

    
    const hashPassword = await adminmodel.hashPassword(password)
    const admin = await createAdmin({ fullname: { firstname, lastname }, email, password:hashPassword, RollNo, Branch });

    const token = admin.generateAuthToken();
   
    res.status(201).json({ message: 'Admin created successfully', admin,token });
})

router.post("/login", async (req, res) => {
    const { email, password } = await req.body;
    console.log(email,password)
  
    if (!email || !password) {
        return res.status(400).json({ message: "email and password is compulsory" });
    }
    const admin = await adminmodel.findOne({ email }).select("+password");
   
    if (!admin) {
        return res.status(400).json({ message: "invalid email or password" });
    }
    const isMatch = await admin.comparePassword(password);
     
    if (!isMatch) {
        return res.status(400).json({ message: "invalid email or password" });
        
    }
    const token = admin.generateAuthToken();
    res.cookie('token', token)
    res.status(200).json({ message: "Login successful", admin, token });

});
router.post("/logout",authMiddleware.authenticateAdmin, async(req, res) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    await blacklistToken(token);
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" });
 });

router.get("/profile",authMiddleware.authenticateAdmin,async(req,res)=>{
     const admin = req.admin
   
   res.status(200).json({admin})})

router.post('/dashboard',authMiddleware.authenticateAdmin,async(req,res)=>{
    const {fullname:{firstname,lastname},email,phone,RollNo,Branch,profilephoto,expertise,gender} = req.body;
    const existingAdmin = await admindashboardModel.findOne({email});
    if(existingAdmin) {
      return res.status(400).json({message: "Admin with this email already exists"});
    
    }
  
  const admindashboard = await createadmindasboard({fullname:{firstname,lastname},
        email,
        profilephoto,
        expertise,
        phone,
        gender,
        RollNo,
        Branch})

        res.status(201).json({message: "Admindashboard created successfully", admindashboard});

 }


 )

 router.post('/upload',authMiddleware.authenticateAdmin,upload.single("image"),async(req,res)=>{
         const admin = await admindashboardModel.findOne({ email: req.admin.email });

     if (admin.profilephoto && admin.profilephoto.public_id) {
        
      await cloudinary.uploader.destroy(admin.profilephoto.public_id);
    }
     const imageUrl = req.file.path;
    const publicId = req.file.filename;
   



      try {
        
    const updatedAdmin = await admindashboardModel.findOneAndUpdate(
     {email:req.admin.email},                  
      { profilephoto: {  url: imageUrl,
      public_id: publicId}},     
      { new: true }                       
    );

    if (!updatedAdmin) {
      return res.status(404).json({ message: 'Admin not  found with this email' });
    }

    res.json({
      message: 'Profile photo updated successfully',
      admin: updatedAdmin
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while updating' });
  }
       
    })


router.get('/dashboard',authMiddleware.authenticateAdmin,async(req,res)=>{
    const email = req.admin.email;
    
const existingAdminprofile = await admindashboardModel.findOne({email});
    if(existingAdminprofile) {
      return res.send({existingAdminprofile});
    
    }
    return res.status(404).json({message:"profile not exist"})

})




   

module.exports = router;