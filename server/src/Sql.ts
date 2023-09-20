import mysql, { OkPacket, RowDataPacket } from "mysql2"
require("dotenv").config()

export class SqlProcedureRunner
{
    procedureName:string;
    parametres:string[];

    constructor(ProcedureName:string)
    {
        this.procedureName = ProcedureName;
        this.parametres = [];
    }

    AddParametr(parametre:string)
    {
        this.parametres.push(parametre);
    }

    ExecuteReader()
    {
        let conn =  process.env.DATABASE_URL;
        if(conn == undefined)
            return;
        
        const connection = mysql.createConnection(conn);

        connection.promise().query("SELECT * from Users")
        .then( ([rows,fields]) => 
        {
            console.log(rows);
        })
        .catch(console.log)
        .then( () => 
        {
            connection.end();
        });
    }
}