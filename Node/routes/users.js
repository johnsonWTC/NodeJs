const express = require('express')
const router = express();

app.get('/users', (req, res) => {
    res.send('user lists');
})

app.get("/users/new", (req, res) => {
    res.send('new user form')
})