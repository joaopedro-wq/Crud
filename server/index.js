const express = require("express")
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"crud",
    port:"3306",

});

app.get("/", (req, res) =>{
    console.log("irei executar essa buçanha")
    let SQL =
        "INSERT INTO tabela(nome, cost, category) VALUES ('Feijao', '20.0', 'ALIMENTO')";
        db.query(SQL, (err, result) =>{
            console.log(err);
        });
});

app.listen(3001, () => (
    console.log("rodando servidor")
));