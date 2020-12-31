const express= require('express')
const cors = require('cors')
require('./db/mongoose')
const userRoutes = require('./routes/user')
const taskRoutes = require('./routes/tasks')

const app = express()
const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json())
app.use(userRoutes)
app.use(taskRoutes)
app.listen(PORT, ()=>{console.log('server up on 3000');})