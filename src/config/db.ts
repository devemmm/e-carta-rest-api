import { Sequelize } from 'sequelize';
const db = new Sequelize(process.env.DB_NAME as string, process.env.DB_USER as string, process.env.DB_PASS as string, {
    host: process.env.DB_HOST,
    dialect: "mysql",

    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.authenticate()
    .then(()=> console.log(`connected to databse`))
    .catch((error)=> console.log(`failed to connect to databse because ${error.message}`))

db.sync()
    .then((result)=> console.log("connected to database ...."))
    .catch((error)=> console.log("error ocpaied", error.message))

export default db;