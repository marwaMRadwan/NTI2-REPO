const jwt = require('jsonwebtoken')
const User = require('../models/user')
const auth = async (req, res, next)=>{
    try{
        const token = req.header('Authorization').replace("Bearer ","")
        const decodedToken = jwt.verify(token, 'AaAaBbBa')  // {_id: value, iat:12454}
        const data = await User.findOne({
            _id : decodedToken._id, 'tokens.token' : token
        })
        if(!data) throw new Error()
        req.token = token
        req.data = data
        next()
    }
    catch(e){
        res.status(500).send({
            status:0, 
            msg: "please auth",
            data: ""
        })
    }
}
module.exports = auth