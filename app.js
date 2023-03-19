const express = require('express');
const mongoose = require('mongoose');
const Student = require('./models/student-model');
const DBroutes = require('./routes/route');
require('dotenv').config();
const PORT = 3000;
const url = `mongodb+srv://andriy:andriy12345@nz.beqns0u.mongodb.net/?retryWrites=true&w=majority`;
const app = express();


app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(DBroutes)

async function connect() {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to mongoDB');
    } catch (err) {
        console.log(err);
    }
}

connect();

app.get('/signup', (req,res) => {
    res.sendFile(__dirname + '/signUP.html')
})

app.get('/login', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => {
    console.log(`Server works on port: ${PORT}`)
})


