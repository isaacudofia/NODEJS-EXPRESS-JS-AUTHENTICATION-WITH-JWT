require("dotenv").config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const contactRoutes = require('./routes/contactRoutes')
const userRoutes = require('./routes/userRoutes')

//EXPRESS MIDDLEWARE FOR JSON OBJECTS
app.use(express.json())

app.use('/api/contact', contactRoutes)
app.use('/api/user', userRoutes)

mongoose.connect(process.env.MONGO_URL)
.then(()=> app.listen( process.env.PORT, ()=> console.log("Connected to DB & listening to port " + process.env.PORT)))
.catch((err)=> console.log(err.msg))


