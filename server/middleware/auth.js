const jwt = require('jsonwebtoken')

const auth =async(req, res, next)=>{
  const {authorization} = req.headers
  if(!authorization) return res.status(401).json({error: "Authorization token required"})
  const token = authorization.split(' ')[1]
  try {
    const {_id} = await jwt.verify(token, process.env.SECRET_TOKEN)
    req.user = await User.findOne({_id}).select('_id')
    console.log(req.user)
    next()
  } catch (error) {
    res.status(401).json({error: "Request is not authorized"})
  }
}

module.exports = auth