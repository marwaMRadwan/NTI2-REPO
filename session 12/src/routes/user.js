const express = require('express')
const auth = require('../middleware/auth')
const router = new express.Router()
const User = require('../models/user')
router.post('/user/register', async(req,res)=>{
    const user = new User(req.body)
    try{
        await user.save()
        res.send('ok')
    }
    catch(e) {res.send(e)}
})
module.exports = router