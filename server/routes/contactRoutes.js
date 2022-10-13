const express = require('express')
const route = express.Router()
const { getAllContacts, addContact, getContact }  = require('../controllers/contactController')

route.get('/' , getAllContacts)
route.get('/:id', getContact)
route.post('/' , addContact)

module.exports = route