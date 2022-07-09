const config = require("./dbconfig")
const sql = require("mssql")


async function getAllUser() {
    try {
        let pool = await sql.connect(config);
        let users = pool.request().query("SELECT * FROM APPSix.dbo.Users");
        console.log("connected for db");
        return await users.recordset;

    } catch (error) {
        console.log(error)
    }
}

async function AddUser() {
    try {
        let pool = await sql.connect(config);
        let users = pool.request().query("INSERT INTO APPSix.dbo.Users(UserName) VALUES ('Jam two')");
        // console.log("added user");
        return (await users).recordset;
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getAllUser: getAllUser,
    AddUser: AddUser,
}