const userRepository = require('../repositories/userRepository')
const bcrypt = require('bcryptjs');

async function getFindAllUsers(req,res,next){
    const users = await userRepository.getAllUsers();
    return res.json(users);
}

async function cadastrarUsuario(req,res,next) {
    const user = req.body;
    console.log(user)
    const password = bcrypt.hashSync(user.password,10);
    const newUser = await userRepository.createUser({nome: user.nome ,email: user.email,password: password, category: user.category});
    return res.json(newUser);
    
}

async function detalharUsuario(req,res,next){
    const id = req.params.id;   
    const user = await userRepository.getUserById(req.params.id);
    if(user){ 
        return res.json(user);
    }else{ 
        return res.status(404).send('Usuario não encontrado');
    }
    
}



async function atulizarUsuario(req,res,next){
    const user = await userRepository.updateUser(req.body,req.params.id);
    return res.json(user);
}

async function deletarUsuario(req,res,next){
    const user = await userRepository.deleteUser(req.params.id);
    return res.json(user);
    
}



module.exports = {
    getFindAllUsers,
    cadastrarUsuario, 
    atulizarUsuario,
    deletarUsuario,
    detalharUsuario
}

