const createMessge = (receiverId, senderId, text) => {
    return {
        _id: receiverId,
        text: text,
        createAt: new Date(),
        user: {
            _id: senderId,
            name: "John Doe",
            avatar: "https://placeimg.com/140/140/any"
        }
    }
}

const handleMessage = (users, socket, io) => {
    socket.on("messageToServer", ({text, receiverId, senderId}) => {
        const from = users[socket.id].userId;
        const userValues = Object.values(users);
        const socketIds = Object.keys(users);
        for(let i = 0; i < userValues.length; ++i) {
            if(userValues.userId === receiverId) {
                const socketId = socketIds[i];
                const message = createMessge(receiverId, senderId, text);
                io.sockets.sockets[socketId].emit("messageToClient", message);
                break;
            }
        }
        
        
        //socket.broadcast.emit("messageToClient", message); 
        //io.to(socket.id).emit("messageToClient", message);
    })
}

module.exports = { handleMessage }; 