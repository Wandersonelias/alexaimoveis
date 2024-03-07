const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


function doLogin(req,res,next){
    
    const email = req.body.email;
    const password = req.body.password;
    console.log(password)
    if(email == 'elias@oi.com'&& bcrypt.compareSync(`${password}`,"$2y$12$WkVpScUMAZUQ6ZmJ8S3FpO1Z5Cp8HENbxx8qCdpDqQTMgbWmiKJE6")){
        const token = jwt.sign({id: 1},process.env.JWT_SECRET,{
            expiresIn: parseInt(process.env.JWT_EXPIRES)
        });
        res.json({token});
    }else{
        res.sendStatus(401)
    }
}

function doLogout(req,res,next){
    res.sendStatus(200);   
}


module.exports = {
    doLogin,
    doLogout
}