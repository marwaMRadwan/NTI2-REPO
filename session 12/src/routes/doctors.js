const express = require('express')
const auth = require('../middleware/auth')
const router = new express.Router()
const Doctor = require('../models/doctors')

router.get('/doc/test', async(req,res)=>{
    res.send('ok')
})
module.exports = router