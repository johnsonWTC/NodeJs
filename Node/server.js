const express = require('express');

const app = express();
console.log("hello jam");

app.get('/', (req, res) => {
    res.send("hello again");
})

app.listen('200');