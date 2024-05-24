const database = require('./db')
//database.sync();




const app = require('./app');
const imovelModel = require('./models/imovelModel');



app.listen(parseInt(process.env.PORT),()=>{
    console.log("Server is runnig");
})