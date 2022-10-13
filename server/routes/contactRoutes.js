const express = require('express')
const route = express.Router()

route.get('/' , (req, res)=> res.json({msg: 'Working properly'}))

module.exports = route