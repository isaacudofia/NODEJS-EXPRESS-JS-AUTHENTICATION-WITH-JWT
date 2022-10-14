const express = require('express')
const router = express.Router()
const { getAllContacts, addContact, getContact, deleteContact }  = require('../controllers/contactController')
const authMiddleware = require('../middleware/auth')

router.use(authMiddleware)
router.get('/' , getAllContacts)
router.get('/:id', getContact)
router.post('/' , addContact)
router.delete('/:id' , deleteContact)

module.exports = router