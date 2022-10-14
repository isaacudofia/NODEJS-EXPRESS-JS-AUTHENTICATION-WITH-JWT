const User = require('../model/userModel')
const jwt =require('jsonwebtoken')

const generateToken =(_id)=>{
    return jwt.sign( {_id} ,process.env.SECRET_TOKEN, {expiresIn: '1d'})
}

const signupUser = async(req, res)=>{
    const {email,password} = req.body
    try {
       const userCreated = await User.signup(email,password )
       const token = generateToken(userCreated._id)
       res.status(201).json({email: userCreated.email ,token })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const loginUser = async(req, res)=>{
    const {email,password} = req.body
    try {
        const userFound = await User.login(email,password)
        const token = generateToken(userFound._id)
        res.status(201).json({email: userFound.email ,token })
     } catch (error) {
         res.status(400).json({error: error.message})
     }
}

module.exports = {loginUser, signupUser}