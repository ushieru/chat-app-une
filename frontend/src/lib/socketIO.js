import { io } from "socket.io-client";

const socket = io("http://localhost:5000", {
    transports: ["websocket"]
});

socket.on("connect_error", (error) => {
    console.log('Error al conectar socket io', error)
});

export const init = () => {
    socket.connect()
}

export const signin = async (username) => new Promise((resolve, reject) => {
    socket.emit('signin', username, (arg) => {
        if (typeof arg == 'string') reject(arg)
        resolve(arg)
    })
})

export const newOnlineUser = (callback) => {
    socket.on('newUserOnline', (user) => {
        callback(user)
    })
}

// TODO: Implement sendMessage emit
export const sendMessage = (from, to, message) => {

}