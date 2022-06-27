console.log("hey ")
const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.send("hello jam");
})


app.listen(3000);