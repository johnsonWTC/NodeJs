const yup = require('yup');

const userModel = yup.object({
    FirstName: yup.string("First Name is required").required(),
    LastName: yup.string().required(),
    Email: yup.string().email().required(),
    Password: yup.string().min(3).max(10).required()
});

module.exports = userModel;