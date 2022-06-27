const express = require('express');

const app = express();

app.set('view engine', 'ejs')

console.log("hello jam");

app.get('/', (req, res) => {
    res.render("index", { text: "Johnson" });
})



app.listen('200');