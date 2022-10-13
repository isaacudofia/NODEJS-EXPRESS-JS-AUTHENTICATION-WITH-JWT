const Contact = require('../model/contactModel')

const getAllContacts = async(req, res)=>{
   try {
    const contacts = await Contact.find({}).sort({createdAt : -1})
    res.status(200).json({msg: contacts})
   } catch (error) {
    res.status(400).json({error: error.message})
   }
}

const getContact = async(req, res)=>{
    try {
       const {id} = req.params
       const contact = await Contact.findById(id)
       if(!contact) throw Error('No such contact data')
       res.status(200).json({data: contact})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}

const addContact = async(req, res)=>{
   try {
    const {name,telephone_no} = req.body
    const contact = await Contact.create({name,telephone_no})
    res.status(201).json({data: 'POST A CONTACT'})
   } catch (error) {
    res.status(400).json({error: error.message})
   }
}

const deleteContact = async(req, res)=>{
   try {
      const {id} = req.params
      const contact = await Contact.findByIdAndDelete(id)
      res.status(200).json({message: "contact deleted successfully"})
   } catch (error) {
      res.status(400).json({error: error.message})
   }
}


module.exports = { getAllContacts, addContact, getContact, deleteContact }