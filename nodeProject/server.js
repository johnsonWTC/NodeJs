console.log("hey ")
const express = require('express');
const app = express();

app.set('view engine', 'ejs')
app.get("/", (req, res) => {
    //  res.send("hello jam at 4000");
    res.render("index")
})


app.listen(4000);