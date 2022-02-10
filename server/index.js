const express = require("express")
const app = express();
const mysql = require("mysql");
const cors  = require("cors");

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud",
    port:"3306",

});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res ) => {
    const {nome} = req.body;
    const {cost} = req.body;
    const {category} = req.body;
    //console.log(nome);

    let SQL = "INSERT INTO tabela(nome, cost, category) VALUES (?, ?, ?)";

    db.query(SQL, [nome, cost, category], (err, result) =>{
        console.log(err);

    });
});



app.listen(3001, () => (
    console.log("rodando servidor")
));
