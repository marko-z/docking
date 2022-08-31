const express = require("express");
const ash = require('express-async-handler'); 
const db = require("./db");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
require("dotenv").config({ path: "./config.env"})
const port = process.env.PORT || 5000;

app.use('/static', express.static('public'))


app.get('/db/:id', ash(async (req, res) => {
    console.log(req.params)
    const { id } = req.params
    const { rows } = await db.query('SELECT * FROM cars WHERE id = $1', [id])
    res.send(rows[0])
}))

app.get('/', (req, res) => 
    res.send("Main")
)

// app.use('/favicon.ico', (req, res, next) => {
//     res.send('Can you fuck off with that favicon')
// })

app.get('*', (req, res) => {
    res.status(404).send("Not Found")
})

app.listen(port, () => console.log(`Server is running on port ${port}`));