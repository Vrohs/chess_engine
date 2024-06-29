const express = require('express');
const app = express();
const socket = require('socket.io');
const http = require('http');
const {Chess} = require('chess.js');
const path = require('path');
const PORT = 5600;

const server = http.createServer(app);
const io = socket(server);

const chess = new Chess();
const players = {};
let currPlayer = 'W';


app.set('view engine', 'ejs');
app.use(express.static('.'));


app.get('/', (req,res)=>{

    res.render('playground')
})



io.on('connection', (uniqueSocket)=>{

    console.log('connected');

    uniqueSocket.on('response', ()=>{

        io.emit('response rec.')
    });

    uniqueSocket.on('disconnect', ()=>{

        console.log('lost connection to the server')
    })
})



server.listen(PORT, (err)=>{

    if(err){

        console.error(err);
    } else {

    console.log(`ilve on http://localhost:${PORT}`)
}})