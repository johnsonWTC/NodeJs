const config = require("./dbconfig")
const sql = require("mssql")


async function getAllUser() {
    try {

        console.log(" trying to connect connecting");
        let pool = await sql.connect(config);
        let users = pool.request().query("Select * from Users");
        console.log(users + " he t");
        return users.recordsets;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllUser: getAllUser
}