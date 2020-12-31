const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Task = require('./tasks')

const userSchema = new mongoose.Schema({
    name:{ type:String, required:true, trim:true },
    age:{ type:Number, default:16, 
        validate(value) {
            if(value<16) throw new Error('age must be more than 16')
        }
    },
    email:{
        type:String, unique:true, required:true, trim:true, lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email')
            }
        }
    },
    password:{
        type:String, required:true, minlength:6, maxlength:200, trim:true,
        validate(value){
            if(value.toLowerCase().includes('pass')) throw new Error('password cann\'t contain "pass" ')
        }
    },
//    image
    type:{
        type:Number,
        required:true,
        default:1
    },
    gender:{
        type:Boolean,
        required:true
    },
    tokens: [{
        token: { type:String, required:true}
    }] 
},
    { timestamps: true }
)
userSchema.virtual('tasks',{
    ref:'Task',
    localField: '_id',
    foreignField: 'owner'
})
userSchema.methods.toJSON = function(){
    const user = this.toObject()
    delete user.password
    delete user.tokens
    return user
}
userSchema.methods.generateToken = async function(){
    const user =this
    const token = jwt.sign( { _id: user._id.toString() }, 'FinalProject' )
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}
userSchema.statics.findByCredentials = async(email, password, type) => {
    const user = await User.findOne({email})
    if(!user) throw new Error('unable login')
    if(user.type!= type) throw new Error('unable login')
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) throw new Error('unable login')
    return user
}
userSchema.pre('save', async function(next){
    const user = this
    if(user.isModified('password')) user.password = await bcrypt.hash(user.password, 8)
    next()
})
userSchema.pre('remove', async function(next){
    const user = this
    await Task.deleteMany({owner:user._id})
    next()
})
const User = mongoose.model('User',userSchema)
module.exports = User