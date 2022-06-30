const express = require("express");
const app = express();
app.use(express.json())


const sql = require("./dbOperations")



// app.get("/", (req, res) => {
//    res.send("hey")
//     res.send(sql.getAllUser())

// })

sql.AddUser().then(result => {
    //   console.log(result);
})

// sql.getAllUser().then(result => {
//     console.log(result);
// })

app.get("/getUser", (req, res) => {

    res.send(code)
})

var code = sql.getAllUser().then(result => {
    console.log("logging");
    res.send(result)
})


app.listen("2000");