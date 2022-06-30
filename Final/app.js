const { json } = require("express");
const express = require("express");
const app = express();



app.get("/", (req, res) => {
    console.log("hey this is the index");
    res.send("hey this is the index")
})

app.get("/users", (req, res) => {
    console.log("getting users")
    res.send("app users")
})

app.post("/users/create", (req, res) => {
    console.log("Adding users")
    res.send("adding new user")
})


app.patch("/users/edit", (req, res) => {
    console.log("editing user")
    res.send("editing user")
})


app.get("/users/delete", (req, res) => {
    console.log("deleting users")
    res.send("deleting users")
})




app.listen("3500");