const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
},{timestamps: true})

UserSchema.statics.signup = async function(email, password){
    if(!email || !password) throw Error("All fields must be field")
    if(!(email.toString().includes("@gmail.com") || email.toString().includes("@yahoo.com"))) throw Error("Invalid Email")
    if(password.toString().length <= 5) throw Error("Password must be greater than 5 characters")
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const userExist = await this.findOne({email})
    if(userExist) throw Error("Email already in use")
    const userCreated = await this.create({email,password: hashedPassword})
    return userCreated
}

UserSchema.statics.login = async function(email,password){
    if(!email || !password) throw Error("All fields must be field")
    if(!(email.toString().includes("@gmail.com") || email.toString().includes("@yahoo.com"))) throw Error("Invalid Email")
    if(password.toString().length <= 5) throw Error("Password must be greater than 5 characters")
    const user = await this.findOne({email})
    if(!user) throw Error("Invalid credential try again")
    const match = await bcrypt.compare(password, user.password)
    if(!match) throw Error("Invalid credentials try again")
    return user
}

module.exports = mongoose.model('User', UserSchema)