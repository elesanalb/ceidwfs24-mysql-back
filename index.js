import express from "express";
import { aulas,addAula } from "./db.js";
import cors from "cors";

const server = express();



server.use(cors());
server.use(express.json());



server.get("/aulas", async (peticion,respuesta) => {
    try{
        let aulas = await aulas();
        respuesta.json(aulas);

    }catch(error){
        respuesta.status(500);
        respuesta.send({ error : "leer req error "});
    }
});


server.post("/aulas/nueva", async (peticion,respuesta) => {
    try{
        let id = await addAula(peticion.body.nombre);
        respuesta.json({id});

    }catch(error){
        respuesta.status(500);
        respuesta.json({ error : "add req error" });
    }
})




server.listen(4000);