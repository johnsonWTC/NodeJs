console.log("hey ")
const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.send("hello jam at 4000");
})


app.listen(4000);