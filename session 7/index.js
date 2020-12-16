const path = require('path')
const express = require('express')
const app = express()
const publicFolder = path.join(__dirname, '/public')
app.use(express.static(publicFolder))
app.get('', (req, res)=>{
    res.send('hello')
})
app.get('/home',(req,res)=>{
    res.send('home')
})
app.get('/html',(req,res)=>{
    res.send('<h2>hello</h2>')
})
app.get('/obj', (req,res)=>{
    res.send({
        x:'a',
        y:'b'
    })
})
app.listen(3000, ()=> console.log('server up'))