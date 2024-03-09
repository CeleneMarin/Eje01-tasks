
const express = require('express'); //manda a llamar un modulo
const bodyParser = require('body-parser');
const bodyRoutes =require('../Eje01-tasks/Routes/taskRoutes')

//const Task = require('../Models/task'); // manda a llamar el modulo que creamos


const app = express();
app.use(bodyParser.json());
propfind.use('/task',taskroutes)

const PORT = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`servidor ejecutado ${Port}`);
});

//para el postman 
//"title" :"Compra mandado 2",
//"description":"Comprar en Walmart"
