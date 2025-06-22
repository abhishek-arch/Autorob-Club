const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true, 
            minlenth:[3,'first name must be at least 3 characters long']},
        lastname: {
            type: String,
           
            minlenth:[3,'first name must be at least 3 characters long']},
        },
        RollNo:{
            type: String,
            required: true,
            unique: true,
            
        },
    Branch: {
        type: String,
        required: true,

        
    },
    email: {
        type: String,
        required: true,
        unique: true,
       
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long'],
        Select: false 
    }})

    userSchema.methods.generateAuthToken = function() {
        const token = jwt.sign({ email: this.email }, process.env.JWT_SECRET, { expiresIn: '1h' })
        return token;
    }
    userSchema.methods.comparePassword = async function (password) {
        return await bcrypt.compare(password, this.password);
    }
    userSchema.statics.hashPassword = async function (password) {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }




    module.exports = mongoose.model('User', userSchema);