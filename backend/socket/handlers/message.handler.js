let currentMessageId = 1;

const createMessge = (user, message) => {
    return {
        _id: message.receiverId,
        text: message.text,
        createAt: new Date(),
        user: {
            _id: user.userId,
            name: user.username,
            avatar: "https://placeimg.com/140/140/any"
        }
    }
}

const handleMessage = (users, socket) => {
    socket.on("messageToServer", messageText => {
        const user = users[socket.id];
        const message = createMessge(user, messageText);
        console.log(message);
        socket.broadcast.emit("messageToClient", message);
    })
}

module.exports = { handleMessage }; 