const express = require('express')
const auth = require('../middleware/auth')
const router = new express.Router()
const Paitent = require('../models/paitents')
router.get('/pat/test', async(req,res)=>{
    res.send('ok')
})
module.exports = router