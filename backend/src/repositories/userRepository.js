const userModel = require('../models/userModel');

function getUserByEmail(email) {
    //return userModel.findOne({where: {email: email}});
    return userModel.findOne({where: {email: email}});
}

module.exports = {
    getUserByEmail
}

