const express = require('express')
const app = express()
const connection = require('./database/database')
const bancoControler = require('./banco/bancoControler')

connection.authenticate()
    
    .then(()=>{
        console.log('banco acessado!')
    })
    
        .catch()



app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/', bancoControler)

app.get('/', (req,res)=>{
    res.render('index')
})

app.listen(4000, err => err? console.log(err):console.log('Servidor rodando na porta 4000!'))