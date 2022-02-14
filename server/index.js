const express = require("express")
const app = express();
const mysql = require("mysql");
const cors  = require("cors");

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"crud",
    port:"3306",

});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res ) => {
    const {nome, cost, category} = req.body;
    
    //console.log(nome);

        let SQL = "INSERT INTO tabela(nome, cost, category) VALUES (?, ?, ?)";

        db.query(SQL, [nome, cost, category], (err, result) =>{
            console.log(err);

        });
    });
    
    app.put("/editItem", (req, res) => {
        const {idTabela, nome, cost, category} = req.body; 
        let SQL = "UPDATE tabela nome =?, cost = ?, category = ? where idTabela = ?";
    
        db.query (SQL, [ nome, cost, category, idTabela], (err, result) => {
        if(err) console.log(err)
        else res.send(result);
        
        });

    });
    

app.get("/getItems", (req, res) => {
    let SQL = "SELECT * FROM tabela";
    
    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result);

    });
});




app.listen(3001, () => (
    console.log("rodadndo servidor")
));