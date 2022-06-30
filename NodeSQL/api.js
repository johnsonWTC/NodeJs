const db = require("./dbOperations");
const express = require("express");
const user = require("./user");
const dbOperations = require("./dbOperations");



dbOperations.getAllUser().then(result => {
    console.log("try");
    console.log(result);
})

console.log("Starting server with api.js...")