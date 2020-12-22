const express = require('express')
require('./db/mongoose')
const userRoutes = require('./routes/user')
const docRoutes = require('./routes/doctors')
const patRoutes = require('./routes/paitents')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRoutes)
app.use(docRoutes)
app.use(patRoutes)

app.listen(port, ()=>{
    console.log(`server up on ${port}`)
})