const express = require('express')
const route = express.Router()
const { getAllContacts, addContact, getContact, deleteContact }  = require('../controllers/contactController')

route.get('/' , getAllContacts)
route.get('/:id', getContact)
route.post('/' , addContact)
route.delete('/:id' , deleteContact)

module.exports = route