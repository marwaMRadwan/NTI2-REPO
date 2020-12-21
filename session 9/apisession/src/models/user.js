const validator = require('validator')
const mongoose = require('mongoose')
const Task=require('./tasks')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
//const User = mongoose.model('User',{
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim: true,
        minLength:10,
        maxLength:50
    },
    age:{
        type: Number,
        default:0,
        validate(value){
            if(value<0) throw new Error ('age error')
        }
    },
    email:{
        type:String,
        required: true,
        unique: true,
        trim:true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error ('invalid email')
        }
    },
    pass:{
        type:String,
        minLength:6,
        maxLength:100,
        trim:true ,
        validate(value){
            if(value.toLowerCase().includes('marwa')) throw new Error('invalid pass')
        }
    },
    status:{
        type: Boolean, default: true
    },
    deadLine:{
        type:Date
    },
    tokens :[
    { 
        token:{ type:String}   
    }
    ]
})
UserSchema.virtual('Task',{
    ref:'Task', localField:'_id', foreignField:'owner'
})
UserSchema.methods.toJSON=function(){
    const user = this
    const userOBJ = user.toObject()
    delete userOBJ.pass
    return userOBJ
}
UserSchema.pre('save',async function(next){
    const user = this
    if(user.isModified('pass'))
        user.pass = await bcrypt.hash(user.pass, 12)
    next()
})
UserSchema.statics.findByCredentials = async function(email, pass){
    const user= await User.findOne({ email })
    if(!user) throw new Error('unauthorized')
    const matched = await bcrypt.compare(pass, user.pass)
    if(!matched) throw new Error('unauthorized')
    return user    
}

UserSchema.methods.generateToken = async function(){
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'AaAaBbBa');
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}
const User = mongoose.model('User', UserSchema)
module.exports = User
