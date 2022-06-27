const express = require('express');

const app = express();

app.set('view engine', 'ejs')

console.log("hello jam");

app.get('/', (req, res) => {
    res.render("index", { text: "Johnson" });
})

app.get('/users', (req, res) => {
    res.send('user lists');
})

app.get("/users/new", (req, res) => {
    res.send('new user form')
})

app.listen('200');