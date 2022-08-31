const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Seja bem-vindo ao meu app!");
});

app.listen(80, function(){
    console.log("Servidor rodando na url http://localhost:80");
});