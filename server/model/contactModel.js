const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    telephone_no: {
        type: Number,
        required: true
    },
    userID: {
       type: String,
       required: true
    }
},{timestamps: true})



module.exports = mongoose.model('Contact', ContactSchema)
