const mysql = require("mysql");

const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud_nodejs_db",
});

conexion.connect((error) => {
  if (error) {
    console.log("El error de la conexion es: " + error);
    return;
  }
  console.log("Conectado a la BD MySql");
});

module.exports = conexion;
