const express = require('express')
const Task = require('../models/tasks')
const router = new express.Router()
const auth = require('../midllware/auth')

router.post('/tasks', auth, async(req,res)=>{
    const task = new Task ({
        ...req.body,
        owner: req.user._id
    })
    try{
        await task.save()
        res.status(200).send({
            status:1,
            data: task,
            message:"task added"
        })
    }
    catch(e){
        res.status(200).send({
            status:0,
            data:e,
            message:'error adding task'
        })
    }
})
// /task?limit=10&page=1   sortBy=createdAt:desc   status=true
router.get('/tasks', auth, async(req, res) => {
    //tasks = await Task.find({owner:req.user._id})
    //res.send(tasks)
    match = {}
    sort = {}
    if(req.query.status) match.status = req.query.status == 'true'
    if(req.query.sortBy){
        const parts = req.query.sortBy.split(':') //[createdAt, desc]
        sort[parts[0]] = parts[1]=='decs'?-1:1 //sort[createdAt]=-1 => {createdAt:-1}
    }
    try{
        await req.user.populate({
            path:'tasks',
            match, //{status:true}
            options:{
                limit:parseInt(req.query.limit),
                skip:parseInt(req.query.limit* req.query.page*1.0),
                sort
            }
        }).execPopulate()
        res.send(req.user.tasks)
    }
    catch(e){
        res.send(e)
    }
})

router.get('/tasks/:id', auth, async(req,res)=>{
    const _id = req.params.id
    try{
        console.log(_id)
        const task = await Task.findOne({_id, owner: req.user._id})
        if(!task) return res.status(200).send({
            status:2,
            data:{},
            message:'task not found'
        })
        res.status(200).send({
            status:1,
            data:task,
            message:'task  found'
        })
    }
    catch(e){
        res.send(res.status(200).send({
            status:0,
            data:{},
            message:'error'
        }))
    }
})

router.get('/tasks/:id/:partId', auth,async(req,res)=>{
    const _id = req.params.id
    const partId = req.params.partId
    try{
        const task = await Task.findOne({_id, owner: req.user._id})
        if(!task) return res.status(200).send({
            status:2,
            data:{},
            message:'task not found'
        })
        res.status(200).send({
            status:1,
            data:task.taskParts[partId],
            message:'task  found'
        })
    }
    catch(e){
        res.send(res.status(200).send({
            status:0,
            data:{},
            message:'error'
        }))
    }
})
router.delete('/tasks/:id', auth, async(req,res)=>{
    try{
        const task = await Task.findOneAndDelete({_id:req.params.id, owner: req.user._id})
        if(!task) res.send('task not found')
        res.send('deleted')
    }
    catch(e){
        res.send(e)
    }
})

module.exports = router
