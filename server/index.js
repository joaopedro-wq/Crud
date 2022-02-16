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
      
        const { idTabela } = req.body;
        const { nome } = req.body;
        const { cost } = req.body;
        const { category } = req.body;
        let SQL = "UPDATE tabela SET nome = ?, cost = ?, category = ? WHERE idTabela = ?";
        db.query(SQL, [nome, cost, category, idTabela], (err, result) => {
          if (err) {
            res.send(err);
          } else {
            res.send(result);
          }
        });
      });
    

app.get("/getItems/:idTabela", (req, res) => {
    const idTabela = req.params.idTabela;
    console.log(idTabela);
    let SQL = "SELECT * from tabela WHERE idTabela = "+idTabela;
    
    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result);

    });
});

app.get("/getItems/", (req, res) => {
  
  let SQL = "SELECT * from tabela  ";
  
  db.query(SQL, (err, result) => {
      if(err) console.log(err);
      else res.send(result);

  });
});




app.listen(3001, () => (
    console.log("rodadndo servidor")
));