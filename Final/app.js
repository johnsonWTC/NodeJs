const express = require("express");
const app = express();
app.use(express.json())
const userRoutes = require("./Routes/user")
const userModel = require("./Model/user");
const middleware = require("./middleware/validationMiddleWare")
console.log("started")
app.use('/user', userRoutes);

app.post("/test", middleware(userModel), (req, res) => {
    //  console.log("hey this is the index we are using middleware");
    res.send("hey this is the index")
})


// app.get("/", (req, res) => {
//     console.log("hey this is the index");
//     res.send("hey this is the index")
// })


app.listen("3500");