const jwt = require('jsonwebtoken')
const User = require('../model/userModel')

const auth =async(req, res, next)=>{
  const {authorization} = req.headers
  if(!authorization) return res.status(401).json({error: "Authorization token required"})

  //SPILT ON TOKEN FROM STRING OF CHARACTER

  const token = authorization.split(' ')[1]
  try {
    const DecodedToken = jwt.verify(token, process.env.SECRET_TOKEN)
    console.log(DecodedToken)  //Output:{_id:'6349c8425b8b6b234ff7c1', iat: 1665842487, exp: 1665928887}
    req.user_ID = await User.findById(DecodedToken._id).select('_id')
    console.log("req.id " + req.user_ID) //Output: {_id: new ObjectId("6349c8425b8b6b234ff7c1")}
    next()
  } catch (error) {
    console.log(error)
    res.status(401).json({error: "Request is not authorized"})
  }
}

module.exports = auth
