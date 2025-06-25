
const admindashboardModel = require('../db/Models/admin.profile.model')

const createAdminDashboard = async ({fullname:{firstname,lastname},email,RollNo,Branch,profilephoto:{ url,
            public_id},expertise,phone,gender}) => {
    if(!email ||  !RollNo || !Branch || !firstname  ) {
        throw new Error('All fields are required');
    }
    const adminprofile = await admindashboardModel.create({
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
    return adminprofile;
};
module.exports= createAdminDashboard

 