const express = require("express");
const app = express();
app.use(express.json());


const sql = require("./dbOperations")



// app.get("/", (req, res) => {
//    res.send("hey")
//     res.send(sql.getAllUser())

// })

// sql.AddUser().then(result => {
//     console.log("connected home");
//     console.log(result);
// })

// sql.getAllUser().then(result => {
//     console.log(result);
// })

app.get("/", (req, res) => {
    var code = sql.getAllUser().then(result => {
        //  console.log("logging");
        //   res.send(result)
    })
    res.send(code);
})

// var code = sql.getAllUser().then(result => {
//     //  console.log("logging");
//     //   res.send(result)
// })


app.listen("2000");