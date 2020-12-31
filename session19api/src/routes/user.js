const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.post('/users', async (req,res)=>{
    const user = new User(req.body)
    try{
        await user.save()
        const token = await user.generateToken()
        res.status(200).send({
            status:1,
            data: { user , token },
            message: "user inserted"
        })
    }
    catch(e){
        res.status(200).send({
            status:0, 
            data: e,
            message: "error inserting data"
        })
    }
})

router.post('/users/login', async (req, res) => {
    try{
        const type = req.body.type
        if(!type) throw new Error('add user role')
        const user = await User.findByCredentials(req.body.email, req.body.password, req.body.type)
        const token = await user.generateToken()
        res.send({
            status: 1,
            data: {user, token},
            message: " user logged in"
        })
    }
    catch(e){
        res.status(200).send({
            status: 0,
            data: e,
            message: "Unauthorized user"
        })
    }
})

module.exports= router