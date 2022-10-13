const express = require('express')
const route = express.Router()
const {signupUser, loginUser} = require('../controllers/userController')

route.post('/signup' , signupUser)
route.post('/login' , loginUser)

module.exports = route