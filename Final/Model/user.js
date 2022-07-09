const yup = require("yup")

console.log("Trying to validate  from model")
const usermodel = yup.object({
    password: yup.string().min(4).max(10),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    firstname: yup.string().required()
})




module.exports = usermodel;