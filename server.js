const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const ejs = require('ejs');
const mongoose = require('mongoose');


//import
const userRouter = require("./server/routes/user");
const staticRouter = require("./server/routes/staticRoute")
const {connectToMongoDB}= require("./connection")




// Set up EJS as the template engine
app.set('view engine', 'ejs');

// Set up the views directory
app.set('views', './client/views');



//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


// Static folder for frontend
app.use(express.static('client/public'));
app.use(express.static('client/views'));


// Routes (API routes and serving HTML pages)
app.use('/', staticRouter);
app.use('/user', userRouter);

//mongo connection
connectToMongoDB("mongodb://localhost:27017/edu-auth")
     .then(() => {
          console.log("mongo connected");
     })
     .catch(() => console.log("error at mongo connect"));


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

