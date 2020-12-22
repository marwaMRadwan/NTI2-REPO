const jwt = require('jsonwebtoken')
const User = require('../models/user')

const authMe = async(req, res, next)=>{
    next()
}
module.exports = authMe