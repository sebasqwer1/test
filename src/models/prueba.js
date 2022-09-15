
import dbConnection from "../dbconfig/connection.js";

const prueba = function(){};

prueba.getDataAll = async(result) => {
    
    let currentConnection = await dbConnection.connectDb();

    let sqlQuery = `SELECT 
                        E.Name,
                        S.Name
                    FROM 
                        employee AS E
                    JOIN status AS S
                    ON E.Status = S.Id`;

    await currentConnection.promise().query(sqlQuery)
    .then( ([response,fields]) => {
        if(response.length){
            console.log("Query procesado con éxito");
            result(null, response);
            return;
        }
        console.log("Datos no encontrados");
        result({ kind: "not_found" }, null);
        
    })
    .catch((error) => {
        console.log("Error on Response");
        result(error, null);
    })
    .then( () => {
        currentConnection.end();
    });
    
    console.log("Database closed");
};

prueba.getDataId = async(req,result) => {
    
    let currentConnection = await dbConnection.connectDb();

    let sqlQuery = `SELECT
                        E.Name,
                        S.Name
                    FROM 
                        employee AS E

                    JOIN status AS S
                    ON E.Status = S.Id

                    WHERE 
                        E.Id = ${req.empleadoId} `;

    await currentConnection.promise().query(sqlQuery)
    .then( ([response,fields]) => {
        if(response.length){
            console.log("Query procesado con éxito");
            result(null, response);
            return;
        }
        console.log("Datos no encontrados");
        result({ kind: "not_found" }, null);
        
    })
    .catch((error) => {
        console.log("Error on Response");
        result(error, null);
    })
    .then( () => {
        currentConnection.end();
    });
    
    console.log("Database closed");
};


module.exports = prueba;