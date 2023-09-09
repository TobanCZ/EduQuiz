export class SqlProcedureRunner
{
    procedureName:string;
    parametres:string[];
    mysql;
    dotenv
    constructor(ProcedureName:string)
    {
        this.procedureName = ProcedureName;
        this.parametres = [];
        this.mysql = require('mysql2');
        this.dotenv = require('dotenv')
    }

    AddParametr(parametre:string)
    {
        this.parametres.push(parametre);
    }

    ExecuteReader()
    {
        const connection = this.mysql.createConnection(process.env.DATABASE_URL)
        console.log('Connected to PlanetScale!')
        connection.end()
    }
}