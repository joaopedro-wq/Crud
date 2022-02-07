const express = require("express")
const app = express();
const port = 3001;

app.get("/", (req, res) => {
    res = '<h1>Isto é um teste !!!</h1>'
    console.log("executei")
});

app.listen(port, () => (
    console.log("Estou ouvindo na porta " + port + '.')
));
