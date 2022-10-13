const bcrypt = require('bcrypt')
const User = require('../model/userModel')

const signupUser = async(req, res)=>{
    const {email ,password} = req.body
    try {
       const salt = await bcrypt.genSalt(10)
       const hashedPassword = await bcrypt.hash(password, salt)
       const userExist = await User.findOne({email})
       if(userExist) throw Error("Email already in use")
       const userCreated = await User.create({email,password: hashedPassword})
       res.status(201).json({data: "User created in database" })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const loginUser = (req, res)=>{
    try {
        res.status(201).json({msg: 'login Successful'})
     } catch (error) {
         res.status(400).json({error: error.message})
     }
}

module.exports = {loginUser, signupUser}