const userModel = require('../db/Models/user.model')
const userdashboardModel = require('../db/Models/user.profile.model')

const createUserDashboard = async ({fullname:{firstname,lastname},email,RollNo,Branch,profilephoto:{ url,
            public_id},expertise,phone,gender}) => {
    if(!email ||  !RollNo || !Branch || !firstname  ) {
        throw new Error('All fields are required');
    }
    const userprofile = await userdashboardModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        expertise,
        RollNo,
        Branch,
        profilephoto:{
            url,
            public_id
        },
        phone,
        gender

    });
    return userprofile;
};
module.exports= createUserDashboard

 