const userModel = require('../db/Models/user.model');

const createUser = async ({fullname:{firstname,lastname},email,password,RollNo,Branch}) => {
    if(!email || !password || !RollNo || !Branch || !firstname  ) {
        throw new Error('All fields are required');
    }
    const user = await userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        RollNo,
        Branch
    });
    return user;
};
module.exports= createUser

 
