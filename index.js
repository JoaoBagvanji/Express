const express = require('express')
const fs = require('fs');
const app = express()
const router = require('./routes/login_criar')



app.use(express.json())
app.use(router)

const users = [
    { nome: 'Joao', idade: 23 },
    { nome: 'Aline', idade: 22 },
    { nome: 'Mateus', idade: 21 },
    { nome: 'Liza', idade: 20 },
]

app.get("/", (req, res) => {
    res.status(200).send('OK');
})

app.listen(3000,  () =>{
    console.log('servidor está em execução na porta 3000')
})