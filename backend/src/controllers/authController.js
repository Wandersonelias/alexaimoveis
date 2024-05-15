const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userRepository = require('../repositories/userRepository');



async function doLogin(req,res,next){
    
    const email = req.body.email;
    const password = req.body.password;

    const user = await userRepository.getUserByEmail(email);

    console.log(user.password);
    console.log(password);

    if(user){
        const isValid = bcrypt.compareSync(password,user.password)
        if(isValid){
            const token = jwt.sign({id: user.id},process.env.JWT_SECRET,{
                expiresIn: parseInt(process.env.JWT_EXPIRES)
            });
            res.json({token});
        }
    }else{
        res.sendStatus(401)
    }

    // console.log(password)
    // if(email == 'elias@oi.com'&& bcrypt.compareSync(`${password}`,"$2y$12$WkVpScUMAZUQ6ZmJ8S3FpO1Z5Cp8HENbxx8qCdpDqQTMgbWmiKJE6")){
        
    // }else{
    //     res.sendStatus(401)
    // }
}

const blacklist = [];

function doLogout(req,res,next){
    const token = req.headers['authorization'];
    blacklist.push(token);
    res.sendStatus(200);

}


function tokenBlackList(token) {
    return blacklist.some(t => t === token);
}

module.exports = {
    doLogin,
    doLogout,
    tokenBlackList
}