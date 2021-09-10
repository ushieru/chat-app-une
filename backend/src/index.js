const express = require('express')
const http = require('http')
const cors = require('cors')
const app = express()
const port = 5000
const server = http.createServer(app)
const io = require('socket.io')(server)

app.use(cors())
app.use(express.json())

let CLIENTS = new Map()

app.get('/', (req, res) => {
    return res.json({ CLIENTS: Array.from(CLIENTS.keys()) })
})

// SOCKET IO
io.on('connection', (socket) => {

    socket.on('signin', (username, reponse) => {
        if (CLIENTS.has(username)) return reponse('El usuario ya existe')
        CLIENTS.set(username, socket)
        reponse(true)
    })
    
})

server.listen(port, () => {
    console.log('Server on: ' + 'localhost:5000')
})