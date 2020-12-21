const express = require('express')
const Task = require('../models/tasks')
const auth = require('../middleware/authorization')

const router = new express.Router()

router.post('/addTask', auth, async(req,res)=>{
    const task  = new Task({
        ...req.body,
        owner:req.data._id        
    })
    try{
        await task.save()
        res.status(200).send({
            status:true,
            data: task,
            msg: "data inserted"
        })
    }
    catch(e){
        res.status(500).send({
            status:false,
            data:"",
            msg:e
        })
    }
})

module.exports = router