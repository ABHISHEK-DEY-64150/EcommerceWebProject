const express = require('express')

const cookieParser = require('cookie-parser')

const app = express()

const errMiddleware = require('./middleware/error')

app.use(express.json())

app.use(cookieParser())

//Route imports

const product = require("./routes/productRoute")

const user = require("./routes/userRoute") 

app.use("/api/v1",product)

app.use("/api/v1",user)

//middleware for errors

app.use(errMiddleware) 

module.exports = app