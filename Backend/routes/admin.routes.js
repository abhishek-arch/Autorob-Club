const express = require('express');
const router = express.Router();
const adminmodel = require('../db/Models/admin.model');
const createAdmin = require('../Createdb/admindb');
const bcrypt = require('bcrypt');
const blacklistToken = require('../Createdb/blaclistdb');
const cookieParser = require('cookie-parser');
router.use(cookieParser());
const authMiddleware = require('../middlewares/auth.middleware')


router.post('/register', async (req, res) => {
    const{ fullname: { firstname, lastname }, email, password, RollNo, Branch } = req.body;
    const existingAdmin = await adminmodel.findOne({ email });
    if (existingAdmin) {
        return res.status(400).json({ message: 'Admin with this email already exists' });
    }
    if (!email || !password || !firstname || !RollNo || !Branch) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    
    const hashPassword = await adminmodel.hashPassword(password)
    const admin = await createAdmin({ fullname: { firstname, lastname }, email, password:hashPassword, RollNo, Branch });

    const token = admin.generateAuthToken();
   
    res.status(201).json({ message: 'Admin created successfully', admin,token });
})

router.post("/login", async (req, res) => {
    const { email, password } =  req.body;
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


module.exports = router;