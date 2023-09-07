const mysql = require('mysql2')
require('dotenv').config();

class SqlProcedureRunner
{
    constructor(ProcedureName)
    {
        this.procedureName = ProcedureName;
        let params = [];
    }

    AddParametr(param)
    {
        params.add(params)
    }
}

const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')
connection.end()