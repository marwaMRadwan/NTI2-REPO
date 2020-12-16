const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const PORT = process.env.PORT || 3000
const publicDir = path.join(__dirname, '../public')
const viewDir = path.join(__dirname, '../template/views')
const partialDir = path.join(__dirname, '../template/partials')
app.use(express.static(publicDir))
app.set('view engine', 'hbs')
app.set('views', viewDir)
hbs.registerPartials(partialDir)
app.get('',(req, res)=>{
    res.render('home')
})
app.listen(PORT, ()=>{
    console.log('run avaliable on localhost')
})