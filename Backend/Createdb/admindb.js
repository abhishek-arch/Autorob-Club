const adminmodel = require('../db/Models/admin.model');

const createAdmin = async ({ fullname: { firstname, lastname }, email, password,Branch,RollNo}) => {
    if (!email || !password || !firstname  ||!Branch || !RollNo) {
        throw new Error('All fields are required');
    }
    
    const existingAdmin = await adminmodel.findOne({ email });
    if (existingAdmin) {
        throw new Error('Admin with this email already exists');
    }

    const hashedPassword = await adminmodel.hashPassword(password);
    if (!hashedPassword) {
        throw new Error('Error hashing password');
    }

    const admin = await adminmodel.create({
        fullname: {
            firstname,
            lastname
        },
        RollNo,
        Branch,
        email,
        password
    });

    return admin;
}
module.exports = createAdmin;