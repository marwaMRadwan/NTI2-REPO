const express = require('express')
const auth = require('../middleware/auth')
const router = new express.Router()
const User = require('../models/user')
router.get('/user/test', async(req,res)=>{
    res.send('ok')
})
module.exports = router