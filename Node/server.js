const express = require('express');

const app = express();

app.set('view engine', 'ejs')

console.log("hello jam");

app.get('/', (req, res) => {
    res.render("index", { text: "Johnson" });
})



const userRouter = require('./routes/users')


app.use('/users', userRouter);
app.listen('200');