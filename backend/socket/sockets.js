let users = [];

const addUser =  (userId, socketId) => {
    !users.some(user => user.userId === userId) && 
    users.push({userId, socketId});
}

module.exports = (io) => {
    io.on("connection", (socket) => {
        console.log("a user is connected");
        socket.on("addUser", (userId) => {
            addUser(userId, socket.id);
            io.emit("getUsers", users);
        })
    });
};
