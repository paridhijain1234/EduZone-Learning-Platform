const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const ejs = require('ejs');
const mongoose = require('mongoose');


//import
const userRouter = require("./server/routes/user");





// Set up EJS as the template engine
app.set('view engine', 'ejs');

// Set up the views directory
app.set('views', './client/views');

// Static folder for frontend
app.use(express.static('client/public'));
app.use(express.static('client/views'));


// Routes (API routes and serving HTML pages)
app.get('/', (req, res) => res.sendFile(__dirname + '/client/public/index.html'));
app.get('/login', (req, res) => res.render('login')); // Render the login.ejs template

// Socket.io connection
io.on('connection', socket => {
    console.log('User connected');
    socket.on('chat message', msg => {
        io.emit('chat message', msg);
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});