const userModel = require('../models/user.model');

module.exports.createUser = async ({ fullname, email, password }) => {
    if (!firstname || !email || !password) {
        throw new Error('All fields are required');
    }
    const User = userModel.create({
        fullname: {
            firstname: fullname.firstname,
            lastname: fullname.lastname || ''
        },
        email,
        password

    })
    return User;
}