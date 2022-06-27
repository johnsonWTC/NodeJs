const express = require('express');

const app = express();

app.set('view engine', 'ejs')

console.log("hello jam");

app.get('/', (req, res) => {
    res.send("hello again");
})

app.listen('200');