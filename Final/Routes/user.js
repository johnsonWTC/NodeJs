const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    console.log("getting users")
    res.send("app users")
})


router.get("/getuserby/:id", (req, res) => {
    const ids = req.params.id;
    console.log(`getting users ${ids}`)
    res.send(`getting users ${ids}`)
})

router.post("/create", (req, res) => {
    console.log("Adding users")
    res.send("adding new user")
})

router.patch("/edit", (req, res) => {
    console.log("editing user")
    res.send("editing user")
})

router.get("/delete", (req, res) => {
    console.log("deleting users")
    res.send("deleting users")
})

module.exports = router