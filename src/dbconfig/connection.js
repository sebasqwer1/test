import mysql from "mysql2";
import dbConfig from "./settings.js";

const connection = function(){}

connection.connectDb = async(connectionDb) => {

	connectionDb = await mysql.createConnection({
		host: dbConfig.HOST,
		port: dbConfig.PORT,
		user: dbConfig.USER,
		password: dbConfig.PASSWORD,
		database: dbConfig.DB
	});

	connectionDb.connect(error => {
		if (error) throw error;
		console.log("Conexión realizada con éxito.");
	});
    
	return connectionDb;
}

module.exports = connection;