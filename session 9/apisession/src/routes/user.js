const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.post('/addUser', async(req, res) => {
    const data = new User(req.body)
    try{
        await data.save()
        res.status(200).send({
            status:1,
            data: data,
            msg: 'data inserted'
        })
    }
    catch(e){
        res.status(500).send({
            status:0,
            data:e,
            msg:'error inserting data'
        })
    }
    // data.save()
    // .then( () => {
    //     res.send('added')
    // })
    // .catch( (e) =>
    //     res.send(e)
    // )
})

router.get('/allUsers',async (req,res)=>{
    try{
        const users = await User.find({})
        res.status(200).send({
            status:1,
            data: users,
            msg: 'all users selected'
        })
    }
    catch(e){
        res.status(500).send({
            status:0,
            data: e,
            msg: 'error loading users data'
        })
    }
})

router.get('/user/:id', async(req,res)=>{
    const _id = req.params.id
    try{
        const user = await User.findById(_id)
        if(!user){
            res.status(200).send({
                status:2,
                data:"",
                msg:"user not found"
            })
        }
        res.status(200).send({
            status:1,
            data: user, 
            msg:"user data retreived successfuly"
        })
    }
    catch(e){
        res.status(500).send({
            status:0,
            data: e,
            msg:'error loading user data'
        })
    }
})

router.patch('/user/:id', async(req,res)=>{
    const _id= req.params.id
    const updates = req.body
    const updatesKeys = Object.keys(req.body)
    const allowedUpdates = ["name","age","email"]
    const validUpdates = updatesKeys.every((u)=>allowedUpdates.includes(u))
    if(!validUpdates)
        res.status(400).send({
            status:4,
            data:'',
            msg:'invalid updates'
        })
    try{
        const user = await User.findByIdAndUpdate(_id, updates,{
            new:true,
            runValidators:true
        })
        if(!user){
            res.status(200).send({
                status:2,
                data:"",
                msg:"user not found"
            })
        }
        res.status(200).send({
            status:1,
            data: user, 
            msg:"user data retreived successfuly"
        })
    }
    catch(e){
        res.status(500).send({
            statue: 0,
            data:'',
            msg:"error edit data"
        })
    }
})

router.delete('/user/:id', async(req,res)=>{
    const _id= req.params.id
    try{
        const user = await User.findByIdAndDelete(_id)
        if(!user){
            res.status(200).send({
                status:2,
                data:"",
                msg:"user not found"
            })
        }
        res.status(200).send({
            status:1,
            data: user, 
            msg:"user data deleted successfuly"
        })
    }
    catch(e){
        res.status(500).send({
            statue: 0,
            data:'',
            msg:"error delete data"
        })
    }
})

router.post('/login', async(req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email, req.body.pass)
        res.send({
            status:1,
            data:user,
            msg:"logged in"
        })
    }
    catch(e){
        res.status(500).send({
            status:0,
            data:"",
            msg:"err in data"
        })
    }
})
module.exports=router
