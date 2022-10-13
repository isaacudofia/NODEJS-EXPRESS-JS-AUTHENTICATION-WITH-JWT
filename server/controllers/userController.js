const signupUser = (req, res)=>{
    try {
       res.status(201).json({msg: 'Signup Successful'})
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