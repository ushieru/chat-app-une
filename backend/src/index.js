const express = require('express')
const http = require('http')
const cors = require('cors')
const app = express()
const port = 5000
const server = http.createServer(app)
const io = require('socket.io')(server)
const uuid = require('uuid')

app.use(cors())
app.use(express.json())

let CLIENTS_SOCKETS = new Map()
let CLIENTS_INFO = new Map()

app.get('/', (req, res) => {
    return res.json({ ok: 'ok' })
})

app.get('/online', (req, res) => {
    const response = Array.from(CLIENTS_INFO.values())
    return res.json({ CLIENTS: response })
})

// SOCKET IO
io.on('connection', (socket) => {
    socket.on('signin', (username, reponse) => {
        if (Array.from(CLIENTS_INFO.values()).find(user => user.name == username)) return reponse('El usuario ya existe')
        const USER = {
            _id: uuid.v4(),
            photo: "https://thispersondoesnotexist.com/image",
            name: username,
        }
        // Avisar de un nuevo usuario online
        Array.from(CLIENTS_SOCKETS.values()).forEach(socket => socket.emit('newUserOnline', USER))
        // Registro
        CLIENTS_SOCKETS.set(UUID, socket)
        CLIENTS_INFO.set(UUID, USER)
        reponse(USER)
    })

    // TODO: Implement sendMessage on
})

server.listen(port, () => {
    console.log('Server on: ' + 'localhost:5000')
})