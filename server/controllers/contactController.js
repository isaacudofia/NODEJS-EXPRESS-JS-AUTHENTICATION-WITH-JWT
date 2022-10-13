const Contact = require('../model/contactModel')

const getAllContacts = async(req, res)=>{
   try {
    const contacts = await Contact.find({}).sort({createdAt : -1})
    res.status(200).json({msg: contacts})
   } catch (error) {
    res.status(400).json({error: error.message})
   }
}

const getContact = (req, res)=>{
    try {
       res.status(200).json({msg: 'GET CONTACT WITH THE ID '})
       console.log(req.query)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const addContact = async(req, res)=>{
   try {
    const {name,telephone_no} = req.body
    const contact = await Contact.create({name,telephone_no})
    res.status(201).json({msg: 'POST A CONTACT'})
   } catch (error) {
    res.json({error: error.message})
   }
}


module.exports = { getAllContacts, addContact, getContact }