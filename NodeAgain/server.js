const express = require("express");

const app = express();
app.use(express.json())

const validation = require("./MiddleWare/validationMidleWare");
const model = require("./Validations/userValidation");


app.post("/user", validation(model), (req, res) => {
    res.status(200).send(req.body)
})

app.listen("1000", () => {

    console.log("sever started again with anoymous function one last time")
});