const messageHandler = require("./handlers/message.handler");
/*
let users = [];

const addUser =  (userId, socketId) => {
    !users.some(user => user.userId === userId) && 
    users.push({userId, socketId});
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId)
}

const getUser = (userId) => {
    return users.find(user=>user.userId === userId);
}
*/

const users = {};


module.exports = (io) => {
    io.on("connection", (socket) => {
        console.log("a user is connected");
        /*
        //connect
        
        socket.on("addUser", (userId) => {
            addUser(userId, socket.id);
            io.emit("getUsers", users);
        });

        //send and get message
        socket.on("sendMessage", ({senderId, receiverId, text})=>{
            const user = getUser(receiverId);
            io.to(user.socketId).emit("getMessage", {
                senderId,
                text
            })
        })
        //disconnect
        socket.on("disconnect", ()=>{
            console.log("a user disconnected");
            removeUser(socket.id);
            io.emit("getUsers", users);
        })
        */
        //giftedChat oriented
        users[socket.id] = {};
        socket.on("join", (user) => {
            console.log("joined")
            users[socket.id].username = user.username;
            users[socket.id].userId = user.userId;
        });
        socket.on("disconnect", () => {
            delete users[socket.id];
            console.log("a user disconnected")
        })
        messageHandler.handleMessage(users, socket, io)

    });
};
