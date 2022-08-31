// require("dotenv").config({ path: "./config.env"})
require('dotenv').config()
const { Pool } = require('pg')
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: "db",
    port: 5432, 
    database: process.env.POSTGRES_DB
})

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    }
}