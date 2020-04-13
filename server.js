const express = require('express')
const app = express()
const server = require('http').Server(app)

const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./network/routers')
const dataBase = require('./db')

dataBase.connect()

app.use(cors())
app.use(bodyParser.json())
app.set('port', process.env.PORT || 3000)
//app.use('/', express.static('public'))
app.use(express.static(__dirname + '/public'));
router(app)

server.listen(app.get('port'), () =>{
  console.log(`La aplicacion esta escuchando en ${app.get('port')}`);
})