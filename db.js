// const mysql = require("mysql2/promise.js");
import mysql from "mysql2/promise.js";


function conectar(){
    return mysql.createConnection(
        {
            host : "localhost",
            port : 3306,
            database : "ceidwfs24-estudiantes",
            user : "root",
            password : ""
        }
    )
}

export function aulas(){
    return new Promise( async (ok,ko) => {
        try{
            const conexion = await conectar();

            let resultado = conexion.query("SELECT * FROM aulas")

            conexion.end();
            ok(resultado);

        }catch(error){
            ko({error : "error en leer db"});
        }
    });
}


export function addAula(aula){
    return new Promise( async (ok,ko) => {
        try{
            const conexion = await conectar();

            //let nombre = aula;

            let resultado = conexion.query("INSERT INTO aulas (nombre) VALUES (?)", [aula]);

            conexion.end();
            ok(resultado);

        }catch(error){
            ko({ error : "error en add a db"});
        }
    })
}


/*
addAula("History")
.then( x => console.log(x))
.catch( x => console.log(x));
*/

/*
aulas()
.then( x => console.log(x))
.catch( x => console.log(x));
*/