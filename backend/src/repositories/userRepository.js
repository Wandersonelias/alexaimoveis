const userModel = require('../models/userModel');

function getUserByEmail(email) {
    //return userModel.findOne({where: {email: email}});
    return userModel.findOne({where: {email: email}});
}

function getAllUsers() {
    return userModel.findAll();
}


function createUser(user) { 
    return userModel.create(user); 
}

function getUser(id) {
    return userModel.findByPk(id);
}

function updateUser(user, id) {
    const usuario = getUser(id);
    if(usuario){ 
        return userModel.update(user, {where: {id: id}});
    }else{
        return { message: "Usuario não encontrado"}
    }

}

function deleteUser(id) {
    const usuario = getUser(id);
    if(usuario){ 
        return userModel.destroy({where: {id: id}});
    }else{
        return { message: "Usuario não encontrado"}
    }

}


module.exports = {
    getUserByEmail,
    getAllUsers,
    createUser, 
    getUser,
    updateUser,
    deleteUser
}

