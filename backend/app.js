const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const authJwt = require('./helpers/jwt')
const errorHandler = require('./helpers/error-handler');

require('dotenv/config');

var server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 3000;

const api = process.env.API_URL;

//router
const productRouter = require('./routers/products');
const categoryRouter = require('./routers/categories');
const userRouter = require('./routers/users');
const conversationRouter = require('./routers/chat/conversations');
//middleware
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.options('*', cors());
app.use(authJwt());
app.use(errorHandler);
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));


app.use(`${api}/products`, productRouter);
app.use(`${api}/categories`, categoryRouter);
app.use(`${api}/users`, userRouter);
app.use(`${api}/conversations`, conversationRouter);

mongoose.connect(process.env.CONNECTION_STRING)
.then(() => {
    console.log("Database is ready");
})
.catch(() => {
    console.log("Connection failed");
})

//socket.io
require("./socket/sockets")(io);

server.listen(port, ()=>{
    console.log(`server started on port ${port}`);
})