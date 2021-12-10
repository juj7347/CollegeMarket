const createMessge = (receiverId, senderId, text) => {
    return {
        _id: Math.random(),
        text: text,
        //createAt:
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
                socket.to(socketId).emit("messageToClient", message);
                break;
            }
        }
        
        
        //socket.broadcast.emit("messageToClient", message); 
        //io.to(socket.id).emit("messageToClient", message);
    })
}

module.exports = { handleMessage }; 