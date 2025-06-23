const express = require ("express")
const app = express()
const dotenv = require("dotenv")
const userroute = require("./routes/user.routes")
const adminroute = require("./routes/admin.routes")
const path = require('path')

const cors = require("cors")
dotenv.config()
const connectDB = require("./db/db")
connectDB()
// app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(cors({ origin: 'https://autorob-club.vercel.app', credentials: true }))
app.use(express.static(path.join(__dirname,"public")))
console.log(path.__dirname)
app.use(express.json({ limit: '10mb' })); // or more
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use('/users', userroute)
app.use('/admins', adminroute)


app.get('/',(req,res)=>{
    res.send("hello")
})
 module.exports = app
