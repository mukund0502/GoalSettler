const express = require("express")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000
const colors = require('colors')
const connectdb = require('./config/db')

connectdb()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/testingapi', require('./routes/goalRoutes'))

app.listen(port, ()=> console.log(`starting at ${port}`));
