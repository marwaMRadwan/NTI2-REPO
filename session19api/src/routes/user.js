const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const auth = require('../midllware/auth')
const multer = require('multer')
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
            data: {user, token, token_type:'bearer '},
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

router.post('/users/logOut', auth, async(req, res)=>{
    try{
        req.user.tokens = req.user.tokens.filter( token =>{
            return token.token != req.token
        })
        await req.user.save()
        res.status(200).send({
            status:1,
            data:'',
            message:"logged out"
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

router.post('/users/logOutAll', auth, async(req, res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.status(200).send({
            status:1,
            data:'',
            message:"logged out"
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

router.get('/users/me', auth, async(req,res) =>{
    res.status(200).send({
        status:1,
        data: req.user,
        message: 'data retreved'
    })
})

router.delete('/users/me', auth, async(req,res)=>{
    try{
        await req.user.remove()
        res.status(200).send({
            status:1,
            message:'account removed'
        })
    }
    catch(e){
        res.send({
            status:0,
            message:'error removing'
        })
    }
})

router.patch('/users/me', auth, async(req, res)=>{
    const updates = Objects.keys(req.body)
    const allowed = ['name', 'age', 'password','gender']
    const isValid = updates.every(update => allowed.includes(update))
    try{
        if(!isValid) throw new Error('')
        updates.forEach( update => req.user[update] = req.body[update] )
        await req.user.save()
        res.send({
            status:1,
            data: req.user,
            message:"user updated"
        })
    }
    catch(e){
        res.send({
            status:0,
            data: e,
            message:"error update user data"
        })
    }
})
let uniqueSuffix
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images2')
    },
    filename: function (req, file, cb) {
    uniqueSuffix = Date.now() + file.originalname.match(/\.(jpg|png)$/)[0]
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  var upload = multer({ storage: storage })    
router.post('/me/uploadImg',auth , upload.single('upload'), async(req,res)=>{
    //req.user.pimg = req.file.buffer
    req.user.pimg = `images2/${uniqueSuffix}`
    await req.user.save()
    res.send(req.user)
})


module.exports= router