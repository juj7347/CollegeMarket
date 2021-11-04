const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const authJwt = require('./helpers/jwt')
const errorHandler = require('./helpers/error-handler');

require('dotenv/config');

const api = process.env.API_URL;
const productRouter = require('./routers/products');
const categoryRouter = require('./routers/categories');
const userRouter = require('./routers/users');
//middleware
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.options('*', cors());
app.use(authJwt());
app.use(errorHandler);


app.use(`${api}/products`, productRouter);
app.use(`${api}/categories`, categoryRouter);
app.use(`${api}/users`, userRouter);

mongoose.connect(process.env.CONNECTION_STRING)
.then(() => {
    console.log("Database is ready");
})
.catch(() => {
    console.log("Connection failed");
})

app.listen(3000, ()=>{
    console.log("server started");
})