import express from "express";
import cors from "cors";
 
const app = express();
app.use(cors());
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
 app.post ("/task", (req, res) => {
        const task = req.body;
        tasks.push(task);
        // Solo he recepcionado para luego responder al cliente
        res.status(201).json({
            message: "Ok",
            task,
        });
 });

 app.get("/jugadores-balon-oro", (req, res) => {
    // winners of gold ball
    const players = [
      {
        name: "Karin Benzema",
        year: 2022,
        img: "https://e00-marca.uecdn.es/deporte/balon-de-oro/imagenes/palmares/benzema-2022.jpg",
      },
      {
        name: "Leo Messi",
        year: 2021,
        img: "https://e00-marca.uecdn.es/deporte/balon-de-oro/imagenes/palmares/messi-2021.jpg",
      },
      {
        name: "Leo Messi",
        year: 2019,
        img: "https://e00-marca.uecdn.es/deporte/balon-de-oro/imagenes/palmares/messi-2019.jpg",
      },
      {
        name: "Luka Modric",
        year: 2018,
        img: "https://e00-marca.uecdn.es/deporte/balon-de-oro/imagenes/palmares/modric-2018.jpg",
      },
      {
        name: "Cristiano Ronaldo",
        year: 2017,
        img: "https://e00-marca.uecdn.es/deporte/balon-de-oro/imagenes/palmares/cristiano-ronaldo-2017.jpg",
      },
    ];
    res.json(players);
  });

 app.listen(4000);
