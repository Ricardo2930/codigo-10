import express, { json } from "express";
 
const app = express();
// el app.use se usa para poder tener la información de express.json
app.use(express.json());


const tasks = [];

 app.get("/", (req, res) => {
    return res.json ({
        message:"Hola",
    });
 });

//  Método Get: Se usa para pedirle datos al servidor
 app.get("/tasks", (req, res) => {
    return res.json ({
        tasks: tasks,
    });
 });

 //  Método Post: Se usa para enviarle datos al servidor
 app.post ("/puerta", (req, res) => {
        const task = req.body;
        tasks.push(task);
        // Solo he recepcionado para luego responder al cliente
        res.json({
            message: "Ok",
        });
 });

 app.listen(4000);
