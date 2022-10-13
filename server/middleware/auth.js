const auth =(req, res, next)=>{
  try {
    const authorization = req.headers['authorization']
    res.status(200)
    console.log('auth successful')
    next()
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = auth